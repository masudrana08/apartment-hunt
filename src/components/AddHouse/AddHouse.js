import React from 'react';
import './AddHouse.css';
import logo from '../../images/logos/Logo.png';
import booking_photo from '../../images/logos/map-marker-alt-solid 1.png';
import add_house from '../../images/logos/plus 1.png';
import my_rent from '../../images/logos/Rent.png';
import upload from '../../images/logos/cloud-upload-outline 1.png'

const AddHouse = () => {
    return (
        <div className="user-page">
                <div className="userPageLeftSide">
                    {/* <Link to='/'> */}
                        <img className="userPageLogo" src={logo} alt=""/>
                    {/* </Link> */}
                    <div className="user-page-link">
                        {/* <Link className="userPageLink orderLink color-active" to='/admin/service-list'> */}
                            <div className="d-flex justify-content-left dashboard_link align-items-center my-3">
                                <img className="dashboard_logo" src={booking_photo} alt=""/>
                                <p className="mx-0 my-0 ml-2">Booking list</p>
                            </div>
                        {/* </Link> */}
                        {/* <Link className="serviceListLink inactive-color" to="/admin/add-service"> */}
                            <div className="d-flex justify-content-left align-items-center active_link my-3">
                                <img className="dashboard_logo" src={add_house} alt=""/>
                                <p className="mx-0 my-0 ml-2">Add House</p>
                            </div>
                        {/* </Link> */}
                        {/* <Link className="reviewLink inactive-color" to="/admin/add-admin"> */}
                            <div className="d-flex justify-content-left dashboard_link align-items-center my-3">
                                <img className="dashboard_logo" src={my_rent} alt=""/>
                                <p className="mx-0 my-0 ml-2">My Rent</p>
                            </div>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="userPageRightSide">
                    <h3 className="rightSideListText">Add House</h3>
                    <div className="rightSideMain row">
                        <form action="" className="w-100 add-house-form">
                            <div className="justify-content-center flex-wrap bg-white add-house-area">
                                <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <label htmlFor="title">House Title</label>
                                        <input placeholder="Enter Title" className="add-house-input" name="title" type="text" id="title" required/>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <label htmlFor="title">Price</label>
                                        <input placeholder="Price" className="add-house-input" name="title" type="number" min="0" id="title" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <label htmlFor="title">Location</label>
                                        <input placeholder="Location" className="add-house-input" name="title" type="text" id="title" required/>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <label htmlFor="title">No. of Bedroom</label>
                                        <input placeholder="Bedroom" className="add-house-input" name="title" type="number" min="0" id="title" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <label htmlFor="title">No. of Bathroom</label>
                                        <input placeholder="Bathroom" className="add-house-input" name="title" type="number" min="0" id="title" required/>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-upload">
                                        <label htmlFor="photoUpload">Thumbnail</label>
                                        <div className="col-lg-12 col-md-12 col-sm-12 p-0 d-flex">
                                            <label className="house_photo" htmlFor="photoUpload"><img className="upload_photo" src={upload} alt=""/> Upload Image</label>
                                            <input name="image" type="file" id="photoUpload" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-success add-house-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default AddHouse;