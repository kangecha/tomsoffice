var serviceURL = "http://tugas.grosirdianarozz.com/";

$(document).bind("pageshow", "#videoListPage", function( event ) {
	$('#busy').show();

	var kat = getUrlVars()["kat"];
	$.getJSON(serviceURL + 'getbykat.php?kat='+kat, displayVideo);
});

function displayVideo(data) {
	

	var others = data.item;
	$('#busy').hide();
	console.log(others);
	$.each(others, function(index, Other) {
			$('#videoList').append('<li><a href="videoplayer.html?id=' + Other.id + '" data-transition="slide">' +
					'<img src="' + Other.gambar + '" align="center"/>' +
					'<h4 class="wrap">' + Other.judul + '</h4>' +
					'<p class="wrap">' + Other.deskripsi + '</p>' +
					'<span class="ui-li-count">' + Other.kategori + '</span></a></li>');
		});
		$('#videoList').listview('refresh');
	
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
