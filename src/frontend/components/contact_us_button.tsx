import { useState, MouseEvent, useRef } from 'react';
import ContactUsModal from './contact_modal';
import { Button } from 'react-bootstrap';
import '../css/main.css';

export default function ContactUsButton() {
  const [showModal, showModalState] = useState<boolean>(false);
  const modalRef = useRef(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    showModalState(!showModal);
    toggleScrollLock();
  };

  const toggleScrollLock = (): void => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  return (
    <Button className="ml-auto p-2" id="contact-us-button" onClick={handleClick}>
      Contact Us
      <ContactUsModal shown={showModal} stateFunc={handleClick} modalRef={modalRef} />
    </Button>
  );
}
