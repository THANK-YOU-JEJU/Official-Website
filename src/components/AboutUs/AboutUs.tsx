import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import AboutUsMain from './AboutUsMain'
import AboutUsHero from './AboutUsHero'

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <AboutUsHero></AboutUsHero>
      <AboutUsMain></AboutUsMain>
      <Footer />
    </div>
  )
}

export default AboutUs