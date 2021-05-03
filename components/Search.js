import { useState } from "react";

export function Search({ onSearch }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(url);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div className="mx-auto mt-10 bg-transparent border rounded-md dark:border-gray-700 lg:w-96 focus-within:ring ring-primary focus-within:border-teal-500">
      <form onSubmit={handleSubmit} className="flex justify-between flex-row">
        <input
          onChange={handleChange}
          type="url"
          name="url"
          placeholder="Search URL"
          className="flex-1 p-2 m-1 text-gray-200 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
        />
        <button
          type="submit"
          className="flex justify-center w-full p-2 m-1 text-white bg-green-900 duration-200 transform rounded-md lg:w-auto hover:bg-teal-100 focus:outline-none focus:bg-teal-800"
        >
          GO
        </button>
      </form>
    </div>
  );
}
