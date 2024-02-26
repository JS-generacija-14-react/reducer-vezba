import { ADD_USER, REMOVE_USER } from "./actions";

/*
action= {
    type: 'string',
    payload: {}
}


*/

const korisnikReducer = (state, action) => {
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      const { name } = payload;
      return [...state, { name, id: Math.random() * 100 }];
    case REMOVE_USER:
      return [...state].filter((user) => user.id !== payload.id);
    default:
      return state;
  }
};

export default korisnikReducer;
