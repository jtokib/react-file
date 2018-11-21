import React from 'react';
import data from '../../events.json';
import './eventdetail.css';

class EventDetail extends React.Component {

    constructor() {
        super();

        this.state = {
            event: {}
        }
    }

    componentDidMount() {
        const eventId = this.props.match.params.id - 1;
        this.setState({
            event: data[eventId],
        })
    }
    

    render() {
        const { event } = this.state;

        return (
            <div className="event">
                <h2 className="event-header">Event Details</h2>
                <ul className="event-detail">
                    <li><strong>Title: </strong>{event.name}</li>
                    <li><strong>Presenter: </strong>{event.presenter}</li>
                    <li><strong>Summary: </strong>{event.summary}</li>
                    <li><strong>Location: </strong>{event.room}</li>
                    <li><strong>Date: </strong>{event.date}</li>
                    <li><strong>Time: </strong>{event.time}</li>
                </ul>
            </div>
        );   
    }
}

export default EventDetail;