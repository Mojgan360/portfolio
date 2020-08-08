import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../images/avatar.jpg'

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

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: 'var(--mainPink)',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'var(--mainLava)',
  },
}))

const menuItems = [
  { listIcon: <Home />, listText: 'Home', listPath: '/' },
  { listIcon: <AssignmentInd />, listText: 'Skill', listPath: '/resume' },
  { listIcon: <Apps />, listText: 'Portfolio', listPath: '/Portfolio' },
  { listIcon: <ContactMail />, listText: 'Contacts', listPath: '/contact' },
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
            <ListItem key={index} component={Link} to={item.listPath}>
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
        <AppBar position='static' style={{ background: 'var(--mainPink)' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('show', true)}>
              <ArrowBackOutlined style={{ color: 'green' }} />
            </IconButton>
            <Typography style={{ color: 'var(--mainLava)' }} variant='h5'>
              Portfolio
            </Typography>
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
