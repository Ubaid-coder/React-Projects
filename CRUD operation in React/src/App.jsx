import { useEffect, useState } from "react";
import { EmployData } from "./EmployData";
import './App.css';

const localItems = () => {
  const list = localStorage.getItem('data');
  if(list){
    return JSON.parse(list);
  }else{
    return EmployData
  }
}

function App() {

  const [data, setData] = useState(localItems());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [editId, setEditId] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

useEffect(() => {
  const item = JSON.stringify(data);
  localStorage.setItem('data',item);
},[data])

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this item?`)) {
      setData(data.filter(list => list.id !== id));

    }
  };

  const handleEdit = (id) => {
    const editData = data.find(list => list.id === id);
    if (editData) {
      setFirstName(editData.firstName);
      setLastName(editData.lastName);
      setAge(editData.age);
      setEditId(id); 

      setIsUpdated(true);
    }
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setEditId(null); // Clear editId
    setIsUpdated(false);
  };

  const newData = () => {
    if (firstName !== '' && lastName !== '' && age !== '') {
      const newItem = {
        id: Math.floor(Math.random() * 1000000),
        firstName,
        lastName,
        age
      }
      setData([...data, newItem]);
      handleClear();
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleUpdate = () => {
    if (firstName !== undefined && lastName !== undefined && age !== undefined && editId !== null) {
      const updatedData = data.map((item) => {
        return item.id === editId ? {
          ...item,
          firstName,
          lastName,
          age
        } : item
      })

      setData(updatedData);
      handleClear();
    }
  }

  return (
    <>
      <div className="newItems" style={{ display: "flex", justifyContent: 'center', alignItems: "center", padding: "10px" }}>
        <label htmlFor="firstName">FirstName:
          <input
            id="firstName"
            type="text"
            placeholder="Enter your FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName || ''}
          />
        </label>

        <label htmlFor="lastName">LastName:
          <input
            id="lastName"
            type="text"
            placeholder="Enter your LastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName || ''}
          />
        </label>

        <label htmlFor="age">Age:
          <input
            id="age"
            type="text"
            placeholder="Enter your Age"
            onChange={(e) => setAge(e.target.value)}
            value={age || ''}
          />
        </label>

        {
          !isUpdated ? (
            <button id="btn" className="btn btn-success" onClick={newData}>Add</button>
          ) : (
            <button id="btn" className="btn btn-primary" onClick={handleUpdate}>Update</button>
          )
        }
        <button id="btn" className="btn btn-danger" onClick={handleClear}>Clear</button>
      </div>

      <table className="table table-hover table-dark">
        <thead className="table-group-divider">
          <tr>
            <td>S.No</td>
            <td>FirstName</td>
            <td>LastName</td>
            <td>ID</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {
            data.map((element, index) => (
              <tr key={element.id}>
                <td>{index + 1}</td>
                <td>{element.firstName}</td>
                <td>{element.lastName}</td>
                <td>{element.id}</td>
                <td>{element.age}</td>
                <td>
                  <button id="btn" onClick={() => handleEdit(element.id)} className="btn btn-primary">Edit</button>
                  <button id="btn" onClick={() => handleDelete(element.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
