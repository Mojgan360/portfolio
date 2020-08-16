import React from 'react'
import ProgressBar from '../layouts/MainProgressBar'
import Title from '../layouts/Title'

//skill & Experience
//material-ui
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: 'var(--mainPrimary)',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid var(--mainPink)',
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
    //??????
    borderBottom: '2px solid var(--primaryColor)',
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
      borderColor: 'var(--mainLava) var(--mainPink) transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'var(--mainPink)',
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
    background: 'var(--mainPink)',
    color: 'var(--mainLava)',
    lineHeight: 1,
    padding: '0.5rem 0 1rem',
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
  subHeading: {
    color: 'var(--mainPurple)',
    padding: '0',
    textTransform: 'uppercase',
  },
}))
const Resume = ({ id, percentage, hollowBackgroundColor, fontColor }) => {
  const classes = useStyle()
  return (
    <div id='resume'>
      <Box id={id} component='header' className={classes.mainContainer}>
        <Typography varient='h4' align='center'>
          <Title title='Skills' center />
        </Typography>

        <Box component='div' className={classes.timeLine}>
          {/* Start of Part 1- title */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            JS
          </Typography>
          {/* End of Part 1- title */}
          {/* Start of Part 1- container */}
          <Box component='div' className={classes.timeLineItem}>
            {/* <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              Front-end web development
            </Typography>
            <Typography variant='body1' align='center'>
              Javascript{' '}
            </Typography> */}
            <Grid container spacing={0} alignItems='center' justify='center'>
              <Grid item xs={6}>
                <ProgressBar
                  fontColor='var(--mainWhite)'
                  hollowBackgroundColor='var(--mainLava)'
                  trackPathColor='var(--mainPink)'
                  percentage='90'
                />
              </Grid>
            </Grid>
          </Box>
          {/* End of Part 1- container */}
          {/* End of part 1 */}

          {/* ********************2********************2********************      */}
          {/* Start of Part 2- title */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            HTML
          </Typography>
          {/* End of Part 2- title */}
          {/* Start of Part 2- container */}
          <Box component='div' className={classes.timeLineItem}>
            <Grid container spacing={0} alignItems='center' justify='center'>
              <Grid item xs={6}>
                <ProgressBar
                  fontColor='var(--mainWhite)'
                  hollowBackgroundColor='var(--mainLava)'
                  trackPathColor='var(--mainPink)'
                  percentage='90'
                />
              </Grid>
            </Grid>
          </Box>
          {/* End of Part 2- container */}
          {/* End of part 2 */}

          {/* ********************3**********3**********3********************      */}
          {/* Start of Part 1- title */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            CSS
          </Typography>
          {/* End of Part 3- title */}
          {/* Start of Part 3- container */}
          <Box component='div' className={classes.timeLineItem}>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
            >
              web developer
            </Typography>
            <Typography variant='body1' align='center'>
              Java developer...
            </Typography>
            <Grid container spacing={0} alignItems='center' justify='center'>
              <Grid item xs={6}>
                <ProgressBar
                  fontColor='var(--mainWhite)'
                  hollowBackgroundColor='var(--mainLava)'
                  trackPathColor='var(--mainPink)'
                  percentage='90'
                />
              </Grid>
            </Grid>
          </Box>
          {/* End of Part 3- container */}
          {/* End of part 3 */}
        </Box>
      </Box>
    </div>
  )
}

export default Resume
