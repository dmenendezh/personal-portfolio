import React from "react";

function Badge({ text, href, srcImageIcon, showEffect }) {
  return (
    <div className="flex items-center ">
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        {showEffect ? (
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
        ) : (
          <></>
        )}
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
          {srcImageIcon ? <img src={srcImageIcon} alt="alt" /> : <></>}
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            {text}
          </a>
        </div>
      </span>
    </div>
  );
}
export default Badge;
