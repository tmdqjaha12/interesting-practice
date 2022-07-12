export function regEmail(value: string, required: boolean): boolean {
  if (required && value === "") {
    return false;
  }

  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (!regExp.test(value)) {
    return false;
  }
  return true;
}

export function regPhone(value: string, required: boolean): boolean {
  if (required && value === "") {
    return false;
  }

  const regExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/i;
  if (!regExp.test(value)) {
    return false;
  }
  return true;
}
