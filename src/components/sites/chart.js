import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { dashboard } from "../../axiosConfig";

const ChartComponent = () => {
    const [data, setData] = useState([]);

    const hmsToMin = (stamp) => {
        const tmp = stamp.split(':');
        return parseInt(tmp[0]) * 60 + parseInt(tmp[1]);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await dashboard();
                console.log(response.data.data)
                const modifiedData = response.data.data.map(item => {
                    return { date: item.date, "czas na siłowni": hmsToMin(item.time) };
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
                <BarChart width={800} height={400} data={data}>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="czas na siłowni" fill="#8884d8"/>
                </BarChart>
            ) : (
                <p>Brak danych do wyświetlenia.</p>
            )}
        </div>
    );
};

export default ChartComponent;
