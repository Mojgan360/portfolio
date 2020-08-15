import React from 'react'
import Title from '../layouts/Title'
import Frontend from '../layouts/Frontend'
import Backend from '../layouts/Backend'
import Database from '../layouts/Database'

import ProgressBar from '../layouts/MainProgressBar'
//skill & Experience
//material-ui
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Grid } from '@material-ui/core'

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
      border: '1px solid var(--primaryColor)',
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
    // background: 'var(--mainBlack)',
    padding: '1rem',
    // borderBottom: '2px solid var(--mainLava)',
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
      // left: '1rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      //??????
      borderColor:
        'var(--mainLava) var(--primaryColor) transparent transparent',
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
    background: 'var(--primaryColor)',
    color: 'var(--mainLava)',
    lineHeight: 1,
    padding: '0.5rem',
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
const Resume = ({
  percentage,
  trackPathColor,
  hollowBackgroundColor,
  fontColor,
  children,
}) => {
  const classes = useStyle()
  return (
    <Box
      id='resume'
      component='div'
      className={`${classes.mainContainer} ${classes.root}`}
    >
      <Title title='skills' center />

      <Box component='header'>
        <Box component='div' className={classes.timeLine}>
          {/* start of banner */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Front-end DEV
          </Typography>
          {/* end of banner */}
          <Frontend />
          {/* //// */}
          {/* start of banner */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Back -end DEV
          </Typography>
          {/* end of banner */}
          {/* start contains */}
          <Backend />
          {/* //// */}
        </Box>

        <Box component='div' className={classes.timeLine}>
          {/* start of banner */}

          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            Database{' '}
          </Typography>

          {/* end of banner */}
          {/* start contains */}
          <Database />
          {/* //// */}
          <Typography
            varient='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            To Know dev tools: git styles: material
          </Typography>
          {/* start contains */}
          <Box
            component='div'
            // className={`${classes.root} `}
            className={classes.timeLineItem}
          >
            <Grid
              container
              direction='row'
              justify='space-evenly'
              alignItems='center'
              alignContent='center'
            >
              {/* start */}
              <Box
                display='flex'
                flexWrap='nowrap'
                p={1}
                m={1}
                bgcolor='background.paper'
                css={{ maxWidth: 160 }}
              >
                <Grid item xs={4}>
                  <Typography variant='body1' align='center'>
                    DevOps
                  </Typography>
                  <ProgressBar
                    fontColor='white'
                    trackWidth='10'
                    percentage='60'
                    trackPathColor='grey'
                    trackBorderColor='grey'
                    hollowBackgroundColor='#D7361D'
                  />
                </Grid>
              </Box>
              {/* end */}
            </Grid>

            <Typography variant='subtitle1' align='center'>
              web Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              sapiente praesentium, blanditiis id, officiis accusantium eius
              repellendus reprehenderit optio velit cupiditate aut incidunt cum
              alias sit ipsam quibusdam ullam repellat.
            </Typography>
          </Box>
          {/* //// */}
        </Box>
      </Box>
    </Box>
  )
}

export default Resume
