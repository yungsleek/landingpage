import { React } from "react";
import "../Enterprise/index.css";
import illustrationimage from "../assets/Illustration.jpg";
function Enterprise() {
  return (
    <div className="firewall">
      <div className="flex">
        <div className="enterp">
          <h1 className="hip">Open Enterprise</h1>
        </div>
        <div className="fit">
          <h2 className="h1">why open enterprise</h2>
          <h2 className="h2">features</h2>
          <h2 className="h3">contribution</h2>
          <h3 className="h4">request early access</h3>
        </div>
      </div>
      <div className="size">
        <div>
          <h1 className="model">A new model for open collaboration</h1>
          <h5 className="h5">
            Run an organization where members are rewarded for their
            contributions with fractional ownership.
          </h5>
        </div>

        <img className="pic" src={illustrationimage} alt="illustration.jpg" />
      </div>
      <button className="button">Request early access</button>
    </div>
  );
}

export default Enterprise;
