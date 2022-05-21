import { useState, useEffect } from "react";
import Moment from 'react-moment';
import './datetime.css'

const DateTime = () => {

    const [time, setTime] = useState(new Date());

    // useEffect(() => {
    // const interval = setInterval(() => setTime(new Date().toLocaleString() + ""), 1000);
    // return () => {
    //     clearInterval(interval);
    // };
    // }, []);

        useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
        clearInterval(interval);
    };
    }, []);

//    const time = new Date()

    // return (
    //     // <h2>{time}</h2>
    //     <Moment date={time} />
    // )
    // const dateToFormat = new Date();
    return (
        
        <Moment className='datetime' format='MMMM DD, dddd H:mm'>{time}</Moment>
    );

}

export default DateTime