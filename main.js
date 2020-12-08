$(document).ready(function(){
	$("#insertedTask").click(function(){
		 var text=$(".inputArea").val();
		 if(text.length > 0){
		 	$(".pendingTask").append("<li><input type='checkbox' id='checkBox'><span>"+text+"</span><button id='edit'>Edit</button><button id='delete'>Delete</button></li>")
		 	$(".inputArea").val("");

		 	$('.pendingTask').on('click','#edit',function(){
		 		$(this).prev().attr('contenteditable','true').focus();
		 	});
		 	$(".pendingTask").on('click','#delete',function(){
		 		$(this).parent().remove();
		 	});
		 	$(".pendingTask").on('click','#checkBox',function(){
		 		$(this).parent().appendTo(".completedTask");
		 	})
		 	$(".completedTask").on('click','#delete',function(){
		 		$(this).parent().remove();
		 	});
		 	$(".completedTask").on('click','#checkBox',function(){
		 		$(this).parent().appendTo(".pendingTask");
		 	})
		 }
	});
});
