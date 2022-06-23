import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/Accounts')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
  }

  render() {
    return (
      <div>
        <h2>Accounts</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.acc_id}>{customer.acc_name} {customer.acc_email}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
