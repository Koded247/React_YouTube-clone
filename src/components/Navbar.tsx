import { LucideMic, LucidePlusCircle, LucideSearch } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar sticky top-0 bg-base-300 h-16 z-50">
      <div className="navbar-start">
        <div className="flex-none">
          <button
            title="left-panel-trigger"
            type="button"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Youtube</a>
        </div>
      </div>
      <div className="navbar-center">
        <div>
          <form>
            <div className="flex flex-row justify-center items-center gap-x-4">
              <div className="flex flex-row justify-center items-center rounded-full border border-base-100 focus-within:border-blue-600">
                <input
                  type="search"
                  placeholder="Search"
                  className="rounded-l-full text-lg outline-none px-8 w-80 h-12 bg-transparent focus:bg-base-200"
                />
                <span className="px-6 rounded-r-full">
                  <div className="tooltip tooltip-bottom">
                    <LucideSearch />
                  </div>
                </span>
              </div>
              <div
                className="tooltip tooltip-bottom"
                data-tip="Search with your voice"
              >
                <button
                  type="button"
                  title="I don't know"
                  className="btn btn-circle btn-outline"
                >
                  <LucideMic />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="navbar-end gap-x-3">
        {/* <div className="flex-none gap-x-3"> */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <LucidePlusCircle size={20} strokeWidth={2} />
          </div>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-error indicator-item">4</span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Navbar;
