import React from 'react'

//skill & Experience
//material-ui
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: 'green',
  },
  timeLine: {
    background: 'pink',
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',

    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid red',
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
    background: '#ccc',
    padding: '1rem',
    //??????
    borderBottom: '2px solid cyan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      //??????
      borderColor: 'var(--mainBlack) var(--mainBlack) transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'cyan',
        //???????
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.624rem',
        //???????
        borderColor: 'transparent  transparent blue blue',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'var(--mainLava)',
    color: 'var(--mainPink)',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      background: 'yellow',
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
  subHeading: {
    color: 'var(--mainGrey)',
    padding: '0',
    textTransform: 'uppercase',
  },
}))
const Resume = () => {
  const classes = useStyle()
  return (
    <>
      <Box component='header' className={classes.mainContainer}>
        <Typography varient='h4' align='center'>
          Working Experience
        </Typography>

        <Box component='div' className={classes.timeLine}>
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2013
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              Teaching and training Java{' '}
            </Typography>
            <Typography variant='body1' align='center'>
              Java developer
            </Typography>
            <Typography variant='subtitle1' align='center'>
              web Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              sapiente praesentium, blanditiis id, officiis accusantium eius
              repellendus reprehenderit optio velit cupiditate aut incidunt cum
              alias sit ipsam quibusdam ullam repellat.
            </Typography>
          </Box>
          {/* //// */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2015
          </Typography>
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              web designer
            </Typography>
            <Typography variant='body1' align='center'>
              web designer
            </Typography>
            <Typography variant='subtitle1' align='center'>
              web Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              sapiente praesentium, blanditiis id, officiis accusantium eius
              repellendus reprehenderit optio velit cupiditate aut incidunt cum
              alias sit ipsam quibusdam ullam repellat.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Resume
