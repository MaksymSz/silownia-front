import React, {useState} from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pl from 'date-fns/locale/pl';
import Container from "react-bootstrap/Container";
import InputGroup from 'react-bootstrap/InputGroup';
import './addCourse.css';
import {generate} from "../../axiosConfig";
import Alert from "react-bootstrap/Alert";
import "./qr.css";
import Summary from "./summary";

registerLocale('pl', pl);
const Report = () => {



    const [generated, setGenerated] = useState(false);

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const [avgUsers, setAvgUser] = useState(1)
    const [avgTime, setAvgTime] = useState(2)
    const [newUsers, setNewUser] = useState(3)
    const [users, setUser] = useState(4)

    const isDisabled = from === null || to === null;
    const [showAlert, setShowAlert] = useState(false);

    const handleFromChange = from => {
        setFrom(from);
    };

    const handleToChange = to => {
        setTo(to);
    };


    const generateReport = (e) => {
        e.preventDefault();

        console.log("CLICK!");

        generate(from, to)
            .then(response => {
                console.log('Report generated');
                setAvgUser(response.data.avgUsers);
                setAvgTime(response.data.avgTime);
                setNewUser(response.data.newUsers);
                setUser(response.data.users);
                setGenerated(true);
            })
            .catch(error => {
                console.log(error);
                setShowAlert(true);
            })
    }

    return (!generated ? (
                <Container className="add-course-container">
                    <Row className="justify-content-md-center">
                        <Col md={10}>
                            <>
                                <center>
                                    {from === null || to === null ? (<h2>Wybierz okres to wygenerowania raportu</h2>) :
                                        <h2>Podsumowanie aktywności na siłowni w okresie
                                            <br/>
                                            od {from.toISOString().split('T')[0].replace(/-/g, ':')} do {to.toISOString().split('T')[0].replace(/-/g, ':')}
                                        </h2>}
                                </center>
                                <br/>
                                <br/>

                                <InputGroup>
                                    <InputGroup.Text>Od</InputGroup.Text>
                                    <div>
                                        <DatePicker
                                            selected={from}
                                            onChange={handleFromChange}
                                            dateFormat="yyyy/MM/dd"
                                            placeholderText="Wybierz datę"
                                            locale="pl"
                                        />
                                    </div>
                                    &nbsp;
                                    &nbsp;
                                    <InputGroup.Text>Do</InputGroup.Text>
                                    <div>
                                        <DatePicker
                                            selected={to}
                                            onChange={handleToChange}
                                            dateFormat="yyyy/MM/dd"
                                            placeholderText="Wybierz datę"
                                            locale="pl"
                                        />
                                    </div>
                                </InputGroup>

                                <center>
                                    <Button variant="primary" type="submit" disabled={isDisabled}
                                            onClick={generateReport}
                                    >
                                        Generuj
                                    </Button>
                                </center>
                            </>
                            {showAlert && (
                                <div className="alert-container">
                                    <Alert show={showAlert} onClose={() => setShowAlert(false)}
                                           variant="danger" dismissible>
                                        Nie udało się wygenerować raportu
                                    </Alert>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>)
            : <Container className="add-course-container">
                <Summary{...{avgTime,avgUsers,users,newUsers}}/>
            </Container>

    );
};

export default Report;
