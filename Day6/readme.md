## what is javascript?
Ans-JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.

## What is the difference between let and var?
Ans-var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.

## Why do we prefer const overvar?
Ans-Const guarantees the reference is immutable and unique whereas in var you can duplicate your variable name, you can use it everywhere (even before declaration due to its lexical scope).

## What is the use of javascript inweb browsers?
Ans- JavaScript is a light-weight object-oriented programming language that is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language. JavaScript enables dynamic interactivity on websites when it is applied to an HTML document.

## What are Objects?
Ans-A JavaScript object is a collection of named values,JavaScript variables can also contain many values.

Objects are variables too. But objects can contain many values.

Object values are written as name : value pairs (name and value separated by a colon).

## What is an array and how is itdifferentfrom anObjectin Javascript?
Ans-Objects are mutable data structure in javascript which is used to represent a ‘Thing’. This could be anything like cars, plants, person, community etc.

It stores the data in key value pair and the key can be anything except for undefined. The keys are iterable and can be accessed in any order.
                     whereas 
Arrays are objects only in javascript. The major difference is that they store the data in an ordered collection in which the data can be accessed using a numerical index.

They are also mutable and data can be modified at any index. Indexes are zero based which means the first item is stored at Oth index, second at first and so on, last item is stored at n-1th index.

## What is a function?
Ans-A function is simply a “chunk” of code that you can use over and over again, rather than writing it out multiple times. Functions enable programmers to break down or decompose a problem into smaller chunks, each of which performs a particular task.

## How can we implementcall by value and call by referencein Javascript?
Ans-Call by Value: Suppose there is a variable named “a”. Now, we store a primitive value(boolean, integer, float, etc) in the variable “a”.

Let us store an integer value in “a”, Let a=5. Now the variable “a” stores 5 and has an address location where that primitive value sits in memory.

Now, suppose we copy the value of “a” in “b” by assignment (a=b). Now, “b” points to a new location in memory, containing the same data as variable “a”.

Thus, a=b=5 but both points to separate locations in memory.

This approach is called call by value where 2 variables become the same by copying the value but in 2 separate spots in the memory.
we can implement it by
<!-- <script type="text/javascript">
     By value (primitives)
    var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);
</script> -->
Call by reference: Let’s say, we have an object stored in the variable “a”. The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, points to the same location where “a” does. No new object is created, no copy is created. Both the variables point to the same object. This is like having 2 names.

This is call by reference.
 <script>
  
    // By reference (all objects (including functions))
    var c = { greeting : 'Welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Welcome to geeksforgeeks';
    console.log(c);
    console.log(d);
</script> 

## What are the primitive data typesin Javascript?
Ans- Primitive Datatype in Javascript
are- 1.Number
2. String
3. Boolean
4. Undefined
5. Null
6. object
## What is DOM?
An-DOM stands for Document Object Model. In the world of web, all HTML webpages are referred to as documents. The Document Object Model represents each of these web pages in a tree-like structure to make it easier to access and manage the elements
## Why do we need DOM?
An- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page
