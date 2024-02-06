import React from 'react'
import { Card, CardText, CardSubtitle } from "reactstrap";


const Advertisement = () => {
    return (
        <div>
            <div className="Advertisement container text-center my-5">
                <center>
                    <Card style={{ width: '35rem' }} >
                        <small>Advertisement</small>
                        <CardSubtitle className="CardSubtitle">You can place ads</CardSubtitle>
                        <CardText className="CardText">750x100</CardText>
                    </Card>
                </center>
            </div>
        </div>
    )
}

export default Advertisement