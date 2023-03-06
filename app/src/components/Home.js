import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faUser, faStar as filledStar } from '@fortawesome/free-solid-svg-icons'
import hosting from '../images/hosting.svg'
import Fade from 'react-reveal/Fade'
import MapChart from '../images/MapChart.png'
import ControlPanel from '../images/ControlPanel.png'

export default function Home() {
    function returnListItem(item, i) {
        return (
          <Fade left delay={i * 1000 / 2}>
            <p class="lead my-2">{'>'} {item}</p>
          </Fade>
        )
    }

    function returnCard(info, i) {
        
        return (
          <Col className="text-start p-3 m-3 rounded" style={{ backgroundColor: '#21232e' }}>
                <h3 className="text-warning">{info.title}</h3>
                <p className="lead my-2">{info.text}</p>
          </Col>
        )
    }

    function returnReview(info) {
        function returnFilledStars() {
            let final = []

            for (let i = 0; i < info.stars; i++) {
                final.push(<FontAwesomeIcon icon={filledStar} />)
            }

            return final
        }

        function returnEmptyStars() {
            let final = []

            for (let i = 0; i < (5 - info.stars); i++) {
                final.push(<FontAwesomeIcon icon={emptyStar} />)
            }

            return final
        }

        return (
            <Col className="text-center p-3 m-3 rounded" style={{ backgroundColor: '#21232e' }}>
                <FontAwesomeIcon icon={faUser} size="5x" className="mb-3" /><br />
                {returnFilledStars()}{returnEmptyStars()}
                <h3 className="text-warning">{info.user}</h3>
                <p className="lead my-2">{info.review}</p>
            </Col>
        )
    }

    return (
        <div>
            <section className="text-light p-5 text-start" style={{ backgroundColor: '#171921', marginTop: '50px', paddingTop: '30px'}}>
                <div>
                    <Container>
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div>
                            <h1>Fast, Quality, and Secure <span class="text-warning">Hosting</span></h1>
                            <div class="d-sm-flex align-items-start justify-content-between">
                                <div style={{ paddingRight: '10px' }}>
                                {
                                    ['Java & Bedrock Edition Servers', 'Web Hosting', '24/7 Chat Support', 'Premium Hardware & Low Latency', 'Full FTP & MYSQL Database Access'].map(returnListItem)
                                }
                                </div>
                                <div>
                                {
                                    ['Free Server Transfers', '14 days money-back guarantee', 'Premade features', '24/7 Servers with 99.9% Uptime', 'Get started in less than 2 minutes'].map(returnListItem)
                                }
                                </div>

                            </div>
                        </div>
                        <img className="img-fluid w-50 pb-5 px-5 d-none d-md-block" src={hosting} alt="cart"></img>
                    </div>
                    </Container>
                </div>
            </section>
            <section className="text-light p-5 text-center" variant="dark" style={{ backgroundColor: '#171921' }} id="why">
            <div className="text-center m-auto">
                <h1 className="text-warning">Why us?</h1>
                <p className="lead pb-3">
                    <span style={{ opacity: '0.6' }}>We make it simple to create your service by providing the best server hosting for any version you would like to start with industry leading customer service. </span>
                    We have hosted over 300,000 Minecraft servers and have the best support in the industry. 
                    Our dedicated hardware features high clock speed CPUs and SSD hard drives providing high TPS and lag free servers for every one of our customers.
                </p>
            </div>
            <div>
                <Container>
                    <Row>
                    {
                        [ 
                        { title: 'Easy Setup', text: 'Install and setup the base of your service with ease in one click.' },
                        { title: 'DDoS Protection', text: 'Our team provides protection from small to large DDoS attacks to keep your service running 24/7.' },
                        { title: '24/7 Chat Support', text: 'We care about you, and do everything to provide the best support in the industry 24/7.' },
                        { title: 'Low Latency', text: 'Data centers around the world provide a nearby location for every customer and great speed for your users.' }
                        ].map(returnCard)
                    }
                    </Row>
                    <Row>
                    {
                        [
                        { title: 'SSL Certificate', text: 'Allow your users to know that them and their privacy is secure.' },
                        { title: 'Free Subdomain', text: 'Every order your make gifts you a completely free subdomain for your service.' },
                        { title: 'Automated Backups', text: 'Offsite automatic backups guarantee your data will not be lost due to any bad configurations or hardware failures.' },
                        { title: 'Powerful Panel', text: 'Control your service with simplicity on our custom web based panel from your mobile device or computer.' }
                        ].map(returnCard)
                    }
                    </Row>
                    <div>
                        <h2 className="text-warning py-3 m-auto">Server Locations all around the Globe</h2>
                        <p class="lead my-4 w-75 m-auto">Our servers are located all around the globe, in almost every continent and region of the world. With over 10 server locations, your service of choice will be run on the smoothest ping possible, with the speed of light.</p>
                        <img src={MapChart} alt="Map" className="w-100 px-5 d-none d-sm-block" />
                    </div>
                </Container>
            </div>
        </section>
        <section className="text-light p-5 text-center" variant="dark" style={{ backgroundColor: '#171921' }}>
            <div>
                <Container>
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <Fade left>
                            <img src={ControlPanel} className="img-fluid w-50" alt="Control Panel" />
                        </Fade>
                        <div>
                            <h1 className="text-warning m-4">Powerful Control Panel</h1>
                            <p className="lead m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At excepturi, explicabo voluptatem qui dolores itaque magni laboriosam incidunt nisi maxime adipisci, ipsa, obcaecati magnam aliquid aperiam nesciunt laudantium illum nostrum!</p>
                        </div>
                    </div>
                </Container>
            </div>
        </section> 
        <section className="text-light p-5 text-center" variant="dark" style={{ backgroundColor: "#171921" }}>
            <div>
                <Container>
                    <h1 className="text-warning">What our customers say about Gargantua</h1>
                    <Row>
                        {
                            [
                                { user: 'John Doe', review: 'I absolutely love Gargantua Hosting', stars: 4},
                                { user: 'John and Jane Doe', review: 'Together we love Gargantua Hosting the most!', stars: 5},
                                { user: 'Jane Doe', review: 'I love Gargantua Hosting more than John', stars: 4}
                            ].map(returnReview)
                        }
                    </Row>
                    <Row>
                        {
                            [
                                { user: 'Anonymous Inc.', review: 'Gargantua Hosting is incredible. Fast support, and highly secure hosting.', stars: 3 },
                                { user: 'Super Anonymous Inc.', review: 'Gargantua Hosting solved all problems we had with our previous hosting. Thank you, Gargantua Hosting.', stars: 5}
                            ].map(returnReview)
                        }
                    </Row>
                </Container>
            </div>
        </section>
      </div>
    )
}