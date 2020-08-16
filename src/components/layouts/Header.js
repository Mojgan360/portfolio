import React from 'react'
import Typed from 'react-typed'

//material-ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
  banner: {
    margin: '0 auto',
    display: 'inline-block',
    padding: '2rem 2rem 0.5rem 2rem',
    background: 'rgba(0, 0, 0, 0.55)',
  },
  spand: {
    fontSize: '.2em',
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '300',
    letterSpacing: ' 5px',
    position: 'absolute',

    top: '-20%',
    right: '10%',
    fontFamily: 'Playfair Display',
  },
  firtLetter: {
    fontSize: '2em',
    color: ' #fff',
    fontFamily: 'Playfair Display',
    paddingLeft: '2rem',
  },

  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    fontFamily: 'Playfair Display',
    fontSize: '6em',
    color: ' #fff',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '400',
    position: 'relative',
    letterSpacing: '3px',
    lineHeight: '1.1em',
    border: '1px solid #fff',
    paddingRight: '7rem',
  },
  subtitle: {
    color: 'var(--mainPink)',
    fontFamily: 'Playfair Display',

    marginBottom: '3rem',
  },
}))
const Header = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} container>
      <Box className={`${classes.typedContainer} ${classes.banner}`}>
        <Typography
          className={`${classes.title} ${classes.paper} `}
          variant='h2'
        >
          <span className={classes.firtLetter}>M</span>OJGAN
          <span className={classes.spand}>System Developer</span>
        </Typography>
        <br />
        <Typography className={classes.subtitle} variant='h5'>
          <Typed
            strings={['I Want To Make Things That Make Difference']}
            typeSpeed={80}
            // backSpeed={60}
            // loop
          ></Typed>
        </Typography>
      </Box>
    </Grid>
  )
}

export default Header
