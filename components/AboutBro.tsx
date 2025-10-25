"use client";


export default function About() {
    return (
        <>
            <div className="flex items-center py-12 justify-center w-full bg-white dark:bg-[#1b1c26]">
                <div className="relative w-full max-w-[500px] h-[400px] group">
                    {/* First Polaroid - Left */}
                    <div className="absolute top-8 left-[5%] bg-white px-2 pt-2 pb-3 rotate-[-15deg] shadow-xl rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-[-18deg] group-hover:translate-y-[-10px] group-hover:translate-x-[-50px] group-hover:scale-105 z-10">
                        <img
                            alt="About image 1"
                            loading="lazy"
                            width={180}
                            height={180}
                            decoding="async"
                            className="object-cover object-top rounded-sm w-[180px] h-[180px]"
                            src="/images/johnson1.jpg"
                        />
                        <span className="text-xs flex justify-center py-2 italic text-zinc-700 w-full text-center font-handwriting">
                            @johnsonayanda
                        </span>
                    </div>

                    {/* Second Polaroid - Center */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-2 pt-2 pb-3 rotate-[8deg] shadow-2xl rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-[10deg] group-hover:translate-y-[-15px] group-hover:scale-110 z-20">
                        <img
                            alt="About image 2"
                            loading="lazy"
                            width={200}
                            height={200}
                            decoding="async"
                            className="object-cover object-top rounded-sm w-[200px] h-[200px]"
                            src="/images/johnson2.jpg"
                        />
                        <span className="text-xs flex justify-center py-2 italic text-zinc-700 w-full text-center font-handwriting">
                            @johnsonayanda
                        </span>
                    </div>

                    {/* Third Polaroid - Right */}
                    <div className="absolute top-12 right-[5%] bg-white px-2 pt-2 pb-3 rotate-[12deg] shadow-xl rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-[15deg] group-hover:translate-y-[-10px] group-hover:translate-x-[50px] group-hover:scale-105 z-10">
                        <img
                            alt="About image 3"
                            loading="lazy"
                            width={180}
                            height={180}
                            decoding="async"
                            className="object-cover object-top rounded-sm w-[180px] h-[180px]"
                            src="/images/johnson3.jpg"
                        />
                        <span className="text-xs flex justify-center py-2 italic text-zinc-700 w-full text-center font-handwriting">
                            @johnsonayanda
                        </span>
                    </div>
                </div>

                <style jsx>{`
                .font-handwriting {
                    font-family: 'Caveat', 'Comic Sans MS', cursive;
                }
            `}</style>
            </div>
            <div className="bg-white dark:bg-[#1b1c26]">
                <div
                    className="w-full max-w-[53rem] mx-auto p-6 flex flex-col pb-[100px] md:py-[158px] px-[1.5rem] md:px-[8rem] items-start gap-[25px] bg-white dark:bg-[#1b1c26]"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <h2
                        className="text-[25px] md:text-[32px] font-bold tracking-[-.03em] leading-[110%] text-black dark:text-white/90"
                        style={{ opacity: 1, transform: "none" }}
                    >
                        About
                    </h2>

                    <div className="flex flex-col gap-6" style={{ opacity: 1, transform: "none" }}>
                        <p
                            className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            As the Director of Jowis Studio, I am driven by a passion to develop technology-based solutions that empower businesses and individuals to thrive in a digital world.
                        </p>

                        <p
                            className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            At Jowis, we do not just build products; we create possibilities that drive growth, inspire innovation, and leave a lasting impression. Every project reflects our belief that technology should make life simpler, smarter, and more connected.
                        </p>

                        <p
                            className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            Before founding Jowis Studio, I served as the Head of IT at Alles Charis Gas Limited, where I spearheaded key digital transformation projects and introduced systems that improved operational efficiency and reliability across the organization. That experience reinforced my commitment to excellence, innovation, and purposeful impact, values that remain at the heart of our work today.
                        </p>
                        <p
                            className="text-[16px] font-normal md:tracking-[.01em] md:leading-[1.4em] text-[#5a5a5a] dark:text-white/70"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            I am passionate about transforming ideas into impactful solutions through strategy, teamwork, and technology. Beyond the workspace, I am kingdom-minded and intentional about ensuring that purpose remains central to every project I lead.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}