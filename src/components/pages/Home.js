import React from 'react'
import Header from '../layouts/Header'
import Particles from 'react-particles-js'

import { makeStyles } from '@material-ui/core/styles'
import bg from '../../images/bg.jpg'
const useStyles = makeStyles((theme) => ({
  particlesCanva: {
    position: 'absolute',
    opacity: '0.3',
    backgroundImage: `url(${bg}) `,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}))

const Home = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Header />

      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato',
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
                sync: true,
              },
            },
            color: {
              value: '#ff6699',
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      >
        {children}
      </Particles>
    </>
  )
}

export default Home
