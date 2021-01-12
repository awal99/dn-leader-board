import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Navbar className="text-white">
        <Navbar.Brand className="text-white">
          <Link to="/">Developer Network</Link>
        </Navbar.Brand>
      </Navbar>
      <div className="welcomeContainer">
        <h1 className="mb-5">Welcome to dn leader board</h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          minima explicabo quibusdam. Eos quidem ab, dignissimos voluptatem
          earum id delectus minus laboriosam pariatur, doloribus officia! Minima
          consequuntur id delectus soluta.
        </h3>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          minima explicabo quibusdam. Eos quidem ab, dignissimos voluptatem
          earum id delectus minus laboriosam pariatur, doloribus officia! Minima
          consequuntur id delectus soluta.
        </h3>
      </div>
    </>
  );
};

export default Welcome;
