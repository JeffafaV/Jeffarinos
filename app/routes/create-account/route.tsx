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

  const tempHash = await bcrypt.hash(password.toString(), saltRounds);

  const match = await bcrypt.compare(password.toString(), tempHash);

  if (match) {
    console.log("Hash matches password");
  } else {
    console.log("What did I do wrong?");
  }

  // TODO put the hash in mongoDB database
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
          <div className="flex flex-row border rounded-md hover:border-red-700 group-focus-within:border-red-700 group-focus-within:m-[-1px] group-focus-within:border-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full focus:outline-none border-transparent rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="lastName" className="group-focus-within:text-red-700">
            Last Name
          </label>
          <div className="flex flex-row border rounded-md hover:border-red-700 group-focus-within:border-red-700 group-focus-within:m-[-1px] group-focus-within:border-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full focus:outline-none border-transparent rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="username" className="group-focus-within:text-red-700">
            Username
          </label>
          <div className="flex flex-row border rounded-md hover:border-red-700 group-focus-within:border-red-700 group-focus-within:m-[-1px] group-focus-within:border-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <input
              type="text"
              id="username"
              name="username"
              className="w-full focus:outline-none border-transparent rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="email" className="group-focus-within:text-red-700">
            Email
          </label>
          <div className="flex flex-row border rounded-md hover:border-red-700 group-focus-within:border-red-700 group-focus-within:m-[-1px] group-focus-within:border-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              type="email"
              id="email"
              name="email"
              className="w-full focus:outline-none border-transparent rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col group w-56">
          <label htmlFor="password" className="group-focus-within:text-red-700">
            Password
          </label>
          <div className="flex flex-row border rounded-md hover:border-red-700 group-focus-within:border-red-700 group-focus-within:m-[-1px] group-focus-within:border-2 border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
              />
            </svg>

            <input
              type="password"
              id="password"
              name="password"
              className="w-full focus:outline-none border-transparent rounded-md"
            />
          </div>
        </div>

        <p className="w-56 text-xs">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>

        <button
          type="submit"
          className="border rounded-lg border-black p-1 pb-[6px] hover:border-red-700"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default CreateAccount;
