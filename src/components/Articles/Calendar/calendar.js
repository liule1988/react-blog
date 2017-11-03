import React, {Component} from 'react';
import './calendar.scss'
class Calendar extends Component{

    constructor(){
        super()
    }
    render(){
        let date = new Date(this.props.data)
        return(
            <div className="time-box">
                <span className="day">{date.getUTCDate()}</span>
                <span className="month">{date.getUTCMonth()+1}月</span>
                <span className="year">{date.getFullYear()}</span>
            </div>
        )
    }

}

export default Calendar
