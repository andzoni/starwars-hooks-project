import React, { useContext, useState, useEffect } from 'react';
import useFilters from '../hooks/useFilters';
import MyContext from '../context/MyContext';
import Input from './Input';
import Select from './Select';
import Filters from './Filters';
import { Button, Form } from 'react-bootstrap';

function Header() {
  const {
    numFilters,
    setQueryValue,
    setNumFilters,
    allFilters,
    setAllFilters,
  } = useContext(MyContext);
  const [handleFilter] = useFilters();
  const INITIAL_INPUT_VALUE = {
    column: 'population',
    comparison: 'bigger then',
    value: 0,
  };
  const initialColumn = ['population',
    'orbital period', 'diameter', 'rotation period', 'surface water'];
  const comparisonFilters = ['bigger than', 'equal to', 'smaller than'];

  const [columnFilters, setColumnFilters] = useState(initialColumn);

  const [inputValues, setInputValues] = useState(INITIAL_INPUT_VALUE);

  const handleFilterChange = ({ target: { name, value } }) => {
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    setNumFilters(inputValues);
  }, [inputValues, setNumFilters]);

  const handleClick = () => {
    handleFilter();
    setColumnFilters(initialColumn);
    const filterColumn = initialColumn.filter((column) => column !== inputValues.column);
    setColumnFilters(filterColumn);
    setAllFilters([...allFilters, numFilters]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const columnFilter = document.getElementById(columnFilters[0]);
    const comparisonFilter = document.getElementById(comparisonFilters[0]);

    columnFilter.selected = true;
    comparisonFilter.selected = true;
  };

  return (
    <>
      <header className="background">
        <Form onSubmit={ handleSubmit } className='form'>
          <Form.Group className="mb-3">
            <Input
              type="text"
              name="planet-input"
              testID="name-filter"
              labelText="Name:"
              onChange={ ({ target: { value } }) => setQueryValue(value) }
            />
            <Select
              name="column"
              testID="column-filter"
              labelText="Filter:"
              options={ columnFilters }
              onChange={ handleFilterChange }
            />
            <Select
              name="comparison"
              testID="comparison-filter"
              labelText="Comparison:"
              options={ comparisonFilters }
              onChange={ handleFilterChange }
            />
            <Input
              type="number"
              name="value"
              testID="value-filter"
              labelText="Value:"
              value={ inputValues.value }
              onChange={ handleFilterChange }
            />
            <br/>
            <Button
              variant="light"
              size="lg"
              type="submit"
              data-testid="button-filter"
              onClick={ handleClick }
            >
              Add Filter
            </Button>
          </Form.Group>
        </Form>
      </header>
      <Filters />
    </>
  );
}

export default Header;
