export const maskAllCharacters = (payload: string) => {
  return Array.from({ length: payload.length }, (x, i) => {
    return '*';
  }).join('');
};

//TODO: find regex to do this
export const maskCreditCard = (payload: string) => {
  const returnArr = 'XXXX XXXX XXXX XXXX'.split('');
  payload.split('').forEach((x, i) => {
    if (i < 4) {
      returnArr[i] = x;
    } else if (3 < i && i < 8) {
      returnArr[i + 1] = '#';
    } else if (7 < i && i < 12) {
      returnArr[i + 2] = '#';
    } else if (i > 11) {
      returnArr[i + 3] = x;
    }
  });
  return returnArr.join('');
};



export const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(
        0,
        object.target.maxLength
      );
    }
  };