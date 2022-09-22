import React from "react";

//fyi mobile first dev so we start with the mobile size then move up to desktop
function HeaderItem({ Icon, title }) {
  return (
    // h-8 means the height 8 px
    //mb is margin bottom
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      {/* tracking is the space between the letters in a word */}
      {/* you have event actions from css applied to the classname!! */}
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
