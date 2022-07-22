import React, { useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

import '../Styles/complains-style.css'; // css
import '../Styles/form-style.css' // css
import '../Languages/i18n'; //translations

import { ValidateName ,validEmail, ValidContactNumber } from '../Components/validations'; // validations
import Pagination from "../Components/pagination"; // pagination component
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";
import Alert from "../Components/alert";

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
    const {t} = useTranslation();
    
    if(!localStorage.length > 0)
           localStorage.setItem("data",JSON.stringify(initialState));
    
     
     //useStates
     const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("data")) || initialState); //form date 
     const [errors, setErrors] = useState(initialState); //error message
     const [showAlert,setShowAlert] = useState(false); //alert 
     const [alert,setAlert] = useState({
         "message":"",
         "subMessage":"",
         "type":""
     }) // alert data

    
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
            errors.customerName = value.length <= 0 ? t('validateCustomerNameIsEmpty') 
            :!ValidateName.test(value) ? t('validateCustomerNameValidName')
            : "";
            break;
        case "customerMail":
            errors.customerMail = value.length <= 0 ? t('validateCustomerMailIsEmpty') 
            : !validEmail.test(value) ? t('validateCustomerMailIsValid') 
            : "";
            break;
        case "customerContact":
            errors.customerContact = value.length <= 0 ? t('validateCustomerContactNumberIsEmpty')  
            : value.length > 10 ? t('validateCustomerContactNumberIs10Digits') 
            : !ValidContactNumber.test(value)? t('validateCustomerContactNumberIsValid')
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
        if(formData.customerName !== "" && formData.customerMail && formData.customerContact !== ""){
             const userData ={
                "customerName":formData.customerName ,
                "customerMail": formData.customerMail,
                "customerContact":formData.customerContact,
                "district":formData.district,
                "city":formData.city,
                "street":formData.street,
            }
            
            localStorage.setItem('data',JSON.stringify(userData));
            navigate('/shed');
        }else{ 
            alert.message = "Error"
            alert.subMessage = "Please fill out all the fields"
            alert.type = "error" 
            setShowAlert(true);
        }
    }
    
    return (
        <Container>

            <Alert message={alert.message} subMessage={alert.subMessage} alertType={alert.type} showAlert={showAlert}  setShowAlert={setShowAlert}/>

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
                        <label className="form-label" for="customerName">{t('CustomerName')}</label>
                        <input type="text" value={formData.customerName} onChange={onchange} name="customerName" id="customerName" className="form-input" placeholder={t('PlaceholderName')}/>
                        <span className="error-text">{errors.customerName !=""?errors.customerName:""}</span>
                    </div>
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerMail">{t('CustomerMail')}</label>
                        <input type="mail" value={formData.customerMail} onChange={onchange} name="customerMail" id="customerMail" className="form-input" placeholder={t('PlaceholderMail')} />
                        <span className="error-text">{errors.customerMail !=""?errors.customerMail:""}</span>
                    </div>
                    
                    <div className="form-input-wrap">
                        <label className="form-label" for="customerContact">{t('CustomerContactNumber')}</label>
                        <input type="tel" value={formData.customerContact} onChange={onchange} name="customerContact" id="customerContact" className="form-input" placeholder={t('PlaceholderContact')} />
                        <span className="error-text">{errors.customerContact !=""?errors.customerContact:""}</span>
                    </div>

                    
                    <button onClick={submit} className="button button-primary" type="submit">{t('Next')}</button>
                    
                </div>
                <Pagination pageNumber={1}/>
            </div>
        </Container>
    )
}
export default ComplainsCustomer;