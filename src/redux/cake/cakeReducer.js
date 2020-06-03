import { BUY_CAKE } from './cakeTypes'

const initialState = { 
    numOfCakes: 10,
    strOfInput: "type someting"
}

const cakeReducer = (state = initialState ,action) => {
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.payload,
                strOfInput: action.dataForStr
            }
        default :return state
    }

}

export default cakeReducer