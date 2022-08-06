import React from "react";
import {Row,Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

import '../Styles/alert-style.css' // css

/**
 * Alert component
 * @param {alertType,message,subMessage} param
 * @returns Alert
 */
const Alert = ({alertType,message,subMessage,showAlert,setShowAlert}) => {
    
    return (
        <div>
        {showAlert?( 
            <>
                <div className={alertType === "error"?"alert-card alert-error":"alert-card alert-success"}>
                    <div className="alert-header">
                    <button onClick={()=>setShowAlert(false)} className="alert-close">x</button>
                    </div>
                    <div className="alert-body">
                        <p className="alert-message">
                            {message}
                        </p>
                        <p className="sub-message">
                            {subMessage}
                        </p>
                    </div>
                </div> 
            </>
        ):null
        
        }
        </div>
        
    )
}

export default Alert;