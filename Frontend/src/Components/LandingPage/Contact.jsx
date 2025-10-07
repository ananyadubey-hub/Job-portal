import '../../App.css'
function Contact(){
    return (
        <>
        <div className="row contact_row mb-3">
    {/* Add padding or margin to center the content and make it responsive */}
    <div className="col-0 col-sm-1"></div>
    <div className="col-12 col-sm-10">
        <div className="row contact_container mt-5 pt-2">
            <div className="col-12 col-md-6 text-center text-md-start">
                <img className="contact_img img-fluid" src="contact.webp" alt="Contact" />
            </div>
            <div className="col-12 col-md-6 mt-4 pt-5 px-5 mt-md-0">
                <h2 className="contact_heading">Get in touch</h2>
                <p className="contact_para">
                    The right move at the right time saves your investment. Live the dream of expanding your business.
                </p>
                <div className="contact_form p-5 m-0 m-md-4">
                    {/* Responsive Form Fields */}
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Your Company (optional)" />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" placeholder="Enter Your Number" />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" placeholder="Message"></textarea>
                    </div>
                    <div className="mb-3">
                        <input className="contact_submit form-control btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-0 col-sm-1"></div>
</div>

        </>
    )
}

export default Contact