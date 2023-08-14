import SocalImage from "../assets/3-36485_social-media-clipart-png.png";

export default function Contacts() {
  return (
    <div id="contact" className="pt-32">
      <div className="text-center font-Rampart">
        <h2 className="md:text-5xl font-semibold text-gray-600 pb-4">
          Contact Me
        </h2>
        <p className="md:text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="w-1/2 mt-8 p-6 rounded ">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="username"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                cols="30"
                rows="6"
                id="message"
                className="w-full border rounded py-2 px-3"
              />
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              type="submit"
            >
              Contact
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <img className="w-[28rem] rotated" src={SocalImage} alt="" />
        </div>
      </div>
    </div>
  );
}
