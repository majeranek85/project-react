import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqData} from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image}/>
    <div dangerouslySetInnerHTML={{__html: faqData.description}}></div>
  </Container>
);

export default FAQ;