export const reducer =(state,action)=>{
    if(action.type === 'inc'){
        if(state >=10) return state
        else return state +1
    }
    if(action.type === 'dec'){

        if(state <= 0) return state
        else return  state -1
    }
}