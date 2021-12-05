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
  success?: string;
  failure?: string;
}

// props for form component on entry modal
interface FormInputComponentProps {
  formInputProps: FormInputProps;
  onChangeHandler: Function;
}

// const FormInput = ({ formInputProps, onChangeHandler }: FormInputComponentProps) => {
//   return (
//     <form>
//       <label>
//         Name:
//         <input name="returnName" className="modal-text-input" type="text" value={formInputProps.returnName} onChange={onChangeHandler} />
//       </label>
//       <label>
//         Company Name:
//         <input name="subjectCompany" className="modal-text-input" type="text" value={formInputProps.subjectCompany} onChange={onChangeHandler} />
//       </label>
//       <label>
//         Contact Email:
//         <input name="returnAddress" className="modal-text-input" type="text" value={formInputProps.returnAddress} onChange={onChangeHandler} />
//       </label>
//       <label>
//         Use Case:
//         <textarea name="useCase" className="modal-text-input" value={formInputProps.useCase} onChange={onChangeHandler} />
//       </label>
//     </form>
//   );
// };

const ContactUsModal = ({ shown, stateFunc, modalRef }: ContactModalProps) => {
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
// <FormInput formInputProps={formState} onChangeHandler={handleInputChange} />

export default ContactUsModal;
export type { FormInputProps, EmailApiGetResponseProps };

// const sendEmail = () => {
//   const requestOptions = {
//     method: 'POST',
//     body: JSON.stringify(formState),
//   };

//   fetch('http://localhost:9000/testPost', requestOptions).then(async (response) => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     } else {
//       // let res: Promise<string> = await response.json();
//       let res = await response.json();

//       const newState: EmailApiGetResponseProps = {
//         message: res.message,
//       };
//       setEmailState(newState);
//     }
//     return;
//   });
// };
