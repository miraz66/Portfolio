const footer = {
  platfrom: ["Home", "OverView", "Pricing", "About"],
  Help: ["Help", "How It Works?", "Pay?", "Question?", "Contact?"],

  Contact: [
    "(+000) 123456789",
    "116 Archlor Road Broadlaband",
    "NewYork(NYC) 1205+",
  ],
};

// const footer = ["Home", "OverView", "Pricing", "About"];

function Footer() {
  return (
    <div className="pb-20 flex">
      <div className="w-2/5">
        <form action="">
          <input type="email" />
          <button>Submit</button>
        </form>
      </div>
      <ul className="w-3/5 flex ">
        <div className="w-1/3">
          <ul>
            <li>platfrom</li>
            {footer.platfrom.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/3">
          <ul>
            <li>Help</li>
            {footer.platfrom.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="w-1/3">
          <ul>
            <li>Contact</li>
            {footer.platfrom.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
}

export default Footer;
