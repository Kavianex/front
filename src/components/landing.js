import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CryptoMarket from './cryptomarket';

function Landing(){
    return (
        <>
            <Row>
                <Col sm={6}>
                        <h1>Welcome to Kavianex</h1>
                        <span>A super exhcange for the future</span>
                        <br></br>
                        <br></br>
                        <h3>
                            No fiat, No bank, No KYC
                        </h3>
                        <h4>Enjoy web3 trading</h4>
                        <br></br>
                        <a className="btn btn-outline-primary my-2 my-sm-0" href={process.env.REACT_APP_APPLICATION_HOST}>
                            Start Trading
                        </a>
                </Col>
                <Col sm={6}>
                    <Row>
                    <h4>Features</h4>
                        <Col xm={12}>
                            <ul>
                                <li>Powered by Web3 on Etherueme</li>
                                <li>Users sign up with their wallet address</li>
                                <li>We don't KYC</li>
                                <li>Maker orders have negative commission</li>
                                <li>We provide REST API and WebSocket</li>
                                <li>The project is open source and all data are public</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <CryptoMarket/>
            <br></br>
        </>
    )
}
export default Landing;
