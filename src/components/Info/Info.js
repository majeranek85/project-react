import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoData} from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} image={infoData.image} />
    {infoData.description}
  </Container>
);

export default Info;