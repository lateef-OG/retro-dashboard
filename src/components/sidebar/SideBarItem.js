import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({item, active}) => {
  const { linkText, icon } = item;
  return (
    <>
      <li>
        <span
          href="#"
          className={`flex items-center py-2 px-6 mb-2 space-x-2 rounded-md ${
            active ? "bg-blue-link_bg" : ""
          }`}
        >
          <FontAwesomeIcon
            icon={icon}
            color={active ? "#4E64D0" : "#8995A0"}
          />
          <span
            className={`font-inter ${
              active ? "text-blue-link_text" : "text-gray-link_text"
            }`}
          >
            {linkText}
          </span>
        </span>
      </li>
    </>
  );
};

export default SideBarItem;
