import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import {getCourses, enroll} from "../../axiosConfig";

/**
 * Komponent odpowiedzialny za renderowanie kart kursów, przy zapisywaniu się na kursy
 * @returns {Element}
 * @constructor
 */
function CourseCards() {

    const [dataFromDatabase, setDataFromDatabase] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    /**
     * @param responseData
     * @returns {*|*[]}
     */
    function transformData(responseData) {
        if (responseData && responseData.courses) {
            return responseData.courses.map(course => {
                return {
                    id: course.courseID,
                    title: course.title,
                    subtitle: course.trainer,
                    description: course.description
                };
            });
        }
        return [];
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

    const chunkedData = chunkArray(dataFromDatabase, 3);

    /**
     * Metoda odpowiedzialna za podział danych na tablicę
     * @param array - Dane wejściowe
     * @param chunkSize - Rozmiar bloku
     * @returns {*[]}
     */
    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    /**
     * @param courseIdArg
     */
    const handleSaveClick = (courseIdArg) => {
        const requestData = {
            id: localStorage.getItem("id"),
            courseId: courseIdArg
        }

        enroll(requestData)
            .then((response) => {
                console.log(response.data);
                setShowAlert(true);
                setAlertMessage(`${response.data}`);
                setTimeout(() => {
                    setShowAlert(false);
                    window.location.reload();
                }, 3000);
            })
            .catch((error) => {
                console.error('Błąd podczas zapisywania:', error);
                setShowAlert(true);
                setAlertMessage(`Nie udało się zapisać na kurs`);
                setTimeout(() => {
                    setShowAlert(false);
                    window.location.reload();
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
                                {data.description}
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
