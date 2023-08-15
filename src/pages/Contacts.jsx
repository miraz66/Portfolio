import SocalImage from "../assets/3-36485_social-media-clipart-png.png";

export default function Contacts() {
  return (
    <div id="contacts" className="pt-32">
      <div className="text-center font-Rampart">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-600 pb-4">
          Contact Me
        </h2>
        <p className="md:text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex justify-between flex-wrap items-center mt-10">
        <div className="w-full mx-auto md:w-1/2 mt-8 p-6 rounded ">
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
            <div className="md:mb-4">
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
              className="w-1/2 p-2 cursor-pointer text-base lg:text-lg max-md:w-full text-center hover:shadow-md shadow-xl rounded-md bg-gradient-to-br from-yellow-300 via-pink-100 to-yellow-300"
              type="submit"
            >
              Contact
            </button>
          </form>
        </div>

        <div className="max-xl:w-full flex justify-center">
          <img className="w-[28rem] rotated" src={SocalImage} alt="" />
        </div>
      </div>
    </div>
  );
}
