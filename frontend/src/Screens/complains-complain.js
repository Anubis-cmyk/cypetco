import React from "react";
import {Container} from 'react-bootstrap'

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css

import Pagination from "../Components/pagination"; // pagination component
import { Link } from "react-router-dom";

/**
 * complain details screen
 * @returns complainsComplain
 */
const ComplainsComplain = () => {

    const complainsTitleList = {type:[
        "complain 1",
        "complain 2",
        "complain 4",
        "Other"
    ]}; // complain titles

   
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
                        <label className="form-label" for="complainType">Complain type</label>
                        <select name="complainType" id="complainType" className="form-input" >
                            {complainsTitleList.type.map( (x,y) => 
                                <option key={x}>{x}</option> )
                            }
                        </select>
                        <span className="error-text">error</span>
                    </div>
                     <div className="form-input-wrap">
                        <label className="form-label" for="complainTitle">Complain type</label>
                        <input type="text" name="complainTitle" id="complainTitle" className="form-input" placeholder="Enter your complain type" />
                        <span className="error-text">error</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="complain">Customer name</label>
                        <textarea type="text" name="complain" id="complain" className="form-input form-input-textarea" placeholder="Enter your complain"></textarea>
                        <span className="error-text">error</span>
                    </div>
                    
                    <div className="button-wrap">
                       <Link to="/shed">
                            <button className="button button-secondary" type="submit">Back</button>
                        </Link>                        
                        <button className="button button-primary" type="submit">Submit</button>
                    </div>
                    
                </div>
                <Pagination pageNumber={3}/>
            </div>
        </Container>
    )
}
export default ComplainsComplain;