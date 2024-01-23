import gif02 from "../../assets/02.gif";

import Form from "../Form";

const Login = () => {
  const inputs = [
    {
      name: "email",
      placeholder: "Email",
      defaultValue: "test@test.com",
      validation: {
        required: "Email is required.",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email.",
        },
      },
    },
    {
      name: "password",
      placeholder: "Password",
      defaultValue: "test1234",
      validation: {
        required: "Password is required.",
        minLength: {
          value: 5,
          message: "Password must be at least 5 characters",
        },
      },
    },
  ];

  return (
    <div className='layout'>
      <Form
        onSubmit={() => console.log("submit handler")}
        inputs={inputs}
        buttonText='Log In'
        heading='Welcome back!'
      />
      <div className='right'>
        <img src={gif02} alt='gif02' />
      </div>
    </div>
  );
};

export default Login;
