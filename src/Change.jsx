import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Change.css'


function Change() {
    const navigate = useNavigate();
    const [firstInput,setFirstinput] = useState()
    const [secondInput,setSecondinput] = useState()
    const [thirdInput,setThirdinput] = useState()
    const [fourthInput,setfourthinput] = useState()
    const [fifthInput,setFifthinput] = useState()
    const [sixthInput,setSixthinput] = useState()
    const [seventhInput,setSeventhinput] = useState()


    const [firstBybitInput,setFirstBybitinput] = useState()
    const [secondBybitInput,setSecondBybitinput] = useState()
    const [thirdBybitInput,setThirdBybitinput] = useState()
    const [fourthBybitInput,setfourthBybitinput] = useState()
    const [fifthBybitInput,setFifthBybitinput] = useState()
    const [sixthBybitInput,setSixthBybitinput] = useState()
    const [enterCodeBybitInput,setEntercodeBybitinput] = useState()
    const [seventhBybitInput,setSeventhBybitinput] = useState()

  

    const addInputdata = ()=>{
        navigate('/forbinacefuture' , { state: { inputDatas : [firstInput,secondInput,thirdInput,fourthInput,fifthInput,sixthInput,seventhInput] } })
    }

  
    const addBybitdata = ()=>{
      navigate('/BYBIT' , { state: { inputDatas : [firstBybitInput,secondBybitInput,thirdBybitInput,fourthBybitInput,fifthBybitInput,sixthBybitInput,enterCodeBybitInput,seventhBybitInput] } })
    }

  return (
    <div className='change'>

    <div className='change__box'>

    <h1>Change for BINACE</h1>


    <input className='change__input'  placeholder='Long' value={firstInput} onChange={(event)=> setFirstinput(event.target.value)} />
    <input className='change__input' placeholder='40x' onChange={ (event) => setSecondinput(event.target.value)} value={secondInput}/>
    <input className='change__input' placeholder='Enter Coin Name' onChange={ (event)=> setThirdinput(event.target.value) } value={thirdInput}/>
    <input className='change__input' placeholder='Enter Percentage' onChange={ (event) => setfourthinput(event.target.value)} value={fourthInput}/>
    <input className='change__input' placeholder='Enter Entry Price' onChange={ (event)=> setFifthinput(event.target.value)} value={fifthInput}/>
    <input className='change__input' placeholder='Enter Mark Price' onChange={(event) => setSixthinput(event.target.value)} value={sixthInput}/>
    <input className='change__input' placeholder='Enter Referral Code' onChange={(event) => setSeventhinput(event.target.value)} value={seventhInput}/>

    <button className='change__addButton' onClick={addInputdata}>ADD</button>


    </div>


    <div className='change__box'>

    <h1>Change for BYBIT</h1>


    <input className='change__input'  placeholder='Enter Coin Name' value={firstBybitInput} onChange={ (event)=> setFirstBybitinput(event.target.value) }/>
    <input className='change__input' placeholder='Long' value={secondBybitInput} onChange={ (event)=> setSecondBybitinput(event.target.value) }/>
    <input className='change__input' placeholder='Enter Percentage' value={thirdBybitInput} onChange={ (event)=> setThirdBybitinput(event.target.value) }/>
    <input className='change__input' placeholder='Enter Entry Price' value={fourthBybitInput} onChange={ (event)=> setfourthBybitinput(event.target.value) }/>
    <input className='change__input' placeholder='Enter current Price' value={fifthBybitInput} onChange={ (event)=> setFifthBybitinput(event.target.value) }/>

    <input className='change__input__codeBeforedetails' placeholder='Enter Code befor details' value={sixthBybitInput} onChange={ (event)=> setSixthBybitinput(event.target.value) }/>

    <input className='change__input__code' placeholder='Enter Code ' value={enterCodeBybitInput} onChange={ (event)=> setEntercodeBybitinput(event.target.value) }/>


    <input className='change__input__codeAfterdetails' placeholder='Enter Code after details' value={seventhBybitInput} onChange={ (event)=> setSeventhBybitinput(event.target.value) }/>
   

    <button className='change__addButton' onClick={addBybitdata}>ADD</button>


    </div>

    </div>
  )
}

export default Change