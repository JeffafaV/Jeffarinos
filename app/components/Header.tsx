//import pizza from "/images/pizza.png";

const Header = () => {
  return (
    <ul className="flex flex-row justify-between max-w-7xl mx-auto items-center border-b-2">
      {/* left side items */}
      <li className="flex flex-row gap-3 items-center basis-0 grow">
        <img src="/images/pizza.png" alt="Pizza Logo" className="size-10"></img>
        <span>Deals</span>
        {/* drop down menu */}
        <div className="flex flex-row">
          <label htmlFor="navMenu">Menu</label>
          <select id="navMenu"></select>
        </div>
      </li>

      {/* middle items */}
      <li>
        <p className="font-bold text-2xl">WE HAVE THE SHMEATS</p>
      </li>

      {/* right side items */}
      <li className="flex flex-row gap-3 basis-0 grow justify-end">
        {/* sign in button */}
        <button className="flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>

          <div className="flex flex-col border-r-2 pr-1">
            <span>Shmeat Rewards</span>
            <span>Sign In</span>
          </div>
        </button>
        {/* shopping cart button */}
        <button className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span>$0.00</span>
        </button>
      </li>
    </ul>
  );
};

export default Header;
