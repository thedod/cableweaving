var urlparts = location.toString().split('/');
if (urlparts[2]==='bl.ocks.org') {
  var gist = urlparts[5];
  if (window===window.top) {
      document.write('<p align="center">Brought to you via <p align="center"><a target="_top" href="https://bl.ocks.org/'+gist+'/">bl.ocks.org</a>.');
      document.write('<a target="_top" class="button centered nofloat" href="https://gist.github.com/'+gist+'/">Fork this</a></p>');
  } else {
      document.write('<p align="center"><a target="_top" class="button centered nofloat" href="'+location.toString()+'">View full screen</a></p>');
  }
}
