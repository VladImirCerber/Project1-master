import {Container, Row, Col, Carousel, Form, Button} from 'react-bootstrap';

const BootstrapTest = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5iTZgh05Hqn8a8A45B2ISZyl1BC87eaVMDiISh4hZnZW2CGLER-56qml8vHxKz2lt0w&usqp=CAU"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3PNNRDmwDV_an6mG4zJJyuV3ixJDdEDnIeq_jgXR_RmGHc4qGFI8Fkg2dPq3qcoD_ir0&usqp=CAU"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR87fG1bTCYL6ZJhjPPGkLO351MNYqyX3xxOEWhTVNI47pczZIuGp7powwehFRxnX9irdY&usqp=CAU"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default BootstrapTest;