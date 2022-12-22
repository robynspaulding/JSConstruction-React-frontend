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
    e.target.reset();
  };

  return (
    <div id="contact-form" class="contact-form">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h1>Contact</h1>
          <p>
            Send an email with your name, email address, phone number and the type of work you are looking to get done
            and I will get back to you to schedule a time to talk.
          </p>
        </div>

        <div class="col-lg-8 mt-5 mt-lg-0">
          <form ref={form} onSubmit={sendEmail}>
            <div class="row gy-2 gx-md-3">
              <div class="col-md-6 form-group">
                <input type="text" name="user_name" class="form-control" placeholder="Your Name" required />
              </div>
              <div class="col-md-6 form-group">
                <input type="email" name="user_email" class="form-control" placeholder="Email" required />
              </div>
              <div class="col-md-6 form-group">
                <input type="text" name="user_phone" class="form-control" placeholder="Phone number" required />
              </div>
              <div class="col-md-6 form-group">
                <input type="text" name="subject" class="form-control" placeholder="Subject" />
              </div>
              <div class="form-group col-12">
                <textarea name="message" class="form-control" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="text-center col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
