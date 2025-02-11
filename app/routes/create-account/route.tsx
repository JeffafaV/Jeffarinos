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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
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
