import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import Planets from './Planets';
import { Table as BSTable } from 'react-bootstrap';

function Table() {
  const { planets, planetsKeys } = useContext(MyContext);

  return (
      <BSTable striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            {planetsKeys.map((key) => (
              <th key={ key } name={ key }>{ key }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Planets
            planets={ planets }
          />
        </tbody>
      </BSTable>
  );
}

export default Table;
