import Calendar from 'react-calendar'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'


export default function CalendarEx(){
    const [value, onChange] = useState(new Date());
    const onClickDay =()=>{
        document.getElementById('events').style.opacity='1';
    }
    return (
        <>
        <h2>Calendar</h2>
        <Calendar className="calendar_styles" 
        onChange={onChange}
        onClickDay={onClickDay}
        value={value} />
        <p>{value.toString()}</p>
        <div id="events" style={{"opacity":"0"}}>
            <h2>events</h2>
            <ul>
                <li>morning</li>
                <li>afternoon</li>
                <li>evening</li>
                <li>night</li>
            </ul>
        </div>
        </>
    )
}