import { Link } from "@remix-run/react";

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Shmeat Lovers Pizza */}
      <div className="flex flex-row items-end gap-4 mt-5 mb-3">
        <span className="text-6xl">Entrées</span>
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
      <div className="flex flex-row gap-5 justify-center">
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Shmeat Lovers Pizza</p>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Flamin' Dough</p>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>The Last Slice</p>
        </div>
      </div>

      {/* City Sour Soup */}
      <div className="flex flex-row items-end gap-4 mt-5 mb-3">
        <span className="text-6xl">Appetizers</span>
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
      <div className="flex flex-row gap-5 justify-center">
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>City Sour Soup</p>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Onion Ring of Fire</p>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Holy Guacomole</p>
        </div>
      </div>

      <div className="flex flex-row items-end gap-4 mt-5 mb-3">
        <span className="text-6xl">Drinks</span>
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
      <div className="flex flex-row gap-5 justify-center">
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Flamin' Moe</p>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Butterbeer</p>
        </div>
        <div className="flex flex-col items-center w-[350px] h-[240px] border border-red-600">
          <p>Blue Milk</p>
        </div>
      </div>

      <Link
        to="/vegan-menu"
        className="starburst flex flex-col items-center justify-center mx-auto"
      >
        <p className="text-center mx-auto">Try our all NEW</p>
        <p className="text-center mx-auto">Vegan Menu</p>
        <p className="mt-1 text-lg text-center">CLICK HERE</p>
      </Link>
    </div>
  );
};

export default Menu;
