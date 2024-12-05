const Footer = () => {
  return (
    <div className="flex flex-row max-w-7xl mx-auto justify-evenly">
      <div className="flex flex-col">
        <p className="text-3xl">View our socials!</p>
        <div className="flex flex-row"></div>
      </div>
      {/* change to a flex row with three columns */}
      <div className="flex flex-row gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-lg">Menu</span>
            <ul>
              <li>Pizza</li>
              <li>Sides</li>
              <li>Pasta</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">My Account</span>
            <ul>
              <li>Create an account</li>
              <li>Sign in</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-lg">About Our Food</span>
            <ul>
              <li>Nutrition</li>
              <li>Gluten-free</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">About Us</span>
            <ul>
              <li>Our story</li>
              <li>Careers</li>
              <li>Become a franchisee</li>
              <li>Community support</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-lg">Customer Service</span>
            <ul>
              <li>Contact us</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
