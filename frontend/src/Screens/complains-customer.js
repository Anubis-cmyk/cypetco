import React, { useState } from "react";
import {Container} from 'react-bootstrap'
import { Link } from "react-router-dom";

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css

import { validEmail, ValidContactNumber } from '../Components/validations'; // validations
import Pagination from "../Components/pagination"; // pagination component

/**
 * initial states for inputs
 */
const initialState = { customerName: "", customerMail: "", customerContact:"" };


/**
 * customer details screen
 * @returns complainsCustomer
 */
const ComplainsCustomer = () => {

    //useStates
    const [formData, setFormData] = useState(initialState); //form date 
    const [errors, setErrors] = useState(initialState); //error message
   
    /**
     * input onChage method
     * @param {e} e 
     */
    const onchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target; 

        //validating user inputs
        switch (name) {
        case "customerName":
            errors.customerName = value.length <= 0 ? "Customer name can not be empty! Ex:- saman " : "";
            errors.customerName = value.length <= 0 ? "Customer name can not be empty! Ex:- saman " : "";
            break;
        case "customerMail":
            
            errors.customerMail = value.length <= 0 ? "E-mail address can not be empty! Ex:- saman@mail.com" 
            : !validEmail.test(value) ? "Enter valid e-mail address! Ex:- saman@mail.com" : "";
            break;
        case "customerContact":
            errors.customerContact = value.length <= 0 ? "Contact number can not be empty! Ex:- 071 000 0000" 
            : value.length > 10 ? "Contact number invalid! Ex:- 071 000 0000" 
            : !ValidContactNumber.test(value)?
            :"";
            break;
        default:
            break;
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(e.target.name + " " + e.target.value)
    };

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
                        <label className="form-label" for="customerName">Customer name</label>
                        <input type="text" onChange={onchange} name="customerName" id="customerName" className="form-input" placeholder="Enter your name" />
                        <span className="error-text">{errors.customerName !=""?errors.customerName:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerMail">Customer e-mail</label>
                        <input type="mail" onChange={onchange} name="customerMail" id="customerMail" className="form-input" placeholder="Enter your e-mail address" />
                        <span className="error-text">{errors.customerMail !=""?errors.customerMail:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerContact">Customer contact number</label>
                        <input type="tel" onChange={onchange} name="customerContact" id="customerContact" className="form-input" placeholder="Enter your contact number" />
                         <span className="error-text">{errors.customerContact !=""?errors.customerContact:""}</span>
                    </div>

                    <Link to="/shed">
                        <button className="button button-primary" type="submit">Next</button>
                    </Link>
                    
                </div>
                <Pagination pageNumber={1}/>
            </div>
        </Container>
    )
}
export default ComplainsCustomer;