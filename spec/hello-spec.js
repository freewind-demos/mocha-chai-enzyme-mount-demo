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
    wrapper.html().should.equal('<div><h1>Hello, I like:</h1><div><span><!-- react-text: 5 -->Box: <!-- /react-text --><!-- react-text: 6 -->AAA<!-- /react-text --></span><button title="delete">x</button></div><div><span><!-- react-text: 10 -->Box: <!-- /react-text --><!-- react-text: 11 -->BBB<!-- /react-text --></span><button title="delete">x</button></div></div>');
  });

  it('shows names in inner components', () => {
    const wrapper = mount(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.should.contain.text("Box: AAA")
  });

  it('calls onFruitDelete if deletes a fruit', () => {
    const spy = chai.spy();
    const wrapper = mount(<Hello fruit={['AAA', 'BBB']} onDeleteFruit={spy}/>);
    wrapper.find('button[title="delete"]').first().simulate('click');
    spy.should.have.been.called.with('AAA');
  })

});
