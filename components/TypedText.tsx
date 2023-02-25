import React from 'react';
import Typed from 'typed.js';

import Emoji from './Emoji';
import { useRef } from 'react';

import { Box, Text } from '@chakra-ui/react';

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
            <Box fontFamily='Gotham' fontWeight='bold' fontSize={{base: '24px', md:'24px', lg:'32px'}} marginX={{base:'0', md:'20', lg:'40'}} className="wrap">
                <Text className='animation-text'>Hey There! <Emoji symbol="👋"/></Text>
                <div className="type-wrap">
                    <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
            </Box>
        )
};

export default TypedText;