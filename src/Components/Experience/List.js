import Card from './Card'
import React from 'react'
import experiences from '../../res/experience.json'
import map from 'lodash/map'

const List = () => map(experiences, ({ company, points, technologies, term, position }) => <Card company={company} experiencePoints={points} key={`${company}-${position}`} position={position} technologies={technologies} term={term} />)

export default List
