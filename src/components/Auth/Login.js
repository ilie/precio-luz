import { useState } from "react";
import classes from "./Login.module.css";
const Login = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const trimmedInputValue = inputValue.trim();
    localStorage.setItem("token", trimmedInputValue);
    console.log(inputValue);
    props.onHideModal();
  };

  return (
    <form className={classes.login_form} onSubmit={onSubmitHandler}>
      <label className={classes.label} htmlFor="examName">
        Token:
      </label>
      <input
        type="text"
        name="token"
        id="token"
        value={inputValue}
        onChange={onChangeHandler}
      />
      <div className={classes.form_control}>
        <button className={classes.btn} type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default Login;
