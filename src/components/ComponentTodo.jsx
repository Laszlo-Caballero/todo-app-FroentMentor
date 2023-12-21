import { useEffect, useState } from "react";
import CheckIcon from "../assets/images/icon-check.svg?react";
import CrossIcon from "../assets/images/icon-cross.svg?react";

function ComponentTodo({ isComplete, setComplete, deleteTodo, todo }) {
  const [crossHover, setCross] = useState(false);
  useEffect(() => {
    if (window.innerWidth == 375) {
      setCross(true);
    }
  }, []);
  return (
    <section
      className="dark:bg-DarkDesatured p-5 border-b-[1px] dark:border-borderTodo bg-LightGrayishWhite border-LightGrayBlue"
      onMouseEnter={() => {
        setCross(true);
      }}
      onMouseLeave={() => {
        setCross(false);
      }}
    >
      <article className="flex items-center justify-between">
        <article className="flex items-center gap-6">
          <div
            className={`flex items-center justify-center hover:bg-gradient-to-r from-lightCheck to-darkCheck ${
              !isComplete
                ? "dark:bg-borderCheck bg-WhiteGrayish"
                : "bg-gradient-to-r"
            } rounded-full h-[25px] w-[25px] p-[2px]`}
            onClick={() => {
              setComplete();
            }}
          >
            <div
              className={`rounded-full ${
                !isComplete
                  ? "dark:bg-DarkDesatured bg-LightGrayishWhite"
                  : "bg-transparent"
              } h-full w-full flex items-center justify-center`}
            >
              {isComplete && <CheckIcon className="p-0" />}
            </div>
          </div>
          <label
            className={
              isComplete
                ? "line-through text-DarkGrayish cursor-pointer mobile:text-sm"
                : "cursor-pointer mobile:text-sm"
            }
            onClick={() => {
              setComplete();
            }}
          >
            {todo}
          </label>
        </article>
        {crossHover && (
          <CrossIcon
            onClick={() => {
              deleteTodo();
            }}
          />
        )}
      </article>
    </section>
  );
}

export default ComponentTodo;
