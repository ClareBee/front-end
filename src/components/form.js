import React from "react"

const Form = () => {
  return (
    <div className="w-full lg:w-3/4 xl:w-1/2 my-4 mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={process.env.FORM_URL}
        method="POST"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            required
            maxLength="20"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            required
            maxLength="20"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="message"
            required
            maxLength="150"
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="transition-bg duration-300 ease-in bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
