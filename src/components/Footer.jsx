const footer = {
  platfrom: ["Home", "OverView", "Pricing", "About"],
  Help: ["How It Works?", "Pay?", "Question?", "Contact?"],
  Contact: [
    "(+000) 123456789",
    "116 Archlor Road Broadlaband",
    "NewYork(NYC) 1205+",
  ],
};

function Footer() {
  return (
    <div className="pt-20 pb-10 mt-20 xl:flex max-w-7xl mx-auto flex-wrap">
      <div className="md:w-2/5 flex flex-col justify-between">
        <form className="flex w-full px-3">
          <input
            className="outline-none pl-5 py-4 rounded-l-md"
            type="email"
            required
          />
          <button className="font-semibold text-white text-lg md:text-2xl md:first-letter px-8 md:px-10 py-3 rounded-r-md bg-gradient-to-br from-lime-500 via-teal-400 to-lime-100">
            Submit
          </button>
        </form>
        <div className="max-xl:hidden">
          <svg
            className="ml-20 pt-5 w-36 h-36 text-yellow-500"
            viewBox="0 0 93 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.441528 57.1661C2.74403 49.2945 5.80364 42.3799 10.6899 35.806C13.4217 32.1307 16.6328 28.0531 20.8114 25.9005C27.3346 22.5401 24.3263 31.45 23.3651 34.5262C21.1688 41.5559 19.1946 48.627 17.1407 55.6984C16.7376 57.0861 15.5582 61.2538 15.8656 59.8418C16.5865 56.5301 18.1765 53.1466 19.6704 50.1315C23.8163 41.7643 29.6943 32.3539 36.9179 26.2513C39.3361 24.2084 41.1917 23.9172 40.5228 27.8639C38.7095 38.5636 34.0796 48.6849 31.5722 59.2372C31.0117 61.5964 30.6634 62.8382 32.3445 60.1926C36.5442 53.583 41.0762 47.2348 46.1918 41.2999C54.0891 32.1376 62.5831 23.3559 71.6703 15.3677C78.0002 9.80325 84.6755 4.28555 92.2461 0.513092"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M90.1126 0.685474C85.3914 2.4363 80.67 4.17214 75.9325 5.87885"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M74.7472 6.91321C78.7247 7.08814 81.4453 7.12379 84.7777 9.15913C85.7829 9.77312 87.5776 11.2244 88.8196 11.2015C89.7424 11.1845 89.4334 8.33619 89.4708 7.75364C89.6306 5.26606 90.7651 3.55425 92.1383 1.569"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>

      <dev className="md:w-3/5 flex flex-wrap max-md:justify-between max-md:px-10 max-xl:mt-10">
        <div className="md:w-1/3 font-Rampart">
          <ul>
            <li className="text-2xl font-semibold pb-4">platfrom</li>
            {footer.platfrom.map((e, index) => (
              <li
                className="text-xl text-gray-700 pb-2 hover:pl-2 ease-in-out duration-300 cursor-pointer"
                key={index}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3">
          <ul>
            <li className="text-2xl font-semibold pb-4">Help</li>
            {footer.Help.map((e, index) => (
              <li
                className="text-xl text-gray-700 pb-2 hover:pl-2 ease-in-out duration-300 cursor-pointer"
                key={index}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3">
          <ul>
            <li className="text-2xl font-semibold pb-4">Contact</li>
            {footer.Contact.map((e, index) => (
              <li
                className="text-xl text-gray-700 pb-2 hover:pl-2 ease-in-out duration-300 cursor-pointer"
                key={index}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </dev>
    </div>
  );
}

export default Footer;
