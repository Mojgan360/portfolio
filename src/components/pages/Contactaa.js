import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

const Contact = () => {
  return (
    <div>
      <Form action='https://formspree.io/mojgan360@gmail.com' method='POST'>
        <Label>
          Your Name:
          <input type='text' name='name' />
        </Label>
        <Label>
          Your Email:
          <input type='email' name='_replyto' />
        </Label>
        <Label>
          Message:
          <Textarea name='message'></Textarea>
        </Label>
        <StyledButton type='submit'>send</StyledButton>
        {/* <input type='submit' value='Send' /> */}
      </Form>
    </div>
  )
}

export default Contact
const Textarea = styled.textarea`
  border: 1px solid #e6343b;
  padding: 1em;
  width: 100%;
`
const StyledButton = styled.button`
  background: #e6343b;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;

  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`
const Label = styled.label`
  display: block;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`
