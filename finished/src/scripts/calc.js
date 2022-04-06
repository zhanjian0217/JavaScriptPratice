function roundedNumber(num, m = 2) {
  if (m < 1) {
    return num
  }

  const ratio = 10 ** m

  return Math.round(num * ratio) / ratio
}

export { roundedNumber }

// 取小數第二位 運算功能