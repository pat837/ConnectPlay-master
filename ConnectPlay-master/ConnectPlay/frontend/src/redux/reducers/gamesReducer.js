const initialData = {
    games : [],

};

export const gamesReducer = (state=initialData , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_GAMES' : {
             return{
                 ...state,
                 games : action.payload
             }
         }
         
         default:return state
     }

}

const initialData1 = {
    games : [],

};

export const gamesReducer1 = (state=initialData1 , action)=>{

     switch(action.type)
     {
         case 'GET_ALL_GAMES' : {
             return{
                 ...state,
                 games : action.payload
             }
         }
         
         default:return state
     }

}