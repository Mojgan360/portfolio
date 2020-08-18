import React from 'react'

import ProgressBar from '../layouts/MainProgressBar'
import git from '../../images/git.png'
import test from '../../images/test.jpg'
import photoshop from '../../images/photoshop.png'

import aws from '../../images/aws.png'

//skill & Experience
//material-ui
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'block',
    justifyContent: 'center',
    maxWidth: 190,
    margin: '1rem',

    // background: 'var(--LightPink)',
  },

  timeLineItem: {
    background: 'var(--mainWhite)',
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
        'var(--mainPink) var(--primaryColor) transparent transparent',
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
          'transparent  transparent var(--mainPink) var(--primaryColor)',
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
const Others = ({
  percentage,
  trackPathColor,
  hollowBackgroundColor,
  fontColor,
  children,
}) => {
  const classes = useStyle()

  return (
    <>
      {/* start contains */}
      <Box component='div' className={classes.timeLineItem}>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='center'
          alignContent='center'
        >
          {/* ************* Start AWS***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar variant='square' src={aws} className={classes.avatar} />
              }
              title='AWS'
              subheader='DevOps'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='50'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#F5992F'
              />
            </CardContent>
          </Card>
          {/* ************* End AWS***************** */}
          {/* ************* Start GitHub***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar variant='square' src={git} className={classes.avatar} />
              }
              title='Git'
              subheader='Github'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='80'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#EE512F'
              />
            </CardContent>
          </Card>
          {/* ************* End GitHub***************** */}
          {/* ************* Start Test***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={test}
                  className={classes.avatar}
                />
              }
              title='Testing'
              // subheader='Github'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='50'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#F30D35'
              />
            </CardContent>
          </Card>
          {/* ************* End Test***************** */}
          {/* ************* Start Photoshop***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={photoshop}
                  className={classes.avatar}
                />
              }
              title='Photoshop'
              // subheader='Github'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='55'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#011F35'
              />
            </CardContent>
          </Card>
          {/* ************* End Photoshop***************** */}
        </Grid>
      </Box>
    </>
  )
}

export default Others
