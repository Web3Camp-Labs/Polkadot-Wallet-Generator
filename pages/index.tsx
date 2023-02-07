import type { NextPage } from 'next'
import Head from 'next/head'
import styled from "styled-components";
import {Container, Row, Col, Button} from 'react-bootstrap';

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

const CardBox = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #EDEFF0;
  padding: 30px;
`

const TopLine = styled.div`
    margin-bottom: 20px;
`

const Lft = styled.div`
    display: flex;
  align-items: center;
  .imgBox{
    width: 96px;
    height: 96px;
    background: #fff;
    border-radius: 20px;
    border: 1px solid #EDEFF0;
    padding: 13px;
    margin-right: 16px;
    box-sizing: border-box;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
`

const ButtonBox = styled.div`
    padding: 20px 0;
    text-align: right;
`

const TitleBox = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  .tit{
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
  }
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
                      <Col md={12}>
                          <TopLine>
                              <Row>
                                  <Col md={12}>
                                      <Lft>
                                          <div className="imgBox"><img src="./polkadot.png" alt=""/></div>
                                          <TitleBox>
                                              <div className="tit">Polkadot wallet generator</div>
                                              <div>Generate Polkadot Wallet Address with @Polkadot/api !</div>
                                          </TitleBox>
                                      </Lft>
                                  </Col>
                              </Row>
                          </TopLine>
                      </Col>
                      <Col md={12} xs={12}>
                          <CardBox>
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
