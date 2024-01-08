import React from 'react'
import Hero from '../components/main/Hero'
import DreamTeam from '../components/DreamTeam'
import FarGalaxy from '../components/main/FarGalaxy'

const Home = () => {
  return (
    <main className="clearfix">
        <Hero />
        <DreamTeam />
        <FarGalaxy />
    </main>
  )
}

export default Home