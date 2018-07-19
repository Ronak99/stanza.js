

function Stanza(){

	/*******************************
	
				variables
				
	*******************************/
	
	var time ;
	var animationName ;
//	var container;
	var objectState = "true";
	var thisInterval;
	var interval = true;
	var background = "none";
	
	/*******************************
	
				function begins
				
	*******************************/
	
	
	this.config = function(element, animationSettings){
		
	var iterator = 0;
		
	objectState = jQuery.isEmptyObject(animationSettings);
		
	
	//elements	
	var elementName = element;
	var elementTag = $(elementName);
	
	
	
	//things that animation settings would take	
		
	if(!objectState){	
		
	  objectNotEmpty(); 
		
	 }
		
	 else{
		//deafult values   
		  
	   time = 100;
	   animationName = "rotateIn"; 
	   
	  }
		
		var childTag = "div";
		
		//trimed values which the element has
		var elementValue = elementTag.text().trim();
		
		//initialised
		var modifiedValue=" ";
		
		
		for(var i=0; i<elementValue.length; i++){
			
				 modifiedValue += "<"+childTag+">"+ elementValue[i] +"</"+childTag+">";
				
		}
			
		
		elementTag.html(modifiedValue);
			
	
		
	
			
	 setInterval(function(){
		 libraryLogic();
		 iterator++;
	 },100);
		
		
		
	function objectNotEmpty(){
		
		 
	 time = animationSettings.time;
		
	 animationName = animationSettings.animationName;
	// container = animationSettings.parent;	
	 background = animationSettings.background;	
	
		
     errorHandling();		
	  
		
	}	
		
		
	function libraryLogic(){
		
			var elementRef = $(element + " " + childTag+":nth-child("+iterator+")");
		
			elementRef.addClass(animationName + " " + "animated");
			
			elementRef.css("background",background);
		
	}	
	
	}
	

	
	function errorHandling(){
		
		if(checkUndefined(animationName)){
		   throwError("AnimationName cannot be left undefined");
		}
		
		if(checkUndefined(time)){
		   throwError("Time cannot be left undefined");
		  }
		
	}
	
}



function checkUndefined(property){

	if(property == undefined){
	   return true;
	}
	return false;
}

function throwError(errorMsg, errorVariable){
	
	throw new Error(errorMsg);
	
}




	
