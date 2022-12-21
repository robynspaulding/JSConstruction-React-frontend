import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
          console.log(process.env.REACT_APP_SERVICE_ID);
        }
      );
  };

  return (
    <div id="contact-form">
      <h1>Contact me for more information</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>Your Name: </label>
          <input type="text" name="user_name" />
        </div>
        <div>
          <label>Your Email: </label>
          <input type="email" name="user_email" />
        </div>
        <div>
          <label>Your Phone Number: </label>
          <input type="text" name="user_phone" />
        </div>
        <div></div>
        <div>
          <label>Message: </label>
          <textarea name="message" />
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
