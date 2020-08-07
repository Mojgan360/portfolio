import React from 'react'
//material-ui
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from '@material-ui/core'

import {
  ArrowBackOutlined,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons'

import avatar from '../../avatar.jpg'
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#2E294E',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: '#EFBCD5',
  },
}))

const menuItems = [
  { listIcon: <Home />, listText: 'Home' },
  { listIcon: <AssignmentInd />, listText: 'Resume' },
  { listIcon: <Apps />, listText: 'Portfolio' },
  { listIcon: <ContactMail />, listText: 'Contacts' },
]

const Navbar = () => {
  const classes = useStyles()
  const [state, setStae] = React.useState({
    show: false,
  })

  const toggleSlider = (slider, open) => () => {
    setStae({ ...state, [slider]: open })
  }
  const sliderList = (sideSlider) => {
    return (
      <Box
        className={classes.menuSliderContainer}
        component='div'
        onClick={toggleSlider(sideSlider, false)}
      >
        <Avatar className={classes.avatar} src={avatar} alt='' />
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText className={classes.listItem}>
                {item.listText}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }
  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#ccc' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('show', true)}>
              <ArrowBackOutlined style={{ color: 'green' }} />
            </IconButton>
            <Typography variant='h5'>Portfolio</Typography>
            <Drawer
              open={state.show}
              anchor='right'
              onClick={toggleSlider('show', false)}
            >
              {sliderList('show')}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
