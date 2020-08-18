import React from 'react'
import Title from '../layouts/Title'
import Frontend from '../layouts/Frontend'
import Backend from '../layouts/Backend'
import Database from '../layouts/Database'
import Others from '../layouts/Others'

//skill & Experience
//material-ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  mainContainer: {
    background: 'var(--mainWhite)',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',

    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '2px solid var(--primaryColor)',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },

    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid var(--mainLava)',
    position: 'relative',
    margin: '1rem 1rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      //left: '1rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      //??????
      borderColor:
        'var(--mainLava) var(--primaryColor) transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'var(--mainLava)',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.624rem',
        borderColor:
          'transparent  transparent var(--mainLava) var(--primaryColor)',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '16rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.3rem',
    fontFamily: 'Playfair Display',

    background: 'var(--primaryColor)',
    color: 'var(--mainLava)',
    lineHeight: 1,
    padding: '1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        margin: '0 auto',
        float: 'none',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
}))
const Resume = () => {
  const classes = useStyle()
  return (
    <div id='resume'>
      <Box
        component='div'
        className={`${classes.mainContainer} ${classes.root}`}
      >
        <Title title='skills' center />
        {/* ******* Start Box-header******** */}
        <Box component='header'>
          {/* ******* Start Box-TimeLine  1******** */}
          <Box component='div' className={classes.timeLine}>
            {/* start of banner */}
            <Typography
              varient='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              Front-end DEV
            </Typography>
            {/* Start of Frontend */}
            <Frontend />
            {/* End of Frontend */}
            <Typography
              varient='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              Back-end DEV
            </Typography>
            {/* end of Backend */}
            {/* start Backend */}
            <Backend />
            {/* end contains */}
          </Box>
          {/* *******  End of Box-TimeLine  1 ******** */}

          {/* ******* Start Box-TimeLine  2 ******** */}
          <Box component='div' className={classes.timeLine}>
            {/* start of banner */}
            <Typography
              varient='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              Database
            </Typography>
            {/* Start of Frontend */}
            <Database />
            {/* End of Frontend */}
            <Typography
              varient='h2'
              className={`${classes.timeLineYear} ${classes.timeLineItem}`}
            >
              Others
            </Typography>
            {/* end of Backend */}
            {/* start Backend */}
            <Others />
            {/* end contains */}
          </Box>
          {/* *******  End of Box-TimeLine  2 ******** */}

          {/* ******* Start Box-TimeLine  2 ******** */}
        </Box>
        {/* ******* end Box-header******** */}
        <br />
      </Box>
    </div>
  )
}

export default Resume
