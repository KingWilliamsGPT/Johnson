import PortfolioDetail from '@/components/PortfolioDetail';

export default function HivePortfolio() {
    return (
        <>
            <PortfolioDetail
                title="The Hive Incubator Website"
                description="A website for The Hive Incubator, a startup incubator helping early-stage founders grow."
                longer_description="This project was a frontend development project using Next.js, React, and other technologies."
                link="https://hive.io"
                stack={["Next.js", "React", "JavaScript"]}
                date="2022-2023"
                type="Website"
                client="The Hive Incubator"
                main_image="/images/portfolio/hive/landing-page.png"
                other_images={[
                    "/images/portfolio/hive/the-hub.png",
                    "/images/portfolio/hive/the-team.png",
                ]}
            />
        </>
    );
}