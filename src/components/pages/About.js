import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import bonjo from '../../images//avatar.png'
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
  },
  avatar: {
    objectFit: 'cover',
    height: ' 55vh',
    width: '100vw',
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} id='about'>
      <Title title='about me' center />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Avatar src={bonjo} variant='square' className={classes.avatar} />
        </Grid>

        <Grid item xs={12} sm={10}>
          {' '}
          <Typography variant='h5' className={classes.paper}>
            {' '}
            I am a full-stack developer who is passionate with interface design.
            My interests range from back-side, front-end, system management to
            mobile applications. As you can see, I am interested in all parts of
            application development. Now I am focusing on MERN stack.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default About
