import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import emailjs from "@emailjs/browser"; // Ensure emailjs is imported

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .sendForm(
                "service_fg371fe",
                "template_igjg1lx",
                form.current,
                "4uq4UjxFAbqkZbiGL"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully");
                },
                (error) => {
                    console.log(error.text);
                    alert("An error occurred, please try again.");
                }
            );
    };

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const validateForm = () => {
        const errors = { name: '', email: '', message: '' };
        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        // Validate name
        if (!name) {
            errors.name = 'Name is required';
        }

        // Validate email
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        // Validate message
        if (!message) {
            errors.message = 'Message is required';
        }

        setFormErrors(errors);

        return Object.values(errors).every(x => x === '');
    };

    return (
        <Container fluid className="about-section">
            <StyledContactForm>
            <h1 style={{ color: 'darkorange' }}>Contact</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="user_name">Name</label>
                    <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        placeholder="What's your name?"
                        required
                    />
                    {formErrors.name && <Error>{formErrors.name}</Error>}
                    
                    <label htmlFor="user_email">Email</label>
                    <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder="What's your e-mail?"
                        required
                    />
                    {formErrors.email && <Error>{formErrors.email}</Error>}
                    
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="What's your message?"
                        required
                    />
                    {formErrors.message && <Error>{formErrors.message}</Error>}
                    
                    <input type="submit" value="Send" />
                </form>
            </StyledContactForm>

        </Container>
    );
};

export default Contact;

const StyledContactForm = styled.div`
  width: 400px; /* Default width for desktop view */
  margin: 0 auto; /* Center the form horizontally */
  padding: 20px;
  background: transparent; /* Transparent background */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: darkorange; /* Purple color for the heading */
    font-family: 'Press Start 2P', cursive; /* Funky font */
    font-size: 2.5rem; /* Increased font size for desktop */
    text-align: center; /* Center the heading text */
    margin-bottom: 20px; /* Space below the heading */
    font-weight: 700; /* Increased thickness of the text */
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    label {
      margin-top: 1rem;
      margin-bottom: 0.5rem; /* Space below the label */
      font-weight: bold; /* Make labels bold */
      text-align: left; /* Align text to the left */
      display: block; /* Make labels block elements to ensure they stack above inputs */
    }

    input, textarea {
      width: 100%; /* Full width of the container */
      padding: 10px; /* Increase padding */
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      box-sizing: border-box; /* Ensure padding and border are included in width */
      margin-bottom: 1rem; /* Space between fields */
    }

    textarea {
      max-height: 150px; /* Increase height */
      min-height: 150px; /* Increase height */
      resize: vertical; /* Allow resizing */
    }

    input:focus, textarea:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }

    input[type="submit"] {
      margin-top: 1rem; /* Space above the button */
      cursor: pointer;
      background: darkorange; /* Purple color */
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 16px;
    }
  }

  /* Mobile view adjustments */
  @media (max-width: 768px) {
    width: 90%; /* Full width for smaller screens */
    padding: 15px;
    
    h1 {
      font-size: 1.75rem; /* Smaller font size for mobile */
      margin-bottom: 15px; /* Adjust space below the heading */
    }
    
    form {
      font-size: 14px; /* Smaller font size for mobile */
    }
    
    input, textarea {
      padding: 8px; /* Adjust padding for smaller screens */
    }

    input[type="submit"] {
      margin-top: 1rem; /* Space above the button */
      font-size: 14px; /* Adjust font size for mobile */
    }
  }
  
  /* Extra small mobile view adjustments */
  @media (max-width: 480px) {
    width: 100%; /* Full width for very small screens */
    padding: 10px;
    
    h1 {
      font-size: 1.5rem; /* Even smaller font size for very small screens */
      margin-bottom: 10px; /* Adjust space below the heading */
    }
    
    form {
      font-size: 12px; /* Even smaller font size for very small screens */
    }
    
    input, textarea {
      padding: 6px; /* Adjust padding for very small screens */
    }

    input[type="submit"] {
      margin-top: 1rem; /* Space above the button */
      font-size: 12px; /* Adjust font size for very small screens */
    }
  }
`;

const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-bottom: 1rem;
`;
