import React from 'react'
import './BYBIT.css'
import BYBITimage from './images/BYBIT.jpg'
import { useLocation } from 'react-router-dom';

function BYBIT() {
    const { state } = useLocation();
  const { inputDatas } = state;

  return (
    <div className='bybit'>
    <img  className='bybit__image' src={BYBITimage}/>

    <div className='test__dataBox'>

    <p className='bybit__first' >{inputDatas[0]}</p>

    <p className='bybit__second' >{inputDatas[1]}</p>

    <p className='bybit__third' >{inputDatas[2]}</p>

    <p className='bybit__fourth' >{inputDatas[3]}</p>

    <p className='bybit__fifth' >{inputDatas[4]}</p>


    </div>

    </div>
  )
}

export default BYBIT