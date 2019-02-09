const forEachAsync = async (arr, fn) => {
  for (let i = 0, length = arr.length; i < length; i++)
    await fn(arr[i])
}

module.exports = {
  forEachAsync
}

