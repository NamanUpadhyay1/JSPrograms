// 1) alphabetical order

// function alphaOrder(str)
// {
//     let arr = str.split("")
//     arr.sort()
//     let sortedStr = arr.join("")
//     return sortedStr
// }
// console.log(alphaOrder('webmaster'));

// 2) Pan card number

// let length = 5

// const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let result = ""
// let singleChar = ""
// const charactersLength = characters.length
// for (let i = 0; i < length; i++) 
// {
//   result += characters.charAt(Math.floor(Math.random() * charactersLength))
// }

// let digit = Math.floor(Math.random() * (1111 - 4999 + 1)) + 4999;

// for (let j = 0; j < 1 ; j++) 
// {
//     singleChar += characters.charAt(Math.floor(Math.random() * charactersLength));
// }

// console.log(result + digit + singleChar)


// 3) unique characters

// function unique_char(str1)
// {
//     var str=str1;

//     var uniql="";

//     for (var i=0;i < str.length;i++)

//     {

//     if(uniql.indexOf(str.charAt(i))==-1)
//     {
//         uniql += str[i];  
//     }

//     }

//     return uniql;  
// }  
// console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// 4) FizzBuzz challenge

// for(i=1; i<101; i++)
// {
//     if(i%3==0)
//     {
//         console.log("Fizz");
//     }
//     else if(i%5==0)
//     {
//         console.log("Buzz");
//     }
//     else
//     {
//         console.log(i);
//     }
    
// }




// 6) longest substring with unique characters only

// function findLongestWord(str) 
// {
//     let longestWord = str.split(' ').sort(function(a, b) 
//     { 
//         return b.length - a.length 
//     })
//     return longestWord[0]
// }
// console.log(findLongestWord("hi my name is naman"))

// 7) return maximum subarray sum

// function array(num) 
// {
//     let maxSum = num[0];
//     let currentSum = num[0];

//     for (let i = 1; i < num.length; i++) 
//     {
//         currentSum = Math.max(num[i], currentSum + num[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }
// console.log(array([1,2,3,4,-5]));

// 8) return intersection array

// function intersection(array1, array2)
// {
//     const firstSet = new Set(array1)
//     const secondSet = new Set(array2)

//     let result = []
//     for(let i of secondSet)
//     {
//         if(firstSet.has(i))
//         {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(intersection([1,2,3,4,7], [1,2,5,6,7]))

// 9) check if the string contains all the alphabets

// function input(stringing)
// {
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz'
//     let result = stringing.includes(alphabets)
//     if(result)
//     {
//         return true
//     }
//     else
//     {
//         return false
//     }
// }
// console.log('The string 1 is '+input('abcdefghijklmnopqrstuvwxyz'))
// console.log('The string 2 is '+input('abcdefghijklmnopqrstuvwxy'))

// 10) 1 to n numbers in array, return the missing number

// function array(arr)
// {
//     let num = arr.length
//     let total = ((num + 2) * (num + 1)) / 2;

//     for(let i = 0; i<num;i++)
//     {
//         total -= arr[i];
//     }
//     return total

// }

// console.log(array([1,2,4,5]))

// 11) subsequence array

// function sequence(arr1, arr2) 
// {
//     let i = 0;
//     let j = 0;
  
//     while (j < arr2.length) 
//     {
//       if (arr1[i] === arr2[j]) 
//       {
//         i++
//       }
  
//       if (i === arr1.length) 
//       {
//         return true
//       }
  
//       j++
//     }
  
//     return false
//   }
// console.log(sequence([1,2,3,6], [1,2,3,6]))

// 12) return the repeated character in a string

// function getMax(str) 
// {
//     let max = 0,
//     maxChar = ''
//     str.split('').forEach(function(char)
//         {
//             if(str.split(char).length > max) 
//             {
//                max = str.split(char).length
//                maxChar = char
//             }
//         })
//         return maxChar
// }
    
// console.log('The most repeated letter is : ')
// console.log(getMax(`hello`))

// 13) return first letter of each word as capitalized

// function string(str)
// {
//     let words = str.split(" ")
//     for(i=0; i<words.length; i++)
//     {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1)
//     }
//     words.join()
//     return words
// }
// console.log(string('hello hi'))

// 14) remove all the vowels in the string

// function string(str)
// {
//     var newString = str.replace(/[aeiou]/g, '');
//     console.log(newString);
// }
// string('zaeziobu')

// 15) pattern for 1 - 1, 2 - 22, 3 - 333, 4 - 4444

// let num = ""
// for(let i=1; i<5 ; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//         num += i
//     }
//     num += "\n"
// }
// console.log(num)




// 5) Promise timeout

// console.log("User made the request")
// setTimeout(callback, 5000)

// function callback()
// {
//     console.log("after 5 seconds order was fulfilled");
// }

// const task1 = ()=>
// {
//     return new Promise(function(res)
//     {
//         setTimeout(function()
//         {
//             res("Print")
//         }, 2000)
//     })
// }

// const task2 = ()=>
// {
//     return new Promise(function(res)
//     {
//         setTimeout(function()
//         {
//             res("Print 2")
//         }, 2000)
//     })
// }

// const myPromises = [task1, task2]

// async function handlingPromises()
// {
//     const array = []
//     array.push(await task1())
//     console.log(array);
//     array.push(await task2())
//     console.log(array);
// }
// handlingPromises()

// let promiseA = new Promise((resolve, reject) => 
// {
//     let wait = setTimeout(() => 
//     {
//       resolve('Promise A win!');
//     }, 600)
// })
  
//   let promiseB = new Promise((resolve, reject) => 
//   {
//     let wait = setTimeout(() => 
//     {
//       resolve('Promise B win!');
//     }, 400)
//   })
  
//   // Let's race our promises
//   let race = Promise.race([
//     promiseA,
//     promiseB
//   ])
  
//   race.then((res) => console.log(res))