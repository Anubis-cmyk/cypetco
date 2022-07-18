import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css

import { validEmail, ValidContactNumber } from '../Components/validations'; // validations
import Pagination from "../Components/pagination"; // pagination component

/**
 * initial states for inputs
 */
const initialState = { 
        customerName: "",
        customerMail: "",
        customerContact:"",
        district:"",
        city:"",
        street:"",
        complainType:"",
        complain:""
    };

/**
 * customer details screen
 * @returns complainsCustomer
 */
const ComplainsCustomer = () => {

     let navigate = useNavigate();

    if(!localStorage.length > 0)
           localStorage.setItem("data",JSON.stringify(initialState));
    
     
     //useStates
     const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("data")) || initialState); //form date 
     const [errors, setErrors] = useState(initialState); //error message
    
    
     /**
     * input onChange method
     * @param {e} e 
     */
    const onchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;  
        //validating user inputs
        switch (name) {
        case "customerName":
            errors.customerName = value.length <= 0 ? "Customer name can not be empty! Ex:- saman " : "";
            break;
        case "customerMail":
            
            errors.customerMail = value.length <= 0 ? "E-mail address can not be empty! Ex:- saman@mail.com" 
            : !validEmail.test(value) ? "Enter valid e-mail address! Ex:- saman@mail.com" 
            : "";
            break;
        case "customerContact":
            errors.customerContact = value.length <= 0 ? "Contact number can not be empty! Ex:- 071 000 0000" 
            : value.length > 10 ? "Contact number invalid! Ex:- 071 000 0000" 
            : !ValidContactNumber.test(value)? "Contact number invalid use only numbers! Ex:- 071 000 0000"
            :"";
            break;
        default:
            break;
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(e.target.name + " " + e.target.value)
    };

    /**
     * submit form data and goto next page
     */
    const submit =() =>{
        if(formData.customerName !== "" && formData.customerName !== "" && formData.customerContact !== ""){
             const userData ={
                "customerName":formData.customerName ,
                "customerMail": formData.customerMail,
                "customerContact":formData.customerContact,
                "district":formData.district,
                "city":formData.city,
                "street":formData.street,
            }
            
            localStorage.setItem('data',JSON.stringify(userData));
            navigate("/shed"); 
        }
    }
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
                        <input type="text" value={formData.customerName} onChange={onchange} name="customerName" id="customerName" className="form-input" placeholder="Enter your name" />
                        <span className="error-text">{errors.customerName !=""?errors.customerName:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerMail">Customer e-mail</label>
                        <input type="mail" value={formData.customerMail} onChange={onchange} name="customerMail" id="customerMail" className="form-input" placeholder="Enter your e-mail address" />
                        <span className="error-text">{errors.customerMail !=""?errors.customerMail:""}</span>
                    </div>
                    
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerContact">Customer contact number</label>
                        <input type="tel" value={formData.customerContact} onChange={onchange} name="customerContact" id="customerContact" className="form-input" placeholder="Enter your contact number" />
                        <span className="error-text">{errors.customerContact !=""?errors.customerContact:""}</span>
                    </div>

                    
                    <button onClick={submit} className="button button-primary" type="submit">Next</button>
                    
                </div>
                <Pagination pageNumber={1}/>
            </div>
        </Container>
    )
}
export default ComplainsCustomer;