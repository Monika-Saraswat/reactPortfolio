import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import contactImg from "../assests/img/contact.png"
import TrackVisibility from 'react-on-screen';

const ContactForm = () => {
  const formInitialDetails={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    message:''
  }
  const [formDetails,setFormDetails]=useState(formInitialDetails);
  const [buttonText,setButtonText]=useState('Send');
  const [status,setStatus]=useState({});

  const onFormUpdate=(category,value)=>{
    setFormDetails({
      ...formDetails,
      [category]:value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
      const response = await fetch("https://reactportfolio-1-thlv.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDetails)
      });
      setButtonText("Send");
  
      const result = await response.json();
      setFormDetails(formInitialDetails);
  
      if (result.code === 200) {
        setStatus({ success: true, message: "Message Sent Successfully" });
      } else {
        const errorMessage = result.message || "Something Went Wrong, Please Try Again Later";
      setStatus({ success: false, message: errorMessage });
      }
    } catch (error) {
      console.log(error)
      setStatus({ success: false, message: "Fetch failed. Please try again." });
    }
  };

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
          <img src={contactImg} alt="contactinfo"/>
          </Col>
          <Col md={6}>
          <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className='px-1'><input type="text" value={formDetails.firstName} placeholder='First Name' onChange={(e)=> onFormUpdate('firstName',e.target.value)}/>
              </Col>
              <Col sm={6} className='px-1'><input type="text" value={formDetails.lastName} placeholder='Last Name' onChange={(e)=> onFormUpdate('lastName',e.target.value)}/>
              </Col>
              <Col sm={6} className='px-1'><input type="email" value={formDetails.email} placeholder='Email Address' onChange={(e)=> onFormUpdate('email',e.target.value)}/>
              </Col>
              <Col sm={6} className='px-1'><input type="tel" value={formDetails.phone} placeholder='Phone Number' onChange={(e)=> onFormUpdate('phone',e.target.value)}/>
              </Col>
              <Col>
              <textarea row="6" value={formDetails.message} placeholder='Write Your Message Here' onChange={(e)=>onFormUpdate('message',e.target.value)}/>
              <button type="submit"><span>{buttonText}</span></button>
              </Col>
              {
                status.message&&
                <Col>
                <p className={status.success===false?"danger":"success"}>{status.message}</p>
                </Col>
              }
            </Row>
          </form>
          </div>
            )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default ContactForm
