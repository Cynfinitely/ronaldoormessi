import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer rounded-full py-3 px-6 my-3  text-center flex flex-row items-center justify-between">
      <a
        href="https://www.buymeacoffee.com/cynfinitely"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs px-2 py-1 md:text-xl md:px-5 md:py-2.5  text-center mr-2 mb-2">
        Support Developer
      </a>
      <p className="text-xs md:text-xl">
        All rights reserved <sup> &#169;</sup>- 2023{" "}
      </p>
    </div>
  );
};

export default Footer;
