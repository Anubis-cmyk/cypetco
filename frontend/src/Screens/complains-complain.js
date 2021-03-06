import React, { useState } from "react";
import {Container} from 'react-bootstrap'
import emailjs from '@emailjs/browser';

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
        complainTitle:"",
        complain:""
    };

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

    let navigate = useNavigate();

    if(!localStorage.length > 0)
           localStorage.setItem("data",JSON.stringify(initialState));
    
     
     //useStates
     const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("data")) || initialState); //form date 
     const [errors, setErrors] = useState(initialState); //error message
     const [otherType, setOtherType] = useState(false); //show or hide other type input message
    

    const SelectOnChange =(e)=>{
        if(e.target.value === "Other"){
            setOtherType(true);
            errors.complainTitle ="";
        }else{
            setOtherType(false);
        }
        e.target.value == "-- Select --"? errors.complainType = "Please select complain type": errors.complainType= "";
        console.log(e.target.value)
        formData.complainType = e.target.value;
        console.log(formData.complainType)
    }

     /**
     * input onChange method
     * @param {e} e 
     */
    const onchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;  
        //validating user inputs
        switch (name) {
        case "complainTitle":
            errors.complainTitle = value.length <= 0 ? "Complain type can not be empty! Ex:- Complain 5 " : "";
            formData.complainType = value;
            break;
        case "complain":
            errors.complain = value.length <= 0 ? "Complain can not be empty! Ex:- This is my complain " : "";
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
                "complainType":formData.complainType,
                "complain":formData.complain
            }
            
            localStorage.setItem('data',JSON.stringify(userData));
            sendEmailToOfficers(userData)
            sendEmailToComplainer(userData)
        }
    }

     const sendEmailToOfficers = (data) => { 
        emailjs.send('service_gwet8ib', 'template_ba885to', data, 'Q6fKDhkKyniPmRzu5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    const sendEmailToComplainer = (data) => { 
        emailjs.send('service_gwet8ib', 'template_lva5xyb', data, 'Q6fKDhkKyniPmRzu5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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
                        <label className="form-label" for="complainType">Complain type</label>
                        <select onChange={SelectOnChange} value={formData.complainType} name="complainType" id="complainType" className="form-input" >
                            <option > -- Select -- </option>
                            {complainsTitleList.type.map( (x,y) => 
                                <option value={x} key={x}>{x}</option> )
                            }
                        </select>
                        <span className="error-text">{errors.complainType !=""?errors.complainType:""}</span>
                    </div>
                    {otherType&&
                        <>
                            <div className="form-input-wrap">
                                <label className="form-label" for="complainTitle">Complain type</label>
                                <input onChange={onchange} type="text" name="complainTitle" id="complainTitle" className="form-input" placeholder="Enter your complain type" />
                                 <span className="error-text">{errors.complainTitle !=""?errors.complainTitle:""}</span>
                            </div>
                        </>
                    }
                    <div className="form-input-wrap">
                        <label className="form-label" for="complain">Complain</label>
                        <textarea onChange={onchange} type="text" name="complain" id="complain" className="form-input form-input-textarea" placeholder="Enter your complain"></textarea>
                         <span className="error-text">{errors.complain !=""?errors.complain:""}</span>
                    </div>
                    
                    <div className="button-wrap">
                       <Link to="/shed">
                            <button className="button button-secondary" type="submit">Back</button>
                        </Link>                        
                        <button onClick={submit} className="button button-primary" type="submit">Submit</button>
                    </div>
                    
                </div>
                <Pagination pageNumber={3}/>
            </div>
        </Container>
    )
}
export default ComplainsComplain;