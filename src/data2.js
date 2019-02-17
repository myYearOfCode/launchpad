{
   "javascript":{
      "0":{
         "question":"what is repl?",
         "answer":"Read Evaluate Print Loop"
      },
      "1":{
         "question":"Why would you use a do/while loop",
         "answer":" When you need the loop to run at least once"
      },
      "2":{
         "question":"how do you typecast (coerce) a string named 'string' to an int?",
         "answer":"parseInt(string)"
      },
      "3":{
         "question":"how do you combine strings?",
         "answer":"use the +"
      },
      "4":{
         "question":"how do you get an index in the forEach loop?",
         "answer":"array.forEach((element, index) => { your function here })"
      },
      "5":{
         "question":"what is the format for string interpolation?",
         "answer":"backticks, and ${}"
      },
      "6":{
         "question":"how can you search within a string and get a boolean?",
         "answer":"string.search('search string')"
      },
      "7":{
         "question":"how can you search within a string and get the index?",
         "answer":"string.indexOf('search string')"
      },
      "8":{
         "question":"how do you print to the screen?",
         "answer":"console.log() (for most things) or console.dir() (for objects that you want to explore in the console.)"
      },
      "9":{
         "question":"how would you create a new object of the class Dog named spot?",
         "answer":"spot = new Dog(args)"
      },
      "10":{
         "question":"how can you make a blank array called myArr?",
         "answer":"myArr = []"
      },
      "11":{
         "question":"how can you remove trailing whitespace and newlines?",
         "answer":"inputString = String.trim(inputString)"
      },
      "12":{
         "question":"generate a random number between 0 and 4.",
         "answer":"Math.random(0)*4"
      },
      "13":{
         "question":"what are the falsey values in javascript?",
         "answer":"false, 0 (zero), '' or \"\" (empty string), null, undefined, NaN"
      },
      "14":{
         "question":"how do you evaluate for truth?",
         "answer":"Boolean(thingToBeTested) \n OR !!thingToBeTested"
      },
      "15":{
         "question":"how do you increment a variable?",
         "answer":"counter++ or counter += 1"
      },
      "16":{
         "question":"what is the easiest way to loop 10x?",
         "answer":"use a for loop"
      },
      "17":{
         "question":"how do you write 3 to the 5th?",
         "answer":"Math.pow(3,5)"
      },
      "18":{
         "question":"what does regex.match(string) return in either case?",
         "answer":"if true it returns an object (which evaluates to true), if false it returns false."
      },
      "19":{
         "question":"what does unshift do?",
         "answer":"it adds to the beginning of an array."
      },
      "20":{
         "question":"how do you add a new array element to the beginning of an array?",
         "answer":"unshift"
      },
      "21":{
         "question":"how do you add a new array element to the end of an array?",
         "answer":"push"
      },
      "22":{
         "question":"how do you add a new array element to a specific index of an array?",
         "answer":"array.splice(index,numElementsToDelete,itemToInsert)"
      },
      "23":{
         "question":"check if an array has an element equal to x. (you are looking for a boolean)",
         "answer":"array.includes(element)"
      },
      "24":{
         "question":"check if an array has an element equal to x. (you are looking for the index)",
         "answer":"array.indexOf(element)"
      },
      "25":{
         "question":"delete an element of an array",
         "answer":"array.splice(index,numElementsToDelete)"
      },
      "26":{
         "question":"iterate over every element in an array.",
         "answer":"array.forEach() (this is sometimes not recommended because it is inescapable)"
      },
      "27":{
         "question":"how can you filter an array with a function?",
         "answer":"array.select{|element| element.even?} will return even elements."
      },
      "28":{
         "question":"how can you filter an array with a function BUT return the array elements that failed the function?",
         "answer":"array.reject{|element| element.even?} will return odd elements."
      },
      "29":{
         "question":"explain how the .sort method works",
         "answer":"numbers.sort((a, b) => a - b) will numerically sort lowest to highest a-z"
      },
      "30":{
         "question":"delete the element at index 2 of the array 'noses'",
         "answer":"noses.delete(2,1)"
      },
      "31":{
         "question":"what is the syntax for array.find()?",
         "answer":"array.find((element) => {return element > 0})"
      },
      "32":{
         "question":"what is the difference in array.find and array.filter?",
         "answer":"find returns one element, filter returns all matches."
      },
      "33":{
         "question":"what is the format for array.reduce?",
         "answer":"array.reduce((accumulator,element) => accumulator + element)"
      },
      "34":{
         "question":"what is the format for array.sort?",
         "answer":"array.sort(elementA, elementB => elementA - elementB)"
      },
      "35":{
         "question":"how does array.sort work?",
         "answer":"the formula in it returns a number. if it is positive, one side goes first. negative and the other side goes first. 0? that's anyone's guess."
      }
   },
   "ruby":{
      "0":{
         "question":"what is repl?",
         "answer":"Read Evaluate Print Loop"
      },
      "1":{
         "question":"what is irb?",
         "answer":"interactive ruby"
      },
      "2":{
         "question":"what is pry",
         "answer":"a ruby debugging tool"
      },
      "3":{
         "question":"how do you use pry? (2 lines)",
         "answer":"require 'pry' ; binding.pry"
      },
      "4":{
         "question":"how do you typecast (coerce) a string named 'string' to an int?",
         "answer":"string = string.to_i"
      },
      "5":{
         "question":"how do you combine strings?",
         "answer":"use the +"
      },
      "6":{
         "question":"what is the format for string interpolation?",
         "answer":"double quotes, and #{}"
      },
      "7":{
         "question":"how can you search within a string and get a boolean?",
         "answer":"string.include?('search string')"
      },
      "8":{
         "question":"how can you search within a string and get the index?",
         "answer":"string.index('search string')"
      },
      "9":{
         "question":"how do you print to the screen?",
         "answer":"puts or print, depending if you want a line ending or not"
      },
      "10":{
         "question":"how would you create a new object of the class Dog named spot?",
         "answer":"spot = Dog.new"
      },
      "11":{
         "question":"how can you make an array called myArr? (2 ways)",
         "answer":"myArr = [] ; myArr = Array.new"
      },
      "12":{
         "question":"what is the best way to show an array in output?",
         "answer":"p(arrayName), puts doesn't output anything."
      },
      "13":{
         "question":"how can you remove trailing whitespace and newlines?",
         "answer":".strip"
      },
      "14":{
         "question":"generate a random number between 0 and 4.",
         "answer":"rand(0..4)"
      },
      "15":{
         "question":"what is the best way to check the variable counter for nil?",
         "answer":"counter.nil?"
      },
      "16":{
         "question":"what is indicated by a method that ends in ?",
         "answer":"it returns a boolean usually"
      },
      "17":{
         "question":"what are the falsey values in ruby?",
         "answer":"false and nil"
      },
      "18":{
         "question":"how do you evaluate for truth?",
         "answer":"put an !! in front of it. "
      },
      "19":{
         "question":"explain short circuit evaluation",
         "answer":"put the more restrictive truth tests first in a multi && check so that they fail first and not all tests need to be evaluated."
      },
      "20":{
         "question":"show a basic rspec test.",
         "answer":"\nrequire 'rspec/autorun'\ndescribe 'the name of the function to be tested' do\n    it 'should do a specific thing' do\n    expect(functionName(args)).to eq(expectedOutput)\n  end\nend\n"
      },
      "21":{
         "question":"how do you increment a variable?",
         "answer":"counter += 1"
      },
      "22":{
         "question":"what is the easiest way to loop 10x?",
         "answer":"10.times {}"
      },
      "23":{
         "question":"how do you write 3 to the 5th?",
         "answer":"3**5"
      },
      "24":{
         "question":"what does regex.match(string) return in either case?",
         "answer":"if true it returns an object (which evaluates to true), if false it returns false."
      },
      "25":{
         "question":"what is the shovel operator?",
         "answer":"<< it is the same as .push"
      },
      "26":{
         "question":"what does << do?",
         "answer":"it is the same as push. it adds to the end of an array."
      },
      "27":{
         "question":"what does unshift do?",
         "answer":"it adds to the beginning of an array."
      },
      "28":{
         "question":"how do you add a new array element to the beginning of an array?",
         "answer":"unshift"
      },
      "29":{
         "question":"how do you add a new array element to the end of an array?",
         "answer":"push or shovel operator <<"
      },
      "30":{
         "question":"how do you add a new array element to a specific index of an array?",
         "answer":"array.insert(index,element to insert)"
      },
      "31":{
         "question":"check if an array has an element equal to x. (you are looking for a boolean)",
         "answer":"array.include(element)"
      },
      "32":{
         "question":"check if an array has an element equal to x. (you are looking for the index)",
         "answer":"array.index(element)"
      },
      "33":{
         "question":"delete an element of an array",
         "answer":"array.delete(element)"
      },
      "34":{
         "question":"iterate over every element in an array.",
         "answer":"array.each{|each|}"
      },
      "35":{
         "question":"iterate over every element in an array AND keep the index.",
         "answer":"array.each_with_index{|each,index|}"
      },
      "36":{
         "question":"how is .map unlike .each?",
         "answer":".map returns a new array with the values returned from each loop of the function. each does not."
      },
      "37":{
         "question":"how can you mutate the array with map?",
         "answer":"array.map! will mutate the input array"
      },
      "38":{
         "question":"how can you filter an array with a function?",
         "answer":"array.select{|element| element.even?} will return even elements."
      },
      "39":{
         "question":"how can you filter an array with a function BUT return the array elements that failed the function?",
         "answer":"array.reject{|element| element.even?} will return odd elements."
      },
      "40":{
         "question":"explain how the .sort method works",
         "answer":"array.sort(|first_element, second_element| second_element <=> first_element) will return a reverse order sort. the <=> (spaceship operator) returns -1,0,or 1."
      },
      "41":{
         "question":"delete the element at index 2 of the array 'noses'",
         "answer":"noses.delete_at(2)"
      },
      "42":{
         "question":"how do you make a string all lowercase?",
         "answer":"string = string.downcase"
      },
      "43":{
         "question":"How can you randomly select an element from an array named \"dogs\"?",
         "answer":"dogs.sample"
      },
      "44":{
         "question":"How do you do string substitution?",
         "answer":"stringName.gsub('-',' ')"
      },
      "45":{
         "question":"How can you get the length of an array?",
         "answer":"array.length or array.size"
      },
      "46":{
         "question":"How can you create a new hash named 'myHash'? (2 ways)",
         "answer":" myhash = {} or myHash = Hash.new"
      },
      "47":{
         "question":"What is this (:dogs) called?",
         "answer":"A symbol."
      },
      "48":{
         "question":"How do you iterate over a hash?",
         "answer":" .each, .each_key, and .each_value are some methods. You can also manually iterate over hashName.keys or hashName.values."
      },
      "49":{
         "question":"How can you see if a value is in a hash?",
         "answer":"hashName.has_value(value) (or .value(value)) will return a bool."
      },
      "50":{
         "question":"How can you see if a key is in a hash?",
         "answer":"hashName[:symbol] or hashName['string'] depending on the key format. This will return nil if it isn't found and will then need to be dealt with. hashName.fetch(:symbol) will return an error. hashName.key? (or .has_key?) will return a boolean."
      },
      "51":{
         "question":"How do you reverse a string or array?",
         "answer":"string.reverse will return it reversed but not mutate. string.reverse! will mutate."
      }
   }
}
