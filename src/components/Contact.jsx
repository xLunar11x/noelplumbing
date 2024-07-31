import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(service_jbnxwmd, contact_form, form.current, xBZX1O62t3Mrrzq8R)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset
    };

    return (
        <div id="contact-page">
            <div id="contact-box">
            </div>
            <h2>Contact Us</h2>
            <div id="contact-stuff">
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" placeholder="Name" required={true}></input>
                    <input type="email" name="user_email" placeholder="Email" required={true}></input>
                    <input type="number" name="phone_number" placeholder="Phone Number" required={true}></input>
                    <input type="text" name="service" placeholder="Service" required={true} />
                    <textarea name="message" placeholder="Description" required={true} />
                    <input type="submit" value="Send"></input>
                </form>
                <div id="contact-page-contact">
                    <h3>Xpert Sewer & Drain</h3>
                    <div>
                        <p className="bolder">Phone Number</p>
                        <a className="contact-info" id="phone-number-c" href='tel:2243967000'>(224) 369-7000</a>
                        <p className="bolder">Email</p>
                        <p className="contact-info">xpertseweranddrain@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;