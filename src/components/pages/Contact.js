import React from 'react'
import Title from '../layouts/Title'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import { TextField, Grid, Typography, Box, Button } from '@material-ui/core'
import Link from '@material-ui/core/Link'

import SendIcon from '@material-ui/icons/Send'

//
//CSS
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactForm: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    background: 'var(--mainLava)',
    color: 'var(--mainPink)',
    borderColor: 'var(--mainLava)',
    margin: theme.spacing(3, 0, 2),
  },
  textStyle: {
    top: '20%',
    margin: '3rem',
    position: 'static',
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

const Contact = () => {
  const classes = useStyles()

  return (
    <Box component='div' id='contact' className={classes.root}>
      <Title title='Contact Me' center />

      <Grid
        item
        xs={12}
        sm={6}
        container
        justify='center'
        className={classes.contactForm}
      >
        <Box
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
          {/* <TextField
            name='message'
            id='outlined-full-width'
            label='Label'
            style={{ margin: 8 }}
            placeholder='Placeholder'
            helperText='Full width!'
            fullWidth
            margin='normal'
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined' */}
          {/* /> */}
          <Button
            className={classes.button}
            variant='outlined'
            fullWidth={true}
            endIcon={<SendIcon />}
            type='submit'
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contact

//***** Other solution with Styled-componet
// const StyledTextField = styled(TextField)`
//   label.focused {
//     color: green;
//   }
//   .MuiOutlinedInput-root {
//     fieldset {
//       border-color: red;
//     }
//     &:hover fieldset {
//       border-color: yellow;
//     }
//     &.Mui-focused fieldset {
//       border-color: green;
//     }
//   }
// `;
