import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Docs = () => {
return (
    <>
        <br></br>
        <br></br>
        <h4>API  Documentations</h4>
        <br></br>
        All data are public and all GET methods (including websocket) have to authentication
        <br></br>
        <Row>
            <Col>
                <h5>REST API</h5>
                <ul>
                    <li>
                        Other methods require authentication                         
                    </li>
                </ul>
                <a href={process.env.REACT_APP_API_HOST + "/docs"}>REST API Documentations</a>
            </Col>
            <Col>
                <h5>Websocket</h5>
                <a href={process.env.REACT_APP_WEBSOCKET_HOST + "/docs"}>WebSocket Documentations</a>
            </Col>
        </Row>    
    </>
);
};
export default Docs;
