import React , { useRef } from 'react'
import backgroundimage from './images/backgroundimage.png'
import './Home.css'
import { useLocation } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

function Home() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const { state } = useLocation();
  const { inputDatas } = state;


  console.log('input datas')
  console.log(inputDatas)

  console.log(inputDatas[0])
  
  return (
    <div  ref={componentRef}>

    <div>
    <img className='img' src={backgroundimage}/>

    <div className='test__dataBox'>

    <p className='first' >{inputDatas[0]}</p>

    <p className='second' >{inputDatas[1]}</p>

    <p className='third' >{inputDatas[2]}</p>

    <p className='fourth' >{inputDatas[3]}</p>

    <p className='fifth' >{inputDatas[4]}</p>

    <p className='sixth'>{inputDatas[5]}</p>

    <p className='seventh'>{inputDatas[6]}</p>

    </div>

    </div>

    <button className='button' onClick={handlePrint}>Print this out!</button>

    </div>
  )
}

export default Home