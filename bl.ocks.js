var urlparts = location.toString().split('/');
if (urlparts[2]==='bl.ocks.org') {
  var gist = urlparts[5];
  document.write('<a target="_top" class="button centered" href="https://gist.github.com/'+gist+'/">Fork this</a> ');
  if (window===window.top) {
    document.write('<div class="clear">Brought to you via <a target="_top" href="http://bl.ocks.org/'+gist+'/">bl.ocks.org</a>.</a></div>');
  } else {
    document.write('<a target="_top" class="button centered" href="'+location.toString()+'">View full screen</a>');
    document.write('<div class="clear"></div>');
  }
}
