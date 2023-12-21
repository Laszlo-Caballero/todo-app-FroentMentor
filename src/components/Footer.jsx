import { useEffect, useState } from "react";
function Footer({
  cant,
  isAll,
  isActive,
  isComplete,
  onClickAll,
  onClickActive,
  onClickComplete,
  onClickClear,
}) {
  const [mobileFooter, setMobileFooter] = useState(true);
  useEffect(() => {
    if (window.innerWidth == 375) {
      setMobileFooter(false);
    }
  }, []);
  return (
    <>
      <footer className="dark:bg-DarkDesatured flex justify-between px-6 py-4 text-xs font-JoseFinSemiBlod bg-LightGrayishWhite">
        <p className="dark:text-DarkGrayish text-WhiteGrayish">
          {cant} items left
        </p>
        {mobileFooter && (
          <div className="flex gap-3 text-DarkGrayish">
            <p
              className={`${
                isAll
                  ? "text-BrightBlue cursor-default"
                  : "dark:hover:text-LightGrayBlue cursor-pointer hover:text-DarkGrayishBlueWhite"
              }`}
              onClick={onClickAll}
            >
              All
            </p>
            <p
              className={`${
                isActive
                  ? "text-BrightBlue cursor-default"
                  : "dark:hover:text-LightGrayBlue cursor-pointer hover:text-DarkGrayishBlueWhite"
              }`}
              onClick={onClickActive}
            >
              Active
            </p>
            <p
              className={`${
                isComplete
                  ? "text-BrightBlue cursor-default"
                  : "dark:hover:text-LightGrayBlue cursor-pointer hover:text-DarkGrayishBlueWhite"
              }`}
              onClick={onClickComplete}
            >
              Complete
            </p>
          </div>
        )}
        <p
          className="text-DarkGrayish hover:text-LightGrayBlue cursor-pointer"
          onClick={onClickClear}
        >
          Clear Completed
        </p>
      </footer>
      {!mobileFooter && (
        <div className="flex gap-8 text-DarkGrayish dark:bg-DarkDesatured mt-4 p-4 justify-center font-JoseFinSemiBlod text-lg bg-LightGrayishWhite shadow-xl">
          <p
            className={`${
              isAll
                ? "text-BrightBlue cursor-default"
                : "hover:text-LightGrayBlue cursor-pointer"
            }`}
            onClick={onClickAll}
          >
            All
          </p>
          <p
            className={`${
              isActive
                ? "text-BrightBlue cursor-default"
                : "hover:text-LightGrayBlue cursor-pointer"
            }`}
            onClick={onClickActive}
          >
            Active
          </p>
          <p
            className={`${
              isComplete
                ? "text-BrightBlue cursor-default"
                : "hover:text-LightGrayBlue cursor-pointer"
            }`}
            onClick={onClickComplete}
          >
            Complete
          </p>
        </div>
      )}
    </>
  );
}

export default Footer;
