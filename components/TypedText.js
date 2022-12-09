import React from 'react';
import Typed from 'typed.js';
import Emoji from './Emoji';
import { useRef } from 'react';

const TypedText = () => {
    const el = React.useRef(null);

    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'I am Calvin Koo',
                'I am a software engineer',
                'I am a product manager',
                'I am happy you are here!'
            ],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true,
            smartBackspace: true
        }

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
          }
        }, [])

        return (
            <div className="wrap">
                

                <h1 className='animation-text'>Hey There! <Emoji symbol="👋" label="sheep"/></h1>
                <div className="type-wrap">
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
            </div>
        )
};

export default TypedText;