export const setItemInLocalStorage = (keyName, value) => {
  window.localStorage.setItem(keyName, JSON.stringify(value));
};

export const getItemFromLocalStorage = (keyName) => {
  try {
    const value = window.localStorage.getItem(keyName);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};
