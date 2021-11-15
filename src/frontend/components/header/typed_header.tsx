import { useRef, useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js'; // thank you to www.mattboldt.com
import '../../css/main.css';

interface HeaderTypingProps {
  strings: string[];
}

function HeaderTyping({ strings }: HeaderTypingProps) {
  // // store a ref for the element containing the animation
  const elRef = useRef<HTMLElement>(null);
  // // store a ref for the typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: strings,
      typeSpeed: 60,
      loop: false,
      cursorChar: '|',
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(elRef.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [strings]);

  return <span style={{ whiteSpace: 'pre' }} ref={elRef} />;
}

export default HeaderTyping;
