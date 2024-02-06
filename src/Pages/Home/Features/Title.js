import React from 'react'
import TitleImg from '../../../Assets/Images/HomePageImgaes/Image.png'
import '../style.css'
import { Card, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";
import AuthorPic from '../../../Assets/Images/HomePageImgaes/a-author2.png'

const Title = () => {
    return (
        <div className="container mb-5">
            <div className="TitleImage">
                <img src={TitleImg} height={500} width={1100} alt="" />
            </div>
            <div className="TitleText">
                <Card className="container">
                    <CardBody>
                        <div className="w-25 ">
                            <Button color="primary" variant="primary">Technology</Button>
                        </div>
                    </CardBody>
                    <CardTitle className="my-1">
                        <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                    </CardTitle>
                    <CardBody>
                        <div className="row">
                            <div className="col">
                                <img src={AuthorPic} alt="" />
                            </div>
                            <div className="col my-2">
                                <h6 className="DateFont">August 20, 2022</h6>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Title