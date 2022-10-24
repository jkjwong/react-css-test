import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/styles.css';
import styled from 'styled-components';
import moduleStyles from './stylesheets/styles.module.css';
import './stylesheets/tailwind.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const inlineStyles = {
    p: {
        color: 'white',
        'background-color': 'green',
    },
    strong: {
        color: 'black'
    }
};

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid red;
    color: red;
`

root.render(
    <div>
        <h1>Different methods of CSS in React</h1>

        <p className="red">Styled by importing a simple CSS stylesheet</p>

        <p style={ inlineStyles.p }>Inline styles with a <strong style={ inlineStyles.strong }>JS object</strong></p>

        <Button>Styled Components</Button>

        <p className={ moduleStyles.blue }>CSS Modules</p>

        <h1 className="text-primary text-4xl font-bold">Styled with Atomic CSS, and in this example using Tailwind CSS!</h1>
    </div>
);