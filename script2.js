$(document).ready(function() {

$('form').submit(function(e){
    e.preventDefault();
	doSearch();
});

$('input').keypress(function(e){
    if(e.keyCode == 13){
	    e.preventDefault();
        doSearch();
    }
});

});


var account_id = '976933';
var url;
var src;





	
	
	
	
	function doSearch() {
	
	var params = {};
	var listform = document.getElementById("myList");
    var input = listform.elements[0].value; //input from text box
	
		
        $.getJSON("http://api.bigstockphoto.com/2/"+account_id+"/search/?q="+input+"&callback=?", params, function(images){
            
			$('div#bigstock > img').remove();
			
			
			
			$('#bigstock').removeClass('hidden');
			
			$('#bigstock').prepend('<img id="bg" src="bigstock.jpg" alt="Bigstock">');
			
			$('.modal-header').empty();
			
            for(x in images.data.images){
			    
			    $('.modal-header').append('<p><img src=' + images.data.images[x].small_thumb.url + ' /></p>');
            }
			
			
			$('.modal-header').append('<br/><img id="bg" src="bigstock.jpg" alt="Bigstock">');
            
			
			  
        });
		
		  
	   
	    url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fe1aa44d56ad107ca98e03a1c48d4081&tags=" +input+ "&safe_search=1&per_page=40";
 
$.getJSON(url + "&format=json&jsoncallback=?", function(data){


$('#flickr-pics').empty();
$('div#flickr > img').remove();
   
	
	$('#flickr').removeClass('hidden');
	$('#flickr').prepend('<img src="flickr-logo.jpg" alt="flickr" style="width:150px;height:61px;">');
	
	for (y in data.photos.photo) {
	
	
	
	 $('#flickr-pics').append('<p><img src=' + 'http://farm'+ data.photos.photo[y].farm + '.static.flickr.com/' + data.photos.photo[y].server + "/" + data.photos.photo[y].id + '_' + data.photos.photo[y].secret + '_m.jpg' + ' /></p>');
	}
	
	
	
	$('#flickr-pics').append('<br/><img src="flickr-logo.jpg" alt="flickr" style="width:150px;height:61px;">');
	});
	$('#searchbox').val("");
}//end doSearch function





