import React from 'react';
import Section from '../shared/section';
import ContactInfo from './contact-Info';
import "./style.scss";
import Form from './contact-Info/form';

const Contact = () => {
  return (
    <Section id="contact" title="Any Question feel free to contact" background="light">
        <div className="contact-content-wrapper">
        <ContactInfo/>
        <Form/>
        </div>

    </Section>
  )
}

export default Contact;
