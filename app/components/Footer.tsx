const Footer = () => {
  return (
    <div className="flex flex-row max-w-7xl mx-auto justify-evenly">
      <div className="flex flex-col">
        <p>View our socials!</p>
        <div className="flex flex-row"></div>
      </div>
      {/* change to a flex row with three columns */}
      <div className="grid grid-cols-3">
        <div className="flex flex-col">
          <span>Menu</span>
          <ul>
            <li>Pizza</li>
            <li>Sides</li>
            <li>Pasta</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span>About Our Food</span>
          <ul>
            <li>Nutrition</li>
            <li>Gluten-free</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span>Customer Service</span>
          <ul>
            <li>Contact us</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span>My Account</span>
          <ul>
            <li>Create an account</li>
            <li>Sign in</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span>About Us</span>
          <ul>
            <li>Our story</li>
            <li>Careers</li>
            <li>Become a franchisee</li>
            <li>Community support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
