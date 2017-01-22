function posts(state = [], action){
   console.log(action.payload, 'payload')

   const i = action.index;
   console.log(i, 'i')

   switch (action.type) {
      case 'INCREMENT_LIKES':
         return [
            ...state.slice(0, i),
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1)
         ]
         console.log(state[i].likes)
         console.log(state[0].likes)
         console.log("incrementing likes")
         break;
      default:
         return state;
   }
   return state;
}

export default posts;
