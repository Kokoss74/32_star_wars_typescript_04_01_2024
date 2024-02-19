import React from 'react'
import Hero from '../components/main/Hero'
import DreamTeam from '../components/main/DreamTeam'
import FarGalaxy from '../components/main/FarGalaxy'
import { withHeroId } from '../components/hoc/withHeroId'
import { navItems } from '../utils/constants'

const Home = () => {
  return (
    <main className="clearfix">
        <Hero />
        <DreamTeam />
        <FarGalaxy />
    </main>
  )
}

export default withHeroId(navItems[0].route)(Home);