const Header = () => {
  return (
    <ul className="flex flex-row justify-between">
      <li className="flex flex-row gap-1">
        <img src="" alt=""></img>
        <span>Deals</span>
        <div>
          <label htmlFor="navMenu">Menu</label>
          <select id="navMenu"></select>
        </div>
      </li>

      <li className="flex flex-row gap-1">
        <button>
          <img src="" alt=""></img>
          <span>Shmeat Rewards</span>
          <span>Sign In</span>
        </button>

        <button>
          <img src="" alt=""></img>
          <span>$0.00</span>
        </button>
      </li>
    </ul>
  );
};

export default Header;
