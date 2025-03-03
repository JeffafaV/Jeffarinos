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
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-2 text-center my-10">
          <p className="font-bold text-7xl">YOU PROVIDE THE MONEYS</p>
          <p className="font-bold text-7xl bg-red-600 text-white pb-2.5">
            WE PROVIDE THE SHMEATS
          </p>
        </div>
        <img
          className="w-[600px] h-[600px]"
          src="/images/whole_pizza.png"
          alt="Whole Pizza"
        ></img>
      </div>

      <div className="flex flex-row border-2 border-red-600 mx-auto w-fit gap-6 rounded-xl p-3 shadow-xl">
        <span className="text-5xl border-r p-1">Start Here</span>
        <button className="text-5xl bg-red-600 text-white rounded-xl p-1 pb-2.5">
          Menu
        </button>
      </div>

      {/* featured heading */}
      <div className="flex flex-row items-end gap-4 mt-5 mb-3">
        <span className="text-6xl">Featured</span>
        <div className="flex flex-row items-center">
          <span className="text-red-600">SEE MORE</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

      {/* featured grid */}
      <div className="flex flex-row gap-5 justify-center">
        <div className="w-[350px]">
          <p>hello</p>
        </div>
        <div className="w-[350px]">
          <img src="/images/appetizers.webp" />
        </div>
        <div className="w-[350px]">
          <img src="/images/drinks.webp" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
