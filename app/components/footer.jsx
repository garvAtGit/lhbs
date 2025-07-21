import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" data-aos="fade-right">
                            <a href="/">
                                <img
                                    src="lhbs-logo.png"
                                    alt=""
                                    className="img-fluid logo-footer"
                                />
                            </a>
                            <div className="footer-about">
                                
                                    <h3 style={{ color: "#ffffff" }}>Providing Customized Martial Arts Training for your Busy Lifestyle.</h3>
                                
                            </div>
                        </div>
                        <div className="col-md-3">
                              <div className="social-links" data-aos="fade-right" style={{ color: "#ffffff" }}>
    <h2 className="follow-us-tab">Follow Us</h2>
    <div className="social-icons">
        <ul className='social-icons-list'>
            {/* YouTube */}
            <li>
                <a
                    href="https://www.youtube.com/@pramodgoswami"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 256 256">
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path>
                            </g>
                        </g>
                    </svg>
                  
                </a>
            </li>
            {/* Instagram */}
            <li>
                <a
                    href="https://www.instagram.com/ninjapramod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 256 256">
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path>
                            </g>
                        </g>
                    </svg>
                 
                </a>
            </li>
            {/* Facebook */}
            <li>
                <a
                    href="https://www.facebook.com/NinjaPramod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 256 256">
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                            </g>
                        </g>
                    </svg>
                    
                </a>
            </li>
            {/* WhatsApp */}
            <li>
                <a
                    href="https://api.whatsapp.com/send?phone=919713600085&text=Hello%2C%20%0AI%20am%20Interested%20to%20Learn%20Martial%20Arts%0APlease%20Share%20Details%20with%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 256 256">
                        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
                            </g>
                        </g>
                    </svg>
                    
                </a>
            </li>
        </ul>
    </div>
</div>
                        </div>
                        <div className="col-md-3 address" data-aos="fade-right" style={{ color: "#ffffff" }}>
                            <h2>Address</h2>
                            {/* <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" /> */}
                            <div data-aos="fade-right">
                                <ul className="address-links">
                                    <li>Indore, Madhya Pradesh, Bharat (452018)</li>
                                    <li>✉: livehealthybesafe@gmail.com</li>
                                    <li>☏: +91 9713600085</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section id="copy-right">
                <div className="copy-right-sec">
                    <i className="fa-solid fa-copyright"></i>
                    Copyright © 2025 Martial Arts School |<a href='/refundpolicy' >Refund Policy</a> |<a href='/termsandconditions'> Terms & Conditions</a>
                </div>
            </section>
        </div>
    );
};

export default Footer;