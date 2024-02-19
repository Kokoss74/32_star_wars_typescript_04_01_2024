import React from 'react'
import { withHeroId } from '../components/hoc/withHeroId'
import { navItems } from '../utils/constants'

const StarWars = () => {
  return (
    <div>StarWars</div>
  )
}

export default withHeroId(navItems[2].route)(StarWars);