var urlparts = location.toString().split('/');
if (urlparts[2]==='bl.ocks.org') {
  var gist = urlparts[5];
  document.write('<a target="_top" class="button centered nofloat" href="http://bl.ocks.org/'+gist+'/">Code</a> ');
  document.write('<a target="_top" class="button centered nofloat" href="'+location.toString()+'">Full screen</a>');
}
