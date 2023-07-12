const initialData = {
    loading : false
};

export const alertsReducer=(state=initialData , action)=>{

    switch(action.type)
    {
          case 'LOADING' : {
              return{
                  ...state,
                  loading : action.payload
              }
          }

          default : return state
    }

}

const initialData1 = {
    loading : false
};

export const alertsReducer1=(state=initialData1 , action)=>{

    switch(action.type)
    {
          case 'LOADING' : {
              return{
                  ...state,
                  loading : action.payload
              }
          }

          default : return state
    }

}