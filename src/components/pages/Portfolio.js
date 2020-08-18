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
import img1 from '../../images/html-css-javascript.jpg'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: 'var(--mainPrimary)',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
})
const Portfolio = () => {
  const classes = useStyles()
  return (
    <div id='portfolio' className={classes.root}>
      <Box component='div' className={classes.mainContainer}>
        <Grid container justify='center'>
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={img1}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Lizard
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2*/}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={img1}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Lizard
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 1 */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={img1}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Lizard
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size='small' color='primary'>
                  Share
                </Button>
                <Button size='small' color='primary'>
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
