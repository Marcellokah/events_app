import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header>
            <div className="topNav">
                <Image alt="logo" src={'/images/logo.png'} width={250} height={50} />
                <nav>
                    <ul>
                        <li>
                            <Link href='/' passHref>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/events' passHref>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href='/about-us' passHref>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1 className="title">Sint anim esse laboris voluptate.</h1>
        </header>
    )
}