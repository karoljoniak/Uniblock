import React from "react"
import * as ReactDOM from 'react-dom/client';

import { Button } from "@karoljoniak/react"

import '@karoljoniak/scss/lib/Button.css';

const element = document.querySelector('#root');
const root = ReactDOM.createRoot(element!)

root.render(<Button label="test" />)