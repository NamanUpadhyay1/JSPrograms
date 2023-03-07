// Binary search tree ::::::::

// class Node
// {
//     constructor(val)
//     {
//         this.value=val
//         this.left=null
//         this.right=null
//     }
// }


// class BSTree
// {
//     constructor()
//     {
//         this.root = null
//     }
//     isTreeEmpty()
//     {
//         return this.root === null
//     }
//     makeTree(val)
//     {
//         let newNode = new Node(val)

//         if(this.root===null)
//         {
//             this.root = newNode
//         }
//         else
//         {
//             this.insertNode(this.root, newNode)    
//         }
//     }
//     insertNode(root, newNode)
//     {
//         if(root.value>newNode.value)
//         {
//             if(root.left===null)
//             {
//                 root.left = newNode
//             }
//             else
//             {
//                 this.insertNode(root.left, newNode)
//             }
//         }
//         else
//         {
//             if(root.right===null)
//             {
//                 root.right = newNode
//             }
//             else
//             {
//                 this.insertNode(root.right, newNode)
//             }
//         }
//     }
// }

// let bst = new BSTree()
// bst.makeTree(20)
// bst.makeTree(10)
// bst.makeTree(30)
// console.warn(bst);









//Q.1 : Write a function that takes two arrays of integers and returns an array that contains the common elements between the two arrays.

// function arrays(arr1, arr2) 
// {
    
//     var common = []                 
//     var i = 0, j = 0  

//     while(i<arr1.length && j<arr2.length) 
//     {
      
//       if(arr1[i] == arr2[j]) 
//       {        
//         common.push(arr1[i])
//         i++
//         j++
//       }
//       else if(arr1[i] < arr2[j]) 
//       {  
//         i++                        
//       }                             
//       else 
//       {
//         j++
//       }

//     }
    
//     return common
//   }
//   var arr1 = [1, 2, 3, 4, 5]
//   var arr2 = [1, 2, 3, 6, 7]
  
//   console.log(arrays(arr1, arr2))

//Q.2 : Write a function that takes an array of integers and returns an array of all pairs of integers that add up to a given target sum.

// function findPair(nums, target)
// {
//     for(i = 0; i<nums.length - 1; i++)
//     {
//         for(j = 1 + 1; j<nums.length; j++)
//         {
//             if(nums[i] + nums[j] == target)
//             {
//                 console.log(`Pair found :  ${nums[i]} , ${nums[j]}`)
//                 return
//             }
//         }
//     }
//     console.log("None of the pair result as desired output")
// }

// findPair([8, 7, 2, 5, 3, 1], 10)

//Q.3 : Write a function that takes a string of words and returns the length of the shortest word in the string.

// let msg = "The quick brown fox jumps over the lazy dog"

// const arr = msg.split(" ")

// console.log(arr.reduce(function(a, b)
// {
//     return a.length <= b.length ? a : b
// }));

//Q.4 : Write a function that takes two arrays of integers and returns an array that contains the elements that are unique to each array.

// function arrays(arr1, arr2) 
// {
    
//     var common = []                 
//     var i = 0, j = 0  

//     while(i<arr1.length && j<arr2.length) 
//     {
      
//       if(arr1[i] !== arr2[j]) 
//       { 
//         common.push(arr1[i])
//       }
//         i++
//         j++
//     }
    
//     return common
//   }
  
//   console.log(arrays([1, 2, 3, 6, 7], [1, 2, 3, 4, 5]))

// Q.5 : Pangram question "The quick brown fox jumps over the lazy dog"

// function isPangram(string) 
// {
//     var regex = /([a-z])(?!.*\1)/g;
//     return (string.match(regex) || []).length === 26;
// }
// console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// console.log(isPangram("The quick brown fox jumps over the lazy do"))