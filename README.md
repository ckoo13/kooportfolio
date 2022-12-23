# Portfolio Site

Check out the [live site](https://ckoo.netlify.app)

## Introduction

This is a portfolio site created with NextJS and ChakraUI. I was inspired by devaslife to make my own version of a portfolio site using these technologies to improve and build upon the skills I have learned at App Academy and beyond. I hope to incorporate additional frameworks and technologies such as Framer to improve the design of the website as well as learn more about the functionality of NextJS. I am particularly interested in improving performance while not compromising the design of the web app.


## Code Snippets

### TypedText

Incorporated a third-party library to create the typing animation in the hero section of the website

```
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
```


## Credit and Forks

Please feel free to re-use this template to create your own portfolio sites. I will keep adding to its construction until complete.