import React from 'react';
import '../assets/css/servicesec.css';  
import { Link } from 'react-router-dom';

function ServiceSec () {
    return (
        <section id="services" className="services section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Featured Services<br /></p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-5">
                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                        <div className="service-item">
                            <div className="img">
                                <img src="./src/assets/img/services-1.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="details position-relative">
                                <div className="icon">
                                    <i className="bi bi-activity"></i>
                                </div>
                                <Link to="/ServiceDetail" className="stretched-link">
                                    <h3>Nesciunt Mete</h3>
                                </Link>
                                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                        <div className="service-item">
                            <div className="img">
                                <img src="./src/assets/img/services-2.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="details position-relative">
                                <div className="icon">
                                    <i className="bi bi-broadcast"></i>
                                </div>
                                <a href="service-details.html" className="stretched-link">
                                    <h3>Eosle Commodi</h3>
                                </a>
                                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                        <div className="service-item">
                            <div className="img">
                                <img src="./src/assets/img/services-3.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="details position-relative">
                                <div className="icon">
                                    <i className="bi bi-easel"></i>
                                </div>
                                <a href="service-details.html" className="stretched-link">
                                    <h3>Ledo Markt</h3>
                                </a>
                                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSec;
