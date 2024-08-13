import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="bg-gray-200 flex justify-between items-center px-6 py-7 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
     
      <h2 className="text-4xl font-bold text-gray-900 ">
        <NavLink to={"/"}>Cuisines</NavLink>
      </h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-gray-900 hover:text-gray-500 duration-300 font-bold"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-gray-900 hover:text-gray-500 duration-300 font-bold"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
