import React, { useState } from "react";
import reactLogo from "../images/react.svg";
import tsLogo from "../images/typescript.svg";
import "./SayHi.scss";

interface IProps {
  name: string;
}

function SayHi({ name }: IProps) {
  return (
    <div>
      <h1>Hello! {name}</h1>
      <img src={reactLogo} alt="React" />
      <img src={tsLogo} alt="TypeScript" />
    </div>
  );
}

export default SayHi;
