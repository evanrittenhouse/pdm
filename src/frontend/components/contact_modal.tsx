import React, { useState, useRef, MouseEvent, useCallback } from 'react';
import { Modal, Button } from 'react-bootstrap';

export interface ContactModalProps {
  shown: boolean;
  stateFunc: Function;
  ref: any;
}

const ContactUsModal = ({ shown, stateFunc, ref }: ContactModalProps) => {
  const close = () => stateFunc(false);
  const onClickOutside = (event: KeyboardEvent) => {
    if (ref.contains(event.target)) return;
    close();
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27) stateFunc(false);
  };

  return (
    <Modal show={shown} ref={ref}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tell us how we can build the perfect database structure for your business.
        <ContactUsForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>
          Close
        </Button>
        <Button variant='primary' onClick={close}>
          Send email
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const ContactUsForm = () => {
  const handleInputChange = () => {
    console.log('check');
  };

  return (
    <form>
      <label>
        Name:
        <input name='contact-name' type='text' onChange={handleInputChange}></input>
      </label>
      <label>
        Company Name:
        <input name='company-name' type='text' onChange={handleInputChange}></input>
      </label>
      <label>
        Contact Email:
        <input name='contact-email' type='text' onChange={handleInputChange}></input>
      </label>
      <label>
        Use Case:
        <textarea name='use-case' onChange={handleInputChange}></textarea>
      </label>
    </form>
  );
};

export default ContactUsModal;
