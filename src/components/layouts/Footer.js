import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://mojgan.netlify.com/'>
        Mojgan Farmahini
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const Footer = () => {
  const classes = useStyles()

  return (
    <div>
      <footer className={classes.footer}>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'
        >
          Thanks for visiting my page.
        </Typography>
        <Copyright />
      </footer>
    </div>
  )
}

export default Footer
