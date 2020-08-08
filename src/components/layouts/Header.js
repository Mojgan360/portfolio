import React from 'react'
import avatar from '../../images/avatar.jpg'
import Typed from 'react-typed'

//material-ui
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vm',
    textAlign: 'center',
    zIndex: 1,
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    color: 'var(--primaryColor)',
  },
  subtitle: {
    color: 'var(--mainLava)',

    marginBottom: '3rem',
  },
}))
const Header = () => {
  const classes = useStyles()

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
        <Avatar className={classes.avatar} src={avatar} alt='avatar' />
      </Grid>

      <Typography className={classes.title} variant='h5'>
        <Typed strings={['Mojgan Farmahini  ']} typeSpeed={40}></Typed>
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant='h4'>
        <Typed
          strings={[
            'System Developer- JAVA ',
            'MERN Stack Developer',
            'Front-End Developer',
            'Web Developer ',
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
      </Typography>
    </Box>
  )
}

export default Header
