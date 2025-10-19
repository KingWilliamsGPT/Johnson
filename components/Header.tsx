"use client";

import { useState } from 'react';
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import { useSettingsStore } from "@/store/useSettingsStore";

export default function Header() {
    const { isSoundOn, playClickSound, playHoverSound, playToggleSound, playBackgroundMusic, pauseBackgroundMusic, setBackgroundMusicVolume } = useSound();
    const { isDarkMode, toggleTheme, setSound } = useSettingsStore();

    const toggleSound = () => {
        setSound(!isSoundOn);
    };

    return (
        <header className="fixed top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4">
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            />
            <div className="liquidGlass-wrapper bg-[#ffffff80] rounded-[20px] border border-zinc-200" data-aos="zoom-in-down">
                <div className="liquidGlass-effect"></div>
                <div className="liquidGlass-tint"></div>
                <div className="liquidGlass-shine"></div>
                <nav className="liquidGlass-text flex items-center gap-1 p-[6px] relative z-10">
                    {/* Home */}
                    <div className="flex items-center">
                        <Link
                            target="_self"
                            className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]"
                            href="/"
                        >
                            <i className="fa-solid fa-house text-[20px]"></i>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Home
                            </span>
                        </a>
                        <div className="h-5 w-[1px] bg-zinc-200 md:mx-2"></div>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center">
                        <Link
                            target="_self"
                            className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]"
                            href="/github"
                        >
                            <i className="fa-brands fa-github text-[20px]"></i>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Github
                            </span>
                        </a>
                    </div>

                    {/* Resume */}
                    <div className="flex items-center">
                        <Link
                            target="_blank"
                            download=""
                            className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]"
                            href="/resume.pdf"
                        >
                            <i className="fa-solid fa-file-lines text-[20px]"></i>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Resume
                            </span>
                        </a>
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px] cursor-pointer"
                        >
                            <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-[20px]`}></i>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </span>
                        </button>
                    </div>

                    {/* Sound Toggle */}
                    <div className="flex items-center">
                        <button
                            onClick={toggleSound}
                            className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px] cursor-pointer"
                        >
                            <i className={`fa-solid ${isSoundOn ? 'fa-volume-high' : 'fa-volume-xmark'} text-[20px]`}></i>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {isSoundOn ? 'Mute' : 'Unmute'}
                            </span>
                        </button>
                        <div className="h-5 w-[1px] bg-zinc-200 md:mx-2"></div>
                    </div>

                    {/* Blog Button */}
                    <Link
                        className="bg-black text-white py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm hover:opacity-90 duration-[300ms] transition-all hover:px-[28px] ml-2 md:ml-1"
                        href="https://www.jowistudio.com/"
                        target="_blank"
                    >
                        <span className="hidden md:flex">Jowis Studio</span>
                        <span className="md:hidden">Jowis</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}