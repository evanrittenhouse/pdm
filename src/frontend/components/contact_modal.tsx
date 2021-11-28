import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ContactModalProps {
  shown: boolean;
  stateFunc: Function;
  modalRef: any;
  closeButtonRef: any;
}

// object for creating and sending email
interface EmailProps {
  returnAddress: string;
  returnName: string;
  subjectCompany: string;
  useCase: string;
}

const ContactUsModal = ({ shown, stateFunc, modalRef, closeButtonRef }: ContactModalProps) => {
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  const close = () => stateFunc(false);
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') stateFunc(false);
  };

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
  // TODO: lift state up into the main modal element since it contains the submit button
  const [emailState, setEmailState] = useState<EmailProps>({
    returnAddress: '',
    returnName: '',
    subjectCompany: '',
    useCase: '',
  });

  const handleInputChange = (e: any): void => {
    const { name, value } = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;

    setEmailState({
      ...emailState,
      [name]: value,
    });
  };

  return (
    <form>
      <label>
        Name:
        <input name='return-name' type='text' value={emailState.returnAddress} onChange={handleInputChange} />
      </label>
      <label>
        Company Name:
        <input name='subject-company' type='text' value={emailState.subjectCompany} onChange={handleInputChange} />
      </label>
      <label>
        Contact Email:
        <input name='return-address' type='text' value={emailState.returnAddress} onChange={handleInputChange} />
      </label>
      <label>
        Use Case:
        <textarea name='use-case' value={emailState.useCase} onChange={handleInputChange} />
      </label>
    </form>
  );
};

export default ContactUsModal;
