import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


const EventTable = (props) => {
    const { event, history } = props;

        return (
            <ul>
            { event.map((event) => {
              return <li key={event.id} onClick={ () => history.push(`/event/${event.id}`)}>{event.id} - {event.name}</li>
            })}
          </ul>
        );
}

EventTable.protoTypes = {
    event: propTypes.array.isRequired,
    history: propTypes.object.isRequired
}

export default withRouter(EventTable);