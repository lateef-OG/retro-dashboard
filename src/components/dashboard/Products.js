import React from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Products = () => {
  return (
    <div className="bg-white rounded-lg py-4 px-8">
      <div className="flex justify-between items-center mb-6">
        <p className="text-secondary_text text-md">Latest Added Products</p>
        <span>
          <FontAwesomeIcon icon={faEllipsisH} color="#86939E" size="xs" />
        </span>
      </div>
      <div className="flex items-center mb-8">
        <div className="w-2/6">
          <div className="group flex items-center">
            <img
              className="shrink-0 h-12 w-12 rounded-md"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
            <div className="ml-3">
              <p className="text-md font-inter mb-1">PSG Stadium 20/20</p>
              <p className="text-xs font-inter text-slate-500 group-hover:text-slate-300">
                3 Variants
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md"><span className="text-secondary_text">SKU:</span> 8600844</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md">Jerseys</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md">12.11.2020</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md"><span className="text-secondary_text">SKU:</span> 8600844</p>
        </div>
      </div>
      <div className="flex items-center mb-8">
        <div className="w-2/6">
          <div className="group flex items-center">
            <img
              className="shrink-0 h-12 w-12 rounded-md"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
            <div className="ml-3">
              <p className="text-md font-inter mb-1">Los Angeles Lakers City</p>
              <p className="text-xs font-inter text-slate-500 group-hover:text-slate-300">
                3 Variants
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md"><span className="text-secondary_text">SKU:</span> 8600844</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md">Jerseys</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md">12.11.2020</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md"><span className="text-secondary_text">SKU:</span> 8600844</p>
        </div>
      </div>
      <div className="flex items-center mb-8">
        <div className="w-2/6">
          <div className="group flex items-center">
            <img
              className="shrink-0 h-12 w-12 rounded-md"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
            <div className="ml-3">
              <p className="text-md font-inter mb-1">Miami Heat Courtside</p>
              <p className="text-xs font-inter text-slate-500 group-hover:text-slate-300">
                3 Variants
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md"><span className="text-secondary_text">SKU:</span> 8600844</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md">Jerseys</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md">12.11.2020</p>
        </div>
        <div className="w-1/6">
          <p className="text-primary_text text-md"><span className="text-secondary_text">SKU:</span> 8600844</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
