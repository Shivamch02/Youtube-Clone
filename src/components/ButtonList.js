import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Virat Kohli" />
      <Button name="Cristiano Ronaldo" />
      <Button name="Cricket" />
      <Button name="Songs" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Football" />
    </div>
  );
};

export default ButtonList;
