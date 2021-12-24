import { useState } from "react";

import { Form, Button, Alert } from "react-bootstrap";

import { fetchSlack } from "../../utils/fetchSlack";

const ContactMain: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const webhookURL = `${process.env.REACT_APP_SLACK_URL}`;
    const myData = {
      text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
    };

    try {
      await fetchSlack(webhookURL, myData);
      setName("");
      setEmail("");
      setMessage("");
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 7000);
    } catch (err) {
      console.error("Something went wrong.");
    }
  };

  const validateForm = () => {
    return name.length > 0 && email.length > 0 && message.length > 0;
  };

  return (
    <>
      <div className="contact-intro">
        <h1>Get in Touch</h1>
        <p>Have an idea you want to realize or want to work together?</p>
      </div>
      <div className="contact-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Your email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Control
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              as="textarea"
              placeholder="Your message"
              rows={7}
            />
            <Form.Text className="text-muted">
              Fill out all the inputs to submit.
            </Form.Text>
          </Form.Group>
          <Button variant="warning" type="submit" disabled={!validateForm()}>
            Submit
          </Button>
          {sent && (
            <div className="sent-alert">
              <Alert variant="warning">Your message was sent!</Alert>
            </div>
          )}
        </Form>
      </div>
    </>
  );
};

export default ContactMain;
