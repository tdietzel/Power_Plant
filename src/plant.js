export const checkDead = (state) => {
  if (state.soil <= 0 || state.water <= 0) {
    return { ...state, dead: true };
  } else {
    return { ...state, dead: false };
  }
};

export const assignState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop]) = value
    });
  }
}

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const createPlant = (plantName) => {
  const plant = {
    name: plantName
  };
  return plant;
};

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  }
}