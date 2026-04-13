import { useState } from "react";

function Form() {
  const url = "http://localhost:3000/auth";
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsRegistered(!isRegistered);
  }

  return (
    <div className="form-wrapper">
      <form method="post" autoComplete="off" action={`${url}/${isRegistered ? "login" : "register"}`}>
        <input type="text" name="username" placeholder="username" required />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button className="submit-btn" type="submit">{isRegistered ? "Login" : "Register"}</button>
        <button className="toggle-btn" onClick={toggleForm}>{!isRegistered ? "Already have an account? Login" : "Don't have an account? Register"}</button>
      </form>
    </div >
  )
}

export default Form;
