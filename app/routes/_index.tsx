import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Jeffarino's" },
    {
      name: "description",
      content: "Welcome to Jeffarino's where we have the shmeats!",
    },
  ];
};

export default function Index() {
  return <div></div>;
}
