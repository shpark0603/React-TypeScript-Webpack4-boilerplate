import React, { useState } from "react";
import reactLogo from "../images/react.svg";
import tsLogo from "../images/typescript.svg";
import styles from "./SayHi.module.scss";

interface IProps {
  name: string;
}

function SayHi({ name }: IProps) {
  return (
    <div>
      <h1>Hello! {name}</h1>
      <img
        className={styles.img_round}
        src={name === "React" ? reactLogo : name === "TypeScript" ? tsLogo : ""}
        alt="React"
      />
    </div>
  );
}

export default SayHi;
