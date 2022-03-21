import React from "react";
import { MdLocationPin,MdEmail,MdLocalPhone } from 'react-icons/md';
const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row" data-aos="fade-in">

                    <div className="col-lg-5 d-flex align-items-stretch">
                        <div className="info">
                            <div className="address">
                                <MdLocationPin/>
                                <h4>Location:</h4>
                                <p>R-13 Rupnagor, Mirpur-2, DH 1216</p>
                            </div>

                            <div className="email">
                                <MdEmail/>
                                <h4>Email:</h4>
                                <p>rayhanbd4400.com</p>
                            </div>

                            <div className="phone">
                                <MdLocalPhone/>
                                <h4>Call:</h4>
                                <p>+880 19 9287 4495</p>
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3650.1293692967242!2d90.35419331434973!3d23.813998292262085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3755c121d14bb935%3A0xc31f43658c5c9598!2s13%20Rupnagar%20Road%2C%20Dhaka!3m2!1d23.813993399999998!2d90.356382!4m0!5e0!3m2!1sen!2sbd!4v1647664513488!5m2!1sen!2sbd" frameBorder="0" style={{ "border": "0", "width": 100 + "%", "height": 290 + "px" }} allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" name="name" className="form-control" id="name" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact;