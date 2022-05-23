import React from "react";
function MenuBar({clickHandle, selected}) {
  /*
  The 'span' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */
  return (
    <div className="ui four item menu">
      <span className= {selected === "Profile" ? "item active" : "item"} onClick={(e)=>clickHandle("Profile", e) } >
        <i className="user large icon" />
      </span>
      <span className={selected === "Photos" ? "item active" : "item"} onClick={(e)=>clickHandle("Photos", e)}>
        <i className="photo large icon" />
      </span>
      <span className={selected === "Cocktails" ? "item active" : "item"}onClick={(e)=>clickHandle("Cocktails", e)}>
        <i className="cocktail large icon" />
      </span>
      <span className={selected === "Pokemon" ? "item active" : "item"} onClick={(e)=>clickHandle("Pokemon", e)}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}
export default MenuBar;