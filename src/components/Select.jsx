import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function Select({ name, labelText, options, onChange, testID }) {
  return (
    <div>
      <Form.Label className="label" htmlFor={ name }>{ labelText }</Form.Label>
      <Form.Select
        name={ name }
        id={ name }
        onChange={ onChange }
        data-testid={ testID }
        >
          {
            options && options.map((option, index) => (
              <option
                key={ index }
                value={ option }
                id={ option }
              >
                { option }
              </option>
            ))
          }
      </Form.Select>
    </div>
  );
}

const { string, func } = PropTypes;

Select.propTypes = {
  name: string,
  labelText: string,
  id: string,
  onChange: func,
  testID: string,
}.isRequired;

export default Select;
