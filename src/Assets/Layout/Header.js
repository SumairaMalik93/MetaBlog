import React, { useState } from 'react';
import LogoImage from '../Images/MetaBlog Logo.svg'
import DarkModeImage from '../Images/sunny.svg'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'

const Header = () => {

    const [state, setState] = useState(false);

    function chBackcolor() {
        setState(!state);
        document.getElementById('root').style.background = state ? 'white' : 'black';
        document.getElementById("header").style.backgroundColor = 'black';
    }

    return (
        <div id="header">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="logo">
                            <img src={LogoImage} alt="" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <center>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0  gap-4 ">
                                    <li class="nav-item">
                                        <Link className="nav-link active" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link active" to="/blog">
                                            Blog
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link active" to="/single-post">
                                            Single Post
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link active" to="/page">
                                            Pages
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link active" to="/author-page">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </center>
                        <Form className="d-flex">
                            <FormGroup>

                                <Input
                                    id="Search"
                                    name="Search"
                                    placeholder="Search"
                                    type="search"
                                />
                            </FormGroup>

                            <FormGroup switch className="my-2 DarkMode">
                                <Input
                                    className="Darkswitch"
                                    type="switch"
                                    checked={state}
                                    onClick={() => {
                                        chBackcolor();
                                    }}
                                />
                                <img src={DarkModeImage} alt="" />
                            </FormGroup>
                        </Form>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header