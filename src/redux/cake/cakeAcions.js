import { BUY_CAKE } from  './cakeTypes'

export const buyCake = (data) => {

    return {
        type: BUY_CAKE,
        payload: data.number,
        dataForStr: data.string
        
    }
}