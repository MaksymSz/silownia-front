import React, {useEffect, useState} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {dashboard} from "../../axiosConfig";

const ChartComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await dashboard();
                console.log(response.data.data)
                const modifiedData = response.data.data.map(item => {
                    return { date: item.date, "czas na siłowni": item.time };
                });
                setData(modifiedData);
            } catch (error) {
                console.error('Błąd pobierania danych:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Podsumowanie z ostatnich {data.length} dni:</h2>
            {data.length > 0 ? (
                <LineChart width={800} height={400} data={data}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="czas na siłowni" stroke="#8884d8"/>
                </LineChart>
            ) : (
                <p>Brak danych do wyświetlenia.</p>
            )}
        </div>
    );
};

export default ChartComponent;
