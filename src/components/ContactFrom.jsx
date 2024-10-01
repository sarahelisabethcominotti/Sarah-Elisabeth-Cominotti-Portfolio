// import { Button } from "@mui/material";
import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "24e59240-3125-47e7-ad81-53762c759ced");

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
      <h2 id="about-me" className="neon-title-text">
        Contact Me
      </h2>
      <div className="contact-section">
        <form onSubmit={onSubmit}>
          <p className="neon-text">Name: </p>
          <input type="text" name="name" required />
          <p className="neon-text">Email:</p> <input type="email" name="email" required />
          <p className="neon-text">Message</p> <textarea name="message" required></textarea>
          <br></br>
          {/* <Button type="submit">Submit Form</Button> */}
          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </section>
  );
}
