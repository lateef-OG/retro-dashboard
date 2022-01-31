import React from "react";
import { faPlus, faArrowUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Overview = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex items-center justify-between py-4 px-8 border-b border-gray-300">
        <p className="font-inter text-primary_text">Sales Overview</p>
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-inter py-2 px-4 rounded inline-flex items-center justify-center w-48">
          <span className="mr-3">
            <FontAwesomeIcon icon={faPlus} color="#FFFFFF" />
          </span>
          <span>Add Offer</span>
        </button>
      </div>
      <div className="py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-4xl text-primary_text">$80,630</p>
            <div class="rounded-full bg-green-100 mx-3 h-6 w-6 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowUp} color="#19B0AC" size="xs" />
            </div>
            <p className="text-green-deep">+6.7%</p>
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 rounded-full bg-blue-light mr-1"></div>
            <p className="text-secondary_text mr-6">Incomes</p>
            <div className="h-2 w-2 rounded-full bg-pink-light mr-1"></div>
            <p className="text-secondary_text mr-6">Expenses</p>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <select
                className="block bg-transparent border border-gray-300 rounded-md py-2 px-4 w-40 ml-3"
                name="search"
              >
                <option value="year">Year</option>
              </select>
              {/* <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <FontAwesomeIcon icon={faChevronDown} color="#8995A0" size="sm" />
              </span> */}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
