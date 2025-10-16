export default function Header() {
    return (
        <header className="fixed  top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4">
            <div className="liquidGlass-wrapper bg-[#ffffff80] rounded-[20px] border border-zinc-200">
                <div className="liquidGlass-effect"></div>
                <div className="liquidGlass-tint"></div>
                <div className="liquidGlass-shine"></div>
                <nav className="liquidGlass-text flex items-center gap-1 p-[6px] relative z-10">
                    <div className="flex items-center">
                        <a target="_self" className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house" aria-hidden="true">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            </svg>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Home</span>
                        </a>
                        <div className="h-5 w-[1px] bg-zinc-200 md:mx-2"></div>
                    </div>
                    <div className="flex items-center">
                        <a target="_blank" className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]" href="https://x.com/@honour_can_code">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="17" width="17" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                            </svg>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a target="_self" className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]" href="/github">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github" aria-hidden="true">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Github</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a target="_blank" download="" className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-900 relative group transition-all duration-[300ms] hover:bg-[#ededed]/20 rounded-[15px]" href="/resume.pdf">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text" aria-hidden="true">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                            </svg>
                            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Resume</span>
                        </a>
                        <div className="h-5 w-[1px] bg-zinc-200 md:mx-2"></div>
                    </div>
                    <a className="bg-black text-white py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm hover:opacity-90 duration-[300ms] transition-all hover:px-[28px] ml-2 md:ml-1" href="/blog"><span className="hidden md:flex">My Blog</span><span className="md:hidden">Blog</span></a>
                </nav>
            </div>
        </header>

    );
}