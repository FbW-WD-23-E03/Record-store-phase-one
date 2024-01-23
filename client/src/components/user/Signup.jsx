import gif01 from "../../assets/01.gif";

import Form from "../Form";

const Signup = () => {
  const inputs = [
    {
      name: "firstName",
      placeholder: "First name",
      defaultValue: "test",
      validation: {
        required: "Please put your first name.",
      },
    },
    {
      name: "lastName",
      placeholder: "Last name",
      defaultValue: "test",
      validation: {
        required: "Please put your last name.",
      },
    },
    {
      name: "email",
      placeholder: "Email",
      defaultValue: "test@test.com",
    },
    {
      name: "password",
      placeholder: "Password",
      defaultValue: "test1234",
      validation: {
        required: "Required",
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
        buttonText='Sign Up'
        heading='Hello there'
      />
      <div className='right'>
        <img src={gif01} alt='gif01' />
      </div>
    </div>
  );
};

export default Signup;
