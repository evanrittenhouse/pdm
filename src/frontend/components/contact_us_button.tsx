import React, { useState, MouseEvent, useRef } from 'react';
import ContactUsModal from './contact_modal';
import { Button } from 'react-bootstrap';
import '../css/main.css';

// https://blog.bitsrc.io/build-a-full-featured-modal-dialog-form-with-react-651dcef6c571
export default function ContactUsButton() {
  const [showModal, showModalState] = useState<boolean>(false);
  const modalRef = useRef(null);

  const showModalFunc = (): void => {
    showModalState(true);
    toggleScrollLock();
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget.type);
    showModalState(!showModal);

    if (showModal === true) {
      document.querySelector('html').classList.toggle('scroll-lock');
    }
  };

  // const onClickOutside = (event: MouseEvent): void => {
  //   if (showModal && modalRef!.current!.contains(event.target)) return;
  // };

  const toggleScrollLock = (): void => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  return (
    <Button className='ml-auto p-2' id='contact-us-button' onClick={handleClick}>
      Contact Us
      <ContactUsModal shown={showModal} stateFunc={handleClick} ref={modalRef} />
    </Button>
  );
}
