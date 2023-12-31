export const validateUserId = (value) => {
  const regex = /^[a-z0-9]{7,12}$/;
  return regex.test(value);
};

export const validatePassword = (value) => {
  const regex = /^(?=.*[\W_]).{6,}$/; // 대문자를 제외한 정규 표현식
  return regex.test(value);
};

// export const validatePassword = (value) => {
//   const regex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
//   return regex.test(value);
// };
