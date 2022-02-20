import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'

import { Main, Card, Label, Input } from '@Components/index'

import styled from 'styled-components'

import Head from 'next/head'

const InputButton = styled(Input)`
  background-color: #1e90ff;
`;

const Home: NextPage = () => {
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
          <form style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}
            onSubmit={event => { 
              event.preventDefault();
            }}>
            <Input placeholder="Email address" />
            <Input placeholder="Password" />
            <InputButton
              type="submit"/>
          </form>
        </Card>
      </Main>
    </div>
  )
}

export default Home
