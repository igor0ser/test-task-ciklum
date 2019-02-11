export const COLUMN_KEYS = ['applied', 'interviewing', 'hired'];

export const MOVE_LEFT = 'MOVE_LEFT';
export const MOVE_RIGHT = 'MOVE_RIGHT';

export const createMoveLeft = (dispatch) => (idValue, fromColumn) => {
  dispatch({
    type: MOVE_LEFT,
    payload: { idValue, fromColumn },
  });
}

export const createMoveRight = (dispatch) => (idValue, fromColumn) => {
  dispatch({
    type: MOVE_RIGHT,
    payload: { idValue, fromColumn },
  });
}

export const initColumnsState = (initialApplications) => COLUMN_KEYS.reduce(
  (acc, key, i) => ({
    ...acc,
    [key]: i === 0 ? initialApplications : [],
  }),
  {}
);

export const columnsReducer = (state = {}, action) => {
  switch (action.type) {
    case MOVE_LEFT:
    case MOVE_RIGHT:
      const { fromColumn, idValue } = action.payload;
      const toColumn = fromColumn + (action.type === MOVE_RIGHT ? +1 : -1);

      const fromColumnKey = COLUMN_KEYS[fromColumn];
      const toColumnKey = COLUMN_KEYS[toColumn];
      const itemToMove = state[fromColumnKey].find(item => item.id.value === idValue);

      return {
        ...state,
        [fromColumnKey]: state[fromColumnKey].filter(item => item !== itemToMove),
        [toColumnKey]: [itemToMove, ...state[toColumnKey]]
      }
    default:
      return state;
  }
}
