import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import necessary icons

function Footer(){
    return (
        <>
      <div className="container-fluid px-5 py-3 top_footer-container">
    <div className="container" style={{ paddingTop: "75px" }}>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-3 px-4 topFooter_content mb-4">
                <div className="h4 text-light">ABOUT US</div>
                <p className="mt-4">Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 px-4 topFooter_content mb-4">
                <div className="h4 text-light">CONTACT INFO</div>
                <p className="mt-4">Address: Lucknow, <br /> Uttar Pradesh, 226022. <br /> <br /> Phone: +91-xx-xxxx-xxxx <br />Email: abc123@gmail.com</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 px-4 topFooter_content mb-4">
                <div className="h4 text-light">IMPORTANT LINK</div>
                <p className="mt-4">View Project <br /> Contact us <br /> Testimonial <br /> Properties <br /> Support</p>
            </div>
            <div className="col-12 col-sm-6 col-md-3 px-4 topFooter_content mb-4">
                <div className="h4 text-light">NEWSLETTER</div>
                <p className="mt-4">Heaven frucvitful doesn't cover lesser in  days appear creeping.</p>
                <div className="input-group flex-nowrap">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                        aria-describedby="addon-wrapping"
                    />
                    <span className="footer_btn" id="addon-wrapping">
                        <BsFillSendFill />
                    </span>
                </div>
            </div>
        </div>

        <div className="row text-center mt-4 pe-5 mb-2">
            <div className="col-12 col-sm-6 col-md-3 pe-5 bg-light rounded-pill">
                <img src="logo.png" alt="Logo" className="img-fluid" />
            </div>
            <div className="col-12 col-sm-6 col-md-3 pe-5 foot_content">
                <div className="h4 text-light">5000+ <span style={{ color:"#eeeeee", fontSize:18,fontWeight:300 }}>Talented Hunters</span></div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 pe-5 foot_content">
                <div className="h4 text-light">451 <span style={{ color:"#eeeeee", fontSize: 18,fontWeight:300 }}>Talented Hunters</span></div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 pe-5 foot_content">
                <div className="h4 text-light">568 <span style={{ color:"#eeeeee", fontSize: 18,fontWeight:300 }}>Talented Hunters</span></div>
            </div>
        </div>
    </div>

    <hr className="mt-4" style={{ color: "gray" }} />
    <div className="row text-secondary px-5 mb-3 mt-4">
        <div className="col-sm-6">Copyright &copy; 2024 RecruiterX | This is developed by ...</div>
        <div className="col-sm-6 f">
        <a href="https://www.facebook.com" className="me-3" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.twitter.com" className="me-3" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" className="me-3" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
        </div>
    </div>
</div>

        </>
    )
}


export default Footer