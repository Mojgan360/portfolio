import React from 'react'
import Title from '../layouts/Title'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { TextField, Grid, Typography, Box, Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import SendIcon from '@material-ui/icons/Send'
import bg from '../../images/bg.jpg'

//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    left: '10%',
    position: 'relative',
    marginTop: theme.spacing(8),
  },
  main: {
    height: 800,
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    margin: -24,
    padding: 24,
  },
  contactForm: {
    position: 'absolute',
    // top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '33%', // Fix IE 11 issue.
    height: 'auto',
  },
  button: {
    background: 'var(--mainLava)',
    color: 'var(--mainPink)',
    borderColor: 'var(--mainLava)',
    margin: theme.spacing(3, 0, 2),
  },
  textStyle: {
    margin: '3rem',
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontFamily: 'Playfair Display',
    marginBottom: '6rem',
  },
}))

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'var(--mainLava)',
    },
    '& label': {
      color: 'var(--primaryColor)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--mainPink)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--mainLava)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--mainPurple)',
      },
    },
  },
})(TextField)

const PositionSe = () => {
  const classes = useStyles()

  return (
    <div>
      <Title title='Contact Me' center />
      <Grid
        item
        xs={10}
        container
        spacing={3}
        id='contact'
        className={classes.root}
      >
        <Box
          className={classes.paper}
          component='form'
          action='https://formspree.io/mojgan360@gmail.com'
          method='POST'
        >
          <Typography varient='h5' className={classes.textStyle}>
            {' '}
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate me using the below form either or <br />
            <Link>mojgan360@gmail.com</Link>
          </Typography>
          <hr />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputField
                type='text'
                name='name'
                fullWidth={true}
                label='Name'
                variant='outlined'
                margin='dense'
                size='medium'
                inputProps={{ style: { color: 'var(--mainStyle)' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputField
                type='email'
                name='_replyto'
                fullWidth={true}
                label='Email'
                variant='outlined'
                margin='dense'
                size='medium'
                inputProps={{ style: { color: 'var(--mainStyle)' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                type='text'
                name='message'
                fullWidth={true}
                label='Message'
                variant='outlined'
                margin='dense'
                size='medium'
                inputProps={{ style: { color: 'var(--mainStyle)' } }}
              />
              <Button
                className={classes.button}
                variant='outlined'
                fullWidth={true}
                endIcon={<SendIcon />}
                type='submit'
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default PositionSe
