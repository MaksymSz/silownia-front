import React, {useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pl from 'date-fns/locale/pl';
import Container from "react-bootstrap/Container";
import InputGroup from 'react-bootstrap/InputGroup';
import './addCourse.css';
import {useNavigate} from "react-router-dom";
import {newcourse} from "../../axiosConfig";
import Alert from "react-bootstrap/Alert";
import "./qr.css";
import { format } from 'date-fns';

registerLocale('pl', pl);
/**
 * Komponent odpowiedzialny za dodanie nowego kursu przez użytkownika
 * @returns {Element} - Element do renderowania
 * @constructor
 */
const AddCourse = () => {
    /**
     * @type {NavigateFunction}
     */
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState('');
    /**
     * @type {boolean}
     */
    const isDisabled = title === '' || description === '' || date === null || time === '';
    const [showAlert, setShowAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    /**
     * @param event
     */
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    /**
     * @param event
     */
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    /**
     * @param date
     */
    const handleDateChange = date => {
        setDate(date);
    };
    /**
     * @param event
     */
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };
    /**
     * @param e
     */
    const addNewCourse = (e) => {
        e.preventDefault();

        console.log("CLICK!");

        newcourse(title, description, format(date,'yyyy-MM-dd'), time)
            .then(response => {
                //window.location.reload();
                setSuccess(true);
                setShowAlert(true);
                console.log(response.data.text);
                setTimeout(() => {
                    navigate('/newcourse');
                    window.location.reload();
                }, 3000);

            })
            .catch(error => {
                console.log(error);
                window.location.reload();
                setSuccess(false);
                setShowAlert(true);
            })
    }

    return (
        <Container className="add-course-container">
            <Row className="justify-content-md-center">
                <Col md={10}>
                    <>
                        <center>
                            <h1>Dodaj nowy kurs {title}</h1>
                        </center>
                        <br/>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Nazwa kursu</InputGroup.Text>
                            <Form.Control
                                placeholder="Podaj nazwę kursu"
                                aria-label="Podaj nazwę kursu"
                                aria-describedby="basic-addon1"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </InputGroup>

                        <InputGroup>
                            <InputGroup.Text>Opis kursu</InputGroup.Text>
                            <Form.Control as="textarea"
                                          placeholder="Dodaj opis kursu"
                                          aria-label="With textarea"
                                          value={description}
                                          onChange={handleDescriptionChange}
                            />
                        </InputGroup>

                        <br/>
                        <InputGroup>
                            <InputGroup.Text>Wybierz datę</InputGroup.Text>
                            <div>
                                <DatePicker
                                    selected={date}
                                    onChange={handleDateChange}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText="Wybierz datę"
                                    locale="pl"
                                />
                            </div>
                        </InputGroup>

                        <br/>
                        <InputGroup>
                            <InputGroup.Text>Wybierz czas rozpoczęcia kursu</InputGroup.Text>
                            <div className="App">
                                <input
                                    type="time"
                                    value={time}
                                    onChange={handleTimeChange}
                                    style={{width: '200px', height: '38px', borderRadius: '4px'}}
                                />
                            </div>
                        </InputGroup>

                        <center>
                            <Button variant="primary" type="submit" disabled={isDisabled}
                                    onClick={addNewCourse}
                            >
                                Dodaj
                            </Button>
                        </center>
                    </>
                    {showAlert && (
                        <div className="alert-container">
                            <Alert show={showAlert} onClose={() => setShowAlert(false)} variant={success ? "secondary" : "danger"} dismissible>
                                {success ? "Udało się utworzyć kurs" : "Nie udało się utworzyć kursu"}
                            </Alert>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default AddCourse;
