// Email Address: The user should input a valid email address.
// Phone Number: The user should input a valid US phone number.
// Credit Card Number: The user should input a valid credit card number (in the format 1234 5678 1234 5678).
// Date of Birth: The user should input a valid date in the format DD/MM/YYYY.

// username@domain.com

const isValid = (string, RE) => {
  return RE.test(string);
};

const getEmail = (format) => {
  const RE = /^\w+@\w+\.[a-zA-Z]{2,6}$/;
  const E = prompt("enter your Email Address:");

  if (!isValid(E, RE)) {
    console.log("invalid Email");
    return getEmail(format);
  }

  format["Email Address:"] = E;
  return;
};
//123-456-7890

const getPhoneNumber = (format) => {
  const RE = /^(\(\d{3}\)|\d{3})[\-\s\.]?\d{3}[\-\s\.]?\d{4}$/;
  const PH = prompt("enter your phone number:");

  if (!isValid(PH, RE)) {
    console.log("invalid phone number");
    return getPhoneNumber(format);
  }

  format["Phone Number:"] = PH;
  return;
};

// It should match a 16-digit credit card number in the format 1234 5678 1234 5678, with or without hyphens or spaces.
// Ensure the format has four groups of four digits.
// Date of Birth:

const getCreditCardNumber = (format) => {
  const RE = /^(\d{4}[\s\-]?){3}\d{4}$/;
  const CCN = prompt("enter your Credit Card number:");

  if (!isValid(CCN, RE)) {
    console.log("invalid Credit Card number");
    return getCreditCardNumber(format);
  }

  format["Credit Card Number:"] = CCN;
  return;
};

// It should match a valid date format DD/MM/YYYY.
// Make sure the day is between 01 and 31, the month is between 01 and 12, and the year is a 4-digit number.

const getDOB = (format) => {
  const RE = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
  const DOB = prompt("enter your Date of Birth:");

  if (!isValid(DOB, RE)) {
    console.log("invalid Date of Birth");
    return getDOB(format);
  }

  format["Date of Birth:"] = DOB;
  return;
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
