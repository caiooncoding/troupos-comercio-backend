import React, { useEffect, useState } from 'react';
import Navbar from '../../layouts/admin/Navbar';
import Sidebar from '../../layouts/admin/Sidebar';
import Footer from '../../layouts/admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import axios from "axios";
import swal from "sweetalert";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Categories = () => {


  const [isLoading, setIsLoading] = useState(false)

  const [categories, setCategories] = useState([])

  const [category, setCategory] = useState({
    name: '',
    error_list: []
  });

  const getCategories = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.get('/api/category/show').then(res => {
        setCategories(res.data)
        console.log(categories)
      })
    })

  }

  const handleInput = (e) => {
    e.persist();
    setCategory({ ...category, [e.target.name]: e.target.value })
  }

  const createCategory = (e) => {
    e.preventDefault();
    console.log(categories)
    const data = {
      name: category.name
    }
    axios.post('/api/category/register', data).then(res => {
      if (res.data.status === 200) {
        setIsLoading(false)
        swal('Sucesso', res.data.message, 'success')
        getCategories()
      }
      else {
        setIsLoading(false)
        setCategory({ ...category, error_list: res.data.validation_errors })
      }
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className='sb-nav-fixed'>
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>


        <div id="layoutSidenav_content">

          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="'col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4>Criação da Categoria</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={createCategory}>
                      <div className="form-group mb-3">
                        <label>Nome da Categoria</label>
                        <input type="" name="name" onChange={handleInput} value={category.name} className="form-control" />
                        <span></span>
                      </div>
                      <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary">Criar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Nome</th>
                </tr>
                {categories.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default Categories;