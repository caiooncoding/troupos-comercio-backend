import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';


function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([])


  const getCategories = () => {
    axios.get('/api/category/show').then(res => {
      setCategories(res.data)
    })
  }

  const navigate = useNavigate();


  const logout = (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios.post('/api/logout').then(res => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name')
        setIsLoading(false)
        swal("Success", res.data.message, "success")
        navigate('/')
      }
    })
  }

  let AuthButtons = '';

  if (!localStorage.getItem('auth_token')) {
    AuthButtons = (
      <li><i className="ti-power-off"></i><a href="/login">Login</a></li>
    )
  } else {
    AuthButtons = (
      <li><button type="button" onClick={logout} className="nav-link btn btn-danger btn-sm text-white">Logout</button></li>
    )
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      {isLoading &&
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      }
      <header className="header shop">

        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-12">

                <div className="top-left">
                  <ul className="list-main">
                    <li><i className="ti-headphone-alt"></i>(47)3056-7718</li>
                    <li><i className="ti-email"></i>trouposcomercio@gmail.com</li>
                  </ul>
                </div>

              </div>
              <div className="col-lg-8 col-md-12 col-12">

                <div className="right-content">
                  <ul className="list-main">
                    <li><i className="ti-location-pin" ></i>Localização da Loja</li>
                    <li><i className="ti-user"></i> <a href="#">Minha Conta</a></li>
                    {AuthButtons}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="middle-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-12">

                <div className="container-fluid">
                  <h5 href="#">Troupos Comércio de Ferramentas</h5>
                </div>

                <div className="search-top">
                  <div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>

                  <div className="search-top">
                    <form className="search-form">
                      <input type="text" placeholder="Search here..." name="search" />
                      <button value="search" type="button"><i className="ti-search"></i></button>
                    </form>
                  </div>

                </div>

                <div className="mobile-nav"></div>
              </div>
              <div className="col-lg-8 col-md-7 col-12">
                <div className="search-bar-top">
                  <div className="search-bar">
                    <form>
                      <input name="search" placeholder="Pesquise por produtos aqui" type="search" />
                      <button className="btnn"><i className="ti-search"></i></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">

                  <div className="sinlge-bar">
                    <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                  </div>
                  <div className="sinlge-bar">
                    <a href="#" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true"></i></a>
                  </div>
                  <div className="sinlge-bar shopping">
                    <a href="#" className="single-icon"><i className="ti-bag"></i> <span className="total-count">3</span></a>

                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span> Items</span>
                        <a href="#">View Cart</a>
                      </div>
                      <ul className="shopping-list">
                        <li>
                          <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                          <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                          <h4><a href="#">Woman Ring</a></h4>
                          <p className="quantity">1x - <span className="amount">$99.00</span></p>
                        </li>
                        <li>
                          <a href="#" className="remove" title="Remove this item"><i className="fa fa-remove"></i></a>
                          <a className="cart-img" href="#"><img src="https://via.placeholder.com/70x70" alt="#" /></a>
                          <h4><a href="#">Woman Necklace</a></h4>
                          <p className="quantity">1x - <span className="amount">$35.00</span></p>
                        </li>
                      </ul>
                      <div className="bottom">
                        <div className="total">
                          <span>Total</span>
                          <span className="total-amount">$134.00</span>
                        </div>
                        <a href="#" className="btn animate">Checkout</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-inner">
          <div className="container">
            <div className="cat-nav-head">
              <div className="row">
                <div className="col-lg-3">
                  <div className="all-category">
                    <h3 className="cat-heading"><i className="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                    <ul className="main-category">
                      {categories.map((item) => {
                        return (
                          <li><a href="#">{item.name}</a></li>
                        )
                      })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      <section className="hero-slider">

        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1><span>UP TO 50% OFF </span>Shirt For Man</h1>
                        <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                        <div className="button">
                          <a href="#" className="btn">Shop Now!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="small-banner section">
        <div className="container-fluid">
          <div className="row">

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Man's Collectons</p>
                  <h3>Summer travel <br /> collection</h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Bag Collectons</p>
                  <h3>Awesome Bag <br /> 2020</h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Flash Sale</p>
                  <h3>Mid Season <br /> Up to <span>40%</span> Off</h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="product-area section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Produtos Populares</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="product-info">
                <div className="nav-main">

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Categoria 1</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Categoria 2</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Categoria 3</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Categoria 4</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Categoria 5</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Categoria 6</a></li>
                  </ul>

                </div>
                <div className="tab-content" id="myTabContent">

                  <div className="tab-pane fade show active" id="man" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Pink Show</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Pant Collectons</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Cap For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Polo Dress For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Black Sunglass For Women</a></h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="women" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Pink Show</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Pant Collectons</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Cap For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Polo Dress For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Black Sunglass For Women</a></h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="kids" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Pink Show</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Pant Collectons</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Cap For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Polo Dress For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Black Sunglass For Women</a></h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="accessories" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Pink Show</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Pant Collectons</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Cap For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Polo Dress For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Black Sunglass For Women</a></h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="essential" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Pink Show</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Pant Collectons</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Cap For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Polo Dress For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Black Sunglass For Women</a></h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="prices" role="tabpanel">
                    <div className="tab-single">
                      <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Hot Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Pink Show</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="new">New</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Women Pant Collectons</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Bags Collection</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="price-dec">30% Off</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Awesome Cap For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Polo Dress For Women</a></h3>
                              <div className="product-price">
                                <span>$29.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                          <div className="single-product">
                            <div className="product-img">
                              <a href="#">
                                <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                <span className="out-of-stock">Hot</span>
                              </a>
                              <div className="button-head">
                                <div className="product-action">
                                  <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                  <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                  <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                </div>
                                <div className="product-action-2">
                                  <a title="Add to cart" href="#">Add to cart</a>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <h3><a href="#">Black Sunglass For Women</a></h3>
                              <div className="product-price">
                                <span className="old">$60.00</span>
                                <span>$50.00</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
            </div>
            <div className="modal-body">
              <div className="row no-gutters">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">

                  <div className="product-gallery">
                    <div className="quickview-slider-active">
                      <div className="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#" />
                      </div>
                      <div className="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#" />
                      </div>
                      <div className="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#" />
                      </div>
                      <div className="single-slider">
                        <img src="https://via.placeholder.com/569x528" alt="#" />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  <div className="quickview-content">
                    <h2>Flared Shift Dress</h2>
                    <div className="quickview-ratting-review">
                      <div className="quickview-ratting-wrap">
                        <div className="quickview-ratting">
                          <i className="yellow fa fa-star"></i>
                          <i className="yellow fa fa-star"></i>
                          <i className="yellow fa fa-star"></i>
                          <i className="yellow fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <a href="#"> (1 customer review)</a>
                      </div>
                      <div className="quickview-stock">
                        <span><i className="fa fa-check-circle-o"></i> in stock</span>
                      </div>
                    </div>
                    <h3>$29.00</h3>
                    <div className="quickview-peragraph">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
                    </div>
                    <div className="size">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <h5 className="title">Size</h5>
                          <select>
                            <option selected="selected">s</option>
                            <option>m</option>
                            <option>l</option>
                            <option>xl</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-12">
                          <h5 className="title">Color</h5>
                          <select>
                            <option selected="selected">orange</option>
                            <option>purple</option>
                            <option>black</option>
                            <option>pink</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">

                      <div className="input-group">
                        <div className="button minus">
                          <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                            <i className="ti-minus"></i>
                          </button>
                        </div>
                        <input type="text" name="quant[1]" className="input-number" data-min="1" data-max="1000" value="1" />
                        <div className="button plus">
                          <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                            <i className="ti-plus"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                    <div className="add-to-cart">
                      <a href="#" className="btn">Add to cart</a>
                      <a href="#" className="btn min"><i className="ti-heart"></i></a>
                      <a href="#" className="btn min"><i className="fa fa-compress"></i></a>
                    </div>
                    <div className="default-social">
                      <h4 className="share-now">Share:</h4>
                      <ul>
                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="youtube" href="#"><i className="fa fa-pinterest-p"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fa fa-google-plus"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">

        <div className="footer-top section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-12">

                <div className="single-footer about">
                  <div className="logo">
                    <a href="#">Troupos Comércio de Ferramentas</a>
                  </div>
                  <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                  <p className="call">Tem alguma dúvida? Nos contate!<span><a href="tel:4730567718">(47)3056-7718</a></span></p>
                </div>

              </div>

              <div className="col-lg-3 col-md-6 col-12">

                <div className="single-footer social">
                  <h4>Entre em Contato</h4>

                  <div className="contact">
                    <ul>
                      <li>Balneário Camboriú.</li>
                      <li>Santa Catarina, Brasil.</li>
                      <li>trouposcomercio@gmail.com</li>
                      <li>(47)3056-7718</li>
                    </ul>
                  </div>

                  <ul>
                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                    <li><a href="#"><i className="ti-instagram"></i></a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="left">
                    <p>Copyright © 2022 <a href="#" target="_blank">Troupos Comércio de Ferramentas</a> - Todos os Direitos Reservados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Home;