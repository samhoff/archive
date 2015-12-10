function update() {
              document.getElementById("viewer").innerHTML='No results found.'
              var archivevalues = document.getElementById("month").value + document.getElementById("date").value + document.getElementById("year").value;
              var HRTemplate = Handlebars.compile($('#makeurl').html());
              $('#viewer').sheetrock({
                url: "https://docs.google.com/spreadsheets/d/1RlZUG0NOUMNSoSxo1RdOv76aNsyHzkZJS_JX2U-WQi8/edit#gid=0",
                query: "select A,D,E where F = '" + archivevalues + "'",
                labels: ['Volume', 'Page'],
                rowTemplate: HRTemplate
              });
}