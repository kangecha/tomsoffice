
$(document).bind("pageshow", "#detailsPage", function( event ) {
	$('#busy').show();

	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getdatavideo.php?id='+id, detailVideo);
});

function detailVideo(data) {
	

	var video = data.item;
	$('#busy').hide();
	console.log(video);
	
	$('#actionList').append('<li>'+ video.judul +'</li>');
	
	$('#actionList').append('<li><center><iframe width="320" height="215" src="'+ video.link +'" frameborder="0" allowfullscreen></iframe></center></li>');

	$('#actionList').append('<li class="wrap">'+ video.deskripsi +'</li>');

	$('#actionList').listview('refresh');
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
