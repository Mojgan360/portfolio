import React from 'react'
import Typed from 'react-typed'

//material-ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'static',
  },
  typedContainer: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vm',
    textAlign: 'center',
    zIndex: 1,
  },
  banner: {
    padding: '2rem 2rem 0.5rem 2rem',
    background: 'rgba(0, 0, 0, 0.55)',
  },
  spand: {
    fontSize: '1.4rem',
    color: '#fff',
    fontStyle: 'italic',
    fontWeight: '500',
    letterSpacing: '5px',
    position: 'absolute',

    top: '-20%',
    right: '5%',
    fontFamily: 'Playfair Display',
    [theme.breakpoints.down('xs')]: {
      letterSpacing: ' 1px',
      fontSize: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: ' 3px',
      right: '5%',
    },
  },
  firstLetter: {
    fontSize: '2em',
    color: ' #fff',
    fontFamily: 'Playfair Display',
    paddingLeft: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5em',
    },
  },

  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  title: {
    display: 'fixed',
    fontFamily: 'Playfair Display',
    fontSize: '5em',
    color: ' #fff',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: '400',
    position: 'relative',
    letterSpacing: '5px',
    lineHeight: '1.1em',
    border: '1px solid #fff',

    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'var(--primaryColor)',
      fontSize: '3.5em',
    },
  },
  subtitle: {
    color: 'var(--mainPink)',
    fontFamily: 'Playfair Display',
    letterSpacing: ' 4px',

    marginBottom: '5rem',
    [theme.breakpoints.down('xs')]: {
      letterSpacing: ' 3px',
      fontSize: '1.5em',
    },
  },
}))
const Header = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container item xs={6}>
        <Grid
          item
          xs={12}
          className={`${classes.typedContainer} ${classes.banner}`}
        >
          <Typography
            className={`${classes.title} ${classes.paper} `}
            variant='h2'
          >
            <span className={classes.firstLetter}>M</span>OJGAN
            <span className={classes.spand}>System Developer</span>
          </Typography>
          <br />
          <Typography className={classes.subtitle} variant='h5'>
            <Typed
              strings={['I Want To Make Things That Make Difference']}
              typeSpeed={80}
            ></Typed>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Header
