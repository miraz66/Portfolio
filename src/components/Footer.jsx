const footer = {
  platfrom: ["Home", "OverView", "Pricing", "About"],
  Help: ["How It Works?", "Pay?", "Question?", "Contact?"],

  Contact: [
    "(+000) 123456789",
    "116 Archlor Road Broadlaband",
    "NewYork(NYC) 1205+",
  ],
};

// const footer = ["Home", "OverView", "Pricing", "About"];

function Footer() {
  return (
    <div className="pb-20 flex max-w-7xl mx-auto">
      <div className="w-2/5 ">
        <form action="" className="flex w-full">
          <input
            className="outline-none pl-5 py-4 rounded-l-md"
            type="email"
            required
          />
          <button className="font-semibold text-white text-2xl px-10 py-3 rounded-r-md bg-gradient-to-br from-lime-500 via-teal-400 to-lime-100">
            Submit
          </button>
        </form>
      </div>
      <ul className="w-3/5 flex ">
        <div className="w-1/3 font-Rampart">
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
        <div className="w-1/3">
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
        <div className="w-1/3">
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
      </ul>
    </div>
  );
}

export default Footer;
