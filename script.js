function update() {
var selectedDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("date").value).getTime();
if (new Date(2002, 10, 11).getTime() <= selectedDate) {
 alert('The Daily Bruin\'s archives end on October 10, 2002.')
} else if (new Date(2002, 10, 10).getTime() <= selectedDate) {
 var volume = '198'
 var page = '414'
} else if (new Date(1954, 10, 25).getTime() <= selectedDate) {
 var volume = '32'
 var page = '312'
} else if (new Date(1937, 04, 16).getTime() <= selectedDate) {
 var volume = '16'
 var page = '230'
} else if (new Date(1915, 09, 10).getTime() <= selectedDate) {
 var volume = '01'
 var page = '03'
} else if (selectedDate <= new Date(1915, 09, 09).getTime()) {
 alert('The Daily Bruin\'s archives begin on September 10, 1915.')
}
document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin' + volume + 'losa?ui=zoom#page/n' + page + '/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
}
