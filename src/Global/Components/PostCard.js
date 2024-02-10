import React from 'react'
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import '../../Style/style.css'


const PostCard = ({ PostPic, AuthorPic }) => {
    return (
        <div>
            <Card>
                <Container>
                    <Row className="my-2">
                        <img src={PostPic} alt="Card" className="PostCardImage" />
                    </Row>
                    <Container className="my-3">
                        <Row>
                            <small>Technology</small>
                        </Row>
                        <Row>
                            <CardTitle className="my-3">
                                <h3>The Impact of Technology on the Workplace: How Technology is Changing</h3>
                            </CardTitle>
                        </Row>
                        <Row className="PostDetails">
                            <Col>
                                <img src={AuthorPic} alt="" />
                            </Col>
                            <Col className="my-2 text-end DateFont">
                                August 20, 2022
                            </Col>
                        </Row>
                    </Container>
                </Container>


            </Card>
        </div>
    )
}

export default PostCard
