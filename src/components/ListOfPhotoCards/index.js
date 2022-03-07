import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'

const WITH_PHOTOS = gql`
  # Write your query or mutation here
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const ListOfPhotoCardsComponent = () => {
  const { data, loading, error } = useQuery(WITH_PHOTOS)
  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>

  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

export const ListOfPhotoCards = ListOfPhotoCardsComponent
