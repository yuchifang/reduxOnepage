import { BUY_CAKE } from  './cakeTypes'

export const buyCake = (data = { string : "type someting", number : 1 }) => {
    console.log("eeeeeeee",data)
    return {
        type: BUY_CAKE,
        payload: data.number,
        dataForStr: data.string
        
    }
}