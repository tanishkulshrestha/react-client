import React from 'react';
import TextField from '../../components/TextField/TextField';

const TextFieldDemo = () => (
  <>
    <h3>This is Disabled Input</h3>
    <TextField value="Disabled Input" disabled />
    <h3>A Valid Input</h3>
    <TextField value="Accessible" />
    <h3>An Input with errors</h3>
    <TextField value="101" error="Could not be greater than" />
  </>
);
export default TextFieldDemo;
