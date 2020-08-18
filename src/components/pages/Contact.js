import React from 'react'
import Title from '../layouts/Title'
import { withStyles, makeStyles } from '@material-ui/core/styles'

import { TextField, Grid, Typography, Box, Button } from '@material-ui/core'
// import TextareaAutosize from '@material-ui/core/TextareaAutosize'
// import TextField from '@material-ui/core/TextField';

import SendIcon from '@material-ui/icons/Send'

//
//CSS
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100vh',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
    position: 'relative',
  },
  button: {
    marginTop: '1rem',
    // color: 'var(--mainPink)',
    borderColor: 'var(--mainLava)',
  },
})
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
      <Title title='Contact me' center />

      <Grid container justify='center'>
        <Box
          component='form'
          action='https://formspree.io/mojgan360@gmail.com'
          method='POST'
        >
          <Typography varient='h5'>Contact me</Typography>
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

          <TextField
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
            variant='outlined'
          />
          <Button
            className={classes.button}
            variant='outlined'
            fullWidth={true}
            color='var(--mainLava)'
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
