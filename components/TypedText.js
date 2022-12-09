import React from 'react';
import Typed from 'typed.js';
import { useRef } from 'react';

const TypedText = () => {
    const el = React.useRef(null);

    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Calvin Koo',
                'a software engineer',
                'a product manager',
                'happy you are here!'
            ],
            typeSpeed: 70
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
                <h1>Hey There!</h1>
    
                <div className="type-wrap">
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
            </div>
        )
};

export default TypedText;