import React from 'react';
import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
        );
}
export default FieldGroup;