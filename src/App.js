import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./App.css";
import Nav from "./components/Nav";
Modal.setAppElement("#root");

function App() {
  const [popUp, setPopUp] = useState(false);
  const [name, setName] = useState("");
  const [empID, setEmpID] = useState("");
  const [department, setDepartment] = useState("Front-end");
  const [email, setEmail] = useState("");
  const [doj, setDoj] = useState("");

  const [employees, setEmployees] = useState([]);

  const saveEmployee = e => {
    e.preventDefault();
    if (
      name === "" ||
      empID === "" ||
      department === "" ||
      email === "" ||
      doj === ""
    ) {
      alert("Looks like you missed some fields...");
    } else {
      const newEmployee = {
        name: name,
        employeeID: empID,
        department: department,
        email: email,
        doj: doj
      };
      setEmployees([...employees, newEmployee]);
      clearFields();
      setPopUp(false);
    }
  };
  const clearFields = () => {
    setName("");
    setEmpID("");
    setDepartment("Front-end");
    setEmail("");
    setDoj("");
  };
  const clearFieldsClick = e => {
    e.preventDefault();
    clearFields();
  };

  useEffect(() => {}, [employees]);

  return (
    <div className="App">
      <Nav />
      <div className="container-fluid">
        <h3 className="text-muted">Add a New Employee to our records!</h3>
        <button
          className="btn btn-primary mt-5 mb-5"
          onClick={() => setPopUp(true)}
        >
          New Employee
        </button>
        <Modal
          isOpen={popUp}
          onRequestClose={() => setPopUp(false)}
          style={{
            overlay: {
              backgroundColor: "grey"
            }
          }}
        >
          <div className="container modal-form">
            <h1 className="header center mb-5">New Employee Form</h1>
            <form onSubmit={saveEmployee}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="employeeID">EmployeeID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Employee ID"
                  value={empID}
                  onChange={event => setEmpID(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  id="department"
                  className="dropdown-dept"
                  value={department}
                  onChange={event => setDepartment(event.target.value)}
                >
                  <option value="Front-end" selected="selected">
                    Front-end
                  </option>
                  <option value="Back-end">Back-end</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Management">Management</option>
                  <option value="HR">HR</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="doj">Date of Joining</label>
                <input
                  type="date"
                  className="form-control"
                  id="doj"
                  value={doj}
                  onChange={event => setDoj(event.target.value)}
                />
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-primary btn-clear"
                    onClick={clearFieldsClick}
                  >
                    Clear Fields
                  </button>
                </div>
              </div>
            </form>
            <button
              className="btn btn-danger btn-close"
              onClick={() => {
                clearFields();
                setPopUp(false);
              }}
            >
              Close Dialog
            </button>
          </div>
        </Modal>
      </div>

      <div className="container-fluid">
        {employees.length === 0 ? (
          <h5 className="text-muted mt-5">No Employees Added !</h5>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Department</th>
                <th scope="col">Email ID</th>
                <th scope="col">Date of Joining</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, i) => (
                <tr key={i}>
                  <th> {emp.name} </th>
                  <th> {emp.employeeID} </th>
                  <th> {emp.department} </th>
                  <th> {emp.email} </th>
                  <th> {emp.doj} </th>
                  <th>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={event =>
                        setEmployees(
                          employees.filter(e => e.employeeID !== emp.employeeID)
                        )
                      }
                    >
                      Remove
                    </button>{" "}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="footer-info container jumbotron">
        <p>
          This web app is developed by Rajat Gupta as part of an assesment given
          by Saarthi.ai
        </p>
        <a
          className="btn btn-secondary"
          href="https://www.github.com/7rajatgupta"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my other projects
        </a>
      </div>
    </div>
  );
}

export default App;
