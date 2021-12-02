import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ContactModalProps {
  shown: boolean;
  stateFunc: Function;
  modalRef: any;
}

// interface for creating and sending email
interface FormProps {
  [key: string]: string | number;
  returnAddress: string;
  returnName: string;
  subjectCompany: string;
  useCase: string;
}

interface EmailProps {
  test: string;
}

const ContactUsModal = ({ shown, stateFunc, modalRef }: ContactModalProps) => {
  const [formState, setFormState] = useState<FormProps>({
    returnAddress: '',
    returnName: '',
    subjectCompany: '',
    useCase: '',
  });

  const [emailState, setEmailState] = useState<EmailProps>({ test: '' });

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  });

  const close = (): void => stateFunc(false);
  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') stateFunc(false);
  };

  const handleInputChange = (e: any): void => {
    const { name, value } = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const sendEmail = () => {
    fetch('http://localhost:9000/email').then(async (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        // let res: Promise<string> = await response.json();

        // setTestState(res);
        let test = await response.json();
        console.log(test);

        const newState: EmailProps = {
          test: 'hello',
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
            <input name="returnName" type="text" value={formState.returnName} onChange={handleInputChange} />
          </label>
          <label>
            Company Name:
            <input name="subjectCompany" type="text" value={formState.subjectCompany} onChange={handleInputChange} />
          </label>
          <label>
            Contact Email:
            <input name="returnAddress" type="text" value={formState.returnAddress} onChange={handleInputChange} />
          </label>
          <label>
            Use Case:
            <textarea name="useCase" value={formState.useCase} onChange={handleInputChange} />
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
        <p>{emailState.test}</p>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactUsModal;
