import React from 'react';
import { Segment, Image, Header, Divider } from 'semantic-ui-react'
import BillboardOne from './BillboardOne.png';
import BillboardTwo from './BillboardTwo.png';
import BillboardThree from './BillboardThree.png';

const Home = () => (
  <>
  <br/>
  <Header as='h1' textAlign='center'>Virus</Header>
  <br/>
  <Divider clearing />
  <br/>
  <br/>
  <br/>
  <Image src={BillboardOne}/>< br/>
  <Header as='h3' textAlign='center'>History</Header>
    <p>Louis Pasteur was unable to find a causative agent for rabies
      and speculated about a pathogen too small to be detected by microscopes.
      In 1884, the French microbiologist Charles Chamberland invented the Chamberlandfilter
      with pores small enough to remove all bacteria from a solution passed through it.
      In 1892, the Russian biologist Dmitri Ivanovsky used this filter to study what is now
      known as the tobacco mosaic virus: crushed leaf extracts from infected tobacco plants
      remained infectious even after filtration to remove bacteria. Ivanovsky suggested
      the infection might be caused by a toxin produced by bacteria, but did not pursue the idea.</p>
    <br/>
    <br/>
    <br/>
  <Image src={BillboardTwo}/>< br/> 
  <Header as='h3' textAlign='center'>Etymology</Header>
    <p>In the early 20th century, the English bacteriologist Frederick Twort discovered a
      group of viruses that infect bacteria, now called bacteriophages, and the French-Canadian
      microbiologist Félix d'Herelle described viruses that, when added to bacteria on an agar plate,
      would produce areas of dead bacteria. He accurately diluted a suspension of these viruses and
      discovered that the highest dilutions, rather than killing all the bacteria, formed discrete
      areas of dead organisms. Counting these areas and multiplying by the dilution factor allowed
      him to calculate the number of viruses in the original suspension. Phages were heralded as a
      potential treatment for diseases such as typhoid and cholera, but their promise was forgotten
      with the development of penicillin. The development of bacterial resistance to antibiotics has
      renewed interest in the therapeutic use of bacteriophages.</p>
    <br/>
    <br/>
    <br/>
  <Image src={BillboardThree}/>< br/>
  <Header as='h3' textAlign='center'>Structure</Header>
    <p>By the end of the 19th century, viruses were defined in terms of their infectivity, their
      ability to pass filters, and their requirement for living hosts. Viruses had been grown only in
      plants and animals. In 1906, Ross Granville Harrison invented a method for growing tissue in
      lymph, and, in 1913, E. Steinhardt, C. Israeli, and R. A. Lambert used this method to grow
      vaccinia virus in fragments of guinea pig corneal tissue. In 1928, H. B. Maitland and M. C.
      Maitland grew vaccinia virus in suspensions of minced hens' kidneys. Their method was not widely adopted 
      until the 1950s when poliovirus was grown on a large scale for vaccine production.</p>
    <br/>
    <br/>
    <br/>
  </>
);

export default Home;