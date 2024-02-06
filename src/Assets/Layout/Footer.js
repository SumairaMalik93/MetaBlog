import React from 'react'
import LogoImage from '../Images/Logo.svg'
import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";
import { Button } from "reactstrap";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-4 me-3 ">
                            <h2>About</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                            <h6>  <b>Email :</b> info@jstemplate.net </h6>
                            <h6>  <b>Phone :</b> 880 123 456 789 </h6>
                        </div>
                        <div className="col-2 footer">
                            <h2 className="mb-4"> Quick Link</h2>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Archived</li>
                                <li>Author</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col footer">
                            <h2 className="mb-4">Category</h2>
                            <ul>
                                <li>Lifestyle</li>
                                <li>Technology</li>
                                <li>Travel</li>
                                <li>Business</li>
                                <li>Economy</li>
                                <li>Sports</li>
                            </ul>
                        </div>
                        <div className="col-4 my-4">
                            <Card className="text-center">
                                <CardSubtitle className="my-3" tag="h5">
                                    Weekly Newsletter
                                </CardSubtitle>
                                <CardText>
                                    Get blog articles and offers via email
                                </CardText>
                                <CardBody>
                                    <div className="d-grid gap-2">

                                        <input id="Email" name="email" type="email" placeholder="Your Email"></input>
                                        <Button color="primary" variant="primary">Subscribe</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col d-flex ">
                            <img src={LogoImage} alt="" />
                            <div className="m-2 mt-4 ">
                                <span>Meta<b>Blog </b></span>
                                <p>© JS Template 2023. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col footer text-end ">
                            <ul className="footerUL">
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Cookie</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer