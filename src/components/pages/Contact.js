import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid, Typography, Box } from '@material-ui/core'

//CSS
const InputField = withStyles({
  root: {
    '& lable.mui-focused': {
      color: 'tomato',
    },
  },
})(TextField)

const Contact = () => {
  return (
    <Box component='div'>
      <Grid cintainer justify='center'>
        <Box component='form'>
          <Typography varient='h5' contact me></Typography>
          <InputField fullWidth={true} lable='Name' variant='outlined' />
        </Box>
      </Grid>
    </Box>
  )
}

export default Contact
