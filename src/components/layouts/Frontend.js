import React from 'react'
import ProgressBar from '../layouts/MainProgressBar'
import htmlIcone from '../../images/html5.png'
import jsIcone from '../../images/js.png'
import reactIcone from '../../images/react.png'

import reactReduxIcone from '../../images/ract-redux.png'
import cssIcone from '../../images/css.png'
import typeIcone from '../../images/type.png'
 import hooksIcone from '../../images/hooks.png'
import toolkitIcone from '../../images/toolkit.png'
import styled from '../../images/styled.png'


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
  },

  timeLineItem: {
    background: 'var(--mainWhite)',
    padding: '1rem',
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
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
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
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.624rem',
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

const Frontend = ({
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
          {/* ************* Start HTML***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={htmlIcone}
                  className={classes.avatar}
                />
              }
              title='HTML'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='90'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#F85138'
              />
            </CardContent>
          </Card>
          {/* ************* End HTML***************** */}
          {/* ************* Start CSS***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={cssIcone}
                  className={classes.avatar}
                />
              }
              title='CSS'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='90'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#2C98F0'
              />
            </CardContent>
          </Card>
          {/* ************* End CSS***************** */}
          {/* ************* Start JS***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={jsIcone}
                  aria-label='recipe'
                  className={classes.avatar}
                />
              }
              title='JavaScript'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='85'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#E8C954'
              />
            </CardContent>
          </Card>
          {/* ************* End JS***************** */}


 {/* ************* Start TypeScript ***************** */}
 <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={typeIcone}
                  aria-label='recipe'
                  className={classes.avatar}
                />
              }
              title='TypeScript'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='85'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#E8C954'
              />
            </CardContent>
          </Card>
          {/* ************* End TypeScript***************** */}


  {/* ************* Start React***************** */}
  <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={reactIcone}
                  className={classes.avatar}
                />
              }
              title='React.js'
              // subheader='React-Redux'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='80'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#6BDCF9'
              />
            </CardContent>
          </Card>
          {/* ************* End React***************** */}

          {/* ************* Start React-Redux ***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={reactReduxIcone}
                  className={classes.avatar}
                />
              }
              title='React-Redux'
              // subheader='React-Redux'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='80'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#6BDCF9'
              />
            </CardContent>
          </Card>
          {/* ************* End React-Redux***************** */}



  {/* ************* Start Hooks***************** */}
  <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={hooksIcone}
                  className={classes.avatar}
                  style={{'width': '100%'}}
                />
              }
              title='React-Hooks'
              // subheader='Styles'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='90'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#2C98F0'
              />
            </CardContent>
          </Card>
          {/* ************* End Hooks ***************** */}

  {/* ************* Start Toolkit***************** */}
  <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={toolkitIcone}
                  className={classes.avatar}
                  style={{'width': '100%'}}
                />
              }
              // title='Material-UI'
              // subheader='Styles'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='90'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#2C98F0'
              />
            </CardContent>
          </Card>
          {/* ************* End Toolkit ***************** */}

          {/* ************* Start Styled Components  ***************** */}
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={styled}
                  aria-label='recipe'
                  className={classes.avatar}
                />
              }
              title='Styled Components '
              // subheader='css'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='80'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#247ABE'
              />
            </CardContent>
          </Card>
          {/* ************* End Styled Components ***************** */}

          {/* ************* Start express***************** */}
          {/* <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  variant='square'
                  src={expressIcone}
                  className={classes.avatar}
                />
              }
              title='Express.js'
            />

            <CardContent>
              <ProgressBar
                className={classes.progress}
                fontColor='var(--mainWhite)'
                trackWidth='10'
                percentage='80'
                trackPathColor='var(--mainWhite)'
                trackBorderColor='var(--LightPink)'
                hollowBackgroundColor='#828282'
              />
            </CardContent>
          </Card> */}
          {/* ************* End express***************** */}
        
        </Grid>
      </Box>
    </>
  )
}

export default Frontend
