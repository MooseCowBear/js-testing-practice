export const cipher = (string, shift) => {
  const normalizedShift = normalizeShift(shift);

  const codes = [];
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    codes.push(shiftCode(code, normalizedShift));
  }
  return String.fromCharCode(...codes);
};

const normalizeShift = (shift) => {
  return shift % 26;
};

const shiftCode = (code, shift) => {
  if (97 <= code && code <= 122) {
    if (code + shift > 122) {
      return code + shift - 122 + 96;
    } else if (code + shift < 97) {
      return 122 - (96 - (code + shift));
    } else {
      return code + shift;
    }
  } else if (65 <= code && code <= 90) {
    if (code + shift > 90) {
      return code + shift - 90 + 64;
    } else if (code + shift < 65) {
      return 90 - (64 - (code + shift));
    } else {
      return code + shift;
    }
  }
  return code;
};
