// Fisher-Yates algorithm to shuffle array
export function shuffleArray(arr: number[]) {
  if (!arr.length) return null;

  const arrCopy = [...arr];

  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = (Math.floor(Math.random() * (i + 1)));
    [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
  }

  return arrCopy;
}
