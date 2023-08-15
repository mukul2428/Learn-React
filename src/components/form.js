import React, { useState } from "react";

//controlled components - forms

//type 1

// function LoginForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

//type 2(can also use like this)

function LoginForm() {
  const initialValue = {
    name: "Mukul",
    email: "",
    password: ""
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents page from loading
    alert(JSON.stringify(formData, undefined, 2));
  };

  const [formData, setFormData] = useState(initialValue);

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      <br />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(formData)}</p>
    </form>
  );
}

export default LoginForm;
