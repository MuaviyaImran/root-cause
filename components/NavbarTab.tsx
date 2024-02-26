import Image from "next/image";
import BaseButton from "./common/basebutton";
import Link from "next/link";
const NavbarTab = () => {
  const navLinks = ["Home", "About", "Services", "Contacts"];
  return (
    <nav className="lg:flex p-10 items-center justify-between hidden">
      <ul className="flex gap-10 text-lg">
        <li>
          <Image
            src="/assets/logo.png"
            className="cursor-pointer"
            alt="Instagram Icon"
            height={34}
            width={162}
          />
        </li>
        {navLinks.map((link) => {
          return (
            <Link
              key={link}
              href={"/"}
              className="cursor-pointer hover:underline"
            >
              {link}
            </Link>
          );
        })}
      </ul>
      <ul className="flex gap-9 items-center">
        <div className="flex gap-5">
          <li className="cursor-pointer">
            <Image
              src="/assets/icons/instagram.svg"
              alt="Instagram Icon"
              height={20}
              width={20}
            />
          </li>
          <li className="cursor-pointer">
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook Icon"
              height={20}
              width={20}
            />
          </li>
          <li className="cursor-pointer">
            <Image
              src="/assets/icons/twitter.svg"
              alt="Twitter Icon"
              height={20}
              width={20}
            />
          </li>
        </div>
        <BaseButton title="Book Now" />
      </ul>
    </nav>
  );
};

export default NavbarTab;
