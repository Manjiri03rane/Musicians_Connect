import React, { Component } from 'react'
import {shallow} from 'enzyme'
import Footer from './Components/Footer'

import App from './App'

it ('Should render the component', () =>{
    const wrapper = shallow(<App />)
    const footer = wrapper.find(Footer)
    

    expect(footer.exists()).toBe(true)
    
} )