import { useReducer } from "react";
import styles from "./RegForm.module.css";
import Error from "./Error";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
      };
    case "LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
const RegForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function formSubmitHandler(event) {
    event.preventDefault();

    if (
      !state.firstName ||
      !state.lastName ||
      !state.email ||
      !state.password ||
      !state.confirmPassword
    ) {
      dispatch({ type: "SET_ERROR", payload: "Please fill in all fields." });
      return;
    }

    if (state.password !== state.confirmPassword) {
      dispatch({ type: "SET_ERROR", payload: "Passwords do not match." });
      return;
    }

    alert("Form submitted successfully!");
  }

  return (
    <div class={styles.container}>
      <div class={styles.header}>
        <h1>Create Account</h1>
        <p>Join our community today</p>
      </div>

      {state.error && <Error message={state.error} />}

      <div class={styles.form_container}>
        <form onSubmit={formSubmitHandler}>
          <div class={styles.name_group}>
            <div class={styles.form_group}>
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                value={state.firstName}
                onChange={(e) =>
                  dispatch({
                    type: "FIRST_NAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>

            <div class={styles.form_group}>
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                value={state.lastName}
                onChange={(e) =>
                  dispatch({
                    type: "LAST_NAME",
                    payload: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div class={styles.form_group}>
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: "EMAIL",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div class={styles.form_group}>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={state.password}
              onChange={(e) =>
                dispatch({
                  type: "PASSWORD",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div class={styles.form_group}>
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={state.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: "CONFIRM_PASSWORD",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <button type="submit" class={styles.btn}>
            Create Account
          </button>

          <div class={styles.login_link}>
            Already have an account? <a href="#">Sign In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegForm;
