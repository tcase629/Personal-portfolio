import './ContactForm.css';

const ContactForm = () => {
  
  
  return (
    <>
      <div className="contact-container row">
        <div className="left">
          <span className="wave">👋</span>
        </div>
        <div className="right">
          <div className="box box-header">
            <h2>Let's Connect</h2>
            <p className="header-text">Please feel free to get in touch</p>
          </div>
          <form className="box">
            <input type="text" placeholder="NAME" />
            <input type="text" placeholder="EMAIL" />
            <input type="text" placeholder="SUBJECT" />
            <textarea name="message" id="message" placeholder="MESSAGE" cols="20" rows="6"></textarea>
            <button className="contact-btn">SEND</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm;