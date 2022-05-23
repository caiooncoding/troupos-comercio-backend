import React, {useEffect, useState} from 'react';
import Navbar from '../../layouts/admin/Navbar';
import Sidebar from '../../layouts/admin/Sidebar';
import Footer from '../../layouts/admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import axios from "axios";


const Users = () => {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.get('/api/index').then(res => {
        setUsers(res.data)
      })
    })
  }


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className='sb-nav-fixed'>
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>


        <div id="layoutSidenav_content">
          <main>

          <div>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Nome</th>
                  <th scope="row">Email</th>
                  <th scope="row">Telefone</th>
                </tr>
                  {users.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <button className='btn btn-danger'/>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          </main>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default Users;