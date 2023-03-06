import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faUser, faStar as filledStar } from '@fortawesome/free-solid-svg-icons'
import Questions from '../images/Questions.svg'

export default function FAQ() {

    function createAccordion(item, i) {
        return (
            <Accordion.Item eventKey={`${i}`}>
                <Accordion.Header>{item}</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.</Accordion.Body>
            </Accordion.Item>
        )
    }

    return (
        <div>
            <section className="text-light p-5 text-center" style={{ backgroundColor: '#171921', marginTop: '50px', paddingTop: '30px'}}>
                <div>
                    <Container>
                        <div className="d-sm-flex align-items-center justify-content-between text-start">
                            <div>
                                <h1 className="text-warning">Have any questions?</h1>
                                <p className="lead my-4">If you are unable to find an answer to your question here, please contact us over our Discord Server. We will try to assist you to the best of our abilities.</p>
                            </div>
                            <img src={Questions} className="img-fluid w-50 d-none d-sm-block" alt="Questions" />
                        </div>
                    </Container>
                </div>
            </section>

            <section className="text-dark p-5 text-start" style={{ backgroundColor: '#171921' }}>
            <Accordion className="w-50 m-auto">
                {
                    ['When will my product be ready?', 
                    'What hardware does your hosting use?', 
                    'How do I use my free subdomain?', 
                    'Do I get a MySQL Database?', 
                    'Do I get a control panel?', 
                    'What is my Minecraft server IP?', 
                    'Do I need to use port forwarding for my server?', 
                    'How can I get support for my product?', 
                    'Can I change my product\'s location?'].map(createAccordion)
                }
            </Accordion>
            </section>
        </div>
    )
}