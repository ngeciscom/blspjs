//Random iframe content- (c) Dynamic Drive (www.dynamicdrive.com)
//For full source code, and Terms Of use, visit http://dynamicdrive.com
//This credit MUST stay intact for use

var ie=document.all&&navigator.userAgent.indexOf("Opera")==-1
var dom=document.getElementById&&navigator.userAgent.indexOf("Opera")==-1

//Specify IFRAME display attributes
var iframeprops='width=100% height=100% marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"'

//Specify random URLs to display inside iframe
var randomcontent=new Array()
randomcontent[0]="https://cdn.rawgit.com/ngeciscom/blspjs/master/1.html"
randomcontent[1]="https://cdn.rawgit.com/ngeciscom/blspjs/master/2.html"
randomcontent[2]="https://cdn.rawgit.com/ngeciscom/blspjs/master/3.html"

//No need to edit after here
if (ie||dom)
document.write('<iframe id="dynstuff" src="" '+iframeprops+'></iframe>')

function random_iframe(){
if (ie||dom){
var iframeobj=document.getElementById? document.getElementById("dynstuff") : document.all.dynstuff
iframeobj.src=randomcontent[Math.floor(Math.random()*randomcontent.length)]
}
}

window.onload=random_iframe
