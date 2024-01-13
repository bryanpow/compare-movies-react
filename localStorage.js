const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getLocalStorageKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const getCard = () => getLocalStorageKey("cards");
export const setCard = (card) => setLocalStorageKey("cards", card);

export const addCard = (card) => {
  const cards = getCard();
  if (cards) {
    setCard([...cards, card]);
  } else {
    setCard([card]);
  }
};

export const getDefault = () => getLocalStorageKey("default");
export const setDefault = (def) => setLocalStorageKey("default", def);

export const addDefault = (newCard) => {
  const cards = getDefault() || [];
  const exists = cards.some(card => card.title === newCard.title); // Adjust this condition based on how you identify duplicates

  if (!exists) {
    setDefault([...cards, newCard]);
  }
};

export const removeCard = (input) => {
  const cards = getCard();
  const newCards = cards.filter((card) => card.title !== input);
  setCard([...newCards]);
};
export const removeDef = (cardToRemove) => {
  const cards = getDefault().filter((card) => card.title !== cardToRemove);
  setDefault([...cards]);
};
