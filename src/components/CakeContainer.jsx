import React ,{useState} from 'react'
import { buyCake } from "../redux";
import {useSelector ,useDispatch} from 'react-redux'

function CakeContainer() {
    const [number ,setNumber] = useState(1)
    const [string ,setString] = useState("")
    const numOfCakes = useSelector(state => state.numOfCakes)
    const strOfInput = useSelector(state => state.strOfInput)
    const dispatch = useDispatch()
    return ( //改改看傳物件

        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>

            <button onClick={()=>dispatch(buyCake({number:number,string:string}))}>Buy Cake</button>
            <h1>---------------------------------</h1>
            <h1>---------------------------------</h1>
            <h1>---------------------------------</h1>
            <h2>String {strOfInput}</h2>
            
            <input type="text" value={string} onChange={e=>setString(e.target.value)}/>
            <button onClick={()=>dispatch(buyCake({string:string,number:number}))}>Change String</button>

        </div>
    )
}

export default CakeContainer

