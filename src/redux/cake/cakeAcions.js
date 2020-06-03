import { BUY_CAKE } from  './cakeTypes'

export const buyCake = (number = 1 ,string = "") => {
    return {
        type: BUY_CAKE,
        payload: number,
        dataForStr: string
        
    }
}