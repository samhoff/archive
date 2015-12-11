function update() {
var selectedDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("date").value).getTime();
if ( selectedDate <= new Date(1915, 09, 09).getTime()) {
  alert('The Daily Bruin\'s archives begin on September 10, 1915.')
} else if (new Date(1915, 09, 10).getTime() <= selectedDate) {
 document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin01losa?ui=zoom#page/n03/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
} else if (new Date(1937, 04, 16).getTime() <= selectedDate) {
 document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin16losa?ui=zoom#page/n230/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
} else if (new Date(1954, 10, 25).getTime() <= selectedDate) {
 document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin32losa?ui=zoom#page/n312/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
} else if (new Date(2002, 10, 11).getTime() <= selectedDate) {
 alert('The Daily Bruin\'s archives end on October 10, 2002.')
}
}
