// Email Address: The user should input a valid email address.
// Phone Number: The user should input a valid US phone number.
// Credit Card Number: The user should input a valid credit card number (in the format 1234 5678 1234 5678).
// Date of Birth: The user should input a valid date in the format DD/MM/YYYY.

// username@domain.com

const isValid = (string, RE) => {
  return RE.test(string);
};
const getKeyValue = (RE, key, format) => {
  const data = prompt("enter your " + key);

  if (!isValid(data, RE)) {
    console.log("invalid " + key);
    return getKeyValue(RE, key, format);
  }

  format[key] = data;
  return;
};

const getEmail = (format) => {
  const RE = /^\w+@\w+\.[a-zA-Z]{2,6}$/;
  getKeyValue(RE, "email address:", format);
};
//123-456-7890

const getPhoneNumber = (format) => {
  const RE = /^(\(\d{3}\)|\d{3})[\-\s\.]?\d{3}[\-\s\.]?\d{4}$/;
  getKeyValue(RE, "phone number:", format);
};

// It should match a 16-digit credit card number in the format 1234 5678 1234 5678, with or without hyphens or spaces.
// Ensure the format has four groups of four digits.
// Date of Birth:

const getCreditCardNumber = (format) => {
  const RE = /^(\d{4}[\s\-]?){3}\d{4}$/;
  getKeyValue(RE, "credit card number:", format);
};

// It should match a valid date format DD/MM/YYYY.
// Make sure the day is between 01 and 31, the month is between 01 and 12, and the year is a 4-digit number.

const getDOB = (format) => {
  const RE = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
  getKeyValue(RE, "date of birth:", format);
};

const createForm = () => {
  const format = {};
  getEmail(format);
  getPhoneNumber(format);
  getCreditCardNumber(format);
  getDOB(format);

  return format;
};

console.table(createForm());

// const f = 'dcfef';
// f.match("dcfef")
