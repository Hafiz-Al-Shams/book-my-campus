



const ResearchPapers = () => {
    const papers = [
        {
            researcher: "Inger Mewburn",
            date: "15 May 2023",
            title: "How to write a PhD in a hundred steps (or more)",
            description: "This article provides a step-by-step guide to writing a PhD thesis, with practical tips and personal anecdotes from the author's experience. It emphasizes managing the overwhelming process by breaking it into manageable tasks. Mewburn shares insights on maintaining motivation and avoiding common pitfalls. The post is particularly useful for students navigating the complexities of doctoral research.",
            link: "https://thesiswhisperer.com/2023/05/15/how-to-write-a-phd/"
        },
        {
            researcher: "Tseen Khoo",
            date: "20 June 2023",
            title: "The art of academic networking",
            description: "Networking is crucial for academic success. This post explores strategies for building and maintaining professional relationships in academia. It offers practical advice on attending conferences, leveraging social media, and fostering collaborations. Khoo highlights the importance of genuine connections for career advancement.",
            link: "https://theresearchwhisperer.org/2023/06/20/academic-networking/"
        },
        {
            researcher: "Jane Smith",
            date: "10 July 2023",
            title: "The future of open access publishing",
            description: "An in-depth look at the challenges and opportunities in open access publishing, with a focus on the scientific community. The article discusses funding models, accessibility barriers, and the impact on global research dissemination. It also explores how open access can democratize knowledge. Smith provides case studies of successful open access initiatives.",
            link: "https://theplosblog.plos.org/2023/07/10/open-access-future/"
        },
        {
            researcher: "Patrick Dunleavy",
            date: "25 August 2023",
            title: "Structuring your research paper",
            description: "This guide offers advice on how to structure a research paper effectively, from the introduction to the conclusion. It covers crafting compelling arguments, organizing data, and ensuring clarity for readers. Dunleavy includes examples from various disciplines to illustrate best practices. The post is a valuable resource for students aiming to publish impactful research.",
            link: "https://writingforresearch.com/2023/08/25/structuring-research-paper/"
        },
        {
            researcher: "Wendy Laura Belcher",
            date: "5 September 2023",
            title: "Writing your journal article in twelve weeks",
            description: "A practical guide to writing and publishing a journal article, with a structured plan to complete it in twelve weeks. Belcher provides weekly tasks to streamline the writing process and improve manuscript quality. The guide addresses common challenges like reviewer feedback and journal selection. It’s ideal for students seeking to publish their first academic paper.",
            link: "https://wendybelcher.com/african-literature/2023/09/05/writing-journal-article/"
        },
        {
            researcher: "Pat Thomson",
            date: "15 October 2023",
            title: "Refining your research question",
            description: "This post discusses how to refine your research question to make it more focused and researchable. Thomson explains the importance of specificity and feasibility in question design. She offers techniques to iterate and test questions with advisors and peers. The article is essential for students starting research projects.",
            link: "https://patthomson.net/2023/10/15/refining-research-question/"
        },
        {
            researcher: "Emily Brown",
            date: "20 November 2023",
            title: "Overcoming writer's block in academia",
            description: "Strategies and tips for overcoming writer's block, specifically tailored for academic writers. Brown discusses techniques like freewriting, setting realistic goals, and managing stress to boost productivity. She also addresses the psychological barriers that hinder academic writing. This post is a lifeline for students struggling with writing deadlines.",
            link: "https://academicswrite.com/2023/11/20/overcoming-writers-block/"
        },
        {
            researcher: "Ivan Oransky",
            date: "5 December 2023",
            title: "The rise of retractions in scientific literature",
            description: "An analysis of the increasing number of retractions in scientific journals and what it means for research integrity. Oransky examines the causes, from honest errors to misconduct, and their impact on trust in science. The post includes data on retraction trends and prevention strategies. It’s a critical read for students learning about research ethics.",
            link: "https://retractionwatch.com/2023/12/05/rise-of-retractions/"
        },
        {
            researcher: "Science Daily Staff",
            date: "10 January 2024",
            title: "Breakthrough in quantum computing",
            description: "A summary of the latest advancements in quantum computing, with implications for future research and applications. The article highlights new algorithms and hardware developments driving the field forward. It also discusses potential impacts on industries like cryptography and AI. This post is perfect for students interested in cutting-edge STEM research.",
            link: "https://www.sciencedaily.com/releases/2024/01/10/quantum-computing-breakthrough.htm"
        }
    ];

    return (
        <div className="mb-5 md:mb-7 lg:mb-16 mt-4 md:mt-7 lg:mt-14">
            <h2 className="font-semibold px-3.5 text-xl md:text-2xl lg:text-4xl">Latest Research Papers</h2>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-8 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {papers.map((paper, index) => (
                            <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">{paper.researcher}</span>
                                    <span className="mt-1 text-gray-500 text-sm">{paper.date}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                                        {paper.title}
                                    </h2>
                                    <p className="leading-relaxed">
                                        {paper.description}
                                    </p>
                                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-indigo-500 inline-flex items-center mt-4">
                                        Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResearchPapers;