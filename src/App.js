import "./App.css";
import Test from "./components/Test";
import { useState } from "react";
import Clock from "./components/clock";
import LoginControl from "./components/loginControl";
import Blog from "./components/blog";
import Form from "./components/form"

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
  ];

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

  return (
    <>
      {callUser(userObj)}
      {callUser()}
      <Test />
      <Test user={userObj} />
      <button onClick={() => setFlag(!flag)}>Toggle Clock</button>
      {flag ? <Clock /> : "No Clock Component"}
      <LoginControl />
      <Blog posts={blogs} />
      <Form/>
    </>
  );
}

export default App;
