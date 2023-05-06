import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-400 text-5xl font-bold my-3">Oops !</h1>
      <h3 className="text-xl text-slate-600 font-semibold my-3">
        Sorry, an unexpected error has occur ...
      </h3>
      <p className="my-3 text-gray-700 text-lg">
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to="/">
        <button className="bg-green-500 text-lg uppercase tracking-wider px-5 py-1 rounded my-3">
          Navigate to Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
