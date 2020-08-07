import React from 'react'
import avatar from '../../avatar.jpg'
import Typed from 'react-typed'

//material-ui
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography, Box } from '@material-ui/core'
import { Height } from '@material-ui/icons'

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
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(1),
  },
  title: {
    color: '#EFBCD5',
  },
  subtitle: {
    color: '#ff6699',
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

      <Typography className={classes.title} variant='h4'>
        <Typed strings={['Mojgan Farmahini  ']} typeSpeed={40}></Typed>
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant='h5'>
        <Typed
          strings={[
            'System Utvecklare-Java ',
            'Web Utvecklare ',
            'MERN Stack ',
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
