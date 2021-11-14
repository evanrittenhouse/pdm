import { FC, useRef, useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js'; // thank you to www.mattboldt.com
import '../../css/main.css';

const TypedHeader: FC = () => {
  // // store a ref for the element containing the animation
  const el = useRef<HTMLElement>(null);
  // // store a ref for the typed instance itself
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options: TypedOptions = {
      strings: ['Pacific Data Management', 'test'],
      typeSpeed: 40,
      backSpeed: 50,
      loop: false,
      cursorChar: '|',
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <header className="wrap test">
      <span style={{ whiteSpace: 'pre' }} ref={el} />
    </header>
  );
};

export default TypedHeader;
