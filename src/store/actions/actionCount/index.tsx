// ini akan dipakai untuk set data pada redux
export function setDataCount(data: number) {
  return {
    type: '@APP/COUNT',
    payload: data,
  }
}
