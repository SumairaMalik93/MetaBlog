import React from 'react'
import { Card, CardText, CardSubtitle } from "reactstrap";


const Advertisement = () => {
    return (
        <div>
            <div className="Advertisement container text-center my-5">
                <center>

                    <div style={{ width: '35rem', height: '6rem' }} class="card text-white bg-dark-subtle  mb-3 mt-5" >

                        <div class="card-body" style={{ color: 'black' }}>
                            <small>Advertisement</small>
                            <h6 class="card-title">You can place ads</h6>
                            <p class="card-text">750x100</p>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Advertisement