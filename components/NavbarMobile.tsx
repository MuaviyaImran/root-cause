import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const NavbarMobile = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const navLinks = ["Home", "About", "Services", "Contacts"];
  return (
    <nav className="flex lg:hidden p-6 items-center justify-between">
      <Image
        src="/assets/logo.png"
        alt="Instagram Icon"
        height={34}
        width={162}
      />
      <div>
        <Image
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          src={`${
            isMenuOpened
              ? "/assets/icons/menu-opened.svg"
              : "/assets/icons/menu-closed.svg"
          }`}
          alt="Menu Icon"
          height={16}
          width={16}
        />
        {isMenuOpened ? (
          <div className="absolute h-fit bg-white w-[30vh] right-0">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link}
                    href={"/"}
                    onClick={() => setIsMenuOpened(!isMenuOpened)}
                    className="cursor-pointer py-2 text-center"
                  >
                    {link}
                  </Link>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};
export default NavbarMobile;
