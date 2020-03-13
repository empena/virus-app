import React from 'react';
import { Grid, Image, Divider, Header } from 'semantic-ui-react';
import ImageOne from './ImageOne.png';
import ImageTwo from './ImageTwo.png';
import ImageThree from './ImageThree.png';
import ImageFour from './ImageFour.png';
import ImageFive from './ImageFive.png';
import ImageSix from './ImageSix.png';

const About = () => (
  <>
  <br/>
  <Header as='h1' textAlign='center'>About Viruses</Header>
  <br/>
  <br/>
  <br/>
  <br/>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src={ImageOne}/>< br/>
        <p>Since Dmitri Ivanovsky's 1892 article describing a non-bacterial pathogen infecting tobacco plants, and the discovery of the tobacco mosaic virus by Martinus Beijerinck in 1898, about 5,000 virus species have been described in detail,of the millions of types of viruses in the environment. Viruses are found in almost every ecosystem on Earth and are the most numerous type of biological entity. The study of viruses is known as virology, a sub-speciality of microbiology.</p>
      </Grid.Column>
      <Grid.Column>
      <Image src={ImageTwo}/>< br/>
        <p>While not inside an infected cell or in the process of infecting a cell, viruses exist in the form of independent particles, or virions, consisting of: (i) the genetic material, i.e. long molecules of DNA or RNA that encode the structure of the proteins by which the virus acts; a protein coat, the capsid, which surrounds and protects the genetic material; and in some cases an outside envelope of lipids. The shapes of these virus particles range from simple helical and icosahedral forms to more complex structures. Most virus species have virions too small to be seen with an optical microscope, about one hundredth the size of most bacteria.</p>
      </Grid.Column>
      <Grid.Column>
      <Image src={ImageThree}/>< br/>
        <p>Viruses may have once been small cells that parasitised larger cells. Over time, genes not required by their parasitism were lost. The bacteria rickettsia and chlamydia are living cells that, like viruses, can reproduce only inside host cells. They lend support to this hypothesis, as their dependence on parasitism is likely to have caused the loss of genes that enabled them to survive outside a cell. This is also called the 'degeneracy hypothesis', or 'reduction hypothesis'.</p>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
      <Image src={ImageFour}/> < br/>
        <p>Some viruses may have evolved from bits of DNA or RNA that "escaped" from the genes of a larger organism. The escaped DNA could have come from plasmids (pieces of naked DNA that can move between cells) or transposons (molecules of DNA that replicate and move around to different positions within the genes of the cell). Once called "jumping genes", transposons are examples of mobile genetic elements and could be the origin of some viruses. They were discovered in maize by Barbara McClintock in 1950. This is sometimes called the 'vagrancy hypothesis', or the 'escape hypothesis'.</p>
      </Grid.Column>
      <Grid.Column>
      <Image src={ImageFive}/>< br/>
        <p>Opinions differ on whether viruses are a form of life, or organic structures that interact with living organisms.[66] They have been described as "organisms at the edge of life",[8] since they resemble organisms in that they possess genes, evolve by natural selection, and reproduce by creating multiple copies of themselves through self-assembly. Although they have genes, they do not have a cellular structure, which is often seen as the basic unit of life. Viruses do not have their own metabolism, and require a host cell to make new products.</p>
      </Grid.Column>
      <Grid.Column>
      <Image src={ImageSix}/>< br/>
        <p>Some species of virus envelop themselves in a modified form of one of the cell membranes, either the outer membrane surrounding an infected host cell or internal membranes such as nuclear membrane or endoplasmic reticulum, thus gaining an outer lipid bilayer known as a viral envelope. This membrane is studded with proteins coded for by the viral genome and host genome; the lipid membrane itself and any carbohydrates present originate entirely from the host. The influenza virus and HIV use this strategy. Most enveloped viruses are dependent on the envelope for their infectivity.</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </>
)

export default About;