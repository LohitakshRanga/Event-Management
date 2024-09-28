import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
            <div className="container">
                <h2 className='ContactUsHeading'>Contact Us</h2>
                <div className="row">
                    <div className="columnLeft">
                        <img src='https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=' alt='contact us page image' className='contactUsImage' />
                    
                    <div className="content">
                        <p><strong>For information or a complimentary consultation please contact Andrea at:</strong><br />
                            <span className='emailLinks'> info@andreafreemanevents.com</span><br />
                            646.675.1664<br />
                            Serving The New York Metropolitan Area, New England and Beyond!<br />
                        </p>

                        <p><strong> All Press/Media Inquiries please contact: </strong><br />
                            <span className='emailLinks'>info@andreafreemanevents.com</span></p>

                        <p><strong>Employment Opportunities:</strong><br />
                            We are not currently hiring, but please watch this space for future job postings.</p>
                    </div>
                    </div>
                    <div className="columnRight">
                        <form action="process_form.php" method="post">
                            <label for="name">Name</label><br/>
                            <input className='nameField-1'  type="text"  name="name" placeholder="First Name" required />
                            <input className='nameField-2'  type="text" name="name" placeholder="Last Name" required /><br /><br/>
                            
                            <label for="email">Email Address</label><br/>
                            <input className='inputField'  type="email" name="email" id='email' required /><br /><br/>
                            
                            <label for="phnNumber">Phone Number</label><br/>
                            <input className='inputField'  type="tel" id='phnNumber' name="phnNumber" required /><br /><br/>
                           
                            <label for="services">Type of services</label><br/>
                            <select className='inputField' id="services" name="services">
                                <option value="wedding">Wedding</option>
                                <option value="socEvent">Social Event</option>
                                <option value="corpEvent">Corporate Event</option>
                            </select><br/><br/>

                            <label for="detail">Details</label><br/>
                            <textarea id="detail" name="detail" rows="4" cols="50" placeholder></textarea><br/><br/>

                            <label for='date' >Date of Event</label><br/>
                            <input className='inputField'  type='date' id='date' name='date'/><br/><br/>

                            <input className='inputSubmit' type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs






