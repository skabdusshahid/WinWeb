import React from 'react';

const AdminSidebar = () => {
  return (
    <div className="container-fluid page-body-wrapper">
      {/* partial:partials/_sidebar.html */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="assets/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
                {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text d-flex flex-column">
                <span className="font-weight-bold mb-2">David Grey. H</span>
                <span className="text-secondary text-small">Project Manager</span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-lock menu-icon"></i>
            </a>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/login.html"> Login </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/register.html"> Register </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/error-404.html"> 404 </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/samples/error-500.html"> 500 </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="docs/documentation.html" target="_blank" rel="noopener noreferrer">
              <span className="menu-title">Documentation</span>
              <i className="mdi mdi-file-document-box menu-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
      {/* partial */}
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="page-header">
            <h3 className="page-title">
              <span className="page-title-icon bg-gradient-primary text-white me-2">
                <i className="mdi mdi-home"></i>
              </span> Dashboard
            </h3>
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                </li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body">
                  <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                  <h4 className="font-weight-normal mb-3">Weekly Sales <i className="mdi mdi-chart-line mdi-24px float-end"></i></h4>
                  <h2 className="mb-5">$ 15,0000</h2>
                  <h6 className="card-text">Increased by 60%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-info card-img-holder text-white">
                <div className="card-body">
                  <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                  <h4 className="font-weight-normal mb-3">Weekly Orders <i className="mdi mdi-bookmark-outline mdi-24px float-end"></i></h4>
                  <h2 className="mb-5">45,6334</h2>
                  <h6 className="card-text">Decreased by 10%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-success card-img-holder text-white">
                <div className="card-body">
                  <img src="assets/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                  <h4 className="font-weight-normal mb-3">Visitors Online <i className="mdi mdi-diamond mdi-24px float-end"></i></h4>
                  <h2 className="mb-5">95,5741</h2>
                  <h6 className="card-text">Increased by 5%</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <h4 className="card-title float-start">Visit And Sales Statistics</h4>
                    <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-end"></div>
                  </div>
                  <canvas id="visit-sale-chart" className="mt-4"></canvas>
                </div>
              </div>
            </div>
            <div className="col-md-5 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Traffic Sources</h4>
                  <div className="doughnutjs-wrapper d-flex justify-content-center">
                    <canvas id="traffic-chart"></canvas>
                  </div>
                  <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Recent Tickets</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th> Assignee </th>
                          <th> Subject </th>
                          <th> Status </th>
                          <th> Last Update </th>
                          <th> Tracking ID </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="assets/images/faces/face1.jpg" className="me-2" alt="image" /> David Grey
                          </td>
                          <td> Fund is not received </td>
                          <td>
                            <label className="badge badge-gradient-success">DONE</label>
                          </td>
                          <td> Dec 5, 2017 </td>
                          <td> WD-12345 </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/faces/face2.jpg" className="me-2" alt="image" /> Stella Johnson
                          </td>
                          <td> High loading time </td>
                          <td>
                            <label className="badge badge-gradient-warning">PROGRESS</label>
                          </td>
                          <td> Dec 12, 2017 </td>
                          <td> WD-12346 </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/faces/face3.jpg" className="me-2" alt="image" /> Marina Michel
                          </td>
                          <td> Website down for one week </td>
                            <td>
                              <label className="badge badge-gradient-info">ON HOLD</label>
                            </td>
                            <td> Dec 16, 2017 </td>
                            <td> WD-12347 </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/faces/face4.jpg" className="me-2" alt="image" /> John Doe
                          </td>
                          <td> Losing control on server </td>
                          <td>
                            <label className="badge badge-gradient-danger">REJECTED</label>
                          </td>
                          <td> Dec 3, 2017 </td>
                          <td> WD-12348 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 grid-margin stretch-card">
              <div className="card">
                <div className="card-body p-0 d-flex">
                  <div id="inline-datepicker" className="datepicker datepicker-custom"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Recent Updates</h4>
                  <div className="d-flex">
                    <div className="d-flex align-items-center me-4 text-muted font-weight-light">
                      <i className="mdi mdi-account-outline icon-sm me-2"></i>
                      <span>jack Menqu</span>
                    </div>
                    <div className="d-flex align-items-center text-muted font-weight-light">
                      <i className="mdi mdi-clock icon-sm me-2"></i>
                      <span>October 3rd, 2018</span>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6 pe-1">
                      <img src="assets/images/dashboard/img_1.jpg" className="mb-2 mw-100 w-100 rounded" alt="image" />
                      <img src="assets/images/dashboard/img_4.jpg" className="mw-100 w-100 rounded" alt="image" />
                    </div>
                    <div className="col-6 ps-1">
                      <img src="assets/images/dashboard/img_2.jpg" className="mb-2 mw-100 w-100 rounded" alt="image" />
                      <img src="assets/images/dashboard/img_3.jpg" className="mw-100 w-100 rounded" alt="image" />
                    </div>
                  </div>
                  <div className="d-flex mt-5 align-items-top">
                    <img src="assets/images/faces/face3.jpg" className="img-sm rounded-circle me-3" alt="image" />
                    <div className="mb-0 flex-grow">
                      <h5 className="me-2 mb-2">School Website - Authentication Module.</h5>
                      <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                    </div>
                    <div className="ms-auto">
                      <i className="mdi mdi-heart-outline text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Project Status</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th> # </th>
                          <th> Name </th>
                          <th> Due Date </th>
                          <th> Progress </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> 1 </td>
                          <td> Herman Beck </td>
                          <td> May 15, 2015 </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td> 2 </td>
                          <td> Messsy Adam </td>
                          <td> Jul 01, 2015 </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td> 3 </td>
                          <td> John Richards </td>
                          <td> Apr 12, 2015 </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td> 4 </td>
                          <td> Peter Meggik </td>
                          <td> May 15, 2015 </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td> 5 </td>
                          <td> Edward </td>
                          <td> May 03, 2015 </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-danger" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td> 6 </td>
                          <td> Ronald </td>
                          <td> Jun 05, 2015 </td>
                          <td>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-dark">Todo List</h4>
                  <div className="add-items d-flex">
                    <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                    <button className="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>
                  </div>
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Meeting with Alisa
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline"></i>
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" checked /> Call John
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline"></i>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Create invoice
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline"></i>
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" /> Print Statements
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline"></i>
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" checked /> Prepare for presentation
                          </label>
                        </div>
                        <i className="remove mdi mdi-close-circle-outline"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content-wrapper ends */}
      </div>
      {/* main-panel ends */}
    </div>
  );
};

export default AdminSidebar;

