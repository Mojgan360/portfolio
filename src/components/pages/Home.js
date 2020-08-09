import React from 'react'
import bg from '../../images/bg-gray.jpg'
import Header from '../layouts/Header'
import Resume from '../pages/Resume'

//material-ui

import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  maxWidth: 345,

  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  banner: {
    position: 'relative',
    color: 'yellow',
    background: 'blue',
  },
})

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Contemplative Reptile'
            className={classes.media}
            height='vh'
            image={bg}
            title='Contemplative Reptile'
          />

          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Lizard
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Resume />
    </>
  )
}
export default Home
