import { Link } from 'react-router-dom';
import { routesName } from '../../data/navbar';
import { PlaynavChangeSound, themeModeChange } from '../utlis/soundsPlaying';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
    const [showCursor, setShowCursor] = useState(false);
    const { theme, setTheme } = useTheme();

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
                        {/* {showCursor && <span className="">|</span>} */}
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

                <div className="flex items-center justify-end space-x-2">
                    {/* <SubNavbar /> */}

                    {/* <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-3xl hover:border-orange-400 border-2 transform transition-transform duration-700 ease-in-out hover:rotate-180 bg-gray-300 dark:bg-orange-800 "
                        onClick={() => {
                            setTheme(theme === 'light' ? 'dark' : 'light');
                            themeModeChange();
                        }}
                        aria-label="Toggle theme"
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button> */}

                    {/* For Mobile Menu  */}
                    <MobileNavbar routesName={routesName} />
                </div>
            </div>
        </header>
    );
}
