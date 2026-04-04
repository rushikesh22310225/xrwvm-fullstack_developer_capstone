import React from "react";

function Register() {
  return (
    <div>
      <h2>Sign Up</h2>

      <input type="text" placeholder="Username" /><br />
      <input type="text" placeholder="First Name" /><br />
      <input type="text" placeholder="Last Name" /><br />
      <input type="email" placeholder="Email" /><br />
      <input type="password" placeholder="Password" /><br />

      <button>Register</button>
    </div>
  );
}

export default Register;
