import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AcUnitIcon from "@mui/icons-material/AcUnit";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 md:px-8">
      <div className="flex items-center gap-2">
        <AcUnitIcon />
        <span className="text-xl font-bold">SampleUI</span>
      </div>
      <ul className="md:flex hidden gap-4 items-center">
        <li>About</li>
        <li>Work</li>
        <li>Pricing</li>
      </ul>
      <MenuIcon className="md:hidden block" />
    </div>
  );
};

export default Navbar;
