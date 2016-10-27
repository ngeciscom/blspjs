jQuery(document).ready(function () {
  var a = 3;
  var b = new Date();
  var c = b.getSeconds();
  var d;
  var e = c % a;
  e += 1;
  if (e == 1) {
    d = artikel1;
  }
  if (e == 2) {
    d = artikel2;
  }
  if (e == 3) {
    d = artikel3;
  }
  $(&quot;#random-post&quot;).load(d)
});
