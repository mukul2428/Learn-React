import { useEffect, useState } from "react";
import "./Forms.css";

function Forms({ dispatch, editContact }) {
  const initialState = {
    school: "XYZ Public",
    place: "Delhi",
    fname: "",
    lname: "",
  };
  const [contact, setContact] = useState(initialState);
  function handleClick(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
    // this a way to add elements in an object
  }
  function handleSubmit(e) {
    e.stopPropagation(); // restrict other components re-rendering
    e.preventDefault(); // restrict its default behaviour
    if(editContact){
      dispatch({ type: 'UPDATE', payload: contact })
    }else{
      dispatch({ type: 'ADD', payload: contact })
    }
    setContact(initialState); // set forms to its initialize state
  }
  //used for edit
  useEffect(() => {
    if (editContact) {
      setContact(editContact);
    }
  }, [editContact]);

  //if there is any change in editContact then useeEffect will work

  return (
    <div className="form-container">
      {/* controlled forms due to this - "name={contact.fname}"*/}
      <form className="form-container">
        <input
          type="text"
          name="fname"
          value={contact.fname}
          placeholder="Fname"
          onChange={handleClick}
        />
        <input
          type="text"
          name="lname"
          value={contact.lname}
          placeholder="Lname"
          onChange={handleClick}
        />
      </form>
      <button onClick={handleSubmit}>
        {editContact ? "Update" : "+ Add"}
      </button>
    </div>
  );
}
export default Forms;
