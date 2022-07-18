import React, { useState } from "react";
import {Container} from 'react-bootstrap'

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css

import Pagination from "../Components/pagination"; // pagination component
import { Link, useNavigate } from "react-router-dom";


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
 * shed details screen
 * @returns complainsShed
 */
const ComplainsShed = () => {

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
        case "district":
            errors.district = value.length <= 0 ? "District name can not be empty! Ex:- Colombo " : "";
            break;
        case "city":
            errors.city = value.length <= 0 ? "City name can not be empty! Ex:- Kadawatha" 
             : "";
            break;
        case "street":
            errors.street = value.length <= 0 ? "Street name can not be empty! Ex:- Main road" 
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
            navigate("/complain"); 
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
                        <label className="form-label" for="district">District</label>
                        <input type="text" value={formData.district} onChange={onchange} name="district" id="district" className="form-input" placeholder="Enter petrol shed district" />
                        <span className="error-text">{errors.district !=""?errors.district:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="city">City</label>
                        <input type="text" value={formData.city} onChange={onchange} name="city" id="city" className="form-input" placeholder="Enter petrol shed city" />
                        <span className="error-text">{errors.city !=""?errors.city:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="street">Street</label>
                        <input type="text" value={formData.street} onChange={onchange} name="street" id="street" className="form-input" placeholder="Enter petrol shed street" />
                        <span className="error-text">{errors.street !=""?errors.street:""}</span>
                    </div>

                   <div className="button-wrap">
                       <Link to="/">
                            <button className="button button-secondary" type="submit">Back</button>
                        </Link>                        
                        <button onClick={submit} className="button button-primary" type="submit">Next</button>
                    </div>
                </div>
                <Pagination pageNumber={2}/>
            </div>
        </Container>
    )
}
export default ComplainsShed;