import React from 'react';

function Register() {
  return (
    <form>
      <h2>Register</h2>

      <input type="text" placeholder="Username" /><br/>
      <input type="text" placeholder="First Name" /><br/>
      <input type="text" placeholder="Last Name" /><br/>
      <input type="email" placeholder="Email" /><br/>
      <input type="password" placeholder="Password" /><br/>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
