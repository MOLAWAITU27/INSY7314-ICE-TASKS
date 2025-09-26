export const isValidEmail = (email) => {
  return email.includes("@") && email.includes(".");
};

export const isStrongPassword = (password) => {
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  return password.length >= 8 && hasLetter && hasNumber;
};
