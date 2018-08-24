import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {}
const defaultProps = {}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Table</h1>
      </div>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;