import React from "react";
import {Row,Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

import '../Styles/pagination-style.css' // css

/**
 * pagination component
 * @param {pageNumber} param0 
 * @returns Pagination
 */
const Pagination = ({pageNumber}) => {
    
    return (
        <Row className="pagination-container">
                    <Col sm md={2}>
                        {pageNumber >= 1 ?(
                            <>
                                <Link to="/">
                                    <div className="circle"></div>
                                </Link>
                            </>
                            ):(
                                <div className="circle-disable"></div>
                            )
                        }
                    </Col>
                    <Col sm md={2} className="red-line"></Col>
                    <Col sm md={2}>
                        {pageNumber >= 2 ?(
                                <>
                                    <Link to="/shed">
                                        <div className="circle"></div>
                                    </Link>
                                </>
                            ):(
                                <div className="circle-disable"></div>
                            )
                        }
                    </Col>
                    <Col sm md={2} className="red-line"></Col>
                    <Col sm md={2}>
                        {pageNumber >= 3 ?(
                                <>
                                    <Link to="/complain">
                                        <div className="circle"></div>
                                    </Link>
                                </>
                            ):(
                                <div className="circle-disable"></div>
                            )
                        }
                    </Col>
        </Row>
    )
}

export default Pagination;