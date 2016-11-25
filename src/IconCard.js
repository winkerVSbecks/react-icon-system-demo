import React from 'react';
import Icon from './Icon';

const IconCard = ({ name, type, color }) => (
  <li className="fl w-100 w-50-m w-33-l mb4 flex items-center"
    title={ type }>
    <div className="w3 h3 flex items-center justify-center ba b--light-gray">
      <Icon type={ type } className={ `f4 ${ color }` } />
    </div>
    <div className="flex-auto lh-copy pl2 pv1 overflow-hidden">
      <b className="db truncate dark-gray f6">{ name }</b>
      <code className="f6 truncate light-silver">{ type }</code>
    </div>
  </li>
);

export default IconCard;
