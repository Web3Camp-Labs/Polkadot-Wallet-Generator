import React, {ReactNode, useState, ChangeEvent} from "react";
import {Button, FloatingLabel, Form, Spinner} from 'react-bootstrap';
import styled from "styled-components";
import {Download, ClipboardCheck} from 'react-bootstrap-icons';
import CsvDownloader from 'react-csv-downloader'

import { mnemonicGenerate,} from '@polkadot/util-crypto';
import { Keyring } from  '@polkadot/api';

const Ulbox = styled.ul`
  margin-top: 20px;
  li{
    background: #f8f8f8;
    padding: 0 20px;
    margin-bottom:20px;
    user-select: none;
    &>div{
      padding: 20px 0;
      border-bottom:1px solid #ddd;
      display: flex;
      word-break: break-all;
      &:last-child{
        border-bottom: 0;
      }
    }
    .title{
      min-width: 130px;
      display: flex;
      .titleMain{
        white-space: nowrap;
      }
      .iconbox{
         margin-right: 10px;
      }
      span{
        color: purple;
         font-family: "din_bold";
      }
    }
  }
`;

const BtnGroup = styled.div`
  display: flex;
  button{
    margin-right: 20px;
  }
`;

const Total = styled.div`
  font-family: "din_bold";
  color: purple;
  margin-top: 20px;
  background: #f8f8f8;
  padding: 20px;
  span{
    margin-right: 10px;
    color:#666;
  }
`

const LoadingBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 50px 0;
  span{
  margin-left: 20px;
  }
`

interface walletObj {
    mnemonic: string;
    address: string;
}
export default function Batch(){
    const [loading,setLoading] = useState<boolean>(false);
    const [list, setList ] = useState<walletObj[]>([]);
    const [num, setNum] = useState<number|string>('');

    const handleChange = (e: ChangeEvent) =>{
        const element = e.target as HTMLInputElement;
        setNum(parseInt(element.value))
    }

    const createWallet = async()=>{
        const keyring = new Keyring({type: 'sr25519'});
        const mnemonic: string  = mnemonicGenerate();
        const wallet = await keyring.addFromUri(`${mnemonic}`, { name: 'new keypair'});
        console.log(wallet)
        const { address } = wallet;
        return {
            address,
            mnemonic,
        } as walletObj;

    }
    const handleCreate = async() =>{
        setLoading(true)
        let arr: any[] = [...Array(num)];
        let listArr: walletObj[] = [];
        for await (let i of arr){
            let obj: walletObj = await createWallet();
            listArr.push(obj)
        }
        setLoading(false)
        setList(listArr);
    }

    return <div>
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Number of wallets created"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Number of wallets created" value={num} onChange={(e)=>handleChange(e)}/>
            </FloatingLabel>
        </div>
        <BtnGroup>
            <Button variant="flat" onClick={()=>handleCreate()}>
                Batch Create Polkadot Address
            </Button>
            {
                !!list.length && <CsvDownloader
                    datas={list as any}
                    filename={`myWallets_${list[0]?.address}`}
                    extension=".csv"> <Button variant="dark"> <Download /> Download</Button>
                </CsvDownloader>
            }

        </BtnGroup>
        <Total>
            <span> Created:</span>{list?.length}
        </Total>
        <Ulbox>


            {
                loading &&<LoadingBox>
                    <Spinner animation="border" variant="dark" /> <span>Loading...</span>
                </LoadingBox>
            }

            {
                list?.map((item,index)=>(<li key={item.address}>
                    <div>
                        <div className="title">
                            <div className="iconbox"><ClipboardCheck color="purple" /></div>
                            <div className="titleMain">address</div>
                            <span>{index+1}</span>
                        </div>
                        <div>{item.address}</div>
                    </div>
                    <div>
                        <div className="title">
                            <div className="iconbox"><ClipboardCheck color="purple" /></div>
                            <div className="titleMain">mnemonic</div>
                        </div>
                        <div>{item.mnemonic}</div>
                    </div>
                </li>))
            }
        </Ulbox>
    </div>
}