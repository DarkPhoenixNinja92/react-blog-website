const Contact = () => {
    return (
        <div className="Contact">
        <h1 className="absolute top-1/2 left-1/2 mt-10 text-6xl">Contact Us</h1>
        <div className="contact-div">
            <h3 className="main-office">Main Office</h3>
            <div  className="address">
            <p className="address-line-one">2589 West Main Street</p>
            <p className="address-line-two">New York, NY 4589</p>
            </div>
            <p className="email">WrenchGnasherHR@gmail.com</p>
            <p className="phone">(204) 194-9531</p>
        </div>
            <p className="note">Contact information is only provided for the main office. For contact details for one of thee branch offices, please contact the main office.</p>
        </div>
    )
}

export default Contact;