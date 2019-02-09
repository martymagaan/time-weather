const forEachAsync = async (arr, fn) => {
  for (let i = 0, length = arr.length; i < length; i++)
    await fn(arr[i])
}

const flowAsync = (...fns) => (
  fns.reduceRight((f, g) => async x => await g(x).then(f))
)

const printEmptyLine = () => console.log('')

module.exports = {
  forEachAsync,
  flowAsync,
  printEmptyLine
}

