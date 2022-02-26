import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import { Main, Card, Label, Input, Form } from '@Components/index'

import styled from 'styled-components'

import Head from 'next/head'

const InputButton = styled(Input)`
  background-color: #1e90ff;
  margin-top: 3rem;
  width: 100%; 
  padding: 1.3rem;
  font-size: 100%;
  font-weight: 500;
  cursor: pointer;
`;

const InputLabel = styled(Label)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 19px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 29px;
  color: #585858;
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
          <Form onSubmit={submitForm} style={{width: '25vw'}}>
            <InputLabel>Email</InputLabel>
            <Input placeholder="Email address" />
            <InputLabel>Password</InputLabel>
            <Input placeholder="Password" type="password" />
            <InputButton type="submit"></InputButton>
          </Form>
        </Card>
      </Main>
    </div>
  )
}

export default Home
