import React from "react";
import {Container} from 'react-bootstrap'

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css

import Pagination from "../Components/pagination"; // pagination component
import { Link } from "react-router-dom";

/**
 * shed details screen
 * @returns complainsShed
 */
const ComplainsShed = () => {

    return (
        <Container>
            <div className="header-image"></div>
            <div className="content-card">
                <div className="card-header">
                    <div className='logo'></div>
                    <p className="header-text">CYPETCO CUSTOMER COMPLAINS</p>
                </div>
                <div className="card-body">
                    <div className="form-input-wrap">
                        <label className="form-label" for="district">District</label>
                        <input type="text" name="district" id="district" className="form-input" placeholder="Enter petrol shed district" />
                        <span className="error-text">error</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerMail">City</label>
                        <input type="text" name="customerMail" id="customerMail" className="form-input" placeholder="Enter petrol shed city" />
                        <span className="error-text">error</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerContact">Street</label>
                        <input type="text" name="customerContact" id="customerContact" className="form-input" placeholder="Enter petrol shed street" />
                        <span className="error-text">error</span>
                    </div>

                   <div className="button-wrap">
                       <Link to="/">
                            <button className="button button-secondary" type="submit">Back</button>
                        </Link>                        
                       <Link to="/complain">
                            <button className="button button-primary" type="submit">Next</button>
                        </Link>
                    </div>
                </div>
                <Pagination pageNumber={2}/>
            </div>
        </Container>
    )
}
export default ComplainsShed;