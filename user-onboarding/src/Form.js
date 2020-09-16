import React from "react";

export default function Form(props) {
  const { buttonDisabled, inputChange, formState, onSubmit, errors } = props;
  return (
    <form onSubmit={onSubmit}>
      <br />
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <p>{errors.name}</p>

      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={inputChange}
        />
      </label>
      <p>{errors.email}</p>

      <label htmlFor="password">
        Password
        <input
          type="text"
          name="password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>
      <p>{errors.password}</p>
      <label htmlFor="terms">
        Accept Terms
        <input
          type="checkbox"
          name="terms"
          value={formState.terms}
          onChange={inputChange}
        />
      </label>

      <button disabled={buttonDisabled}>Submit</button>
    </form>
  );
}
