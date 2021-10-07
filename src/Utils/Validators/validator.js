export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return "The input field is empty";
  }
};

export const maxLenghtCreater = (maxLenght) => (value) => {
	if (value && value.length < maxLenght) {
    return undefined;
  } else {
    return `Max simbols is ${maxLenght}`;
  }
};

