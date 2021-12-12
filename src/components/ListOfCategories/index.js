import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import Datajson from '../../Data/db'

export const ListOfCategories = () => {
  return (
    <List>
      {Datajson.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
