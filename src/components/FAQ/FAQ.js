import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {FAQData} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.title} image={FAQData.image}/>
    {FAQData.description}
  </Container>
);

export default FAQ;