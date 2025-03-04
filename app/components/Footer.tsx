import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <div className="flex flex-row max-w-7xl mx-auto justify-evenly">
      <div className="flex flex-col gap-1">
        <p className="text-3xl">View our socials!</p>
        <div className="flex flex-row justify-between">
          <a href="https://www.instagram.com/">
            <img src="/images/instagram.png" className="h-6" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="/images/linkedin.png" className="h-6" />
          </a>
          <a href="https://www.reddit.com/">
            <img src="/images/reddit.png" className="h-6" />
          </a>
          <a href="https://www.youtube.com/">
            <img src="/images/youtube.png" className="h-6" />
          </a>
        </div>
      </div>
      {/* change to a flex row with three columns */}
      <div className="flex flex-row gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Link to="/menu">
              <span className="text-lg underline hover:text-red-600">Menu</span>
            </Link>
            <ul>
              <li>Entrées</li>
              <li>Appetizers</li>
              <li>Drinks</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-lg underline hover:text-red-600">
              My Account
            </span>
            <ul>
              <li>Create an account</li>
              <li>Sign in</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-lg underline hover:text-red-600">
              About Our Food
            </span>
            <ul>
              <li>Nutrition</li>
              <li>Gluten-free</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span className="text-lg underline hover:text-red-600">
              About Us
            </span>
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
            <span className="text-lg underline hover:text-red-600">
              Customer Service
            </span>
            <ul>
              <li>FAQs</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
