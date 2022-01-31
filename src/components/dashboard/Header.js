import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      <label class="relative block">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-4">
          <FontAwesomeIcon icon={faSearch} color="#8995A0" />
        </span>
        <input
          class="placeholder:text-gray-link_text block bg-gray-input w-full rounded-lg py-2 pl-12 pr-3"
          placeholder="Search..."
          type="text"
          name="search"
        />
      </label>
      <div class="group flex items-center">
        <div class="mr-3">
          <p class="text-sm font-inter">jamesbrown@example.com</p>
          <p class="text-xs font-inter text-slate-500 group-hover:text-slate-300 text-right">
            Admin
          </p>
        </div>
        <img
          class="shrink-0 h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
