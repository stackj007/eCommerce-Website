import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customerCount: 5,
    customer: [
      { id: 1, name: "Jeff", phone: "234-546", address: { city: "London" } },
      { id: 2, name: "jana", phone: null, address: { city: "Los angeles" } },
      { id: 3, name: "Mary", phone: null, address: { city: "Mexico" } },
      { id: 4, name: "Scott", phone: "2943-507", address: { city: "New York" } },
      { id: 5, name: "Allen", phone: "696-107", address: { city: "Austin" } },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">{this.state.customerCount}</span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>customerName</th>
              <th>phone</th>
              <th>City</th>
            </tr>
          </thead>

          <tbody>
            {this.state.customer.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>
                    {cust.phone ? (
                      cust.phone
                    ) : (
                      <div className="bg-warning p-2 text-center">No phone</div>
                    )}
                  </td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    this.setState({
      customerCount: 7,
    });
  };
}
