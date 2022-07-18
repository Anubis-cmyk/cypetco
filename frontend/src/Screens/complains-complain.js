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
        }else{
            setOtherType(false);
        }
        e.target.value == "-- Select --"? errors.complainType = "Please select complain type": errors.complainType= "";
        console.log(e.target.value)
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
                                <input type="text" name="complainTitle" id="complainTitle" className="form-input" placeholder="Enter your complain type" />
                                 <span className="error-text">{errors.complainType !=""?errors.complainType:""}</span>
                            </div>
                        </>
                    }
                    <div className="form-input-wrap">
                        <label className="form-label" for="complain">Customer name</label>
                        <textarea type="text" name="complain" id="complain" className="form-input form-input-textarea" placeholder="Enter your complain"></textarea>
                         <span className="error-text">{errors.complain !=""?errors.complain:""}</span>
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