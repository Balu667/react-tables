import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./Table.css";

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

export const TableComponent = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data, "data");
      setTodos(data);
    };
    fetchTodos();
  }, []);
  console.log(todos, "todos");

  const columns = [
    { dataField: "id", text: "Id" },
    { dataField: "title", text: "Title" },
    { dataField: "completed", text: "Status" },
  ];
  return (
    <div className="table-container">
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.length > 0 &&
            todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <th>{todo.id}</th>
                  <th>{todo.title}</th>
                  <th>{todo.completed ? "completed" : "no"}</th>
                </tr>
              );
            })}
        </tbody>
      </Table> */}
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={todos}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 10 })}
      />
    </div>
  );
};
