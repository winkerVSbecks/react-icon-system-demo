import React, { Component } from 'react';
import IconCard from './IconCard';
import Icon from './Icon';
import iconTypes from './icon-types';

class App extends Component {
  render() {
    return (
      <main className="ph3 ph5-l pt4 pb5 dark-gray">
        <div className="mv5">
          <h2 className="f5 dark-gray ttu tracked">Icon System</h2>

          <p className="gray measure-wide lh-copy">Each icon has been built on a square canvas which results in a square <code className="bg-near-white f5 pa1">viewBox</code> for example: <code className="bg-near-white f5 pa1">viewBox="0 0 20 20"</code>. The width and height attributes are set to <code className="bg-near-white f5 pa1">1em</code>. The fill colour is set to <code className="bg-near-white f5 pa1">currentColor</code>. Therefore, we can easily size and style the icons using font/dimension and colour CSS classes.</p>

          <p className="gray measure-wide lh-copy">usage: <code className="bg-near-white f5 pa1">{ '<Icon type="cloud-with-snow" className="f4 blue" />' }</code></p>
        </div>

        <h3 className="f6 dark-gray ttu tracked">Examples</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <Icon type="moon-with-craters" /> labore et dolore magna aliqua. Ut enim <Icon type="thermometer" /> ad minim veniam, <Icon type="wind" /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <Icon type="orbit" /></p>

        <p>
          <a className="f6 link dim br2 ph3 pv2 mb2 mr2 dib white bg-dark-gray" href="#0">
            <Icon type="sunrise" className="mr2" />
            Button Text
          </a>
          <a className="f6 link dim br2 ph3 pv2 mb2 mr2 dib white bg-dark-gray" href="#0">
            <Icon type="sun" className="mr2" />
            Button Text
          </a>
          <a className="f6 link dim br2 ph3 pv2 mb2 mr2 dib white bg-dark-gray" href="#0">
            <Icon type="sunset" className="mr2" />
            Button Text
          </a>
        </p>

        <div className="flex justify-between mv4">
          <Icon type="moon-cycle-1" className="db w3 h3 moon-gray" />
          <Icon type="moon-cycle-2" className="db w3 h3 light-silver" />
          <Icon type="moon-cycle-3" className="db w3 h3 silver" />
          <Icon type="moon-cycle-4" className="db w3 h3 gray" />
          <Icon type="moon-cycle-5" className="db w3 h3 mid-gray" />
          <Icon type="moon-cycle-6" className="db w3 h3 gray" />
          <Icon type="moon-cycle-7" className="db w3 h3 silver" />
          <Icon type="moon-cycle-8" className="db w3 h3 light-silver" />
        </div>

        <h3 className="f6 dark-gray ttu tracked mt5">
          Icon Set (by <a className="link blue dim"
            href="https://dribbble.com/shots/1925069-Lynny-Icon-Set-Free">
            Matthew Skiles
          </a>)
        </h3>

        <ul className="list pl0 ml0 cf">
          {
            iconTypes.map((icon, idx) => (
              <IconCard key={ idx } { ...icon } color={ getRandomColor() } />
            ))
          }
        </ul>

      </main>
    );
  }
}

export default App;

const colors = ['dark-gray', 'mid-gray', 'gray', 'silver', 'light-silver', 'moon-gray', 'dark-red', 'red', 'light-red', 'orange', 'gold', 'yellow', 'purple', 'light-purple', 'dark-pink', 'hot-pink', 'pink', 'light-pink', 'dark-green', 'green', 'light-green', 'navy', 'dark-blue', 'blue', 'light-blue', 'lightest-blue', 'washed-red'];
const l = colors.length;

function getRandomColor() {
  return colors[Math.floor(Math.random() * l)];
}
