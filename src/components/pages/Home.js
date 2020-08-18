import React from 'react'
import bg from '../../images/bg-gray.jpg'
import Header from '../layouts/Header'

//material-ui

import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
    height: ' 100vh',
    width: '100vw',
  },
})

const Home = ({ children }) => {
  const classes = useStyles()
  return (
    <div id='home'>
      <Header />

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            className={classes.media}
            height='100vh'
            image={bg}
            title='Contemplative Reptile'
          />
        </CardActionArea>
      </Card>
    </div>
  )
}
export default Home
