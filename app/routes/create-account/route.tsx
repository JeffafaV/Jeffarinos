import { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  const password = formData.get("password");

  if (!password) {
    return null;
  } else {
  }
  // const bcrypt = require("bcrypt");
  const bcrypt = await import("bcrypt");
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, (err: any, salt: string) => {
    if (err) {
      return;
    }

    bcrypt.hash(password.toString(), salt, (err: any, hash: string) => {
      if (err) {
        return;
      }

      console.log("Hashed password", hash);
      console.log("Password", password);
    });
  });
  return null;
}

const CreateAccount = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Form method="post" className="flex flex-col items-center gap-2">
        <div className="flex flex-col group w-56">
          <label
            htmlFor="firstName"
            className="group-focus-within:text-red-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border rounded-md hover:border-red-700 focus:border-red-700 focus:m-[-1px] focus:border-2 focus:outline-none border-black peer"
          />
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="lastName" className="group-focus-within:text-red-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border rounded-md hover:border-red-700 focus:border-red-700 focus:m-[-1px] focus:border-2 focus:outline-none border-black"
          />
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="username" className="group-focus-within:text-red-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border rounded-md hover:border-red-700 focus:border-red-700 focus:m-[-1px] focus:border-2 focus:outline-none border-black"
          />
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="email" className="group-focus-within:text-red-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-md hover:border-red-700 focus:border-red-700 focus:m-[-1px] focus:border-2 focus:outline-none border-black"
          />
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="password" className="group-focus-within:text-red-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded-md hover:border-red-700 focus:border-red-700 focus:m-[-1px] focus:border-2 focus:outline-none border-black"
          />
        </div>

        <p className="w-56 text-xs">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>

        <button
          type="submit"
          className="border rounded-lg border-black p-1 hover:border-red-700"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default CreateAccount;
