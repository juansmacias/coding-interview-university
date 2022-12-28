
const printHorzArray = (array) => {      
    process.stdout.write("-".repeat(60))
    console.log("\n")
    for (let n = 0; n < array.length; n++) {
        process.stdout.write(`| ${n}   `)
    }
    console.log("|");
    console.log("-".repeat(61))
    for (let n = 0; n < array.length; n++) {
        process.stdout.write(`| ${array[n]}  `)
    }
    console.log("|")
    console.log("-".repeat(61))

  } 

const generateRandomArray = (min,max,size) => {
    return Array.from({length:size},
        ()=>Math.floor(Math.random()*(max-min+1))+min)
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return
  }


  const pivot = arr[right]
  console.log(`start partition quick sort`)
  let partitionIndex = partition(arr, left, right, pivot)

  console.log(`start sort left | left = ${left} right= ${right} pivot = ${pivot}`)
  quickSort(arr, left, partitionIndex - 1)
  console.log(`finish sort left`)
  console.log(`start sort right | left = ${left} right= ${right} pivot = ${pivot}`)
  quickSort(arr, partitionIndex + 1, right)
  console.log(`finish sort right`)
}

const partition = (arr, left, right, pivot) => {
  console.log(`start partition left = ${left} right= ${right} pivot = ${pivot}`)
  printHorzArray(arr)
  console.log(`left = ${left} right= ${right} pivot = ${pivot}`)
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]]
      console.log(`swap i: ${i} partitionIndex ${partitionIndex}`)
      printHorzArray(arr)
      partitionIndex++
    }
  }
  [arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]]
  console.log(`swap right: ${right} partitionIndex ${partitionIndex}`)
  printHorzArray(arr)
  console.log('finished partition')
  return partitionIndex
}

const arr = generateRandomArray(1,100,10)
printHorzArray(arr)

quickSort(arr)