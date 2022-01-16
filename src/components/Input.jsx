import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function Input({ type, name, testID, onChange, labelText, value }) {
  return (
    <div>
      <Form.Label className="label" htmlFor={ name }>{ labelText }</Form.Label>
      <Form.Control  
        type={ type }
        name={ name }
        data-testid={ testID }
        onChange={ onChange }
        id={ name }
        value={ value }
      />
    </div>
  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  type: string,
  name: string,
  testID: string,
  onChange: func,
  labelText: func,
  value: string,
}.isRequired;

export default Input;
