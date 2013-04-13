var urlparts = location.toString().split('/');
if (urlparts[2]==='bl.ocks.org') {
  var gist = urlparts[5];
  document.write('<p align="center">');
  if (window===window.top) {
      document.write('Brought to you via <a target="_top" href="http://bl.ocks.org/'+gist+'/">bl.ocks.org</a>.');
  } else {
      document.write('<a target="_top" class="button centered" href="'+location.toString()+'">View full screen</a> ');
  }
  document.write('<a target="_top" class="button centered nofloat" href="https://gist.github.com/'+gist+'/">Fork this</a></p>');
}
