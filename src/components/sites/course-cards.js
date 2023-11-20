import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import {getCourses, enroll} from "../../axiosConfig";

function CourseCards() {

    const [dataFromDatabase, setDataFromDatabase] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    function transformData(responseData) {
        if (responseData && responseData.courses) {
            return responseData.courses.map(course => {
                return {
                    id: course.courseID,
                    title: course.title,
                    subtitle: course.trainer,
                    text: course.text
                };
            });
        }
        return []; // Zwrócenie pustej tablicy w przypadku braku danych lub nieprawidłowej odpowiedzi
    }


    useEffect(() => {
        getCourses()
            .then(response => {
                const transformedData = transformData(response.data);
                setDataFromDatabase(transformedData);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania danych:', error);
            });
    }, []);

    // podział na wiersze po 3 kursy
    const chunkedData = chunkArray(dataFromDatabase, 3); // Funkcja do dzielenia tablicy na mniejsze części

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    // zapisywanie się
    const handleSaveClick = (courseIdArg) => {
        const requestData = {
            id: localStorage.getItem("id"),
            courseId: courseIdArg
        }

        enroll(requestData)
            .then((response) => {
                // Obsługa odpowiedzi z serwera po udanym zapisaniu
                console.log(response.data);
                setShowAlert(true);
                setAlertMessage(`${response.data}`);
                setTimeout(() => {
                    setShowAlert(false);
                    window.location.reload(); // Przeładuj stronę po zakończeniu akcji
                }, 3000); // Ukryj komunikat po 3 sekundach
            })
            .catch((error) => {
                // Obsługa błędów związanych z zapisywaniem
                console.error('Błąd podczas zapisywania:', error);
                setShowAlert(true);
                setAlertMessage(`Nie udało się zapisać na kurs`);
                setTimeout(() => {
                    setShowAlert(false);
                    window.location.reload(); // Przeładuj stronę po zakończeniu akcji
                }, 3000);
            });
    };


    return (
        <div className="row row-cols-1 row-cols-md-3 g-2">
            {dataFromDatabase.map((data) => (
                <div className="col" key={data.id}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body style={{ padding: '10px' }}>
                            <Card.Title style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{data.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>{data.subtitle}</Card.Subtitle>
                            <Card.Text style={{ fontSize: '0.8rem', maxHeight: '5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {data.text}
                            </Card.Text>
                            <Button variant="dark" onClick={() => handleSaveClick(data.courseId)}>Zapisz się</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default CourseCards;
