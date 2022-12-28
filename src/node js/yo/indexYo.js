



class Quicksort {

    constructor(arrsize){
        this.maxNum = 100
        this.minNum = 1
        this.theArray = []        
        this.arraySize = arrsize
        this.generateRandomArray()
    }

    quicksort(left,right){
        if(right-left<=0)
            return
        else{
            const pivot = this.theArray[right]
            console.log(`Value in right ${pivot} is left pivot`)

            console.log(`left ${left} right ${right} pivot = ${pivot} sent to partition`)

            const newPivot = this.partitionArray(left,right,pivot)

            console.log(`Pos in left ${newPivot} is made the pivot`)

            this.quicksort(left,newPivot-1)

            this.quicksort(newPivot+1,right)
        }
    }

    partitionArray(i,j,pivot){
        var leftPointer = i-1
        var rightPointer = j
        console.log(`i = ${i} j= ${j} pivot = ${pivot}`)
        this.printHorzArray(leftPointer,rightPointer)

        while(true){

            while(this.theArray[++leftPointer] < pivot){}

            this.printHorzArray(leftPointer,rightPointer)

            while(rightPointer>0 && this.theArray[--rightPointer]>pivot){}

            this.printHorzArray(leftPointer,rightPointer)

            if(leftPointer>=rightPointer){
                console.log(`L${leftPointer} is equal or greater than R${rightPointer}`)
                break;
            }
            else {
                this.swapValues(leftPointer,rightPointer)
                console.log(`L${leftPointer} with value ${this.theArray[leftPointer]} was swapped with R${rightPointer} with value ${this.theArray[rightPointer]}`)
            }

            this.printHorzArray(leftPointer,rightPointer)
        }
        this.swapValues(leftPointer,rightPointer)

        return leftPointer
    }

    generateRandomArray(){
        this.theArray = Array.from({length:this.arraySize},
            ()=>Math.floor(Math.random()*(this.maxNum-this.minNum+1))+this.minNum)
    }

    printHorzArray(i, j) {      
        process.stdout.write("-".repeat(60))
        console.log("\n")
        for (let n = 0; n < this.arraySize; n++) {
            process.stdout.write(`| ${n}   `)
        }
        console.log("|");
        console.log("-".repeat(61))
        for (let n = 0; n < this.arraySize; n++) {
            process.stdout.write(`| ${this.theArray[n]}  `)
        }
        console.log("|")
        console.log("-".repeat(61))
      
        if (i !== -1) {
          let spacesBeforeFront = 6 * (i + 1) - 5;
          process.stdout.write(" ".repeat(spacesBeforeFront) + `L${i}`)
          let spacesBeforeRear = 5 * (j + 1) - spacesBeforeFront
          if(spacesBeforeRear>=0)
            process.stdout.write(" ".repeat(spacesBeforeRear) + `R${j}`)
          else
            process.stdout.write(`R${j}`)
          console.log("\n")
        }
      }
      
    swapValues(i,j){
        const temp = this.theArray[i]
        this.theArray[i] = this.theArray[j]
        this.theArray[j] = temp
    }
}


function main (){
const qs = new Quicksort(10)

qs.quicksort(0,9)
console.log('resultado final')
qs.printHorzArray(0,10)
}

main()