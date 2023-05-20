import "./services.css"
import React from "react";

const Services = () => {

    const services = [
        {
            service: "Sewer Drain Rod",
            description: "Our professional sewer drain rodding service offers an effective and efficient solution for clearing blockages and restoring proper flow in your sewer system. Using specialized tools and equipment, our trained technicians will safely and effectively remove debris, obstructions, and buildup from your sewer drains, ensuring optimal functionality and preventing potential plumbing emergencies.",
            image: new URL(`../assets/IMG_8516.jpg`, import.meta.url).href,
            id: 1,
        },
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
        {
            service: "Floor Drains",
            description: "Are floor drain issues causing you trouble? Don't let standing water or slow drainage disrupt your space - call us for efficient floor drain solutions! Whether it's a clog, blockage, or damaged components, we have the expertise and tools to quickly diagnose and fix the problem. Our skilled technicians will ensure your floor drains are clear, allowing water to flow smoothly and efficiently.",
            image: new URL(`../assets/floordrain.jpg`, import.meta.url).href,
            id: 5,
        },
        {
            service: "Bathroom Drains",
            description: "Whether it's a clog caused by hair, soap residue, or other debris, we have the expertise and tools to quickly diagnose and fix the problem. Our technicians will clear the blockage, restore proper drainage, and ensure your bathroom sinks, showers, and tubs are back to working flawlessly.",
            image: new URL(`../assets/IMG_8514.jpg`, import.meta.url).href,
            id: 6,
        },
        {
            service: "Hydro Jetting",
            description: "Hydro jetting is a powerful and effective method of drain cleaning that utilizes high-pressure water to blast away obstructions, including grease, roots, scale, and other buildup. Our experienced technicians will utilize state-of-the-art hydro jetting equipment to thoroughly clean your pipes, ensuring long-lasting results.",
            image: new URL(`../assets/hydrojetting.jpg`, import.meta.url).href,
            id: 7,
        },
        {
            service: "Commercial Installation",
            description: "Experience top-notch commercial plumbing solutions tailored to your business needs with our professional team. From installations and repairs to maintenance and upgrades, we deliver reliable and efficient services that keep your operations running smoothly.",
            image: new URL(`../assets/commercialtoilet.jpg`, import.meta.url).href,
            id: 8,
        }

    ]

    return (
        <div id="services-page">
            <h2>Services</h2>
            <p id="services-description">Our skilled and experienced plumbers are ready to handle a wide range of plumbing services, including installations, repairs, maintenance, and upgrades. Whether it's a leaky faucet, a clogged drain, or a complete plumbing system overhaul, we've got you covered. With our commitment to quality workmanship, prompt service, and customer satisfaction, you can trust us to deliver reliable and efficient plumbing solutions. Contact us today for all your plumbing needs and experience the difference our expertise can make!</p>
            <div id="service-cards">
                {
                    services.map((service) => {
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
            <p id="services-description2">Can't find what you are looking for? Give us a call!</p>
        </div>
    )
};

export default Services;