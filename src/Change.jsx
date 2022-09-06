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

  

    const addInputdata = ()=>{
        navigate('/change' , { state: { inputDatas : [firstInput,secondInput,thirdInput,fourthInput,fifthInput,sixthInput,seventhInput] } })
    }

  

  return (
    <div className='change'>

    <div className='change__box'>

    <h1>Change</h1>


    <input className='change__input'  placeholder='Long' value={firstInput} onChange={(event)=> setFirstinput(event.target.value)} />
    <input className='change__input' placeholder='40x' onChange={ (event) => setSecondinput(event.target.value)} value={secondInput}/>
    <input className='change__input' placeholder='Enter Coin Name' onChange={ (event)=> setThirdinput(event.target.value) } value={thirdInput}/>
    <input className='change__input' placeholder='Enter Percentage' onChange={ (event) => setfourthinput(event.target.value)} value={fourthInput}/>
    <input className='change__input' placeholder='Enter Entry Price' onChange={ (event)=> setFifthinput(event.target.value)} value={fifthInput}/>
    <input className='change__input' placeholder='Enter Mark Price' onChange={(event) => setSixthinput(event.target.value)} value={sixthInput}/>
    <input className='change__input' placeholder='Enter Referral Code' onChange={(event) => setSeventhinput(event.target.value)} value={seventhInput}/>

    <button className='change__addButton' onClick={addInputdata}>ADD</button>


    </div>

    </div>
  )
}

export default Change