import { useState } from "react";
import CheckIcon from "../assets/images/icon-check.svg?react";
function SetTodo({ todos, setTodos }) {
  const [inputValue, setValue] = useState("Set TODO");
  const [insert, setInsert] = useState(false);
  return (
    <div className="dark:bg-DarkDesatured p-5 flex items-center gap-6 md:mt-10 font-JoseFinSemiBlod mobile:mt-5 bg-LightGrayishWhite">
      <div
        className="flex items-center justify-center hover:bg-gradient-to-r from-lightCheck to-darkCheck dark:bg-borderCheck rounded-full h-[25px] w-[25px] p-[2px] bg-WhiteGrayish"
        onMouseEnter={() => {
          setInsert(true);
        }}
        onMouseLeave={() => {
          setInsert(false);
        }}
        onClick={() => {
          const newTodo = todos.concat({ complete: false, todo: inputValue });
          setTodos(newTodo);
          setValue("Set TODO");
        }}
      >
        <div className="rounded-full dark:bg-DarkDesatured h-full w-full flex items-center justify-center hover:bg-transparent bg-LightGrayishWhite">
          {insert && <CheckIcon className="p-0" />}
        </div>
      </div>
      <input
        type="text"
        className="bg-transparent outline-none flex mobile:text-sm md:text-xl"
        value={inputValue}
        onClick={() => {
          setValue("");
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
export default SetTodo;
