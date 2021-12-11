import React, { useState, useRef, MouseEvent, useCallback, useEffect } from 'react';
import axios from 'axios';
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

// response from server
interface EmailApiGetResponseProps {
  message: string;
  sent?: boolean;
  success?: string;
  failure?: string;
}

// props for form component on entry modal
interface FormInputComponentProps {
  formInputProps: FormInputProps;
  onChangeHandler: Function;
}

// before email send - form input
const FormInput = ({ formInputProps, onChangeHandler }: FormInputComponentProps) => {
  const onChangeHandlerLocal = () => {
    console.log('onChangeHandlerLocal');
    // the return statement isn't happening - ie onChangeHandlerLocalReturnStatement isn't printing
    return (event: React.KeyboardEvent) => {
      console.log('onChangeHandlerLocalReturnStatement');
      onChangeHandler(event);
    };
  };

  return (
    <form>
      <input
        name="returnName"
        placeholder="Your Name..."
        className="modal-text-input"
        type="text"
        value={formInputProps.returnName}
        onChange={onChangeHandlerLocal}
      />
      <input
        name="subjectCompany"
        placeholder="Company Name..."
        className="modal-text-input"
        type="text"
        value={formInputProps.subjectCompany}
        onChange={onChangeHandlerLocal}
      />
      <input
        name="returnAddress"
        placeholder="Contact Email..."
        className="modal-text-input"
        type="text"
        value={formInputProps.returnAddress}
        onChange={onChangeHandlerLocal}
      />
      <textarea
        name="useCase"
        placeholder="Use Case..."
        className="modal-text-input modal-text-area"
        value={formInputProps.useCase}
        onChange={onChangeHandlerLocal}
      />
    </form>
  );
};

const ContactUsModal = ({ shown, stateFunc, modalRef }: ContactModalProps): JSX.Element => {
  const [formState, setFormState] = useState<FormInputProps>({
    returnAddress: '',
    returnName: '',
    subjectCompany: '',
    useCase: '',
  });
  const [emailState, setEmailState] = useState<EmailApiGetResponseProps>({ message: '' });

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

  const handleInputChange = (e: any): void => {
    const { name, value } = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
    setFormState({
      ...formState,
      [name]: value, // note the [key] in FormInputProps - this allows for variable setting in the props themselves
    });
  };

  // convenience function for closing modal
  const close = (): void => stateFunc(false);

  // send email request to api
  const sendEmail = () => {
    axios({
      method: 'post',
      url: 'http://localhost:9000/sendEmail',
      data: formState,
    }).then((response) => {
      setEmailState({
        ...emailState,
        message: response.data.message,
      });
    });
  };

  return (
    <Modal show={shown} ref={modalRef}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body onClick={(e: MouseEvent) => e.stopPropagation()}>
        Tell us how we can build the perfect database structure for your business.
        <FormInput
          formInputProps={formState}
          onChangeHandler={handleInputChange}
          // {
          //   emailState.sent === false ? <FormInput formInputProps={formState} onChangeHandler={handleInputChange} /> : null
          //   // ) : emailState.message === 'success' ? (
          //   //   'success'
          //   // ) : (
          //   //   'failure')
          // }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button className="modal-button modal-close-button" onClick={close}>
          Close
        </Button>
        <Button className="modal-button modal-send-button" onClick={sendEmail}>
          Send email
        </Button>
        <p>{emailState.message}</p>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactUsModal;
export type { FormInputProps, EmailApiGetResponseProps };
