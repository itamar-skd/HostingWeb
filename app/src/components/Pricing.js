import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Purchase from '../images/Purchase.svg'

export default function Pricing() {
    const [monthly, setMonthly] = useState(true)
    const [currency, setCurrency] = useState(1)
    const [currencySign, setCurrencySign] = useState('$')
    const [backgroundMonthly, setBackgroundMonthly] = useState({ backgroundColor: '' })
    const [backgroundQuarterly, setBackgroundQuarterly] = useState({ backgroundColor: 'transparent' })

    function returnItems(info) {
        return (
            <Col className="text-center p-3 m-3 rounded" style={{ backgroundColor: '#21232e' }}>
                <h1 className="text-warning text-start"><span style={{ fontSize: '60px'}}>{info.amount}</span>GB RAM</h1>
                <p className="lead my-4 text-start">
                    <strong>{currencySign}{monthly ? (info.price * currency).toFixed(2) : ((info.price * currency).toFixed(2) - Math.round(15 / 100 * info.price)).toFixed(2)}{monthly ? ' per month.' : '/mo for 3 months.'}</strong><br />
                    {monthly ? <p>Recurring price {currencySign}{info.price}/mo<br />Billed Monthly.</p> : <p>Recurring price {currencySign}{((info.price * currency).toFixed(2) - (15 / 100 * info.price)).toFixed(2)}/mo<br />Billed Quarterly.</p> }
                </p>
                <Button className="btn btn-warning w-75" >Order Now</Button>
            </Col>
        )
    }

    function returnCurrencyButtons(cur) {
        return (
            <Button
                className="btn btn-warning mx-1 my-3 text-light"
                style={{ backgroundColor: currency === cur.value ? '' : 'transparent'}}
                onClick={() => { 
                    setCurrency(cur.value)
                    setCurrencySign(cur.name)
                }}
            >{cur.name}</Button>
        )
    }
    

    return (
        <div>
            <section className="text-light p-5 text-center" style={{ backgroundColor: '#171921', marginTop: '50px', paddingTop: '30px'}}>
                <div>
                    <Container>
                        <div className="d-sm-flex align-items-center justify-content-between text-start">
                            <div>
                                <h1 className="text-warning pb-2">High Quality Hosting at a Low Price.</h1>
                                <p className="lead my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At excepturi, explicabo voluptatem qui dolores itaque magni laboriosam incidunt nisi maxime adipisci, ipsa, obcaecati magnam aliquid aperiam nesciunt laudantium illum nostrum!</p>
                            </div>
                            <img src={Purchase} alt="Purchase" className="img-fluid w-25 d-none d-sm-block"/>
                        </div>
                    </Container>
                </div>
            </section>

            <section className="text-light p-5 text-center" style={{ backgroundColor: '#171921' }}>
                <div>
                    <Container>
                        <div className="d-sm-flex align-items-end justify-content-between">
                            <div className="align-self-end">
                                <Button 
                                    className="btn btn-warning m-2 text-light" 
                                    onClick={() => {
                                        setBackgroundMonthly({ background: '' })
                                        setBackgroundQuarterly({ background: 'transparent' })
                                        setMonthly(true)
                                    }}
                                    style={backgroundMonthly}
                                >Monthly</Button>
                                <Button 
                                    className="btn btn-warning m-2 text-light" 
                                    onClick={() => {
                                        setBackgroundMonthly({ background: 'transparent' })
                                        setBackgroundQuarterly({ background: '' })
                                        setMonthly(false)
                                    }}
                                    style={backgroundQuarterly}
                                >Quarterly</Button>
                            </div>
                            <div class="align-self-start">
                                {
                                    [
                                        { name: '$', value: 1 },
                                        { name: '€', value: 0.84 },
                                        { name: '£', value: 0.72 }
                                    ].map(returnCurrencyButtons)
                                }
                            </div>
                        </div>
                        <Row>
                            {
                                [
                                    { amount: 1, price: 3.99 },
                                    { amount: 2, price: 5.99 },
                                    { amount: 3, price: 7.55 },
                                    { amount: 4, price: 8.64 }
                                ].map(returnItems)
                            }
                        </Row>
                        <Row>
                            {
                                [
                                    { amount: 5, price: 9.99 },
                                    { amount: 10, price: 18.74 },
                                    { amount: 15, price: 24.99 },
                                    { amount: 20, price: 31.35 }
                                ].map(returnItems)
                            }
                        </Row>
                        <div className="d-sm-flex align-items-center justify-content-around text-start my-4">
                            <div>
                                <h1>Proxy</h1>
                                <p className="lead my-2">1GB Only for Proxy</p>
                            </div>
                            <p><strong>{currencySign}{(2.99 * currency).toFixed(2)} first month</strong><br />Recurring price {currencySign}{(2.99 * currency).toFixed(2)}/mo<br />Billed Monthly</p>
                            <Button className="btn btn-warning w-25" >Order Now</Button>
                        </div>
                        <p className="m-auto">Proxy servers are used exclusively for connecting multiple minecraft servers together and cannot be played on.</p>
                    </Container>
                </div>
            </section>
        </div>
    )
}