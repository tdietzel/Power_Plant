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