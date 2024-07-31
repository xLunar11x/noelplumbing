import "./footer.css"
import React from "react"

const Footer = () => {

    return (
        <div id="footer">
            <div id="columns">
                <div className="content">
                    <h3>Service Hours</h3>
                    <ul id="hours">
                        <li>Monday - Saturday</li>
                        <li>8:00 am to 5:00 pm</li>
                    </ul>
                </div>
                <div className="content">
                    <h3>Estimate Hours</h3>
                    <ul id="hours">
                        <li>Monday - Friday</li>
                        <li>8:00 am to 4:00 pm</li>
                    </ul>
                </div>
                <div className="content">
                    <h3 id="content-contact">Contact Us</h3>
                    <ul id="hours">
                        <li><p>Email:</p>xpertseweranddrain@gmail.com</li>
                        <li><p>Phone Number:</p><a href='tel:2243967000'>(224) 369-7000</a></li>
                    </ul>
                </div>
                <div className="content">
                    <h3>Social Media</h3>
                    <ul id="hours">
                        <li><strong><a href="https://www.yelp.com/biz/xpert-sewer-and-drain-waukegan">Yelp</a></strong></li>
                        <li><strong><a href="https://www.instagram.com/xpert_sewer_and_drain_llc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a></strong></li>
                    </ul>
                </div>
            </div>
            <div >
                <p id="license"><strong>License and Bonded #056-301340</strong></p>
                <p id="copyright">
                    © 2023 Xpert Sewer & Drain
                </p>
            </div>
        </div>
    )
}

export default Footer