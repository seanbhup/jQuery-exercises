console.log($);

// 1. Wait until the DOM is fully loaded


//this will run the function after everything in the document has loaded. even if the script tag is at the top of the page and not the bottom
$(document).ready(function(){ //$(document) is the same thing as getElementBy"TagName"
	// 2. Listent for clicks on button tags
	// var thing = document.getElementById("thing");
	$("button").click(function(){
		// 3. Someone clicked on a button! Run me
		var whatToDo = $(this).attr("toDo");
		console.log(whatToDo);
		if(whatToDo == "hide"){
			$("#thing").hide("fast");
		}else if(whatToDo == "show"){
			$("#thing").show("fast");
		}else if(whatToDo == "toggle"){
			$("#thing").toggle("slow");
		}else if(whatToDo == "html"){
			console.log($("#thing").html());
			$("#thing").html("<table border='1'><tr><td>I'm a table now!</td></tr></table>");
			console.log($("#thing").html());
		}else if(whatToDo == "prepend"){
			$("#thing").prepend("<table border='1'><tr><td>I have a friend to my left now!</td></tr</table>")
		}else if(whatToDo == "append"){
			$("#thing").append("<table border='1'><tr><td>I have a friend to my right now!</td></tr</table>")
		}else if(whatToDo == "css"){
			$("#thing").css({
				"color": "orange",
				"font-size": "70px",
				"background-color": "blue"
			})
		}else if(whatToDo == "addC"){
			$("#thing").addClass("text-uppercase")
		}else if(whatToDo == "removeC"){
			$("#thing").removeClass("text-uppercase")
		}else if(whatToDo == "each"){
			$("button").each(function(){
				console.log($(this).html("Hurry up lunch"))
			});
		}
		// console.log(this);
	});
	// $("#thing") //calls an id just like above
	// $(".thing") //calls a class
	// $("thing") //calls a tag
	// thing.style.display = "none";
});

function toggle(){

	var thing = document.getElementById("thing");
	if(thing.style.display == "fast"){
		thing.style.display = "none";
	}else{
		thing.style.display = "block";
	}
}



