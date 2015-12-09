function update() {
    var archivevalues = document.getElementById("date").value.split(":");
    document.getElementById("viewer").innerHTML = '<iframe src="https://archive.org/stream/ucladailybruin' + archivevalues[0] + 'losa?ui=zoom#page/n' + archivevalues[1] + '/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
        ;
}