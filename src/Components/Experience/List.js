import Card from './Card'
import React from '../../../node_modules/react'
import experiences from '../../assets/res/experience.json'
import map from '../../../node_modules/lodash/map'

const List = () => map(experiences, ({ company, points, technologies, term, position }) => <Card company={company} experiencePoints={points} key={`${company}-${position}`} position={position} technologies={technologies} term={term} />)

export default List
