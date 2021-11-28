import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export interface ContactModalProps {
  shown: boolean;
  stateFunc: Function;
  modalRef: any;
  closeButtonRef: any;
}

const ContactUsModal = ({ shown, stateFunc, modalRef, closeButtonRef }: ContactModalProps) => {
  const close = () => stateFunc(false);

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') stateFunc(false);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  return (
    <Modal show={shown} ref={modalRef}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body onClick={(e: MouseEvent) => e.stopPropagation()}>
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
