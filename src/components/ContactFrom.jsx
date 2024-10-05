// import { Button } from "@mui/material";
import React from "react";
const CONTACT_FORM_API = import.meta.env.VITE_CONTACT_FORM_ACCESS_KEY

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", CONTACT_FORM_API);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section>
      <h2 id="contact-me" className="neon-title-text">
        Contact Me
      </h2>
      <div className="contact-section">
        <form onSubmit={onSubmit}>
          <div className="sender-details">
            <div>
              <p className="neon-text">Name: </p>
              <input type="text" name="name" required placeholder="Your Name"/>
            </div>
            <div>
              <p className="neon-text">Lastname: </p>
              <input type="text" name="lastname" required placeholder="Your Lastname"/>
            </div>
          </div>
          <div>
            <p className="neon-text">Email:</p>
            <input type="email" name="email" required placeholder="Your Email" />
          </div>
          <p className="neon-text ">Message</p>
          <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
          <br></br>
          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
}
