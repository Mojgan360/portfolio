import React from 'react'
import { Link } from 'react-scroll'

//material-ui
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import AssignmentInd from '@material-ui/icons/AssignmentInd'

import Home from '@material-ui/icons/Home'
import Apps from '@material-ui/icons/Apps'
import Face from '@material-ui/icons/Face'

import ContactMail from '@material-ui/icons/ContactMail'

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    flexGrow: 1,

    zIndex: 1000,
  },
  menuToolbar: {
    width: '100vw',
    backgroundColor: 'var(--mainPink)',
  },

  listItem: {
    color: 'var(--mainLava)',
  },
  menuText: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}))

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: 'home' },
  { listIcon: <Face />, listText: 'About', listPath: 'about' },
  { listIcon: <AssignmentInd />, listText: 'Skill', listPath: 'resume' },
  { listIcon: <Apps />, listText: 'Portfolio', listPath: 'portfolio' },
  { listIcon: <ContactMail />, listText: 'Contacts', listPath: 'contact' },
]

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position='sticky' className={classes.menuSliderContainer}>
      <Toolbar className={classes.menuToolbar}>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            component={Link}
            to={item.listPath}
          >
            <IconButton className={classes.listItem}>
              {item.listIcon}
            </IconButton>
            <Typography className={`${classes.listItem} ${classes.menuText}`}>
              {item.listText}
            </Typography>
          </ListItem>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
