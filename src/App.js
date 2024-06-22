import React from 'react';
import { FaRegFaceFrown } from "react-icons/fa6";
const Error = () => {
  return (
    <div >
      <FaRegFaceFrown className='icon'/>
      <h2>404 Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.

      </p>
    </div>
  
  );
}

export default Error;

