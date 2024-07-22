import Logo from "../assets/img/header-logo.svg"
import { IoMail as Mail } from "react-icons/io5";
import { FaPhone as Phone, FaLocationDot as Location, FaXTwitter as XTwitter, FaLinkedin as Linkedin } from "react-icons/fa6";
import { SiFacebook as Facebook } from "react-icons/si";



const Footer = () => {
    const links = [
        {
            title: "Home",
            sections: ["Features", "Our Testimonials", "FAQ"]
        },
        {
            title: "About Us",
            sections: ["Our Mission", "Our Vision", "Awards and Recognition", "History", "Teachers"]
        },
        {
            title: "Academics",
            sections: ["Special Features", "Gallery"]
        },
        {
            title: "Contact Us",
            sections: ["Information", "Map & Directions"]
        }
    ];

    return(
        <footer className="mb-[18px]">
            <div className="container mx-auto">
                <div className="card_shadow border-2 border-gray-15 rounded-[12px] px-[113px] pt-[80px] pb-[40px]">
                    <div className="footer-content">
                        <div className="top flex items-start justify-between">
                            <div className="left">
                                <div className="us mb-[50px]">
                                    <img src={Logo} alt=""/>
                                    <p className="font-outfit text-[20px] font-medium mt-[20px] text-gray-30">We believe in the power of play to foster creativity,<br /> problem-solving skills, and imagination.</p>
                                </div>
                                <div className="contacts flex flex-col">
                                    <a href="" className={"contact mb-[24px]"}>
                                        <span className="contact-icon">
                                            <Mail />
                                        </span>
                                        <span>hello@littlelearners.com</span>
                                    </a>
                                    <a href="" className={"contact mb-[24px]"}>
                                        <span className={"contact-icon"}>
                                            <Phone />
                                        </span>
                                        <span>+91 91813 23 2309</span>
                                    </a>
                                    <a href="" className={"contact"}>
                                        <span className={"contact-icon"}>
                                            <Location />
                                        </span>
                                        <span>Somewhere in the World</span>
                                    </a>
                                </div>
                            </div>
                            <div className="right flex gap-[30px]">
                                {
                                    links.map((link, idx) => (
                                        <div key={idx} className="p-links font-outfit">
                                            <h4 className="font-bold text-[20px] mb-[24px]">{link.title}</h4>
                                            <ul>
                                                {
                                                    link.sections.map((section,idx) => (
                                                        <li key={idx} className={"font-medium text-[20px] mb-[14px]"}>{section}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="bottom mt-[50px]">
                            <div
                                className="top py-[30px] border-gray-15 border-b border-t mb-[20px] flex items-center justify-between">
                                <div className="links">
                                <a href="">Terms of Service</a>
                                    <a href="">Privacy Policy</a>
                                    <a href="">Cookie Policy</a>
                                </div>
                                <div className="socials flex items-center gap-[14px]">
                                    <a href="" className="contact-icon bg-orange-90">
                                        <Facebook/>
                                    </a>
                                    <a href="" className="contact-icon bg-orange-90">
                                        <XTwitter/>
                                    </a>
                                    <a href="" className="contact-icon bg-orange-90">
                                        <Linkedin/>
                                    </a>
                                </div>
                            </div>
                            <p className="font-outfit font-medium text-center text-[18px]">Copyright © {new Date().getFullYear()} Little Learners Academy. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;