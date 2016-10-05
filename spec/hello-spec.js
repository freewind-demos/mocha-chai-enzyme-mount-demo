"use strict";

import React from 'react';
import Hello from '../src/hello.jsx';
import chai from 'chai';
import spies  from 'chai-spies';
import {mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';
import chaiEnzyme from 'chai-enzyme';

jsdomGlobal();

chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

describe('<Hello />', () => {

  it('renders the whole html including inner components', () => {
    const wrapper = mount(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.html().should.equal("<div><h1>Hello, I like:</h1><div><!-- react-text: 4 -->Box: <!-- /react-text --><!-- react-text: 5 -->AAA<!-- /react-text --></div><div><!-- react-text: 7 -->Box: <!-- /react-text --><!-- react-text: 8 -->BBB<!-- /react-text --></div></div>");
    console.log(wrapper.html());
  });

  it('shows names in inner components', () => {
    const wrapper = mount(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.should.contain.text("Box: AAA")
  });

});
