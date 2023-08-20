import "./App.css";
import Test from "./components/Test";
import { useState } from "react";
import Clock from "./components/clock";
// import LoginControl from "./components/loginControl";
import Blog from "./components/blog";
import Form from "./components/form";
import Search from "./components/search";
import List from "./components/list";
import WelcomeDialog from "./components/welcomeDialog";
import EventHandling from "./components/EventHandling";
import UseState from "./components/UseState";
import Arrays from "./components/Arrays";
import Forms from "./components/Forms";
import ShowFormData from "./components/ShowFormData";

//functional components
//this App "A" should be in capital
function App() {
  const [flag, setFlag] = useState(false);
  const userObj = {
    firstName: "Mukul",
    lastName: "Raghav",
  };

  const blogs = [
    {
      id: 1,
      title: "React",
      content: "Hello React!",
    },
    {
      id: 2,
      title: "Node",
      content: "Hello Node!",
    },
    {
      id: 3,
      title: "Mongo",
      content: "Hello Mongo!",
    },
    {
      id: 4,
      title: "Java",
      content: "Hello Java!",
    },
    {
      id: 5,
      title: "Angular",
      content: "Hello Angular!",
    },
    {
      id: 6,
      title: "Figma",
      content: "Hello Figma!",
    },
  ];

  //conditional rendering
  function callUser(user) {
    if (user) {
      return (
        <h1>
          Welcome {user.firstName} {user.lastName} to My Page
        </h1>
      );
    } else {
      return <h2>Welcome X</h2>;
    }
  }
  //or
  function callUser(user) {
    let showData;
    if (user) {
      showData = (
        <h1>
          Welcome {user.firstName} {user.lastName} to My Page
        </h1>
      );
    } else {
      showData = <h2>Welcome X</h2>;
    }
    return showData;
  }

  function Rendering(user) {
    return (
      <>
        {user ? (
          <h1>
            {" "}
            Welcome {user.firstName} {user.lastName} to My Page
          </h1>
        ) : null}
      </>
    );
  }

  // for filtering purpose
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filterList = blogs.filter((items) => {
    return items.title.toLowerCase().includes(searchTerm);
  });

  // for forms
  const contactDetails = [
    {
      id: "1",
      school: "MAX Public",
      place: "Mathura",
      fname: "Sumit",
      lname: "OP",
    },
    {
      id: "2",
      school: "Delhi Public",
      place: "Agra",
      fname: "Miraz",
      lname: "OP",
    },
  ];
  const [contact, setContact] = useState(contactDetails);

  const [editContact, setEditContact] = useState(null);

  function setStudentData(studentData) {
    setContact([
      ...contact,
      { ...studentData, id: String(contact.length + 1) },
    ]);
  }
  function handleEdit(id) {
    console.log(id);
    //finding id of that particular card and setting it to forms
    setEditContact(contact.find((data) => data.id === id));
  }

  function handleDelete(id) {
    console.log(id);
    setContact(contact.filter((data) => data.id !== id));
  }
  function updateStudentData(studentData) {
    console.log(studentData);
    //find index of data to be updated
    const index = contact.findIndex((data)=> data.id === studentData.id);

    const newContact = [...contact];
    // splice = remove item from that particular index and put new item
    newContact.splice(index, 1, studentData)
    setContact(newContact);
  }

  return (
    <span className="app-container">
      {/* {callUser(userObj)}
      {callUser()}
      <Test />
      <Test user={userObj} /> or <Test {...userObj} />
      <button onClick={() => setFlag(!flag)}>Toggle Clock</button>
      {flag ? <Clock /> : "No Clock Component"}
      <LoginControl />
      <Form/> */}
      {/* <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <List list={filterList} /> */}
      {/* <WelcomeDialog /> */}
      {/* <Rendering {...userObj} />
      <Blog posts={blogs} /> */}
      {/* <EventHandling
        onClick={() => {
          console.log("App se bhi Cliked");
        }}
        fname="mukul"
        lname="raghav"
        age="22"
      >
        <br />
        <label>NAME</label>
        <h1>MUkUL RAGHAV</h1>
      </EventHandling> */}
      {/* <UseState/> */}
      {/* <Arrays blogs={blogs}></Arrays> */}
      <Forms
        setStudentData={setStudentData}
        editContact={editContact}
        updateStudentData={updateStudentData}
      ></Forms>
      <ShowFormData
        contact={contact}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      ></ShowFormData>
    </span>
  );
}

// "OP TEST" above is called children
//"onClick" will work as a prop function not an event handler

// "setStudentData={setStudentData}" = passing function as a prop for uplifting state
// so this is passing data from child to parent

export default App;
