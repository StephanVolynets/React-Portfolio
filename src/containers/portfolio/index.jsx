import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">

            <PageHeaderContent
                headerText="Projects"
                icon={<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}
export default Portfolio;
