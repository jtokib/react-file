import React from 'react';
import data from '../../events.json';
import { withRouter } from 'react-router-dom';
import EventTable from './eventtable';


class List extends React.Component {
    constructor() {
        super();

        this.state = {
            event: []
        }
    }

    componentDidMount() {
        this.setState({
            event: data,
        })
    }

    render() {
        const { event } = this.state;

        return (
            <div>
                <EventTable event={event} />
            </div>
        );
    }
        
}

export default withRouter(List);