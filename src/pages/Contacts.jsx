export default function Contacts() {
  return (
    <div id="contact" className="flex justify-between">
      <div className="w-1/2 mt-8 p-6 rounded ">
        <h2 className="text-xl mb-4">User Registration</h2>
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
            <label htmlFor="message" className="block text-sm font-medium mb-1">
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
      <div className=""></div>
    </div>
  );
}
