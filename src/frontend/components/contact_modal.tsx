import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ContactModalProps {
  shown: boolean;
  stateFunc: Function;
  modalRef: any;
}

// interface for creating and sending email
interface FormInputProps {
  [key: string]: string | number;
  returnAddress: string;
  returnName: string;
  subjectCompany: string;
  useCase: string;
}

interface EmailSendApiResponseProps {
  message: string;
  success?: string;
  failure?: string;
}

const ContactUsModal = ({ shown, stateFunc, modalRef }: ContactModalProps) => {
  const [formState, setFormState] = useState<FormInputProps>({
    returnAddress: '',
    returnName: '',
    subjectCompany: '',
    useCase: '',
  });

  const [emailState, setEmailState] = useState<EmailSendApiResponseProps>({ message: '' });

  // use escape to close modal
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') stateFunc(false);
  };
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);
    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  // convenience function for closing modal
  const close = (): void => stateFunc(false);

  const handleInputChange = (e: any): void => {
    const { name, value } = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;

    setFormState({
      ...formState,
      [name]: value, // note the [key] in FormInputProps - this allows for variable setting in the props themselves
    });
  };

  const sendEmail = () => {
    fetch('http://localhost:9000/email').then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        // let res: Promise<string> = await response.json();
        let res = await response.json();

        const newState: EmailSendApiResponseProps = {
          message: res,
        };
        setEmailState(newState);
      }
      return;
    });
  };

  return (
    <Modal show={shown} ref={modalRef}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body onClick={(e: MouseEvent) => e.stopPropagation()}>
        Tell us how we can build the perfect database structure for your business.
        <form>
          <label>
            Name:
            <input name="returnName" className="modal-text-input" type="text" value={formState.returnName} onChange={handleInputChange} />
          </label>
          <label>
            Company Name:
            <input name="subjectCompany" className="modal-text-input" type="text" value={formState.subjectCompany} onChange={handleInputChange} />
          </label>
          <label>
            Contact Email:
            <input name="returnAddress" className="modal-text-input" type="text" value={formState.returnAddress} onChange={handleInputChange} />
          </label>
          <label>
            Use Case:
            <textarea name="useCase" className="modal-text-input" value={formState.useCase} onChange={handleInputChange} />
          </label>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={sendEmail}>
          Send email
        </Button>
        <p>{emailState.message}</p>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactUsModal;
export type { FormInputProps, EmailSendApiResponseProps };
