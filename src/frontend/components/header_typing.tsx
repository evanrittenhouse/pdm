import { useRef, useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js'; // thank you to www.mattboldt.com
import '../css/main.css';
import '../App.css';

interface HeaderTypingProps {
  string: string;
}

function HeaderTyping({ string }: HeaderTypingProps) {
  // store a ref for the element containing the animation
  const elRef = useRef<HTMLElement>(null);
  // store a ref for the typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: [string],
      typeSpeed: 60,
      loop: false,
      cursorChar: '|',
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(elRef.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [string]);

  return <span className='App-header' style={{ whiteSpace: 'pre', width: '100%' }} ref={elRef} />;
}

export default HeaderTyping;
