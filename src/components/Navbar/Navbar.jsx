import { Link } from 'react-router-dom';
import { routesName } from '../../data/navbar';
import { PlaynavChangeSound } from '../utlis/soundsPlaying';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);
    return (
        <header className="sticky py-2 top-0 flex justify-center z-50  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
            <div className="container flex h-14 w-full items-center mx-6  justify-between sm:mx-28">
                <Link
                    to="/"
                    className="mr-8 flex items-center space-x-2 w-44  "
                >
                    <span className="font-bold text-orange-400 text-xl overflow-hidden text-nowrap text-ellipsis ">
                        ~{location.pathname}
                        {showCursor && <span className="">|</span>}
                    </span>
                </Link>

                <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-[16px] font-extrabold">
                    {routesName.map((route) => (
                        <Link
                            key={route.href}
                            to={route.href}
                            onClick={() => {
                                PlaynavChangeSound();
                            }}
                            className={`transition-colors hover:rounded-md hover:border-b-2 hover:border-orange-400 hover:text-foreground/80 hover:bg-accent px-4 py-2  text-black dark:text-white  ${
                                location.pathname === route.href
                                    ? ' border-b-2 border-red-400 bg-accent rounded-md text-accent-foreground'
                                    : 'text-foreground/60'
                            }`}
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
