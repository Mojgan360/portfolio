import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import bonjo from '../../images/avatar.png'

import Title from '../layouts/Title'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginLeft: '5rem',
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontFamily: 'Playfair Display',
    marginBottom: '6rem',
  },
  contains: {},
  media: {
    position: 'relative',
    width: '100vw',
    height: '95%',
    padding: '0 1.5rem 0 1.5rem',
    top: 0,
    left: 0,
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} id='about'>
      <Title title='about me' center />
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Avatar src={bonjo} variant='square' className={classes.media} />
        </Grid>

        <Grid item xs={12} sm={10}>
          {' '}
          <Typography variant='h5' className={classes.paper} style={{'letter-spacing': '1px'}}>
            {' '}
            I have experience working as a frontend developer, full-stack developer, and interface designer. My interests include mobile applications as well as the back-end, front-end, and system management. You can tell that I am curious about every aspect of application development.
 I was born in Tehran, Iran and is currently living in Malmo, Sweden.
I am a passionate individual that is highly motivated, process-oriented, and enjoys challenges and discovering new things. I have a background in graphics and programming, and in my own time I like painting and photography.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
