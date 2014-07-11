$(document).ready(function(){

			$(".name").on("keypress" , function(evt){ 
  					var theEvent = evt || window.event;
				    var key = theEvent.keyCode || theEvent.which;
				    key = String.fromCharCode( key );
				    var regex = /[^a-zA-Z]|\./;  
				    if( regex.test(key) || $(this).val().length > 70 ) {
				        theEvent.returnValue = false;
				         $(this).addClass("error"); 
				        $(this).after("<span>Invalid value</span>"); 
				        if(theEvent.preventDefault) theEvent.preventDefault();
				    } else { $(this).removeClass("error"); } 
  			});

  			$(".phone").on("keypress" , function(evt){

  					var theEvent = evt || window.event;
				    var key = theEvent.keyCode || theEvent.which;
				    key = String.fromCharCode( key );
				    var regex = /[^a-zA-Z]|\./; 
				    if( !regex.test(key) || $(this).val().length > 15 ) {
				        theEvent.returnValue = false;
				        $(this).addClass("error"); 
				        if(theEvent.preventDefault) theEvent.preventDefault();
				    } else { $(this).removeClass("error"); } 
  			}); 

  			$(".number").on("keypress" , function(evt){

  					var theEvent = evt || window.event;
				    var key = theEvent.keyCode || theEvent.which;
				    key = String.fromCharCode( key );
				    var regex = /[^0-9]|\./; 
				    if( regex.test(key) ) {
				        theEvent.returnValue = false;
				        $(this).addClass("error"); 
				        if(theEvent.preventDefault) theEvent.preventDefault();
				    } else { $(this).removeClass("error"); } 
  			}); 


  			$(".pincodein").on("keypress" , function(evt){

  					var theEvent = evt || window.event;
				    var key = theEvent.keyCode || theEvent.which;
				    key = String.fromCharCode( key );
				    var regex = /[^0-9]|\./; 
				    if( regex.test(key) || $(this).val().length > 6 ) {
				        theEvent.returnValue = false;
				        $(this).addClass("error"); 
				        if(theEvent.preventDefault) theEvent.preventDefault();
				    } else { $(this).removeClass("error"); } 
  			});


  			$(".pincodeUS").on("keypress" , function(evt){

  					var theEvent = evt || window.event;
				    var key = theEvent.keyCode || theEvent.which;
				    key = String.fromCharCode( key );
				    var regex = /\b\d{5}-\d{4}\b/
				    if( regex.test(key) || $(this).val().length > 6 ) {
				        theEvent.returnValue = false;
				        $(this).addClass("error"); 
				        if(theEvent.preventDefault) theEvent.preventDefault();
				    } else { $(this).removeClass("error"); } 
  			}); 
  			$(".credit_card").on("keyup" , function(evt){  

				    var val = $(this).val();
				    var thisfiled = $(this); 
					var re = {
								        electron: /^(4026|417500|4508|4844|491(3|7))/,
								        maestro: /^(5018|5020|5038|6304|6759|676[1-3])/,
								        dankort: /^(5019)/,
								        interpayment: /^(636)/,
								        unionpay: /^(62|88)/,
								        visa: /^4/,
								        mastercard: /^5[1-5]/,
								        amex: /^3[47]/,
								        diners: /^30[0-5]|^36/,
								        discover: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
								        jcb: /^35(2[89]|[3-8][0-9])/
							};

				    thisfiled.removeClass();
				    thisfiled.addClass("credit_card");				    
					$.each(re , function(index , value ){ 
						 if( val.match(value) ){  
						     thisfiled.addClass(index);  
						  } 
					});
				    
				    
  			}); 

  			$("#validate").on("submit", function(){

  				$("#validate .error").removeClass("error");
  				//required
  				$(".required").each(function( index, value ) {   

				 	if($(this).val().length  < 1 ) { $(this).addClass("error"); /*$(this).after("<error>  Invalid value</error>");*/   }
				 	else { $(this).removeClass("error"); $(this).after(""); } 
 				}); 

  			  	//name  
 				$(".name").each(function( index, value ) {  
    				var regex = /[^a-zA-Z]|\./; 
				 	if( regex.test( $(this).val() ) ) { 
				        $(this).addClass("error"); return false;
				    } 

 				});   
 				 // phone  
 				 $(".phone").each(function( index, value ) {  
    			    var regex = /^\+(?:[0-9] ?){6,14}[0-9]/ 
				 	if( !regex.test( $(this).val() ) ) { 
				        $(this).addClass("error"); return false;
				    }  
 				 });  
 				 // email
 				 $(".email").each(function(){  
 				 	var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
   				 	if( !pattern.test( $(this).val() ) ) { 
				        $(this).addClass("error"); return false;
				    } 
 				 });

 				 // url
 				 $(".url").each(function(){  

 				 	var pattern = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
);
   				 	if( !pattern.test( $(this).val() ) ) { 
				        $(this).addClass("error"); return false;
				    } 
 				 }); 

 				 // credit card 
 				 $(".credit_card").each(function(){

				 	var val = $(this).val();
				    var thisfiled = $(this);
				    var re = {
								        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
								        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
								        dankort: /^(5019)\d+$/,
								        interpayment: /^(636)\d+$/,
								        unionpay: /^(62|88)\d+$/,
								        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
								        mastercard: /^5[1-5][0-9]{14}$/,
								        amex: /^3[47][0-9]{13}$/,
								        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
								        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
								        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
								    }; 

				    thisfiled.removeClass();
				    thisfiled.addClass("credit_card");	
				    error = 1;			    
					$.each(re , function(index , value ){ 
						 if( val.match(value) ){  
						     thisfiled.addClass(index);

						     error = 0;  
						  } 
					});

					if(error) { thisfiled.addClass("error"); }

 				  }); 
		

				$(".number").each(function(evt){ 					 
				    var regex = /[^0-9]|\./; 
				    if( regex.test( $(this).val() ) ) { 
				        $(this).addClass("error"); return false;
				    }
  				});


  				$(".pincodein").each(function(){ 					 
				    var regex = /[^0-9]|\./; 
				    if( regex.test( $(this).val() )  &&  $(this).length > 6  ) { 
				        $(this).addClass("error"); return false;
				    }
  				}); 


				$(".pincodeUS").each(function(){ 
					 var regex = /\^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/; 
  					if( regex.test( $(this).val() )  &&  $(this).length > 6  ) { 
				        $(this).addClass("error"); return false;
				    }

  			    });


  			    $(".date").each(function(){ 
					 var regex = /(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-((18|19|20|21)\\d\\d)/
  					if( regex.test( $(this).val() ) ) { 
				        $(this).addClass("error"); return false;
				    }

  			    });
 
  			     $(".checked").each(function(){ 									 
  					if( !$(this).prop("checked") ) { 
				        $(this).addClass("error"); return false;
				    }
  			    }); 
 
 				if( $("#validate").find('.error').length ){ return false; }
 

  			});

 
});
