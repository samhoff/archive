<<<<<<< HEAD
function update() {
var selectedDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("date").value).getTime();
if (new Date(2002, 12, 09).getTime() < selectedDate) {
 alert('The Daily Bruin\'s archives currently end on December 9, 2002.')
} else if (new Date(2002, 10, 21).getTime() <= selectedDate) {
 var volume = '199'
 var page = '06'
} else if (new Date(2002, 10, 10).getTime() <= selectedDate) {
 var volume = '198'
 var page = '414'
} else if (new Date(2002, 09, 12).getTime() <= selectedDate) {
 var volume = '198'
 var page = '06'
} else if (new Date(1994, 01, 10).getTime() <= selectedDate) {
 var volume = '152'
 var page = '06'
} else if (new Date(1993, 11, 01).getTime() <= selectedDate) {
 var volume = '151'
 var page = '10'
} else if (new Date(1993, 09, 27).getTime() <= selectedDate) {
 var volume = '150'
 var page = '10'
} else if (new Date(1993, 06, 28).getTime() <= selectedDate) {
 var volume = '149'
 var page = '08'
} else if (new Date(1993, 05, 05).getTime() <= selectedDate) {
 var volume = '148'
 var page = '08'
} else if (new Date(1993, 04, 05).getTime() <= selectedDate) {
 var volume = '147'
 var page = '08'
} else if (new Date(1993, 01, 11).getTime() <= selectedDate) {
 var volume = '146'
 var page = '08'
} else if (new Date(1993, 01, 11).getTime() <= selectedDate) {
 var volume = '146'
 var page = '08'
} else if (new Date(1992, 11, 02).getTime() <= selectedDate) {
 var volume = '145'
 var page = '01'
} else if (new Date(1992, 09, 21).getTime() <= selectedDate) {
 var volume = '144'
 var page = '06'
} else if (new Date(1992, 06, 22).getTime() <= selectedDate) {
 var volume = '143'
 var page = '06'
} else if (new Date(1992, 05, 12).getTime() <= selectedDate) {
 var volume = '142'
 var page = '07'
} else if (new Date(1992, 03, 30).getTime() <= selectedDate) {
 var volume = '141'
 var page = '07'
} else if (new Date(1992, 02, 06).getTime() <= selectedDate) {
 var volume = '140'
 var page = '06'
} else if (new Date(1992, 01, 06).getTime() <= selectedDate) {
 var volume = '139'
 var page = '06'
} else if (new Date(1991, 11, 01).getTime() <= selectedDate) {
 var volume = '138'
 var page = '06'
} else if (new Date(1991, 09, 23).getTime() <= selectedDate) {
 var volume = '137'
 var page = '07'
} else if (new Date(1991, 06, 24).getTime() <= selectedDate) {
 var volume = '136'
 var page = '08'
} else if (new Date(1991, 05, 09).getTime() <= selectedDate) {
 var volume = '135'
 var page = '07'
} else if (new Date(1991, 04, 01).getTime() <= selectedDate) {
 var volume = '134'
 var page = '06'
} else if (new Date(1991, 01, 07).getTime() <= selectedDate) {
 var volume = '133'
 var page = '07'
} else if (new Date(1990, 10, 29).getTime() <= selectedDate) {
 var volume = '132'
 var page = '07'
} else if (new Date(1990, 09, 24).getTime() <= selectedDate) {
 var volume = '131'
 var page = '07'
} else if (new Date(1990, 06, 25).getTime() <= selectedDate) {
 var volume = '130'
 var page = '07'
} else if (new Date(1990, 04, 30).getTime() <= selectedDate) {
 var volume = '129'
 var page = '08'
} else if (new Date(1990, 04, 02).getTime() <= selectedDate) {
 var volume = '128'
 var page = '08'
} else if (new Date(1990, 02, 15).getTime() <= selectedDate) {
 var volume = '127'
 var page = '07'
} else if (new Date(1990, 01, 08).getTime() <= selectedDate) {
 var volume = '126'
 var page = '07'
} else if (new Date(1989, 11, 01).getTime() <= selectedDate) {
 var volume = '125'
 var page = '07'
} else if (new Date(1989, 09, 25).getTime() <= selectedDate) {
 var volume = '124'
 var page = '613'
} else if (new Date(1989, 06, 26).getTime() <= selectedDate) {
 var volume = '123'
 var page = '06'
} else if (new Date(1989, 04, 18).getTime() <= selectedDate) {
 var volume = '122'
 var page = '06'
} else if (new Date(1989, 04, 03).getTime() <= selectedDate) {
 var volume = '121'
 var page = '06'
} else if (new Date(1989, 02, 09).getTime() <= selectedDate) {
 var volume = '120'
 var page = '07'
} else if (new Date(1989, 01, 09).getTime() <= selectedDate) {
 var volume = '119'
 var page = '07'
} else if (new Date(1988, 10, 24).getTime() <= selectedDate) {
 var volume = '118'
 var page = '562'
} else if (new Date(1988, 09, 26).getTime() <= selectedDate) {
 var volume = '117'
 var page = '08'
} else if (new Date(1988, 06, 27).getTime() <= selectedDate) {
 var volume = '116'
 var page = '06'
} else if (new Date(1988, 05, 02).getTime() <= selectedDate) {
 var volume = '115'
 var page = '05'
} else if (new Date(1988, 03, 26).getTime() <= selectedDate) {
 var volume = '114'
 var page = '05'
} else if (new Date(1988, 01, 04).getTime() <= selectedDate) {
 var volume = '113'
 var page = '06'
} else if (new Date(1987, 11, 03).getTime() <= selectedDate) {
 var volume = '112'
 var page = '01'
} else if (new Date(1987, 09, 22).getTime() <= selectedDate) {
 var volume = '111'
 var page = '08'
} else if (new Date(1987, 06, 22).getTime() <= selectedDate) {
 var volume = '110'
 var page = '04'
} else if (new Date(1987, 03, 30).getTime() <= selectedDate) {
 var volume = '109'
 var page = '02'
} else if (new Date(1987, 01, 05).getTime() <= selectedDate) {
 var volume = '108'
 var page = '03'
} else if (new Date(1986, 09, 23).getTime() <= selectedDate) {
 var volume = '107'
 var page = '02'
} else if (new Date(1986, 06, 30).getTime() <= selectedDate) {
 var volume = '106'
 var page = '07'
} else if (new Date(1986, 04, 23).getTime() <= selectedDate) {
 var volume = '105'
 var page = '02'
} else if (new Date(1986, 04, 07).getTime() <= selectedDate) {
 var volume = '104'
 var page = '04'
} else if (new Date(1986, 01, 01).getTime() <= selectedDate) {
 var volume = '103'
 var page = '05'
} else if (new Date(1985, 09, 24).getTime() <= selectedDate) {
 var volume = '102'
 var page = '04'
} else if (new Date(1985, 06, 24).getTime() <= selectedDate) {
 var volume = '101'
 var page = '05'
} else if (new Date(1985, 04, 01).getTime() <= selectedDate) {
 var volume = '100'
 var page = '05'
} else if (new Date(1985, 01, 07).getTime() <= selectedDate) {
 var volume = '99'
 var page = '04'
} else if (new Date(1984, 09, 25).getTime() <= selectedDate) {
 var volume = '98'
 var page = '05'
} else if (new Date(1984, 06, 21).getTime() <= selectedDate) {
 var volume = '97'
 var page = '02'
} else if (new Date(1984, 04, 02).getTime() <= selectedDate) {
 var volume = '96'
 var page = '04'
} else if (new Date(1983, 12, 27).getTime() <= selectedDate) {
 var volume = '95'
 var page = '05'
} else if (new Date(1983, 09, 27).getTime() <= selectedDate) {
 var volume = '94'
 var page = '04'
} else if (new Date(1983, 06, 27).getTime() <= selectedDate) {
 var volume = '93'
 var page = '04'
} else if (new Date(1983, 04, 04).getTime() <= selectedDate) {
 var volume = '92'
 var page = '05'
} else if (new Date(1983, 01, 10).getTime() <= selectedDate) {
 var volume = '91'
 var page = '05'
} else if (new Date(1982, 09, 28).getTime() <= selectedDate) {
 var volume = '90'
 var page = '06'
} else if (new Date(1982, 06, 28).getTime() <= selectedDate) {
 var volume = '89'
 var page = '07'
} else if (new Date(1982, 04, 05).getTime() <= selectedDate) {
 var volume = '88'
 var page = '07'
} else if (new Date(1982, 01, 11).getTime() <= selectedDate) {
 var volume = '87'
 var page = '07'
} else if (new Date(1981, 09, 22).getTime() <= selectedDate) {
 var volume = '86'
 var page = '08'
} else if (new Date(1981, 04, 06).getTime() <= selectedDate) {
 var volume = '85'
 var page = '05'
} else if (new Date(1981, 01, 12).getTime() <= selectedDate) {
 var volume = '84'
 var page = '07'
} else if (new Date(1980, 09, 23).getTime() <= selectedDate) {
 var volume = '83'
 var page = '03'
} else if (new Date(1980, 03, 31).getTime() <= selectedDate) {
 var volume = '82'
 var page = '06'
} else if (new Date(1980, 01, 07).getTime() <= selectedDate) {
 var volume = '81'
 var page = '05'
} else if (new Date(1979, 09, 18).getTime() <= selectedDate) {
 var volume = '80'
 var page = '06'
} else if (new Date(1979, 04, 02).getTime() <= selectedDate) {
 var volume = '79'
 var page = '06'
} else if (new Date(1979, 01, 08).getTime() <= selectedDate) {
 var volume = '78'
 var page = '06'
} else if (new Date(1978, 09, 19).getTime() <= selectedDate) {
 var volume = '77'
 var page = '06'
} else if (new Date(1978, 04, 03).getTime() <= selectedDate) {
 var volume = '76'
 var page = '07'
} else if (new Date(1978, 01, 09).getTime() <= selectedDate) {
 var volume = '75'
 var page = '04'
} else if (new Date(1977, 09, 20).getTime() <= selectedDate) {
 var volume = '74'
 var page = '06'
} else if (new Date(1977, 04, 04).getTime() <= selectedDate) {
 var volume = '73'
 var page = '05'
} else if (new Date(1977, 01, 06).getTime() <= selectedDate) {
 var volume = '72'
 var page = '06'
} else if (new Date(1976, 09, 21).getTime() <= selectedDate) {
 var volume = '71'
 var page = '07'
} else if (new Date(1976, 04, 05).getTime() <= selectedDate) {
 var volume = '70'
 var page = '06'
} else if (new Date(1976, 01, 07).getTime() <= selectedDate) {
 var volume = '69'
 var page = '05'
} else if (new Date(1975, 10, 02).getTime() <= selectedDate) {
 var volume = '68'
 var page = '05'
} else if (new Date(1975, 04, 17).getTime() <= selectedDate) {
 var volume = '67'
 var page = '05'
} else if (new Date(1975, 01, 06).getTime() <= selectedDate) {
 var volume = '66'
 var page = '05'
} else if (new Date(1974, 11, 01).getTime() <= selectedDate) {
 var volume = '65'
 var page = '07'
} else if (new Date(1974, 05, 01).getTime() <= selectedDate) {
 var volume = '64'
 var page = '06'
} else if (new Date(1974, 01, 07).getTime() <= selectedDate) {
 var volume = '63'
 var page = '06'
} else if (new Date(1973, 06, 15).getTime() <= selectedDate) {
 var volume = '62'
 var page = '03'
} else if (new Date(1973, 01, 08).getTime() <= selectedDate) {
 var volume = '61'
 var page = '06'
} else if (new Date(1972, 09, 18).getTime() <= selectedDate) {
 var volume = '60'
 var page = '06'
} else if (new Date(1972, 03, 29).getTime() <= selectedDate) {
 var volume = '59'
 var page = '06'
} else if (new Date(1972, 01, 05).getTime() <= selectedDate) {
 var volume = '58'
 var page = '06'
} else if (new Date(1971, 09, 28).getTime() <= selectedDate) {
 var volume = '57'
 var page = '06'
} else if (new Date(1971, 03, 31).getTime() <= selectedDate) {
 var volume = '56'
 var page = '06'
} else if (new Date(1971, 01, 06).getTime() <= selectedDate) {
 var volume = '55'
 var page = '05'
} else if (new Date(1970, 09, 29).getTime() <= selectedDate) {
 var volume = '54'
 var page = '06'
} else if (new Date(1970, 04, 24).getTime() <= selectedDate) {
 var volume = '53'
 var page = '04'
} else if (new Date(1969, 11, 18).getTime() <= selectedDate) {
 var volume = '52'
 var page = '04'
} else if (new Date(1969, 05, 13).getTime() <= selectedDate) {
 var volume = '51'
 var page = '03'
} else if (new Date(1968, 11, 25).getTime() <= selectedDate) {
 var volume = '50'
 var page = '06'
} else if (new Date(1968, 05, 07).getTime() <= selectedDate) {
 var volume = '49'
 var page = '03'
} else if (new Date(1967, 11, 30).getTime() <= selectedDate) {
 var volume = '48'
 var page = '03'
} else if (new Date(1967, 02, 07).getTime() <= selectedDate) {
 var volume = '47'
 var page = '03'
} else if (new Date(1966, 05, 02).getTime() <= selectedDate) {
 var volume = '46'
 var page = '03'
} else if (new Date(1965, 11, 03).getTime() <= selectedDate) {
 var volume = '45'
 var page = '03'
} else if (new Date(1965, 02, 17).getTime() <= selectedDate) {
 var volume = '44'
 var page = '02'
} else if (new Date(1964, 03, 31).getTime() <= selectedDate) {
 var volume = '43'
 var page = '04'
} else if (new Date(1963, 05, 01).getTime() <= selectedDate) {
 var volume = '42'
 var page = '04'
} else if (new Date(1962, 09, 28).getTime() <= selectedDate) {
 var volume = '41'
 var page = '04'
} else if (new Date(1961, 12, 01).getTime() <= selectedDate) {
 var volume = '40'
 var page = '03'
} else if (new Date(1961, 02, 15).getTime() <= selectedDate) {
 var volume = '39'
 var page = '03'
} else if (new Date(1960, 03, 03).getTime() <= selectedDate) {
 var volume = '38'
 var page = '03'
} else if (new Date(1959, 03, 06).getTime() <= selectedDate) {
 var volume = '37'
 var page = '03'
} else if (new Date(1958, 03, 19).getTime() <= selectedDate) {
 var volume = '36'
 var page = '05'
} else if (new Date(1957, 03, 15).getTime() <= selectedDate) {
 var volume = '35'
 var page = '06'
} else if (new Date(1956, 04, 02).getTime() <= selectedDate) {
 var volume = '34'
 var page = '04'
} else if (new Date(1955, 03, 28).getTime() <= selectedDate) {
 var volume = '33'
 var page = '04'
} else if (new Date(1954, 10, 25).getTime() <= selectedDate) {
 var volume = '32'
 var page = '312'
} else if (new Date(1954, 03, 26).getTime() <= selectedDate) {
 var volume = '32'
 var page = '04'
} else if (new Date(1953, 03, 20).getTime() <= selectedDate) {
 var volume = '31'
 var page = '04'
} else if (new Date(1952, 03, 20).getTime() <= selectedDate) {
 var volume = '30'
 var page = '04'
} else if (new Date(1951, 03, 16).getTime() <= selectedDate) {
 var volume = '29'
 var page = '03'
} else if (new Date(1950, 09, 13).getTime() <= selectedDate) {
 var volume = '28'
 var page = '04'
} else if (new Date(1949, 09, 23).getTime() <= selectedDate) {
 var volume = '27'
 var page = '04'
} else if (new Date(1948, 10, 22).getTime() <= selectedDate) {
 var volume = '26'
 var page = '06'
} else if (new Date(1947, 10, 06).getTime() <= selectedDate) {
 var volume = '25'
 var page = '03'
} else if (new Date(1946, 05, 21).getTime() <= selectedDate) {
 var volume = '24'
 var page = '05'
} else if (new Date(1945, 01, 24).getTime() <= selectedDate) {
 var volume = '23'
 var page = '04'
} else if (new Date(1943, 02, 18).getTime() <= selectedDate) {
 var volume = '22'
 var page = '05'
} else if (new Date(1941, 12, 02).getTime() <= selectedDate) {
 var volume = '21'
 var page = '04'
} else if (new Date(1941, 01, 06).getTime() <= selectedDate) {
 var volume = '20'
 var page = '103'
} else if (new Date(1940, 11, 08).getTime() <= selectedDate) {
 var volume = '20'
 var page = '04'
} else if (new Date(1940, 02, 12).getTime() <= selectedDate) {
 var volume = '19'
 var page = '16'
} else if (new Date(1939, 12, 12).getTime() <= selectedDate) {
 var volume = '19'
 var page = '04'
} else if (new Date(1939, 01, 03).getTime() <= selectedDate) {
 var volume = '18'
 var page = '41'
} else if (new Date(1938, 12, 05).getTime() <= selectedDate) {
 var volume = '18'
 var page = '04'
} else if (new Date(1938, 01, 03).getTime() <= selectedDate) {
 var volume = '17'
 var page = '91'
} else if (new Date(1937, 11, 12).getTime() <= selectedDate) {
 var volume = '17'
 var page = '03'
} else if (new Date(1937, 04, 16).getTime() <= selectedDate) {
 var volume = '16'
 var page = '230'
} else if (new Date(1937, 01, 06).getTime() <= selectedDate) {
 var volume = '16'
 var page = '03'
} else if (new Date(1936, 03, 10).getTime() <= selectedDate) {
 var volume = '15'
 var page = '03'
} else if (new Date(1936, 01, 06).getTime() <= selectedDate) {
 var volume = '14'
 var page = '471'
} else if (new Date(1935, 04, 29).getTime() <= selectedDate) {
 var volume = '14'
 var page = '03'
} else if (new Date(1935, 01, 03).getTime() <= selectedDate) {
 var volume = '13'
 var page = '410'
} else if (new Date(1934, 05, 14).getTime() <= selectedDate) {
 var volume = '13'
 var page = '04'
} else if (new Date(1934, 01, 03).getTime() <= selectedDate) {
 var volume = '12'
 var page = '386'
} else if (new Date(1933, 08, 04).getTime() <= selectedDate) {
 var volume = '12'
 var page = '04'
} else if (new Date(1933, 01, 04).getTime() <= selectedDate) {
 var volume = '11'
 var page = '225'
} else if (new Date(1932, 10, 03).getTime() <= selectedDate) {
 var volume = '11'
 var page = '04'
} else if (new Date(1932, 01, 04).getTime() <= selectedDate) {
 var volume = '10'
 var page = '284'
} else if (new Date(1931, 09, 17).getTime() <= selectedDate) {
 var volume = '10'
 var page = '04'
} else if (new Date(1931, 01, 05).getTime() <= selectedDate) {
 var volume = '09'
 var page = '226'
} else if (new Date(1930, 10, 30).getTime() <= selectedDate) {
 var volume = '09'
 var page = '03'
} else if (new Date(1930, 01, 02).getTime() <= selectedDate) {
 var volume = '08'
 var page = '103'
} else if (new Date(1929, 11, 25).getTime() <= selectedDate) {
 var volume = '08'
 var page = '04'
} else if (new Date(1929, 02, 11).getTime() <= selectedDate) {
 var volume = '07'
 var page = '04'
} else if (new Date(1928, 01, 12).getTime() <= selectedDate) {
 var volume = '06'
 var page = '04'
} else if (new Date(1928, 01, 03).getTime() <= selectedDate) {
 var volume = '05'
 var page = '668'
} else if (new Date(1927, 02, 17).getTime() <= selectedDate) {
 var volume = '05'
 var page = '03'
} else if (new Date(1927, 01, 03).getTime() <= selectedDate) {
 var volume = '04'
 var page = '642'
} else if (new Date(1926, 02, 11).getTime() <= selectedDate) {
 var volume = '04'
 var page = '03'
} else if (new Date(1926, 01, 04).getTime() <= selectedDate) {
 var volume = '03'
 var page = '786'
} else if (new Date(1925, 01, 04).getTime() <= selectedDate) {
 var volume = '03'
 var page = '258'
} else if (new Date(1924, 03, 25).getTime() <= selectedDate) {
 var volume = '03'
 var page = '04'
} else if (new Date(1924, 01, 04).getTime() <= selectedDate) {
 var volume = '02'
 var page = '621'
} else if (new Date(1923, 01, 05).getTime() <= selectedDate) {
 var volume = '02'
 var page = '346'
} else if (new Date(1922, 01, 06).getTime() <= selectedDate) {
 var volume = '02'
 var page = '140'
} else if (new Date(1921, 02, 18).getTime() <= selectedDate) {
 var volume = '02'
 var page = '04'
} else if (new Date(1921, 01, 07).getTime() <= selectedDate) {
 var volume = '01'
 var page = '452'
} else if (new Date(1920, 01, 09).getTime() <= selectedDate) {
 var volume = '01'
 var page = '290'
} else if (new Date(1919, 09, 29).getTime() <= selectedDate) {
 var volume = '01'
 var page = '246'
} else if (new Date(1918, 06, 20).getTime() <= selectedDate) {
 var volume = '01'
 var page = '243'
} else if (new Date(1918, 01, 04).getTime() <= selectedDate) {
 var volume = '01'
 var page = '197'
} else if (new Date(1917, 01, 05).getTime() <= selectedDate) {
 var volume = '01'
 var page = '112'
} else if (new Date(1916, 01, 07).getTime() <= selectedDate) {
 var volume = '01'
 var page = '26'
} else if (new Date(1915, 10, 01).getTime() <= selectedDate) {
 var volume = '01'
 var page = '09'
} else if (new Date(1915, 09, 24).getTime() <= selectedDate) {
 var volume = '01'
 var page = '07'
} else if (new Date(1915, 09, 17).getTime() <= selectedDate) {
 var volume = '01'
 var page = '05'
} else if (new Date(1915, 09, 10).getTime() <= selectedDate) {
 var volume = '01'
 var page = '03'
} else if (selectedDate <= new Date(1915, 09, 09).getTime()) {
 alert('The Daily Bruin\'s archives begin on September 10, 1915.')
}
if (new Date(1915, 09, 10).getTime() <= selectedDate && selectedDate <= new Date(2002, 12, 09).getTime()) {
document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin' + volume + 'losa?ui=#page/n' + page + '/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
}
}
=======
﻿var volume = ['01', 3]
var volume2 = [0, 0]
var folder = ''
function update() {
var selectedDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("date").value).getTime();
if (new Date(2016, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAeUVUNDg4UFdvU3M';
} else if (new Date(2015, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAcVlwYlRFdGR3MWs';
} else if (new Date(2014, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAQXhPRGFRTUVJVkE';
} else if (new Date(2013, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zASG9vQUdVYXBybFk';
} else if (new Date(2012, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAVzlCTE9qMzRFZjA';
} else if (new Date(2011, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAUjhkc2dlY05fLVU';
} else if (new Date(2010, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAdU16d0lNOGFNYzA';
} else if (new Date(2009, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAeExhdGVfYm1FVE0';
} else if (new Date(2008, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAdE1BNUQ3RlY1b28';
} else if (new Date(2007, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAT2JvalFwQlZid1E';
} else if (new Date(2006, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAZW5YYkVWR1lBRVU';
} else if (new Date(2005, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zANGMxU3VHTnBpek0';
} else if (new Date(2004, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAQUV5eVRJZHhpcWM';
} else if (new Date(2003, 01, 01).getTime() <= selectedDate) {folder = '0B9y1-prT44zAMjRjNXNEYlFPelk';
} else if (new Date(2002, 10, 21).getTime() <= selectedDate) {volume = [199, 06];
} else if (new Date(2002, 10, 10).getTime() <= selectedDate) {volume = [198, 414];
} else if (new Date(2002, 09, 12).getTime() <= selectedDate) {volume = [198, 06];
} else if (new Date(2002, 06, 11).getTime() <= selectedDate) {volume = [197, 06];
} else if (new Date(2002, 05, 01).getTime() <= selectedDate) {volume = [196, 06];
} else if (new Date(2002, 04, 01).getTime() <= selectedDate) {volume = [195, 07];
} else if (new Date(2002, 01, 07).getTime() <= selectedDate) {volume = [194, 07];
} else if (new Date(2001, 11, 01).getTime() <= selectedDate) {volume = [193, 07];
} else if (new Date(2001, 09, 23).getTime() <= selectedDate) {volume2 = ['192losax', 07];  
} else if (new Date(2001, 06, 25).getTime() <= selectedDate) {volume2 = ['191losax', 07];
} else if (new Date(2001, 04, 02).getTime() <= selectedDate) {volume2 = ['190losa', 07];
} else if (new Date(2001, 01, 08).getTime() <= selectedDate) {volume2 = ['189losa', 07];
} else if (new Date(2000, 09, 25).getTime() <= selectedDate) {volume2 = ['188losa', 06];
} else if (new Date(2000, 06, 30).getTime() <= selectedDate) {volume2 = ['187losa', 06];
} else if (new Date(2000, 04, 03).getTime() <= selectedDate) {volume2 = ['186losa', 06];
} else if (new Date(2000, 01, 10).getTime() <= selectedDate) {volume2 = ['185losa', 07];
} else if (new Date(1999, 11, 01).getTime() <= selectedDate) {volume2 = ['184losax', 05];
} else if (new Date(1999, 09, 27).getTime() <= selectedDate) {volume = [183, 07];
} else if (new Date(1999, 06, 28).getTime() <= selectedDate) {volume = [182, 06];
} else if (new Date(1999, 04, 05).getTime() <= selectedDate) {volume = [181, 07];
} else if (new Date(1999, 01, 11).getTime() <= selectedDate) {volume = [180, 05];
} else if (new Date(1998, 09, 28).getTime() <= selectedDate) {volume = [179, 05];
} else if (new Date(1998, 06, 29).getTime() <= selectedDate) {volume = [178, 06];
} else if (new Date(1998, 04, 06).getTime() <= selectedDate) {volume = [177, 05];
} else if (new Date(1998, 02, 18).getTime() <= selectedDate) {volume = [176, 06];
} else if (new Date(1998, 01, 12).getTime() <= selectedDate) {volume = [175, 06];
} else if (new Date(1997, 10, 21).getTime() <= selectedDate) {volume = [174, 06];
} else if (new Date(1997, 09, 22).getTime() <= selectedDate) {volume = [173, 06];
} else if (new Date(1997, 06, 30).getTime() <= selectedDate) {volume = [172, 06];
} else if (new Date(1997, 03, 31).getTime() <= selectedDate) {volume = [171, 06];
} else if (new Date(1997, 01, 06).getTime() <= selectedDate) {volume = [170, 06];
} else if (new Date(1996, 09, 23).getTime() <= selectedDate) {volume = [169, 06];
} else if (new Date(1996, 06, 24).getTime() <= selectedDate) {volume = [168, 06];
} else if (new Date(1996, 04, 01).getTime() <= selectedDate) {volume = [167, 06];
} else if (new Date(1996, 02, 01).getTime() <= selectedDate) {volume = [166, 06];
} else if (new Date(1996, 01, 08).getTime() <= selectedDate) {volume = [165, 06];
} else if (new Date(1995, 11, 10).getTime() <= selectedDate) {volume = [164, 07];
} else if (new Date(1995, 09, 25).getTime() <= selectedDate) {volume = [163, 07];
} else if (new Date(1995, 06, 26).getTime() <= selectedDate) {volume = [162, 06];
} else if (new Date(1995, 05, 22).getTime() <= selectedDate) {volume = [161, 08];
} else if (new Date(1995, 04, 03).getTime() <= selectedDate) {volume = [160, 08];
} else if (new Date(1995, 02, 13).getTime() <= selectedDate) {volume = [159, 05];
} else if (new Date(1995, 01, 09).getTime() <= selectedDate) {volume = [158, 06];
} else if (new Date(1994, 11, 01).getTime() <= selectedDate) {volume = [157, 07];
} else if (new Date(1994, 09, 26).getTime() <= selectedDate) {volume = [156, 06];
} else if (new Date(1994, 06, 27).getTime() <= selectedDate) {volume = [155, 06];
} else if (new Date(1994, 05, 05).getTime() <= selectedDate) {volume = [154, 07];
} else if (new Date(1994, 04, 04).getTime() <= selectedDate) {volume = [153, 07];
} else if (new Date(1994, 01, 10).getTime() <= selectedDate) {volume = [152, 06];
} else if (new Date(1993, 11, 01).getTime() <= selectedDate) {volume = [151, 10];
} else if (new Date(1993, 09, 27).getTime() <= selectedDate) {volume = [150, 10];
} else if (new Date(1993, 06, 28).getTime() <= selectedDate) {volume = [149, 08];
} else if (new Date(1993, 05, 05).getTime() <= selectedDate) {volume = [148, 08];
} else if (new Date(1993, 04, 05).getTime() <= selectedDate) {volume = [147, 08];
} else if (new Date(1993, 01, 11).getTime() <= selectedDate) {volume = [146, 08];
} else if (new Date(1993, 01, 11).getTime() <= selectedDate) {volume = [146, 08];
} else if (new Date(1992, 11, 02).getTime() <= selectedDate) {volume = [145, 01];
} else if (new Date(1992, 09, 21).getTime() <= selectedDate) {volume = [144, 06];
} else if (new Date(1992, 06, 22).getTime() <= selectedDate) {volume = [143, 06];
} else if (new Date(1992, 05, 12).getTime() <= selectedDate) {volume = [142, 07];
} else if (new Date(1992, 03, 30).getTime() <= selectedDate) {volume = [141, 07];
} else if (new Date(1992, 02, 06).getTime() <= selectedDate) {volume = [140, 06];
} else if (new Date(1992, 01, 06).getTime() <= selectedDate) {volume = [139, 06];
} else if (new Date(1991, 11, 01).getTime() <= selectedDate) {volume = [138, 06];
} else if (new Date(1991, 09, 23).getTime() <= selectedDate) {volume = [137, 07];
} else if (new Date(1991, 06, 24).getTime() <= selectedDate) {volume = [136, 08];
} else if (new Date(1991, 05, 09).getTime() <= selectedDate) {volume = [135, 07];
} else if (new Date(1991, 04, 01).getTime() <= selectedDate) {volume = [134, 06];
} else if (new Date(1991, 01, 07).getTime() <= selectedDate) {volume = [133, 07];
} else if (new Date(1990, 10, 29).getTime() <= selectedDate) {volume = [132, 07];
} else if (new Date(1990, 09, 24).getTime() <= selectedDate) {volume = [131, 07];
} else if (new Date(1990, 06, 25).getTime() <= selectedDate) {volume = [130, 07];
} else if (new Date(1990, 04, 30).getTime() <= selectedDate) {volume = [129, 08];
} else if (new Date(1990, 04, 02).getTime() <= selectedDate) {volume = [128, 08];
} else if (new Date(1990, 02, 15).getTime() <= selectedDate) {volume = [127, 07];
} else if (new Date(1990, 01, 08).getTime() <= selectedDate) {volume = [126, 07];
} else if (new Date(1989, 11, 01).getTime() <= selectedDate) {volume = [125, 07];
} else if (new Date(1989, 09, 25).getTime() <= selectedDate) {volume = [124, 613];
} else if (new Date(1989, 06, 26).getTime() <= selectedDate) {volume = [123, 06];
} else if (new Date(1989, 04, 18).getTime() <= selectedDate) {volume = [122, 06];
} else if (new Date(1989, 04, 03).getTime() <= selectedDate) {volume = [121, 06];
} else if (new Date(1989, 02, 09).getTime() <= selectedDate) {volume = [120, 07];
} else if (new Date(1989, 01, 09).getTime() <= selectedDate) {volume = [119, 07];
} else if (new Date(1988, 10, 24).getTime() <= selectedDate) {volume = [118, 562];
} else if (new Date(1988, 09, 26).getTime() <= selectedDate) {volume = [117, 08];
} else if (new Date(1988, 06, 27).getTime() <= selectedDate) {volume = [116, 06];
} else if (new Date(1988, 05, 02).getTime() <= selectedDate) {volume = [115, 05];
} else if (new Date(1988, 03, 26).getTime() <= selectedDate) {volume = [114, 05];
} else if (new Date(1988, 01, 04).getTime() <= selectedDate) {volume = [113, 06];
} else if (new Date(1987, 11, 03).getTime() <= selectedDate) {volume = [112, 01];
} else if (new Date(1987, 09, 22).getTime() <= selectedDate) {volume = [111, 08];
} else if (new Date(1987, 06, 22).getTime() <= selectedDate) {volume = [110, 04];
} else if (new Date(1987, 03, 30).getTime() <= selectedDate) {volume = [109, 02];
} else if (new Date(1987, 01, 05).getTime() <= selectedDate) {volume = [108, 03];
} else if (new Date(1986, 09, 23).getTime() <= selectedDate) {volume = [107, 02];
} else if (new Date(1986, 06, 30).getTime() <= selectedDate) {volume = [106, 07];
} else if (new Date(1986, 04, 23).getTime() <= selectedDate) {volume = [105, 02];
} else if (new Date(1986, 04, 07).getTime() <= selectedDate) {volume = [104, 04];
} else if (new Date(1986, 01, 01).getTime() <= selectedDate) {volume = [103, 05];
} else if (new Date(1985, 09, 24).getTime() <= selectedDate) {volume = [102, 04];
} else if (new Date(1985, 06, 24).getTime() <= selectedDate) {volume = [101, 05];
} else if (new Date(1985, 04, 01).getTime() <= selectedDate) {volume = [100, 05];
} else if (new Date(1985, 01, 07).getTime() <= selectedDate) {volume = [99, 04];
} else if (new Date(1984, 09, 25).getTime() <= selectedDate) {volume = [98, 05];
} else if (new Date(1984, 06, 21).getTime() <= selectedDate) {volume = [97, 02];
} else if (new Date(1984, 04, 02).getTime() <= selectedDate) {volume = [96, 04];
} else if (new Date(1983, 12, 27).getTime() <= selectedDate) {volume = [95, 05];
} else if (new Date(1983, 09, 27).getTime() <= selectedDate) {volume = [94, 04];
} else if (new Date(1983, 06, 27).getTime() <= selectedDate) {volume = [93, 04];
} else if (new Date(1983, 04, 04).getTime() <= selectedDate) {volume = [92, 05];
} else if (new Date(1983, 01, 10).getTime() <= selectedDate) {volume = [91, 05];
} else if (new Date(1982, 09, 28).getTime() <= selectedDate) {volume = [90, 06];
} else if (new Date(1982, 06, 28).getTime() <= selectedDate) {volume = [89, 07];
} else if (new Date(1982, 04, 05).getTime() <= selectedDate) {volume = [88, 07];
} else if (new Date(1982, 01, 11).getTime() <= selectedDate) {volume = [87, 07];
} else if (new Date(1981, 09, 22).getTime() <= selectedDate) {volume = [86, 08];
} else if (new Date(1981, 04, 06).getTime() <= selectedDate) {volume = [85, 05];
} else if (new Date(1981, 01, 12).getTime() <= selectedDate) {volume = [84, 07];
} else if (new Date(1980, 09, 23).getTime() <= selectedDate) {volume = [83, 03];
} else if (new Date(1980, 03, 31).getTime() <= selectedDate) {volume = [82, 06];
} else if (new Date(1980, 01, 07).getTime() <= selectedDate) {volume = [81, 05];
} else if (new Date(1979, 09, 18).getTime() <= selectedDate) {volume = [80, 06];
} else if (new Date(1979, 04, 02).getTime() <= selectedDate) {volume = [79, 06];
} else if (new Date(1979, 01, 08).getTime() <= selectedDate) {volume = [78, 06];
} else if (new Date(1978, 09, 19).getTime() <= selectedDate) {volume = [77, 06];
} else if (new Date(1978, 04, 03).getTime() <= selectedDate) {volume = [76, 07];
} else if (new Date(1978, 01, 09).getTime() <= selectedDate) {volume = [75, 04];
} else if (new Date(1977, 09, 20).getTime() <= selectedDate) {volume = [74, 06];
} else if (new Date(1977, 04, 04).getTime() <= selectedDate) {volume = [73, 05];
} else if (new Date(1977, 01, 06).getTime() <= selectedDate) {volume = [72, 06];
} else if (new Date(1976, 09, 21).getTime() <= selectedDate) {volume = [71, 07];
} else if (new Date(1976, 04, 05).getTime() <= selectedDate) {volume = [70, 06];
} else if (new Date(1976, 01, 07).getTime() <= selectedDate) {volume = [69, 05];
} else if (new Date(1975, 10, 02).getTime() <= selectedDate) {volume = [68, 05];
} else if (new Date(1975, 04, 17).getTime() <= selectedDate) {volume = [67, 05];
} else if (new Date(1975, 01, 06).getTime() <= selectedDate) {volume = [66, 05];
} else if (new Date(1974, 11, 01).getTime() <= selectedDate) {volume = [65, 07];
} else if (new Date(1974, 05, 01).getTime() <= selectedDate) {volume = [64, 06];
} else if (new Date(1974, 01, 07).getTime() <= selectedDate) {volume = [63, 06];
} else if (new Date(1973, 06, 15).getTime() <= selectedDate) {volume = [62, 03];
} else if (new Date(1973, 01, 08).getTime() <= selectedDate) {volume = [61, 06];
} else if (new Date(1972, 09, 18).getTime() <= selectedDate) {volume = [60, 06];
} else if (new Date(1972, 03, 29).getTime() <= selectedDate) {volume = [59, 06];
} else if (new Date(1972, 01, 05).getTime() <= selectedDate) {volume = [58, 06];
} else if (new Date(1971, 09, 28).getTime() <= selectedDate) {volume = [57, 06];
} else if (new Date(1971, 03, 31).getTime() <= selectedDate) {volume = [56, 06];
} else if (new Date(1971, 01, 06).getTime() <= selectedDate) {volume = [55, 05];
} else if (new Date(1970, 09, 29).getTime() <= selectedDate) {volume = [54, 06];
} else if (new Date(1970, 04, 24).getTime() <= selectedDate) {volume = [53, 04];
} else if (new Date(1969, 11, 18).getTime() <= selectedDate) {volume = [52, 04];
} else if (new Date(1969, 05, 13).getTime() <= selectedDate) {volume = [51, 03];
} else if (new Date(1968, 11, 25).getTime() <= selectedDate) {volume = [50, 06];
} else if (new Date(1968, 05, 07).getTime() <= selectedDate) {volume = [49, 03];
} else if (new Date(1967, 11, 30).getTime() <= selectedDate) {volume = [48, 03];
} else if (new Date(1967, 02, 07).getTime() <= selectedDate) {volume = [47, 03];
} else if (new Date(1966, 05, 02).getTime() <= selectedDate) {volume = [46, 03];
} else if (new Date(1965, 11, 03).getTime() <= selectedDate) {volume = [45, 03];
} else if (new Date(1965, 02, 17).getTime() <= selectedDate) {volume = [44, 02];
} else if (new Date(1964, 03, 31).getTime() <= selectedDate) {volume = [43, 04];
} else if (new Date(1963, 05, 01).getTime() <= selectedDate) {volume = [42, 04];
} else if (new Date(1962, 09, 28).getTime() <= selectedDate) {volume = [41, 04];
} else if (new Date(1961, 12, 01).getTime() <= selectedDate) {volume = [40, 03];
} else if (new Date(1961, 02, 15).getTime() <= selectedDate) {volume = [39, 03];
} else if (new Date(1960, 03, 03).getTime() <= selectedDate) {volume = [38, 03];
} else if (new Date(1959, 03, 06).getTime() <= selectedDate) {volume = [37, 03];
} else if (new Date(1958, 03, 19).getTime() <= selectedDate) {volume = [36, 05];
} else if (new Date(1957, 03, 15).getTime() <= selectedDate) {volume = [35, 06];
} else if (new Date(1956, 04, 02).getTime() <= selectedDate) {volume = [34, 04];
} else if (new Date(1955, 03, 28).getTime() <= selectedDate) {volume = [33, 04];
} else if (new Date(1954, 10, 25).getTime() <= selectedDate) {volume = [32, 312];
} else if (new Date(1954, 03, 26).getTime() <= selectedDate) {volume = [32, 04];
} else if (new Date(1953, 03, 20).getTime() <= selectedDate) {volume = [31, 04];
} else if (new Date(1952, 03, 20).getTime() <= selectedDate) {volume = [30, 04];
} else if (new Date(1951, 03, 16).getTime() <= selectedDate) {volume = [29, 03];
} else if (new Date(1950, 09, 13).getTime() <= selectedDate) {volume = [28, 04];
} else if (new Date(1949, 09, 23).getTime() <= selectedDate) {volume = [27, 04];
} else if (new Date(1948, 10, 22).getTime() <= selectedDate) {volume = [26, 06];
} else if (new Date(1947, 10, 06).getTime() <= selectedDate) {volume = [25, 03];
} else if (new Date(1946, 05, 21).getTime() <= selectedDate) {volume = [24, 05];
} else if (new Date(1945, 01, 24).getTime() <= selectedDate) {volume = [23, 04];
} else if (new Date(1943, 02, 18).getTime() <= selectedDate) {volume = [22, 05];
} else if (new Date(1941, 12, 02).getTime() <= selectedDate) {volume = [21, 04];
} else if (new Date(1941, 01, 06).getTime() <= selectedDate) {volume = [20, 103];
} else if (new Date(1940, 11, 08).getTime() <= selectedDate) {volume = [20, 04];
} else if (new Date(1940, 02, 12).getTime() <= selectedDate) {volume = [19, 16];
} else if (new Date(1939, 12, 12).getTime() <= selectedDate) {volume = [19, 04];
} else if (new Date(1939, 01, 03).getTime() <= selectedDate) {volume = [18, 41];
} else if (new Date(1938, 12, 05).getTime() <= selectedDate) {volume = [18, 04];
} else if (new Date(1938, 01, 03).getTime() <= selectedDate) {volume = [17, 91];
} else if (new Date(1937, 11, 12).getTime() <= selectedDate) {volume = [17, 03];
} else if (new Date(1937, 04, 16).getTime() <= selectedDate) {volume = [16, 230];
} else if (new Date(1937, 01, 06).getTime() <= selectedDate) {volume = [16, 03];
} else if (new Date(1936, 03, 10).getTime() <= selectedDate) {volume = [15, 03];
} else if (new Date(1936, 01, 06).getTime() <= selectedDate) {volume = [14, 471];
} else if (new Date(1935, 04, 29).getTime() <= selectedDate) {volume = [14, 03];
} else if (new Date(1935, 01, 03).getTime() <= selectedDate) {volume = [13, 410];
} else if (new Date(1934, 05, 14).getTime() <= selectedDate) {volume = [13, 04];
} else if (new Date(1934, 01, 03).getTime() <= selectedDate) {volume = [12, 386];
} else if (new Date(1933, 08, 04).getTime() <= selectedDate) {volume = [12, 04];
} else if (new Date(1933, 01, 04).getTime() <= selectedDate) {volume = [11, 225];
} else if (new Date(1932, 10, 03).getTime() <= selectedDate) {volume = [11, 04];
} else if (new Date(1932, 01, 04).getTime() <= selectedDate) {volume = [10, 284];
} else if (new Date(1931, 09, 17).getTime() <= selectedDate) {volume = [10, 04];
} else if (new Date(1931, 01, 05).getTime() <= selectedDate) {volume = ['09', 226];
} else if (new Date(1930, 10, 30).getTime() <= selectedDate) {volume = ['09', 03];
} else if (new Date(1930, 01, 02).getTime() <= selectedDate) {volume = ['08', 103];
} else if (new Date(1929, 11, 25).getTime() <= selectedDate) {volume = ['08', 04];
} else if (new Date(1929, 02, 11).getTime() <= selectedDate) {volume = ['07', 04];
} else if (new Date(1928, 01, 12).getTime() <= selectedDate) {volume = ['06', 04];
} else if (new Date(1928, 01, 03).getTime() <= selectedDate) {volume = ['05', 668];
} else if (new Date(1927, 02, 17).getTime() <= selectedDate) {volume = ['05', 03];
} else if (new Date(1927, 01, 03).getTime() <= selectedDate) {volume = ['04', 642];
} else if (new Date(1926, 02, 11).getTime() <= selectedDate) {volume = ['04', 03];
} else if (new Date(1926, 01, 04).getTime() <= selectedDate) {volume = ['03', 786];
} else if (new Date(1925, 01, 04).getTime() <= selectedDate) {volume = ['03', 258];
} else if (new Date(1924, 03, 25).getTime() <= selectedDate) {volume = ['03', 04];
} else if (new Date(1924, 01, 04).getTime() <= selectedDate) {volume = ['02', 621];
} else if (new Date(1923, 01, 05).getTime() <= selectedDate) {volume = ['02', 346];
} else if (new Date(1922, 01, 06).getTime() <= selectedDate) {volume = ['02', 140];
} else if (new Date(1921, 02, 18).getTime() <= selectedDate) {volume = ['02', 04];
} else if (new Date(1921, 01, 07).getTime() <= selectedDate) {volume = ['01', 452];
} else if (new Date(1920, 01, 09).getTime() <= selectedDate) {volume = ['01', 290];
} else if (new Date(1919, 09, 29).getTime() <= selectedDate) {volume = ['01', 246];
} else if (new Date(1918, 06, 20).getTime() <= selectedDate) {volume = ['01', 243];
} else if (new Date(1918, 01, 04).getTime() <= selectedDate) {volume = ['01', 197];
} else if (new Date(1917, 01, 05).getTime() <= selectedDate) {volume = ['01', 112];
} else if (new Date(1916, 01, 07).getTime() <= selectedDate) {volume = ['01', 26];
} else if (new Date(1915, 10, 01).getTime() <= selectedDate) {volume = ['01', 09];
} else if (new Date(1915, 09, 24).getTime() <= selectedDate) {volume = ['01', 07];
} else if (new Date(1915, 09, 17).getTime() <= selectedDate) {volume = ['01', 05];
} else if (new Date(1915, 09, 10).getTime() <= selectedDate) {volume = ['01', 03];
}
if (new Date(2003, 01, 01).getTime() <= selectedDate) {
document.getElementById("viewer").innerHTML='<iframe src="https://drive.google.com/embeddedfolderview?id=' + folder + '#grid" width="100%" height="100%" frameborder="0"></iframe>'
} else if (new Date(1915, 09, 10).getTime() <= selectedDate && selectedDate < new Date(1999, 11, 01).getTime()||new Date(2001, 11, 01).getTime() <= selectedDate && selectedDate < new Date(2003, 01, 01).getTime()) {
document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin' + volume[0] + 'losa?ui=#page/n' + volume[1] + '/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
} else if (selectedDate <= new Date(1915, 09, 09).getTime()) {
 alert('The Daily Bruin\'s archives begin on September 10, 1915.')
} else if (new Date(1999, 11, 01).getTime() <= selectedDate && selectedDate < new Date(2001, 11, 01).getTime()) {
document.getElementById("viewer").innerHTML='<iframe src="https://archive.org/stream/ucladailybruin' + volume2[0] + '?ui=#page/n' + volume2[1] + '/mode/1up" width="100%" height="100%" frameborder="0"></iframe>'
}
}
>>>>>>> refs/remotes/origin/master
