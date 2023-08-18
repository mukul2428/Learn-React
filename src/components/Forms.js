import { useState } from "react";

function Forms({setStudentData}) {
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
  function handleSubmit(e){
    e.stopPropagation(); // restrict other components re-rendering
    e.preventDefault(); // restrict its default behaviour
    setStudentData(contact);
  }
  return (
    <>
    {/* controlled forms due to this - "name={contact.fname}"*/}
      <form>
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
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default Forms;
