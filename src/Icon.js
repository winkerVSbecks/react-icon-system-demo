import React from 'react';
const files = require.context('!svg-sprite!./assets', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className }) => (
  <svg className={ `dib v-mid ${ className }` }
    height="1em" width="1em">
    <use xlinkHref={ `#${ type }` }></use>
  </svg>
);

export default Icon;
