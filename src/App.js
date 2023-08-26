import "./App.css";
import { useReducer, useState } from "react";
import Forms from "./components/Forms";
import ShowFormData from "./components/ShowFormData";
import StudentContext from "./context/StudentContext";
import StudentDispatchContext from "./context/StudentDispatchContext";

//functional components
//this App "A" should be in capital
function App() {
  const [editContact, setEditContact] = useState(null);

  const [contact, dispatch] = useReducer(contactReducer, []);

  // this function is used for setting state and it returns a state
  //instead of useState we can use this
  //it acts as a listner
  function contactReducer(contact, action) {
    switch (action.type) {
      case "LOAD":
        return action.payload;
      case "ADD":
        return [
          ...contact,
          { ...action.payload, id: String(contact.length + 1) },
        ];
      case "DELETE":
        return contact.filter((data) => data.id !== action.payload);
      case "UPDATE":
        const index = contact.findIndex(
          (data) => data.id === action.payload.id
        );
        const newContact = [...contact];
        newContact.splice(index, 1, action.payload);
        setEditContact(null); //setting edit usestate to its initialize state
        return newContact;
      default:
        return contact; // returning default state
    }
  }

  function handleEdit(id) {
    //finding id of that particular card and setting it to forms
    setEditContact(contact.find((data) => data.id === id));
  }

  return (
    <StudentContext.Provider value={contact}>
      <StudentDispatchContext.Provider value={dispatch}>
        <span className="app-container">
          <Forms editContact={editContact}></Forms>
          <ShowFormData handleEdit={handleEdit}></ShowFormData>
        </span>
      </StudentDispatchContext.Provider>
    </StudentContext.Provider>
  );
}

export default App;
