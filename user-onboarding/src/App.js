import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./Form";
import "./App.css";
import schema from "./schema";

const initialForm = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const initialErrors = {
  name: "",
  email: "",
  password: "",
};

function App() {
  const [formState, setFormState] = useState(initialForm);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [errors, setErrors] = useState(initialErrors);
  const [post, setPost] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data); // get just the form data from the REST api
        console.log("success", post);
        // reset form if successful
        setFormState(initialForm);
      })
      .catch((err) => console.log(err.response));
  };

  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newUser = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newUser);
  };

  useEffect(() => {
    schema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  return (
    <div className="App">
      <Form
        buttonDisabled={buttonDisabled}
        inputChange={inputChange}
        formState={formState}
        onSubmit={formSubmit}
        errors={errors}
      />
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
}

export default App;
