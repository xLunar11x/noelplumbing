import React from "react";
import "./homepage.css"

const HomePage = () => {

    const mainServices = [
        {
            service: "Sump Pumps",
            description: "With our reliable and efficient sump pump installation services, you can rest assured that your home or business will be protected from the damaging effects of excess water. We will work closely with you to understand your specific needs and develop a customized installation plan that fits your budget and timeline.",
            image: new URL(`../assets/featured-image-sump-pump-1.jpg`, import.meta.url).href,
            id: 2,
        },
        {
            service: "Sewer Repair",
            description: "We understand the importance of maintaining a functioning sewer system, which is why we offer prompt and affordable solutions to get your system back on track. With our commitment to customer satisfaction and reliable repairs, you can trust us to get the job done right.",
            image: new URL(`../assets/before.jpg`, import.meta.url).href,
            id: 3,
        },
        {
            service: "Kitchen Drains",
            description: "Don't let a clogged kitchen drain disrupt your daily routine. Call us today to schedule an appointment and get your drain working like new. We guarantee that you will be satisfied with our reliable and efficient kitchen drain repair services.",
            image: new URL(`../assets/kitchendrain.jpg`, import.meta.url).href,
            id: 4,
        },
    ]


    return (
        <div id="home-page">
            <div className="box">
            </div>
            <div id="home-page-description">
                <h2> 20+ Years of Experience!</h2>
                <p>Are you experiencing plumbing problems in your home or business? From leaky faucets to burst pipes, our team of expert plumbers has the expertise and tools to quickly diagnose and repair any plumbing issue. We offer a range of services, including plumbing installation, repair, and maintenance, to ensure that your plumbing system is working at its best. With our commitment to customer satisfaction and reliable repairs, you can trust us to get the job done right the first time. Don't let plumbing problems disrupt your daily routine - call us today to schedule an appointment and get your plumbing system back on track. We guarantee that you will be satisfied with our efficient and affordable plumbing services.</p>
            </div>
            <div id="service-cards">
                {
                    mainServices.map((service) => {
                        return (
                            <div id="service-card" key={service.id}>
                                <div id="top">
                                    <img src={service.image}></img>
                                </div>
                                <div id="service-footer">
                                    <h3>{service.service}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="service-areas-content">
                <h2 id="service-areas">Service Areas</h2>
                <ul id="areas">
                    <li>Lake County</li>
                    <li>Cook County</li>
                    <li>McHenry County</li>
                    <li>Northshore Suburbs</li>
                </ul>
            </div>
        </div>
    )
};

export default HomePage;