     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         var tempString = '';
         for (var i = str.length - 1; i >= 0; i--){
	     	tempString += str[i];   
         }
         	return tempString;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         var newValues = values.sort();
         var small = newValues[0];
         return small;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         var sorted = values.sort();
         var result = [];
         result.push(sorted[0]);
         for (var i = 1; i < sorted.length; i++){
	         if (sorted[i] != sorted[i-1]){
		         result.push(sorted[i]);
	         }
         }
	return result;
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         for (i = 1; i <= 100; i++){
	         if(i % 3 == 0 && i % 5 == 0){
		         console.log("FizzBuzz\n");
		     }
		     else if(i % 3 == 0){
			     console.log("Fizz\n");
			 }
			 else if(i % 5 == 0){
				 console.log("Buzz\n");
		     }
		     else
		         console.log(i);
	    }	
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) { 
     	var results = [];
         for (var i = 0; i < fruits.length; i++){
	         var toremove = false;
		     for (var j = 0; j < fruitsToRemove.length; j++){
		         if(fruits[i]===fruitsToRemove[j]){
			         toremove = true;
			         break;
		         }
	         }    
	         if(!toremove) results.push(fruits[i]);
         }
         return results;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         if(toString.call(toPush) === "[object Array]"){
         	for(var i = 0; i < array.length; i++){
	         array.push(toPush[i]);
	         }
         }
         else
         	array.push(toPush);
         
         return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
	 if(sourceStr == ""){
		return [];
	}
         return sourceStr.split(',');
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
         var total = 0;
         for (var i = 0; i < arguments.length; i++){
	         total += arguments[i];
         }
         return total;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
         return sourceStr.replace(/ /g, '') === ('');
     }
     
     // write an example of a javascript closure
     function add(x){
	     return function(y){
	     	return x + y;
	     }
     }
     var total = add(5);
     total(2);
     
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     {
    "things" [
        {
            "firstName": "value",
            "lastName": "value", 
            "city": "value", 
            "state": "value", 
            "zip": "value", 
            "phoneNumbers": [
            { 
            	"type":"home",
            	"value": "33443322"
            },
            { 
            	"type":"work",
            	"value": "33443322"
            }, 
            { 
            	"type":"mobile",
            	"value": "33443322"
            }
            ]
        }
    ]
    }	
    
     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
     function DataTable(){
	     var columns = [];
	     var rows = [];
	     this.addRows = function(newRow){
		     rows.push(newRow);
	     }
	     this.addColumns = function(newColumn){
		     columns.push(newColumn);
	     }
	     this.getData() = function(){
		     return JSON.stringify(this); //converts an object to a JSON string
	     }
     }
     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     
     	var options = ["Volvo", "Mercedes", "VW"];
     	var div = document.getElementById("div1");
     	var select = document.createElement("select");
     	var button = document.createElement("button");
     	div.appendChild(select);
     	div.appendChild(button);
     	var selectOption; 
     	for (var i = 0; i < options.length; i++){
	     	selectOption = document.createElement("option");
	     	selectOption.innerHTML = options[i];
			select.appendChild(selectOption); 
			    	
     	}
     	button.onclick = function(){
	    	for (var i = 0; i < select.options.length; i++){ 
	    		if(select.options[i].selected == true){
		    		console.log(select.options[i].text);
	    		} 
	    	}		
     	};
     	
     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
     	$(".link"); $("a.link"); $("#foo #fizz .link"); $(".bar .buzz .link");
     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     	var options = ["Joey", "Laura", "Jenna", "Chris", "Charlie"];
     	var list = document.getElementById("list1");
     	var listItem; 
     	for (var i = 0; i < options.length; i++){
     		listItem = document.createElement("li");
     		listItem.innerHTML = options[i];
	     	list.appendChild(listItem);
     	}
     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     	var foobar = document.getElementById("foobar");
     	var options = ["Joey", "Laura", "Jenna", "Chris", "Charlie"];
     	var box; 
     	for (var i = 0; i < options.length; i++){
     		box = document.createElement("input");
     		box.setAttribute("type", "checkbox");
     		box.innerHTML = options[i];
	     	foobar.appendChild(box);
     	}
     	var fill = document.createElement("a");
     	fill.setAttribute("id", "boxFill");
     	fill.innerHTML = "Fill";
     	var clear = document.createElement("a");
     	clear.setAttribute("id", "boxClear");
     	clear.innerHTML = "Clear";
     	foobar.appendChild(fill);
     	foobar.appendChild(clear);
     	$("#boxFill").click( function(){
	     	$("#foobar input[type=checkbox]").attr("checked", "checked");
     	});
     	$("#boxClear").click( function(){
	     	$("#foobar input[type=checkbox]").removeAttr("checked");
     	});
     