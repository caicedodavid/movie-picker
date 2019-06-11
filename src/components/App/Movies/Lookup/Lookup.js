import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './Lookup.css';

class Lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: null
        };
    }

    handleClick() {
        this.props.onClick(this.state.query);
    }


    render() {
        return (
            <InputGroup className="mb-3">
                <FormControl className="lookup"
                             placeholder="What movie are you interested in?"
                             aria-describedby="basic-addon1"
                             onChange={event => this.setState({query: event.target.value})}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={() => this.handleClick()}><i
                        className="fas fa-search"/></Button>
                </InputGroup.Append>
            </InputGroup>
        )
        ;
    }
}
export default Lookup;