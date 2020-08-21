import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid, Box } from '@material-ui/core'

import Title from '../layouts/Title'
import merciapp from '../../images/merciapp.png'
import devtodev from '../../images/devtodev.png'
import ciccishop from '../../images/ciccishop.png'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  mainContainer: {
    backgroundColor: 'var(--mainPrimary)',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
    display: 'inline - block',
    position: 'relative',
    cursor: 'pointer',
  },
})
const Portfolio = () => {
  const classes = useStyles()

  return (
    <div id='portfolio' className={classes.root}>
      <Title title='My Works' center />
      <Box component='div' className={classes.mainContainer}>
        <Grid container justify='center'>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='220'
                  image={devtodev}
                  title='MERN'
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    DevToDev App
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    An app for developers where they can share comments, and
                    share experiences for help together.
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='textSecondary'
                    component='p'
                  >
                    <br /> MERN: MongoDb, Express, React, Node
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href='https://merciapp.herokuapp.com/'
                  size='small'
                  color='primary'
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='220'
                  image={merciapp}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Merci App
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    It's time for our pets to have their instagram account, and
                    share happiness through their nice pics, just create an
                    account, follow other pets account, see nice pictures and
                    have a great day!
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='textSecondary'
                    component='p'
                  >
                    <br /> MERN: MongoDb, Express, React, Node
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href='https://merciapp.herokuapp.com/'
                  size='small'
                  color='primary'
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='220'
                  image={ciccishop}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Cicci-shop App
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    A tech store app, Frontend: JavaScript, React, Redux, HTML,
                    CSS
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    color='textSecondary'
                    component='p'
                  >
                    <br />
                    Frontend: JavScript, React, Redux, HTML, CSS
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href='https://cicci-shop.netlify.app'
                  size='small'
                  color='primary'
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Portfolio
