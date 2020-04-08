import React, { useState, useEffect } from 'react';

import Data from './generated.json';
import Pagination from './Pagination';

function App() {
  const [countPerPage, setCountPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const range = [5, 10, 15, 20, 25, 30, 40, 50];
  const pageCount = Math.ceil(Data.length / countPerPage);

  useEffect(() => {
    setData(Data.slice(countPerPage * page - countPerPage, countPerPage * page));
  }, [page, countPerPage]);

  const handleChange = value => {
    setCountPerPage(value);
    setPage(1);
  }

  return (
    <div className="container grid-xl">
      <div className="columns">
        <div className="column col-12">
          <header className="navbar">
            <section className="navbar-section">
              Pagination with React.js
              <a href="https://github.com/oleksandrkobzar/react-pagination" className="btn btn-link">GitHub</a>
            </section>
            <section className="navbar-section">
              <div className="input-group input-inline">
                <div className="form-group">
                  <label className="form-label" htmlFor="count-per-page">Count per page</label>
                  <select
                    className="form-select"
                    id="count-per-page"
                    value={countPerPage}
                    onChange={e => handleChange(e.target.value)}>
                    {
                      range.map((item, idx) =>
                        <option
                          defaultValue={item}
                          key={idx}>
                          {item}
                        </option>
                      )
                    }
                  </select>
                </div>
              </div>
            </section>
          </header>
        </div>
      </div>
      <Pagination pageCount={pageCount} page={page} setPage={setPage} />
      <div className="columns">
        <div className="column col-12">
          {data.length ?
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Balance</th>
                  <th className="hide-sm">Email</th>
                  <th className="hide-lg">Phone</th>
                  <th className="hide-md">Address</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((person, idx) =>
                    <tr key={idx}>
                      <td>{person.name}</td>
                      <td>{person.balance}</td>
                      <td className="hide-sm">{person.email}</td>
                      <td className="hide-lg">{person.phone}</td>
                      <td className="hide-md">{person.address}</td>
                    </tr>
                  )
                }
              </tbody>
            </table> : null
          }
        </div>
      </div>
      <Pagination pageCount={pageCount} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
