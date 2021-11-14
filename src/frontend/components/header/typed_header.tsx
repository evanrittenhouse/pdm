import { FC, useRef, useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js'; // thank you to www.mattboldt.com
import '../../css/main.css';

interface HeaderTypingProps {
  element?: string;
  strings: string[];
}

function HeaderTyping({ element, strings }: HeaderTypingProps) {
  // // store a ref for the element containing the animation
  const el = useRef<HTMLElement>(null);
  // // store a ref for the typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: false,
      cursorChar: '|',
      stringsElement: '#test',
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [strings]);

  return (
    <header className="wrap test">
      <span style={{ whiteSpace: 'pre' }} ref={el} />
    </header>
  );
}

export default HeaderTyping;
