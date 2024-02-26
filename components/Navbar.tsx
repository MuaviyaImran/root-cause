import Image from "next/image";
import BaseButton from "./common/basebutton";
import NavbarTab from "./NavbarTab";
import NavbarMobile from "./NavbarMobile";
export default function Navbar() {
  return (
    <>
      <header className="relative">
        <NavbarTab />
      </header>
      <header className="relative">
        <NavbarMobile />
      </header>
    </>
  );
}
