var urlparts = location.toString().split('/');
if (urlparts[2]==='bl.ocks.org') {
  var gist = urlparts[5];
  if (window===window.top) {
      document.write('<p align="center"><a target="_top" class="button centered nofloat" href="http://bl.ocks.org/'+gist+'/">View source at bl.ocks.org</a></p>');
  } else {
      document.write('<p align="center"><a target="_top" class="button centered nofloat" href="'+location.toString()+'">View full screen</a></p>');
  }
}
