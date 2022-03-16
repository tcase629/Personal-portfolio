import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { IconContext } from 'react-icons/lib';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ja1i4k', 'template_5ip5y66', e.target, 'KKKM3n6wnrPO6W2zx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }  
  
  return (
    <>
      <IconContext.Provider value={{ color: "#a9d09e" }}>
        <div className="contact-container row">
          <div className="left">
            <span className="wave">👋</span>
            <div className="social">
              <a href="https://github.com/tcase629">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/tyleracase/">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="box box-header">
              <h2>Let's Connect</h2>
              <p className="header-text">Please feel free to get in touch</p>
            </div>
            <form className="box" onSubmit={sendEmail}>
              <input type="text" placeholder="NAME" name="name" />
              <input type="text" placeholder="EMAIL" name="email" />
              <input type="text" placeholder="SUBJECT" name="subject" />
              <textarea name="message" id="message" placeholder="MESSAGE" cols="20" rows="6"></textarea>
              <button className="contact-btn" type="submit">SEND</button>
            </form>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default ContactForm;