import React, { useState } from "react";
import {Container} from 'react-bootstrap'

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css
import '../Languages/i18n' //translation

import Pagination from "../Components/pagination"; // pagination component
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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
    const {t} = useTranslation();

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
            errors.district = value.length <= 0 ? t('validateDistrictIsEmpty') : "";
            break;
        case "city":
            errors.city = value.length <= 0 ? t('validateCityIsEmpty') 
             : "";
            break;
        case "street":
            errors.street = value.length <= 0 ? t('validateStreetIsEmpty') 
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
                 <div className="language-row">
                    <button className="language-buttons" onClick={() =>i18next.changeLanguage("en")}>en</button>
                    <button className="language-buttons" onClick={() =>i18next.changeLanguage("si")}>si</button>
                    <button className="language-buttons" onClick={() =>i18next.changeLanguage("ta")}>ta</button>
                </div>
                <div className="card-header">
                    <div className='logo'></div>
                    <p className="header-text">{t('CYPETCO_CUSTOMER_COMPLAINS')}</p>
                </div>
                <div className="card-body">
                    <div className="form-input-wrap">
                        <label className="form-label" for="district">{t('District')}</label>
                        <input type="text" value={formData.district} onChange={onchange} name="district" id="district" className="form-input" placeholder= {t('PlaceholderDistrict')}/>
                        <span className="error-text">{errors.district !=""?errors.district:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="city">{t('City')}</label>
                        <input type="text" value={formData.city} onChange={onchange} name="city" id="city" className="form-input" placeholder= {t('PlaceholderCity')}/>
                        <span className="error-text">{errors.city !=""?errors.city:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="street">{t('Street')}</label>
                        <input type="text" value={formData.street} onChange={onchange} name="street" id="street" className="form-input" placeholder={t('PlaceholderStreet')} />
                        <span className="error-text">{errors.street !=""?errors.street:""}</span>
                    </div>

                   <div className="button-wrap">
                       <Link to="/">
                            <button className="button button-secondary" type="submit">{t('Back')}</button>
                        </Link>                        
                        <button onClick={submit} className="button button-primary" type="submit">{t('Next')}</button>
                    </div>
                </div>
                <Pagination pageNumber={2}/>
            </div>
        </Container>
    )
}
export default ComplainsShed;