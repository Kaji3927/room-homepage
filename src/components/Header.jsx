import Image from "next/image";
import Logo from "@/images/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header style={{ background: "orangered" }}>
      <h1>
        <Link href="/">
          <Image src={Logo} width={62} height={14} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/">shop</Link>
          </li>
          <li>
            <Link href="/">about</Link>
          </li>
          <li>
            <Link href="/">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
