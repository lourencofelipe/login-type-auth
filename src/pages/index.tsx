import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import { Main, Card, Label, Input, Form } from '@Components/index'

import styled from 'styled-components'

import Head from 'next/head'

const InputButton = styled(Input)`
  background-color: #1e90ff;
  width: 100%;
`;

const InputLabel = styled(Label)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 16px;
  font-weight: 400;
  color: black;
`

const Home: NextPage = () => {

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
  }

  return (
    <div> 
       <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Label>Welcome back!</Label>
        <Card>
          <Form onSubmit={submitForm}>
            <InputLabel>Email</InputLabel>
            <Input placeholder="Email address" />
            <InputLabel>Password</InputLabel>
            <Input placeholder="Password" />
            <InputButton
              type="submit"/>
          </Form>
        </Card>
      </Main>
    </div>
  )
}

export default Home
