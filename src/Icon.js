import React from 'react';
const files = require.context('!svg-sprite!../svg-assets', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className }) => (
  <svg viewBox="0 0 20 20"
    className={ className }
    width="1em" height="1em">
    <use xlinkHref={ `#${ type }` }></use>
  </svg>
);

export default Icon;