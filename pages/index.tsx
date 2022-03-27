import type { NextPage } from 'next'
import Head from 'next/head'
import styled from "styled-components";
import {Container, Row, Col, Card} from 'react-bootstrap';

import HeaderTop from "../components/headTop";
import Batch from "../components/batch";
import FooterBox from "../components/footerBox";

const MainBox = styled.div`
    display: flex;
  flex-grow: 1;
`

const BgBox = styled(Container)`
  margin-top: 30px;
`

const MainContent =styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const CardBox = styled(Card)`
  border:0;
  box-shadow: 0 0 5px #ccc;
  border-radius: 6px;
`


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Polkadot wallet generator</title>
        <meta name="description" content="Polkadot wallet generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContent >
          <HeaderTop />
          <MainBox>
              <BgBox>
                  <Row>
                      <Col md={12} xs={12}>
                          <CardBox body>
                              <Batch />
                          </CardBox>
                      </Col>
                  </Row>
              </BgBox>
          </MainBox>
          <FooterBox />
      </MainContent>


    </div>
  )
}

export default Home
