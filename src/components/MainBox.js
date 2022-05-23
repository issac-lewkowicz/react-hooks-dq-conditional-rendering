import { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";
function MainBox() {
  const [menuItem, setMenuItem ] = useState("Profile")
  const menuMap = {
    Profile: <Profile/>,
    Photos: <Photos/>,
    Cocktails: <Cocktails/>,
    Pokemon: <Pokemon/>
  }
  const handleClick = (selection, e) => {
    setMenuItem(selection)
    // e.target.className = "item active"
  }
  /*
    Replace the code below! Depending on what menu item is selected in the menu,
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected.
    - Which component should have state?
    - Which component should have methods to control state?
    - Where should these methods be called?
  */
  let detailsToDisplay = <div> {menuMap[menuItem]} </div>;
  return (
    <div>
      <MenuBar clickHandle= {handleClick} selected = {menuItem}/>
      {detailsToDisplay}
    </div>
  );
}
export default MainBox;