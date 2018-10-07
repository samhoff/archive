var reel;
var reelpage;
var rotate = 0;
var zoom = 8;
var newzoom;
var server;
var zip;
var tarzip;
var losax;
var customrotate = 0;
var preroundrotate = 0;
var driveurl = "";
var dbpageid = "116768"; //On load without specified dbpageid, dbpageid is set to 116,768.
var reeldata = [["reel_number","start_page","basic_rotate","server_number","zip_number","starting_dataid","tarzip"],[01,03,0,802702,7,1,"zip"],[02,04,0,801409,20,469,"zip"],[03,04,90,801408,5,1163,"tar"],[04,03,0,802605,33,2008,"zip"],[05,03,0,601009,3,2731,"zip"],[06,04,0,801407,4,3426,"zip"],[07,04,0,801406,30,4153,"zip"],[08,04,90,802708,25,4817,"zip"],[09,03,0,802609,9,5522,"zip"],[10,04,0,802709,31,6229,"tar"],[11,04,0,802703,18,6966,"zip"],[12,04,0,801406,32,7645,"zip"],[13,04,90,802701,21,8322,"zip"],[14,03,0,802705,18,9008,"zip"],[15,03,0,801408,22,9609,"zip"],[16,03,0,801408,17,10259,"zip"],[17,03,0,801406,35,10873,"zip"],[18,04,0,802604,17,11617,"zip"],[19,04,90,801406,20,12373,"zip"],[20,04,90,802605,2,12924,"zip"],[21,04,270,902605,29,13631,"zip"],[22,05,0,802606,12,14313,"zip"],[23,04,270,802703,25,14989,"zip"],[24,05,0,601406,31,15703,"zip"],[25,03,0,801407,25,16530,"zip"],[26,06,0,802704,32,17246,"zip"],[27,04,0,802706,27,17873,"zip"],[28,04,0,902205,9,18506,"zip"],[29,03,0,802703,19,18982,"zip"],[30,04,270,802608,27,19578,"zip"],[31,04,0,801403,6,20184,"zip"],[32,04,0,802700,21,20787,"zip"],[33,04,0,802700,8,21391,"zip"],[34,04,90,802706,18,22009,"zip"],[35,06,0,802609,20,22627,"zip"],[36,05,0,800100,18,23235,"zip"],[37,03,0,601408,22,23851,"zip"],[38,03,0,802608,23,24459,"zip"],[39,03,0,601408,30,25060,"zip"],[40,03,0,801407,32,25668,"zip"],[41,04,0,601408,20,26261,"zip"],[42,04,0,801407,24,26861,"zip"],[43,04,0,801409,11,27485,"zip"],[44,02,0,802607,32,28111,"zip"],[45,03,0,802706,26,28720,"zip"],[46,03,0,601403,24,29334,"zip"],[47,03,0,601409,30,29960,"zip"],[48,03,0,802606,21,30570,"zip"],[49,03,0,802707,16,31197,"zip"],[50,06,0,802700,29,31835,"zip"],[51,03,0,801409,26,32442,"zip"],[52,04,0,801309,26,33065,"zip"],[53,04,0,802705,14,33683,"zip"],[54,06,0,902205,34,34026,"zip"],[55,05,0,801409,16,34481,"zip"],[56,06,0,802609,20,34872,"zip"],[57,06,0,902606,14,35447,"zip"],[58,06,0,601406,29,35893,"zip"],[59,06,0,801406,1,36257,"zip"],[60,06,0,801403,34,36890,"zip"],[61,06,0,601409,9,37383,"zip"],[62,03,0,802605,29,38218,"zip"],[63,06,0,802709,27,38840,"zip"],[64,06,0,601408,28,39511,"tar"],[65,07,0,802703,12,40274,"zip"],[66,05,0,802605,34,40511,"zip"],[67,05,0,802608,6,41157,"tar"],[68,05,0,802708,1,41802,"zip"],[69,05,0,801406,33,42264,"zip"],[70,06,0,802704,15,42774,"tar"],[71,07,270,802704,30,43452,"tar"],[72,06,0,802608,8,44123,"zip"],[73,05,0,801408,20,44690,"tar"],[74,06,0,802706,6,45475,"tar"],[75,04,0,802702,20,46211,"zip"],[76,07,0,801407,10,46840,"zip"],[77,06,0,902706,8,47735,"tar"],[78,06,0,802706,31,48528,"zip"],[79,06,0,902205,0,49174,"tar"],[80,06,0,802704,29,50080,"tar"],[81,05,0,902604,20,50866,"zip"],[82,06,0,802700,21,51465,"tar"],[83,03,0,802608,29,52376,"tar"],[84,07,0,802607,32,53156,"tar"],[85,05,0,902205,6,53815,"tar"],[86,08,0,800301,12,54725,"tar"],[87,07,0,802702,24,55533,"zip"],[88,07,0,801406,5,56159,"tar"],[89,07,0,802705,26,56888,"zip"],[90,06,0,601409,24,57040,"tar"],[91,05,0,801407,31,57995,"tar"],[92,05,0,802707,10,58672,"tar"],[93,04,0,802605,21,59409,"zip"],[94,04,0,801409,6,59559,"tar"],[95,05,0,802205,0,60450,"zip"],[96,04,0,601409,0,61148,"tar"],[97,02,0,902700,9,61963,"zip"],[98,05,0,801403,3,62212,"tar"],[99,04,0,801409,0,63199,"tar"],[100,05,0,802707,14,63944,"zip"],[101,05,0,902605,23,64681,"zip"],[102,04,0,802605,25,64867,"tar"],[103,05,0,902704,33,65718,"tar"],[104,04,0,802205,30,66462,"zip"],[105,02,0,801406,0,66695,"zip"],[106,07,0,802707,34,67301,"zip"],[107,02,0,801407,7,67526,"tar"],[108,03,0,801407,26,68506,"zip"],[109,02,0,802205,3,69202,"tar"],[110,04,0,601407,21,70050,"zip"],[111,08,0,601408,31,70280,"zip"],[112,01,0,802606,34,70894,"zip"],[113,06,0,802609,13,71295,"tar"],[114,05,0,802607,24,72139,"zip"],[115,05,0,802707,6,72642,"zip"],[116,06,0,802606,4,73130,"zip"],[117,08,0,802607,11,73409,"zip"],[118,562,0,902701,2,73852,"zip"],[119,07,0,801408,17,74414,"zip"],[120,07,0,802605,28,74847,"zip"],[121,06,0,802607,20,75337,"zip"],[122,06,0,902607,27,75600,"tar"],[123,06,0,802705,9,76350,"zip"],[124,614,0,801409,12,76567,"zip"],[125,07,0,801409,3,77180,"zip"],[126,07,0,801406,20,77673,"zip"],[127,07,0,802604,16,78235,"zip"],[128,08,0,802609,17,78624,"zip"],[129,08,0,801408,15,79137,"zip"],[130,07,0,801406,1,79702,"zip"],[131,07,0,802704,22,79929,"tar"],[132,07,0,801409,12,80561,"zip"],[133,07,0,802604,35,81082,"zip"],[134,06,0,801409,22,81981,"zip"],[135,07,0,902606,34,82522,"zip"],[136,08,0,801409,32,82959,"zip"],[137,07,0,802707,3,83166,"zip"],[138,06,0,802608,15,83859,"zip"],[139,06,0,902701,19,84266,"zip"],[140,06,0,801006,22,84678,"zip"],[141,07,0,802705,32,85131,"zip"],[142,07,0,802705,23,85761,"zip"],[143,06,0,801403,21,86146,"zip"],[144,06,0,801407,35,86305,"zip"],[145,01,0,801403,1,86927,"zip"],[146,08,0,802605,2,87316,"zip"],[147,08,0,902703,13,88065,"zip"],[148,08,0,801406,31,88494,"zip"],[149,08,0,801407,0,88967,"zip"],[150,10,0,801408,2,89140,"zip"],[151,10,0,802704,34,89634,"zip"],[152,06,0,802701,28,90100,"zip"],[153,07,0,801409,31,90880,"zip"],[154,07,0,801407,5,91311,"zip"],[155,06,0,802609,9,91732,"zip"],[156,06,0,801408,17,91909,"zip"],[157,07,0,802706,14,92479,"zip"],[158,06,0,902706,34,92906,"zip"],[159,05,0,802704,9,93345,"zip"],[160,08,0,802608,15,93716,"zip"],[161,08,0,801406,35,94387,"zip"],[162,06,0,801408,16,94630,"zip"],[163,07,0,802700,18,94839,"zip"],[164,07,0,802702,4,95532,"zip"],[165,06,0,902205,21,95834,"zip"],[166,06,0,802705,13,96133,"zip"],[167,06,0,601406,27,96654,"tar"],[168,06,0,802205,26,97579,"zip"],[169,06,0,902700,17,97756,"tar"],[170,06,0,601405,21,98828,"zip"],[171,06,0,802700,7,99649,"tar"],[172,06,0,801408,16,100724,"zip"],[173,06,0,802606,3,100919,"zip"],[174,06,0,802705,16,101500,"zip"],[175,06,0,801407,18,102158,"zip"],[176,06,0,802607,24,102674,"zip"],[177,05,0,801407,12,103106,"zip"],[178,06,0,902607,12,104123,"zip"],[179,05,0,801407,13,104290,"tar"],[180,05,0,802604,20,105344,"tar"],[181,07,0,802704,9,106113,"tar"],[182,06,0,802704,19,107006,"zip"],[183,07,0,802707,24,107167,"zip"],[184,05,0,600202,25,107805,"zip"],[185,07,0,802205,2,108315,"tar"],[186,06,0,802605,26,109183,"tar"],[187,06,0,802702,10,110175,"zip"],[188,06,0,802604,9,110370,"zip"],[189,07,0,801407,6,110891,"zip"],[190,07,0,802704,10,111689,"zip"],[191,07,0,800202,25,112565,"zip"],[192,07,0,800200,12,112748,"zip"],[193,07,0,802701,4,113305,"zip"],[194,07,0,802606,33,113691,"zip"],[195,07,90,801006,24,114431,"zip"],[196,06,0,802605,24,114801,"zip"],[197,06,0,801406,3,115404,"zip"],[198,06,0,801407,17,115611,"zip"],[199,06,0,601408,14,116153,"zip"]];

function isInteger(x) {
    return Math.round(x) === x;
}

function trackhash() {
    if (String(window.location).split('#')[1] === undefined || String(window.location).split('#')[1] == "") {
    	window.location.replace(String(window.location).split('#')[0] + "#116768"); //On load without specified dbpageid, dbpageid is set to 116,768.
    } else if (String(window.location).split('#')[1] != dbpageid) {
        dbpageid = String(window.location).split('#')[1];
        loadnewpage();
    }
    return false;
}

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function zoomin(){
	if (zoom >= 2) {
	newzoom = zoom / 2;
	zoom = newzoom;
	document.getElementById("zoomoutbutton").style.color="#393939";
	document.getElementById("zoomouta").style="cursor: pointer;"; //BACK TO NORMAL
	loadnewpage();
	}
	if (zoom == 1) {
		document.getElementById("zoominbutton").style.color="#AAAAAA";
		document.getElementById("zoomina").style="cursor: default;"; //DISABLE ZOOM IN BUTTON WHEN FULLY ZOOMED
	}
}
function zoomout(){
	if (zoom <= 15) {
	newzoom = zoom * 2;
	zoom = newzoom;
	document.getElementById("zoominbutton").style.color="#393939";
	document.getElementById("zoomina").style="cursor: pointer;"; //BACK TO NORMAL
	loadnewpage();
	}
	if (zoom == 16) {
		document.getElementById("zoomoutbutton").style.color="#AAAAAA";
		document.getElementById("zoomouta").style="cursor: default;"; //DISABLE ZOOM OUT BUTTON WHEN FULLY ZOOMED
	}
}

function previousid(){
	var newid;
	if (parseInt(dbpageid) > 1 && parseInt(dbpageid) <= 116768) { //Maximum possible value for dbpageid is currently set to 116,768.
	newid = parseInt(dbpageid) - 1;
	window.location.replace(String(window.location).split('#')[0] + "#" + newid);
	loadnewpage();
	};
}

function nextid(){
	var newid;
	if (parseInt(dbpageid) >= 1 && parseInt(dbpageid) < 116768) { //Maximum possible value for dbpageid is currently set to 116,768.
	newid = parseInt(dbpageid) + 1;
	window.location.replace(String(window.location).split('#')[0] + "#" + newid);
	loadnewpage();
	};
}

function clockwise(){
	customrotate = customrotate +90;
	loadnewpage();
}

function counterclockwise(){
	customrotate = customrotate - 90;
	loadnewpage();
}

function determinelosax() {
	if (reel == 184 || reel == 191 || reel == 192) { //Reels 184, 191 and 192 have an extra "x" in their URLs
    	losax = "x";
    } else {
    	losax = "";
    }
}

function loadnewpage() {
	trackhash();
	if (isInteger(Number(dbpageid)) == true && Number(dbpageid) > 0 && Number(dbpageid) <= 116752) { //Max dbpageid for archive.org is 116,752.
		var dataid = dbpageid;
	    if (dataid >= 1 && dataid < 469) {reel = 01;};
		if (dataid >= 469 && dataid < 1163) {reel = 02;};
		if (dataid >= 1163 && dataid < 2008) {reel = 03;};
		if (dataid >= 2008 && dataid < 2731) {reel = 04;};
		if (dataid >= 2731 && dataid < 3426) {reel = 05;};
		if (dataid >= 3426 && dataid < 4153) {reel = 06;};
		if (dataid >= 4153 && dataid < 4817) {reel = 07;};
		if (dataid >= 4817 && dataid < 5522) {reel = 08;};
		if (dataid >= 5522 && dataid < 6229) {reel = 09;};
		if (dataid >= 6229 && dataid < 6966) {reel = 10;};
		if (dataid >= 6966 && dataid < 7645) {reel = 11;};
		if (dataid >= 7645 && dataid < 8322) {reel = 12;};
		if (dataid >= 8322 && dataid < 9008) {reel = 13;};
		if (dataid >= 9008 && dataid < 9609) {reel = 14;};
		if (dataid >= 9609 && dataid < 10259) {reel = 15;};
		if (dataid >= 10259 && dataid < 10873) {reel = 16;};
		if (dataid >= 10873 && dataid < 11617) {reel = 17;};
		if (dataid >= 11617 && dataid < 12373) {reel = 18;};
		if (dataid >= 12373 && dataid < 12924) {reel = 19;};
		if (dataid >= 12924 && dataid < 13631) {reel = 20;};
		if (dataid >= 13631 && dataid < 14313) {reel = 21;};
		if (dataid >= 14313 && dataid < 14989) {reel = 22;};
		if (dataid >= 14989 && dataid < 15703) {reel = 23;};
		if (dataid >= 15703 && dataid < 16530) {reel = 24;};
		if (dataid >= 16530 && dataid < 17246) {reel = 25;};
		if (dataid >= 17246 && dataid < 17873) {reel = 26;};
		if (dataid >= 17873 && dataid < 18506) {reel = 27;};
		if (dataid >= 18506 && dataid < 18982) {reel = 28;};
		if (dataid >= 18982 && dataid < 19578) {reel = 29;};
		if (dataid >= 19578 && dataid < 20184) {reel = 30;};
		if (dataid >= 20184 && dataid < 20787) {reel = 31;};
		if (dataid >= 20787 && dataid < 21391) {reel = 32;};
		if (dataid >= 21391 && dataid < 22009) {reel = 33;};
		if (dataid >= 22009 && dataid < 22627) {reel = 34;};
		if (dataid >= 22627 && dataid < 23235) {reel = 35;};
		if (dataid >= 23235 && dataid < 23851) {reel = 36;};
		if (dataid >= 23851 && dataid < 24459) {reel = 37;};
		if (dataid >= 24459 && dataid < 25060) {reel = 38;};
		if (dataid >= 25060 && dataid < 25668) {reel = 39;};
		if (dataid >= 25668 && dataid < 26261) {reel = 40;};
		if (dataid >= 26261 && dataid < 26861) {reel = 41;};
		if (dataid >= 26861 && dataid < 27485) {reel = 42;};
		if (dataid >= 27485 && dataid < 28111) {reel = 43;};
		if (dataid >= 28111 && dataid < 28720) {reel = 44;};
		if (dataid >= 28720 && dataid < 29334) {reel = 45;};
		if (dataid >= 29334 && dataid < 29960) {reel = 46;};
		if (dataid >= 29960 && dataid < 30570) {reel = 47;};
		if (dataid >= 30570 && dataid < 31197) {reel = 48;};
		if (dataid >= 31197 && dataid < 31835) {reel = 49;};
		if (dataid >= 31835 && dataid < 32442) {reel = 50;};
		if (dataid >= 32442 && dataid < 33065) {reel = 51;};
		if (dataid >= 33065 && dataid < 33683) {reel = 52;};
		if (dataid >= 33683 && dataid < 34026) {reel = 53;};
		if (dataid >= 34026 && dataid < 34481) {reel = 54;};
		if (dataid >= 34481 && dataid < 34872) {reel = 55;};
		if (dataid >= 34872 && dataid < 35447) {reel = 56;};
		if (dataid >= 35447 && dataid < 35893) {reel = 57;};
		if (dataid >= 35893 && dataid < 36257) {reel = 58;};
		if (dataid >= 36257 && dataid < 36890) {reel = 59;};
		if (dataid >= 36890 && dataid < 37383) {reel = 60;};
		if (dataid >= 37383 && dataid < 38218) {reel = 61;};
		if (dataid >= 38218 && dataid < 38840) {reel = 62;};
		if (dataid >= 38840 && dataid < 39511) {reel = 63;};
		if (dataid >= 39511 && dataid < 40274) {reel = 64;};
		if (dataid >= 40274 && dataid < 40511) {reel = 65;};
		if (dataid >= 40511 && dataid < 41157) {reel = 66;};
		if (dataid >= 41157 && dataid < 41802) {reel = 67;};
		if (dataid >= 41802 && dataid < 42264) {reel = 68;};
		if (dataid >= 42264 && dataid < 42774) {reel = 69;};
		if (dataid >= 42774 && dataid < 43452) {reel = 70;};
		if (dataid >= 43452 && dataid < 44123) {reel = 71;};
		if (dataid >= 44123 && dataid < 44690) {reel = 72;};
		if (dataid >= 44690 && dataid < 45475) {reel = 73;};
		if (dataid >= 45475 && dataid < 46211) {reel = 74;};
		if (dataid >= 46211 && dataid < 46840) {reel = 75;};
		if (dataid >= 46840 && dataid < 47735) {reel = 76;};
		if (dataid >= 47735 && dataid < 48528) {reel = 77;};
		if (dataid >= 48528 && dataid < 49174) {reel = 78;};
		if (dataid >= 49174 && dataid < 50080) {reel = 79;};
		if (dataid >= 50080 && dataid < 50866) {reel = 80;};
		if (dataid >= 50866 && dataid < 51465) {reel = 81;};
		if (dataid >= 51465 && dataid < 52376) {reel = 82;};
		if (dataid >= 52376 && dataid < 53156) {reel = 83;};
		if (dataid >= 53156 && dataid < 53815) {reel = 84;};
		if (dataid >= 53815 && dataid < 54725) {reel = 85;};
		if (dataid >= 54725 && dataid < 55533) {reel = 86;};
		if (dataid >= 55533 && dataid < 56159) {reel = 87;};
		if (dataid >= 56159 && dataid < 56888) {reel = 88;};
		if (dataid >= 56888 && dataid < 57040) {reel = 89;};
		if (dataid >= 57040 && dataid < 57995) {reel = 90;};
		if (dataid >= 57995 && dataid < 58672) {reel = 91;};
		if (dataid >= 58672 && dataid < 59409) {reel = 92;};
		if (dataid >= 59409 && dataid < 59559) {reel = 93;};
		if (dataid >= 59559 && dataid < 60450) {reel = 94;};
		if (dataid >= 60450 && dataid < 61148) {reel = 95;};
		if (dataid >= 61148 && dataid < 61963) {reel = 96;};
		if (dataid >= 61963 && dataid < 62212) {reel = 97;};
		if (dataid >= 62212 && dataid < 63199) {reel = 98;};
		if (dataid >= 63199 && dataid < 63944) {reel = 99;};
		if (dataid >= 63944 && dataid < 64681) {reel = 100;};
		if (dataid >= 64681 && dataid < 64867) {reel = 101;};
		if (dataid >= 64867 && dataid < 65718) {reel = 102;};
		if (dataid >= 65718 && dataid < 66462) {reel = 103;};
		if (dataid >= 66462 && dataid < 66695) {reel = 104;};
		if (dataid >= 66695 && dataid < 67301) {reel = 105;};
		if (dataid >= 67301 && dataid < 67526) {reel = 106;};
		if (dataid >= 67526 && dataid < 68506) {reel = 107;};
		if (dataid >= 68506 && dataid < 69202) {reel = 108;};
		if (dataid >= 69202 && dataid < 70050) {reel = 109;};
		if (dataid >= 70050 && dataid < 70280) {reel = 110;};
		if (dataid >= 70280 && dataid < 70894) {reel = 111;};
		if (dataid >= 70894 && dataid < 71295) {reel = 112;};
		if (dataid >= 71295 && dataid < 72139) {reel = 113;};
		if (dataid >= 72139 && dataid < 72642) {reel = 114;};
		if (dataid >= 72642 && dataid < 73130) {reel = 115;};
		if (dataid >= 73130 && dataid < 73409) {reel = 116;};
		if (dataid >= 73409 && dataid < 73852) {reel = 117;};
		if (dataid >= 73852 && dataid < 74414) {reel = 118;};
		if (dataid >= 74414 && dataid < 74847) {reel = 119;};
		if (dataid >= 74847 && dataid < 75337) {reel = 120;};
		if (dataid >= 75337 && dataid < 75600) {reel = 121;};
		if (dataid >= 75600 && dataid < 76350) {reel = 122;};
		if (dataid >= 76350 && dataid < 76567) {reel = 123;};
		if (dataid >= 76567 && dataid < 77180) {reel = 124;};
		if (dataid >= 77180 && dataid < 77673) {reel = 125;};
		if (dataid >= 77673 && dataid < 78235) {reel = 126;};
		if (dataid >= 78235 && dataid < 78624) {reel = 127;};
		if (dataid >= 78624 && dataid < 79137) {reel = 128;};
		if (dataid >= 79137 && dataid < 79702) {reel = 129;};
		if (dataid >= 79702 && dataid < 79929) {reel = 130;};
		if (dataid >= 79929 && dataid < 80561) {reel = 131;};
		if (dataid >= 80561 && dataid < 81082) {reel = 132;};
		if (dataid >= 81082 && dataid < 81981) {reel = 133;};
		if (dataid >= 81981 && dataid < 82522) {reel = 134;};
		if (dataid >= 82522 && dataid < 82959) {reel = 135;};
		if (dataid >= 82959 && dataid < 83166) {reel = 136;};
		if (dataid >= 83166 && dataid < 83859) {reel = 137;};
		if (dataid >= 83859 && dataid < 84266) {reel = 138;};
		if (dataid >= 84266 && dataid < 84678) {reel = 139;};
		if (dataid >= 84678 && dataid < 85131) {reel = 140;};
		if (dataid >= 85131 && dataid < 85761) {reel = 141;};
		if (dataid >= 85761 && dataid < 86146) {reel = 142;};
		if (dataid >= 86146 && dataid < 86305) {reel = 143;};
		if (dataid >= 86305 && dataid < 86927) {reel = 144;};
		if (dataid >= 86927 && dataid < 87316) {reel = 145;};
		if (dataid >= 87316 && dataid < 88065) {reel = 146;};
		if (dataid >= 88065 && dataid < 88494) {reel = 147;};
		if (dataid >= 88494 && dataid < 88967) {reel = 148;};
		if (dataid >= 88967 && dataid < 89140) {reel = 149;};
		if (dataid >= 89140 && dataid < 89634) {reel = 150;};
		if (dataid >= 89634 && dataid < 90100) {reel = 151;};
		if (dataid >= 90100 && dataid < 90880) {reel = 152;};
		if (dataid >= 90880 && dataid < 91311) {reel = 153;};
		if (dataid >= 91311 && dataid < 91732) {reel = 154;};
		if (dataid >= 91732 && dataid < 91909) {reel = 155;};
		if (dataid >= 91909 && dataid < 92479) {reel = 156;};
		if (dataid >= 92479 && dataid < 92906) {reel = 157;};
		if (dataid >= 92906 && dataid < 93345) {reel = 158;};
		if (dataid >= 93345 && dataid < 93716) {reel = 159;};
		if (dataid >= 93716 && dataid < 94387) {reel = 160;};
		if (dataid >= 94387 && dataid < 94630) {reel = 161;};
		if (dataid >= 94630 && dataid < 94839) {reel = 162;};
		if (dataid >= 94839 && dataid < 95532) {reel = 163;};
		if (dataid >= 95532 && dataid < 95834) {reel = 164;};
		if (dataid >= 95834 && dataid < 96133) {reel = 165;};
		if (dataid >= 96133 && dataid < 96654) {reel = 166;};
		if (dataid >= 96654 && dataid < 97579) {reel = 167;};
		if (dataid >= 97579 && dataid < 97756) {reel = 168;};
		if (dataid >= 97756 && dataid < 98828) {reel = 169;};
		if (dataid >= 98828 && dataid < 99649) {reel = 170;};
		if (dataid >= 99649 && dataid < 100724) {reel = 171;};
		if (dataid >= 100724 && dataid < 100919) {reel = 172;};
		if (dataid >= 100919 && dataid < 101500) {reel = 173;};
		if (dataid >= 101500 && dataid < 102158) {reel = 174;};
		if (dataid >= 102158 && dataid < 102674) {reel = 175;};
		if (dataid >= 102674 && dataid < 103106) {reel = 176;};
		if (dataid >= 103106 && dataid < 104123) {reel = 177;};
		if (dataid >= 104123 && dataid < 104290) {reel = 178;};
		if (dataid >= 104290 && dataid < 105344) {reel = 179;};
		if (dataid >= 105344 && dataid < 106113) {reel = 180;};
		if (dataid >= 106113 && dataid < 107006) {reel = 181;};
		if (dataid >= 107006 && dataid < 107167) {reel = 182;};
		if (dataid >= 107167 && dataid < 107805) {reel = 183;};
		if (dataid >= 107805 && dataid < 108315) {reel = 184;};
		if (dataid >= 108315 && dataid < 109183) {reel = 185;};
		if (dataid >= 109183 && dataid < 110175) {reel = 186;};
		if (dataid >= 110175 && dataid < 110370) {reel = 187;};
		if (dataid >= 110370 && dataid < 110891) {reel = 188;};
		if (dataid >= 110891 && dataid < 111689) {reel = 189;};
		if (dataid >= 111689 && dataid < 112565) {reel = 190;};
		if (dataid >= 112565 && dataid < 112748) {reel = 191;};
		if (dataid >= 112748 && dataid < 113305) {reel = 192;};
		if (dataid >= 113305 && dataid < 113691) {reel = 193;};
		if (dataid >= 113691 && dataid < 114431) {reel = 194;};
		if (dataid >= 114431 && dataid < 114801) {reel = 195;};
		if (dataid >= 114801 && dataid < 115404) {reel = 196;};
		if (dataid >= 115404 && dataid < 115611) {reel = 197;};
		if (dataid >= 115611 && dataid < 116153) {reel = 198;};
		if (dataid >= 116153 && dataid <= 116752) {reel = 199;}; //Max dbpageid before google drive is 116,752.
    	if (reel < 118 || reel > 124 || 118 < reel < 124) {
    	reelpage = parseInt(dataid)+parseInt(reeldata[reel][1])-parseInt(reeldata[reel][5]);
    	}
    	if (reel == 118 || reel == 124) { //For reels 118 and 124, the reels are organized backwards.
    	reelpage = -parseInt(dataid)+parseInt(reeldata[reel][1])+parseInt(reeldata[reel][5]);
    	}
    	preroundrotate = customrotate+parseInt(reeldata[reel][2]);
    	if (0 <= preroundrotate <= 270) {rotate = preroundrotate;};
    	if (preroundrotate < 0) {customrotate = customrotate + 360; preroundrotate = customrotate+parseInt(reeldata[reel][2]); rotate = preroundrotate;};
    	if (preroundrotate >= 360) {customrotate = customrotate - 360; preroundrotate = customrotate+parseInt(reeldata[reel][2]); rotate = preroundrotate;};
     	determinelosax();
    	server = parseInt(reeldata[reel][3]);
    	tarzip = reeldata[reel][6];
    	zip = parseInt(reeldata[reel][4]);
		document.getElementById("archivedisplay").innerHTML = "<div id='imageframe'><img src='https://ia" + server +
    	".us.archive.org/BookReader/BookReaderImages.php?zip=/" + zip + "/items/ucladailybruin" + reel.pad(2) +
    	"losa" + losax + "/ucladailybruin" + reel.pad(2) + "losa" + losax + "_jp2." + tarzip + "&file=ucladailybruin" + reel.pad(2) +
    	"losa" + losax + "_jp2/ucladailybruin" + reel.pad(2) + "losa" + losax + "_" + parseInt(reelpage).pad(4) + ".jp2&scale=" +
    	zoom + "&rotate=" + rotate + "'></div>";
    	document.getElementById("reeloptions").style.display = "block";
    	document.getElementById("reeloptions").style.visibility = "visible";
	} else if (isInteger(Number(dbpageid)) == true && Number(dbpageid) >= 116753 && Number(dbpageid) <= 116768) { //Dbpageid range for google drive is 116,753 to 116,768.
		var dataid = dbpageid;
		document.getElementById("reeloptions").style.display = 'none';
		var folder = "0B8WE6yj3c61XUVNMTFQ3SllGazA"
		var folderlist = ["0B9y1-prT44zAMjRjNXNEYlFPelk","0B9y1-prT44zAQUV5eVRJZHhpcWM","0B9y1-prT44zANGMxU3VHTnBpek0","0B9y1-prT44zAZW5YYkVWR1lBRVU","0B9y1-prT44zAT2JvalFwQlZid1E",
		"0B9y1-prT44zAdE1BNUQ3RlY1b28","0B9y1-prT44zAeExhdGVfYm1FVE0","0B9y1-prT44zAdU16d0lNOGFNYzA","0B9y1-prT44zAUjhkc2dlY05fLVU","0B9y1-prT44zAVzlCTE9qMzRFZjA","0B9y1-prT44zASG9vQUdVYXBybFk","0B9y1-prT44zAQXhPRGFRTUVJVkE","0B9y1-prT44zAcVlwYlRFdGR3MWs","0B9y1-prT44zAeUVUNDg4UFdvU3M","0B8WE6yj3c61XUVNMTFQ3SllGazA","1IUbV74C31HOZcf9x97bDVce4hnfFKRlg"];
		folder = folderlist[dataid - 116753]; //Minimum range for Google Drive is 116,753.
		document.getElementById("archivedisplay").innerHTML = "<div id='imageframe'><iframe src='https://drive.google.com/embeddedfolderview?id=" + folder + "#grid'></iframe></div>";
	} else {
		alert("Select a valid number.");
	}
	var tracking;
	tracking = setInterval(trackhash, 200);
}

function print_arrow_key(keyCodeNumber) {
    var arrowvalue = LEFT = 37,RIGHT = 39;
    switch (keyCodeNumber) {
    case LEFT:
        previousid();
        break;
    case RIGHT:
        nextid();
        break;
    default:
        break;
    }
}
function checkKeycode(event) {
    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;
    print_arrow_key(keycode);
    return false;
}
document.onkeydown = checkKeycode;

function rundate() {
	var selectedDate = new Date(document.getElementById("monthselect").value + '/10/' + document.getElementById("yearselect").value).getTime();
	var datebasedid;
	if (new Date('01/01/1914').getTime() <= selectedDate && selectedDate < new Date('09/10/1915').getTime()) {datebasedid = 1;};
	if (new Date('09/10/1915').getTime() <= selectedDate && selectedDate < new Date('02/18/1921').getTime()) {datebasedid = (469 - 1)*((selectedDate - new Date('09/10/1915').getTime())/(new Date('02/18/1921').getTime() - new Date('09/10/1915').getTime())) + 1;};
	if (new Date('02/18/1921').getTime() <= selectedDate && selectedDate < new Date('03/25/1924').getTime()) {datebasedid = (1163 - 469)*((selectedDate - new Date('02/18/1921').getTime())/(new Date('03/25/1924').getTime() - new Date('02/18/1921').getTime())) + 469;};
	if (new Date('03/25/1924').getTime() <= selectedDate && selectedDate < new Date('02/11/1926').getTime()) {datebasedid = (2008 - 1163)*((selectedDate - new Date('03/25/1924').getTime())/(new Date('02/11/1926').getTime() - new Date('03/25/1924').getTime())) + 1163;};
	if (new Date('02/11/1926').getTime() <= selectedDate && selectedDate < new Date('02/17/1927').getTime()) {datebasedid = (2731 - 2008)*((selectedDate - new Date('02/11/1926').getTime())/(new Date('02/17/1927').getTime() - new Date('02/11/1926').getTime())) + 2008;};
	if (new Date('02/17/1927').getTime() <= selectedDate && selectedDate < new Date('01/12/1928').getTime()) {datebasedid = (3426 - 2731)*((selectedDate - new Date('02/17/1927').getTime())/(new Date('01/12/1928').getTime() - new Date('02/17/1927').getTime())) + 2731;};
	if (new Date('01/12/1928').getTime() <= selectedDate && selectedDate < new Date('02/11/1929').getTime()) {datebasedid = (4153 - 3426)*((selectedDate - new Date('01/12/1928').getTime())/(new Date('02/11/1929').getTime() - new Date('01/12/1928').getTime())) + 3426;};
	if (new Date('02/11/1929').getTime() <= selectedDate && selectedDate < new Date('11/25/1929').getTime()) {datebasedid = (4817 - 4153)*((selectedDate - new Date('02/11/1929').getTime())/(new Date('11/25/1929').getTime() - new Date('02/11/1929').getTime())) + 4153;};
	if (new Date('11/25/1929').getTime() <= selectedDate && selectedDate < new Date('10/30/1930').getTime()) {datebasedid = (5522 - 4817)*((selectedDate - new Date('11/25/1929').getTime())/(new Date('10/30/1930').getTime() - new Date('11/25/1929').getTime())) + 4817;};
	if (new Date('10/30/1930').getTime() <= selectedDate && selectedDate < new Date('09/17/1931').getTime()) {datebasedid = (6229 - 5522)*((selectedDate - new Date('10/30/1930').getTime())/(new Date('09/17/1931').getTime() - new Date('10/30/1930').getTime())) + 5522;};
	if (new Date('09/17/1931').getTime() <= selectedDate && selectedDate < new Date('10/3/1932').getTime()) {datebasedid = (6966 - 6229)*((selectedDate - new Date('09/17/1931').getTime())/(new Date('10/3/1932').getTime() - new Date('09/17/1931').getTime())) + 6229;};
	if (new Date('10/3/1932').getTime() <= selectedDate && selectedDate < new Date('08/4/1933').getTime()) {datebasedid = (7645 - 6966)*((selectedDate - new Date('10/3/1932').getTime())/(new Date('08/4/1933').getTime() - new Date('10/3/1932').getTime())) + 6966;};
	if (new Date('08/4/1933').getTime() <= selectedDate && selectedDate < new Date('05/14/1934').getTime()) {datebasedid = (8322 - 7645)*((selectedDate - new Date('08/4/1933').getTime())/(new Date('05/14/1934').getTime() - new Date('08/4/1933').getTime())) + 7645;};
	if (new Date('05/14/1934').getTime() <= selectedDate && selectedDate < new Date('04/29/1935').getTime()) {datebasedid = (9008 - 8322)*((selectedDate - new Date('05/14/1934').getTime())/(new Date('04/29/1935').getTime() - new Date('05/14/1934').getTime())) + 8322;};
	if (new Date('04/29/1935').getTime() <= selectedDate && selectedDate < new Date('03/10/1936').getTime()) {datebasedid = (9609 - 9008)*((selectedDate - new Date('04/29/1935').getTime())/(new Date('03/10/1936').getTime() - new Date('04/29/1935').getTime())) + 9008;};
	if (new Date('03/10/1936').getTime() <= selectedDate && selectedDate < new Date('01/6/1937').getTime()) {datebasedid = (10259 - 9609)*((selectedDate - new Date('03/10/1936').getTime())/(new Date('01/6/1937').getTime() - new Date('03/10/1936').getTime())) + 9609;};
	if (new Date('01/6/1937').getTime() <= selectedDate && selectedDate < new Date('11/12/1937').getTime()) {datebasedid = (10873 - 10259)*((selectedDate - new Date('01/6/1937').getTime())/(new Date('11/12/1937').getTime() - new Date('01/6/1937').getTime())) + 10259;};
	if (new Date('11/12/1937').getTime() <= selectedDate && selectedDate < new Date('12/5/1938').getTime()) {datebasedid = (11617 - 10873)*((selectedDate - new Date('11/12/1937').getTime())/(new Date('12/5/1938').getTime() - new Date('11/12/1937').getTime())) + 10873;};
	if (new Date('12/5/1938').getTime() <= selectedDate && selectedDate < new Date('12/12/1939').getTime()) {datebasedid = (12373 - 11617)*((selectedDate - new Date('12/5/1938').getTime())/(new Date('12/12/1939').getTime() - new Date('12/5/1938').getTime())) + 11617;};
	if (new Date('12/12/1939').getTime() <= selectedDate && selectedDate < new Date('11/8/1940').getTime()) {datebasedid = (12924 - 12373)*((selectedDate - new Date('12/12/1939').getTime())/(new Date('11/8/1940').getTime() - new Date('12/12/1939').getTime())) + 12373;};
	if (new Date('11/8/1940').getTime() <= selectedDate && selectedDate < new Date('12/2/1941').getTime()) {datebasedid = (13631 - 12924)*((selectedDate - new Date('11/8/1940').getTime())/(new Date('12/2/1941').getTime() - new Date('11/8/1940').getTime())) + 12924;};
	if (new Date('12/2/1941').getTime() <= selectedDate && selectedDate < new Date('02/18/1943').getTime()) {datebasedid = (14313 - 13631)*((selectedDate - new Date('12/2/1941').getTime())/(new Date('02/18/1943').getTime() - new Date('12/2/1941').getTime())) + 13631;};
	if (new Date('02/18/1943').getTime() <= selectedDate && selectedDate < new Date('01/24/1945').getTime()) {datebasedid = (14989 - 14313)*((selectedDate - new Date('02/18/1943').getTime())/(new Date('01/24/1945').getTime() - new Date('02/18/1943').getTime())) + 14313;};
	if (new Date('01/24/1945').getTime() <= selectedDate && selectedDate < new Date('05/21/1946').getTime()) {datebasedid = (15703 - 14989)*((selectedDate - new Date('01/24/1945').getTime())/(new Date('05/21/1946').getTime() - new Date('01/24/1945').getTime())) + 14989;};
	if (new Date('05/21/1946').getTime() <= selectedDate && selectedDate < new Date('10/6/1947').getTime()) {datebasedid = (16530 - 15703)*((selectedDate - new Date('05/21/1946').getTime())/(new Date('10/6/1947').getTime() - new Date('05/21/1946').getTime())) + 15703;};
	if (new Date('10/6/1947').getTime() <= selectedDate && selectedDate < new Date('10/22/1948').getTime()) {datebasedid = (17246 - 16530)*((selectedDate - new Date('10/6/1947').getTime())/(new Date('10/22/1948').getTime() - new Date('10/6/1947').getTime())) + 16530;};
	if (new Date('10/22/1948').getTime() <= selectedDate && selectedDate < new Date('09/23/1949').getTime()) {datebasedid = (17873 - 17246)*((selectedDate - new Date('10/22/1948').getTime())/(new Date('09/23/1949').getTime() - new Date('10/22/1948').getTime())) + 17246;};
	if (new Date('09/23/1949').getTime() <= selectedDate && selectedDate < new Date('09/13/1950').getTime()) {datebasedid = (18506 - 17873)*((selectedDate - new Date('09/23/1949').getTime())/(new Date('09/13/1950').getTime() - new Date('09/23/1949').getTime())) + 17873;};
	if (new Date('09/13/1950').getTime() <= selectedDate && selectedDate < new Date('03/16/1951').getTime()) {datebasedid = (18982 - 18506)*((selectedDate - new Date('09/13/1950').getTime())/(new Date('03/16/1951').getTime() - new Date('09/13/1950').getTime())) + 18506;};
	if (new Date('03/16/1951').getTime() <= selectedDate && selectedDate < new Date('03/20/1952').getTime()) {datebasedid = (19578 - 18982)*((selectedDate - new Date('03/16/1951').getTime())/(new Date('03/20/1952').getTime() - new Date('03/16/1951').getTime())) + 18982;};
	if (new Date('03/20/1952').getTime() <= selectedDate && selectedDate < new Date('03/20/1953').getTime()) {datebasedid = (20184 - 19578)*((selectedDate - new Date('03/20/1952').getTime())/(new Date('03/20/1953').getTime() - new Date('03/20/1952').getTime())) + 19578;};
	if (new Date('03/20/1953').getTime() <= selectedDate && selectedDate < new Date('03/26/1954').getTime()) {datebasedid = (20787 - 20184)*((selectedDate - new Date('03/20/1953').getTime())/(new Date('03/26/1954').getTime() - new Date('03/20/1953').getTime())) + 20184;};
	if (new Date('03/26/1954').getTime() <= selectedDate && selectedDate < new Date('03/28/1955').getTime()) {datebasedid = (21391 - 20787)*((selectedDate - new Date('03/26/1954').getTime())/(new Date('03/28/1955').getTime() - new Date('03/26/1954').getTime())) + 20787;};
	if (new Date('03/28/1955').getTime() <= selectedDate && selectedDate < new Date('04/2/1956').getTime()) {datebasedid = (22009 - 21391)*((selectedDate - new Date('03/28/1955').getTime())/(new Date('04/2/1956').getTime() - new Date('03/28/1955').getTime())) + 21391;};
	if (new Date('04/2/1956').getTime() <= selectedDate && selectedDate < new Date('03/15/1957').getTime()) {datebasedid = (22627 - 22009)*((selectedDate - new Date('04/2/1956').getTime())/(new Date('03/15/1957').getTime() - new Date('04/2/1956').getTime())) + 22009;};
	if (new Date('03/15/1957').getTime() <= selectedDate && selectedDate < new Date('03/19/1958').getTime()) {datebasedid = (23235 - 22627)*((selectedDate - new Date('03/15/1957').getTime())/(new Date('03/19/1958').getTime() - new Date('03/15/1957').getTime())) + 22627;};
	if (new Date('03/19/1958').getTime() <= selectedDate && selectedDate < new Date('03/6/1959').getTime()) {datebasedid = (23851 - 23235)*((selectedDate - new Date('03/19/1958').getTime())/(new Date('03/6/1959').getTime() - new Date('03/19/1958').getTime())) + 23235;};
	if (new Date('03/6/1959').getTime() <= selectedDate && selectedDate < new Date('03/3/1960').getTime()) {datebasedid = (24459 - 23851)*((selectedDate - new Date('03/6/1959').getTime())/(new Date('03/3/1960').getTime() - new Date('03/6/1959').getTime())) + 23851;};
	if (new Date('03/3/1960').getTime() <= selectedDate && selectedDate < new Date('02/15/1961').getTime()) {datebasedid = (25060 - 24459)*((selectedDate - new Date('03/3/1960').getTime())/(new Date('02/15/1961').getTime() - new Date('03/3/1960').getTime())) + 24459;};
	if (new Date('02/15/1961').getTime() <= selectedDate && selectedDate < new Date('12/1/1961').getTime()) {datebasedid = (25668 - 25060)*((selectedDate - new Date('02/15/1961').getTime())/(new Date('12/1/1961').getTime() - new Date('02/15/1961').getTime())) + 25060;};
	if (new Date('12/1/1961').getTime() <= selectedDate && selectedDate < new Date('09/28/1962').getTime()) {datebasedid = (26261 - 25668)*((selectedDate - new Date('12/1/1961').getTime())/(new Date('09/28/1962').getTime() - new Date('12/1/1961').getTime())) + 25668;};
	if (new Date('09/28/1962').getTime() <= selectedDate && selectedDate < new Date('05/1/1963').getTime()) {datebasedid = (26861 - 26261)*((selectedDate - new Date('09/28/1962').getTime())/(new Date('05/1/1963').getTime() - new Date('09/28/1962').getTime())) + 26261;};
	if (new Date('05/1/1963').getTime() <= selectedDate && selectedDate < new Date('03/31/1964').getTime()) {datebasedid = (27485 - 26861)*((selectedDate - new Date('05/1/1963').getTime())/(new Date('03/31/1964').getTime() - new Date('05/1/1963').getTime())) + 26861;};
	if (new Date('03/31/1964').getTime() <= selectedDate && selectedDate < new Date('02/17/1965').getTime()) {datebasedid = (28111 - 27485)*((selectedDate - new Date('03/31/1964').getTime())/(new Date('02/17/1965').getTime() - new Date('03/31/1964').getTime())) + 27485;};
	if (new Date('02/17/1965').getTime() <= selectedDate && selectedDate < new Date('11/3/1965').getTime()) {datebasedid = (28720 - 28111)*((selectedDate - new Date('02/17/1965').getTime())/(new Date('11/3/1965').getTime() - new Date('02/17/1965').getTime())) + 28111;};
	if (new Date('11/3/1965').getTime() <= selectedDate && selectedDate < new Date('05/2/1966').getTime()) {datebasedid = (29334 - 28720)*((selectedDate - new Date('11/3/1965').getTime())/(new Date('05/2/1966').getTime() - new Date('11/3/1965').getTime())) + 28720;};
	if (new Date('05/2/1966').getTime() <= selectedDate && selectedDate < new Date('02/7/1967').getTime()) {datebasedid = (29960 - 29334)*((selectedDate - new Date('05/2/1966').getTime())/(new Date('02/7/1967').getTime() - new Date('05/2/1966').getTime())) + 29334;};
	if (new Date('02/7/1967').getTime() <= selectedDate && selectedDate < new Date('11/30/1967').getTime()) {datebasedid = (30570 - 29960)*((selectedDate - new Date('02/7/1967').getTime())/(new Date('11/30/1967').getTime() - new Date('02/7/1967').getTime())) + 29960;};
	if (new Date('11/30/1967').getTime() <= selectedDate && selectedDate < new Date('05/7/1968').getTime()) {datebasedid = (31197 - 30570)*((selectedDate - new Date('11/30/1967').getTime())/(new Date('05/7/1968').getTime() - new Date('11/30/1967').getTime())) + 30570;};
	if (new Date('05/7/1968').getTime() <= selectedDate && selectedDate < new Date('11/25/1968').getTime()) {datebasedid = (31835 - 31197)*((selectedDate - new Date('05/7/1968').getTime())/(new Date('11/25/1968').getTime() - new Date('05/7/1968').getTime())) + 31197;};
	if (new Date('11/25/1968').getTime() <= selectedDate && selectedDate < new Date('05/13/1969').getTime()) {datebasedid = (32442 - 31835)*((selectedDate - new Date('11/25/1968').getTime())/(new Date('05/13/1969').getTime() - new Date('11/25/1968').getTime())) + 31835;};
	if (new Date('05/13/1969').getTime() <= selectedDate && selectedDate < new Date('11/18/1969').getTime()) {datebasedid = (33065 - 32442)*((selectedDate - new Date('05/13/1969').getTime())/(new Date('11/18/1969').getTime() - new Date('05/13/1969').getTime())) + 32442;};
	if (new Date('11/18/1969').getTime() <= selectedDate && selectedDate < new Date('04/24/1970').getTime()) {datebasedid = (33683 - 33065)*((selectedDate - new Date('11/18/1969').getTime())/(new Date('04/24/1970').getTime() - new Date('11/18/1969').getTime())) + 33065;};
	if (new Date('04/24/1970').getTime() <= selectedDate && selectedDate < new Date('09/29/1970').getTime()) {datebasedid = (34026 - 33683)*((selectedDate - new Date('04/24/1970').getTime())/(new Date('09/29/1970').getTime() - new Date('04/24/1970').getTime())) + 33683;};
	if (new Date('09/29/1970').getTime() <= selectedDate && selectedDate < new Date('01/6/1971').getTime()) {datebasedid = (34481 - 34026)*((selectedDate - new Date('09/29/1970').getTime())/(new Date('01/6/1971').getTime() - new Date('09/29/1970').getTime())) + 34026;};
	if (new Date('01/6/1971').getTime() <= selectedDate && selectedDate < new Date('03/31/1971').getTime()) {datebasedid = (34872 - 34481)*((selectedDate - new Date('01/6/1971').getTime())/(new Date('03/31/1971').getTime() - new Date('01/6/1971').getTime())) + 34481;};
	if (new Date('03/31/1971').getTime() <= selectedDate && selectedDate < new Date('09/28/1971').getTime()) {datebasedid = (35447 - 34872)*((selectedDate - new Date('03/31/1971').getTime())/(new Date('09/28/1971').getTime() - new Date('03/31/1971').getTime())) + 34872;};
	if (new Date('09/28/1971').getTime() <= selectedDate && selectedDate < new Date('01/5/1972').getTime()) {datebasedid = (35893 - 35447)*((selectedDate - new Date('09/28/1971').getTime())/(new Date('01/5/1972').getTime() - new Date('09/28/1971').getTime())) + 35447;};
	if (new Date('01/5/1972').getTime() <= selectedDate && selectedDate < new Date('03/29/1972').getTime()) {datebasedid = (36257 - 35893)*((selectedDate - new Date('01/5/1972').getTime())/(new Date('03/29/1972').getTime() - new Date('01/5/1972').getTime())) + 35893;};
	if (new Date('03/29/1972').getTime() <= selectedDate && selectedDate < new Date('09/18/1972').getTime()) {datebasedid = (36890 - 36257)*((selectedDate - new Date('03/29/1972').getTime())/(new Date('09/18/1972').getTime() - new Date('03/29/1972').getTime())) + 36257;};
	if (new Date('09/18/1972').getTime() <= selectedDate && selectedDate < new Date('01/8/1973').getTime()) {datebasedid = (37383 - 36890)*((selectedDate - new Date('09/18/1972').getTime())/(new Date('01/8/1973').getTime() - new Date('09/18/1972').getTime())) + 36890;};
	if (new Date('01/8/1973').getTime() <= selectedDate && selectedDate < new Date('06/15/1973').getTime()) {datebasedid = (38218 - 37383)*((selectedDate - new Date('01/8/1973').getTime())/(new Date('06/15/1973').getTime() - new Date('01/8/1973').getTime())) + 37383;};
	if (new Date('06/15/1973').getTime() <= selectedDate && selectedDate < new Date('01/7/1974').getTime()) {datebasedid = (38840 - 38218)*((selectedDate - new Date('06/15/1973').getTime())/(new Date('01/7/1974').getTime() - new Date('06/15/1973').getTime())) + 38218;};
	if (new Date('01/7/1974').getTime() <= selectedDate && selectedDate < new Date('05/1/1974').getTime()) {datebasedid = (39511 - 38840)*((selectedDate - new Date('01/7/1974').getTime())/(new Date('05/1/1974').getTime() - new Date('01/7/1974').getTime())) + 38840;};
	if (new Date('05/1/1974').getTime() <= selectedDate && selectedDate < new Date('11/1/1974').getTime()) {datebasedid = (40274 - 39511)*((selectedDate - new Date('05/1/1974').getTime())/(new Date('11/1/1974').getTime() - new Date('05/1/1974').getTime())) + 39511;};
	if (new Date('11/1/1974').getTime() <= selectedDate && selectedDate < new Date('01/6/1975').getTime()) {datebasedid = (40511 - 40274)*((selectedDate - new Date('11/1/1974').getTime())/(new Date('01/6/1975').getTime() - new Date('11/1/1974').getTime())) + 40274;};
	if (new Date('01/6/1975').getTime() <= selectedDate && selectedDate < new Date('04/17/1975').getTime()) {datebasedid = (41157 - 40511)*((selectedDate - new Date('01/6/1975').getTime())/(new Date('04/17/1975').getTime() - new Date('01/6/1975').getTime())) + 40511;};
	if (new Date('04/17/1975').getTime() <= selectedDate && selectedDate < new Date('10/2/1975').getTime()) {datebasedid = (41802 - 41157)*((selectedDate - new Date('04/17/1975').getTime())/(new Date('10/2/1975').getTime() - new Date('04/17/1975').getTime())) + 41157;};
	if (new Date('10/2/1975').getTime() <= selectedDate && selectedDate < new Date('01/7/1976').getTime()) {datebasedid = (42264 - 41802)*((selectedDate - new Date('10/2/1975').getTime())/(new Date('01/7/1976').getTime() - new Date('10/2/1975').getTime())) + 41802;};
	if (new Date('01/7/1976').getTime() <= selectedDate && selectedDate < new Date('04/5/1976').getTime()) {datebasedid = (42774 - 42264)*((selectedDate - new Date('01/7/1976').getTime())/(new Date('04/5/1976').getTime() - new Date('01/7/1976').getTime())) + 42264;};
	if (new Date('04/5/1976').getTime() <= selectedDate && selectedDate < new Date('09/21/1976').getTime()) {datebasedid = (43452 - 42774)*((selectedDate - new Date('04/5/1976').getTime())/(new Date('09/21/1976').getTime() - new Date('04/5/1976').getTime())) + 42774;};
	if (new Date('09/21/1976').getTime() <= selectedDate && selectedDate < new Date('01/6/1977').getTime()) {datebasedid = (44123 - 43452)*((selectedDate - new Date('09/21/1976').getTime())/(new Date('01/6/1977').getTime() - new Date('09/21/1976').getTime())) + 43452;};
	if (new Date('01/6/1977').getTime() <= selectedDate && selectedDate < new Date('04/4/1977').getTime()) {datebasedid = (44690 - 44123)*((selectedDate - new Date('01/6/1977').getTime())/(new Date('04/4/1977').getTime() - new Date('01/6/1977').getTime())) + 44123;};
	if (new Date('04/4/1977').getTime() <= selectedDate && selectedDate < new Date('09/20/1977').getTime()) {datebasedid = (45475 - 44690)*((selectedDate - new Date('04/4/1977').getTime())/(new Date('09/20/1977').getTime() - new Date('04/4/1977').getTime())) + 44690;};
	if (new Date('09/20/1977').getTime() <= selectedDate && selectedDate < new Date('01/9/1978').getTime()) {datebasedid = (46211 - 45475)*((selectedDate - new Date('09/20/1977').getTime())/(new Date('01/9/1978').getTime() - new Date('09/20/1977').getTime())) + 45475;};
	if (new Date('01/9/1978').getTime() <= selectedDate && selectedDate < new Date('04/3/1978').getTime()) {datebasedid = (46840 - 46211)*((selectedDate - new Date('01/9/1978').getTime())/(new Date('04/3/1978').getTime() - new Date('01/9/1978').getTime())) + 46211;};
	if (new Date('04/3/1978').getTime() <= selectedDate && selectedDate < new Date('09/19/1978').getTime()) {datebasedid = (47735 - 46840)*((selectedDate - new Date('04/3/1978').getTime())/(new Date('09/19/1978').getTime() - new Date('04/3/1978').getTime())) + 46840;};
	if (new Date('09/19/1978').getTime() <= selectedDate && selectedDate < new Date('01/8/1979').getTime()) {datebasedid = (48528 - 47735)*((selectedDate - new Date('09/19/1978').getTime())/(new Date('01/8/1979').getTime() - new Date('09/19/1978').getTime())) + 47735;};
	if (new Date('01/8/1979').getTime() <= selectedDate && selectedDate < new Date('04/2/1979').getTime()) {datebasedid = (49174 - 48528)*((selectedDate - new Date('01/8/1979').getTime())/(new Date('04/2/1979').getTime() - new Date('01/8/1979').getTime())) + 48528;};
	if (new Date('04/2/1979').getTime() <= selectedDate && selectedDate < new Date('09/18/1979').getTime()) {datebasedid = (50080 - 49174)*((selectedDate - new Date('04/2/1979').getTime())/(new Date('09/18/1979').getTime() - new Date('04/2/1979').getTime())) + 49174;};
	if (new Date('09/18/1979').getTime() <= selectedDate && selectedDate < new Date('01/7/1980').getTime()) {datebasedid = (50866 - 50080)*((selectedDate - new Date('09/18/1979').getTime())/(new Date('01/7/1980').getTime() - new Date('09/18/1979').getTime())) + 50080;};
	if (new Date('01/7/1980').getTime() <= selectedDate && selectedDate < new Date('03/31/1980').getTime()) {datebasedid = (51465 - 50866)*((selectedDate - new Date('01/7/1980').getTime())/(new Date('03/31/1980').getTime() - new Date('01/7/1980').getTime())) + 50866;};
	if (new Date('03/31/1980').getTime() <= selectedDate && selectedDate < new Date('09/23/1980').getTime()) {datebasedid = (52376 - 51465)*((selectedDate - new Date('03/31/1980').getTime())/(new Date('09/23/1980').getTime() - new Date('03/31/1980').getTime())) + 51465;};
	if (new Date('09/23/1980').getTime() <= selectedDate && selectedDate < new Date('01/12/1981').getTime()) {datebasedid = (53156 - 52376)*((selectedDate - new Date('09/23/1980').getTime())/(new Date('01/12/1981').getTime() - new Date('09/23/1980').getTime())) + 52376;};
	if (new Date('01/12/1981').getTime() <= selectedDate && selectedDate < new Date('04/6/1981').getTime()) {datebasedid = (53815 - 53156)*((selectedDate - new Date('01/12/1981').getTime())/(new Date('04/6/1981').getTime() - new Date('01/12/1981').getTime())) + 53156;};
	if (new Date('04/6/1981').getTime() <= selectedDate && selectedDate < new Date('09/22/1981').getTime()) {datebasedid = (54725 - 53815)*((selectedDate - new Date('04/6/1981').getTime())/(new Date('09/22/1981').getTime() - new Date('04/6/1981').getTime())) + 53815;};
	if (new Date('09/22/1981').getTime() <= selectedDate && selectedDate < new Date('01/11/1982').getTime()) {datebasedid = (55533 - 54725)*((selectedDate - new Date('09/22/1981').getTime())/(new Date('01/11/1982').getTime() - new Date('09/22/1981').getTime())) + 54725;};
	if (new Date('01/11/1982').getTime() <= selectedDate && selectedDate < new Date('04/5/1982').getTime()) {datebasedid = (56159 - 55533)*((selectedDate - new Date('01/11/1982').getTime())/(new Date('04/5/1982').getTime() - new Date('01/11/1982').getTime())) + 55533;};
	if (new Date('04/5/1982').getTime() <= selectedDate && selectedDate < new Date('06/28/1982').getTime()) {datebasedid = (56888 - 56159)*((selectedDate - new Date('04/5/1982').getTime())/(new Date('06/28/1982').getTime() - new Date('04/5/1982').getTime())) + 56159;};
	if (new Date('06/28/1982').getTime() <= selectedDate && selectedDate < new Date('09/28/1982').getTime()) {datebasedid = (57040 - 56888)*((selectedDate - new Date('06/28/1982').getTime())/(new Date('09/28/1982').getTime() - new Date('06/28/1982').getTime())) + 56888;};
	if (new Date('09/28/1982').getTime() <= selectedDate && selectedDate < new Date('01/10/1983').getTime()) {datebasedid = (57995 - 57040)*((selectedDate - new Date('09/28/1982').getTime())/(new Date('01/10/1983').getTime() - new Date('09/28/1982').getTime())) + 57040;};
	if (new Date('01/10/1983').getTime() <= selectedDate && selectedDate < new Date('04/4/1983').getTime()) {datebasedid = (58672 - 57995)*((selectedDate - new Date('01/10/1983').getTime())/(new Date('04/4/1983').getTime() - new Date('01/10/1983').getTime())) + 57995;};
	if (new Date('04/4/1983').getTime() <= selectedDate && selectedDate < new Date('06/27/1983').getTime()) {datebasedid = (59409 - 58672)*((selectedDate - new Date('04/4/1983').getTime())/(new Date('06/27/1983').getTime() - new Date('04/4/1983').getTime())) + 58672;};
	if (new Date('06/27/1983').getTime() <= selectedDate && selectedDate < new Date('09/27/1983').getTime()) {datebasedid = (59559 - 59409)*((selectedDate - new Date('06/27/1983').getTime())/(new Date('09/27/1983').getTime() - new Date('06/27/1983').getTime())) + 59409;};
	if (new Date('09/27/1983').getTime() <= selectedDate && selectedDate < new Date('12/27/1983').getTime()) {datebasedid = (60450 - 59559)*((selectedDate - new Date('09/27/1983').getTime())/(new Date('12/27/1983').getTime() - new Date('09/27/1983').getTime())) + 59559;};
	if (new Date('12/27/1983').getTime() <= selectedDate && selectedDate < new Date('04/2/1984').getTime()) {datebasedid = (61148 - 60450)*((selectedDate - new Date('12/27/1983').getTime())/(new Date('04/2/1984').getTime() - new Date('12/27/1983').getTime())) + 60450;};
	if (new Date('04/2/1984').getTime() <= selectedDate && selectedDate < new Date('06/21/1984').getTime()) {datebasedid = (61963 - 61148)*((selectedDate - new Date('04/2/1984').getTime())/(new Date('06/21/1984').getTime() - new Date('04/2/1984').getTime())) + 61148;};
	if (new Date('06/21/1984').getTime() <= selectedDate && selectedDate < new Date('09/25/1984').getTime()) {datebasedid = (62212 - 61963)*((selectedDate - new Date('06/21/1984').getTime())/(new Date('09/25/1984').getTime() - new Date('06/21/1984').getTime())) + 61963;};
	if (new Date('09/25/1984').getTime() <= selectedDate && selectedDate < new Date('01/7/1985').getTime()) {datebasedid = (63199 - 62212)*((selectedDate - new Date('09/25/1984').getTime())/(new Date('01/7/1985').getTime() - new Date('09/25/1984').getTime())) + 62212;};
	if (new Date('01/7/1985').getTime() <= selectedDate && selectedDate < new Date('04/1/1985').getTime()) {datebasedid = (63944 - 63199)*((selectedDate - new Date('01/7/1985').getTime())/(new Date('04/1/1985').getTime() - new Date('01/7/1985').getTime())) + 63199;};
	if (new Date('04/1/1985').getTime() <= selectedDate && selectedDate < new Date('06/24/1985').getTime()) {datebasedid = (64681 - 63944)*((selectedDate - new Date('04/1/1985').getTime())/(new Date('06/24/1985').getTime() - new Date('04/1/1985').getTime())) + 63944;};
	if (new Date('06/24/1985').getTime() <= selectedDate && selectedDate < new Date('09/24/1985').getTime()) {datebasedid = (64867 - 64681)*((selectedDate - new Date('06/24/1985').getTime())/(new Date('09/24/1985').getTime() - new Date('06/24/1985').getTime())) + 64681;};
	if (new Date('09/24/1985').getTime() <= selectedDate && selectedDate < new Date('01/1/1986').getTime()) {datebasedid = (65718 - 64867)*((selectedDate - new Date('09/24/1985').getTime())/(new Date('01/1/1986').getTime() - new Date('09/24/1985').getTime())) + 64867;};
	if (new Date('01/1/1986').getTime() <= selectedDate && selectedDate < new Date('04/7/1986').getTime()) {datebasedid = (66462 - 65718)*((selectedDate - new Date('01/1/1986').getTime())/(new Date('04/7/1986').getTime() - new Date('01/1/1986').getTime())) + 65718;};
	if (new Date('04/7/1986').getTime() <= selectedDate && selectedDate < new Date('04/23/1986').getTime()) {datebasedid = (66695 - 66462)*((selectedDate - new Date('04/7/1986').getTime())/(new Date('04/23/1986').getTime() - new Date('04/7/1986').getTime())) + 66462;};
	if (new Date('04/23/1986').getTime() <= selectedDate && selectedDate < new Date('06/30/1986').getTime()) {datebasedid = (67301 - 66695)*((selectedDate - new Date('04/23/1986').getTime())/(new Date('06/30/1986').getTime() - new Date('04/23/1986').getTime())) + 66695;};
	if (new Date('06/30/1986').getTime() <= selectedDate && selectedDate < new Date('09/23/1986').getTime()) {datebasedid = (67526 - 67301)*((selectedDate - new Date('06/30/1986').getTime())/(new Date('09/23/1986').getTime() - new Date('06/30/1986').getTime())) + 67301;};
	if (new Date('09/23/1986').getTime() <= selectedDate && selectedDate < new Date('01/5/1987').getTime()) {datebasedid = (68506 - 67526)*((selectedDate - new Date('09/23/1986').getTime())/(new Date('01/5/1987').getTime() - new Date('09/23/1986').getTime())) + 67526;};
	if (new Date('01/5/1987').getTime() <= selectedDate && selectedDate < new Date('03/30/1987').getTime()) {datebasedid = (69202 - 68506)*((selectedDate - new Date('01/5/1987').getTime())/(new Date('03/30/1987').getTime() - new Date('01/5/1987').getTime())) + 68506;};
	if (new Date('03/30/1987').getTime() <= selectedDate && selectedDate < new Date('06/22/1987').getTime()) {datebasedid = (70050 - 69202)*((selectedDate - new Date('03/30/1987').getTime())/(new Date('06/22/1987').getTime() - new Date('03/30/1987').getTime())) + 69202;};
	if (new Date('06/22/1987').getTime() <= selectedDate && selectedDate < new Date('09/22/1987').getTime()) {datebasedid = (70280 - 70050)*((selectedDate - new Date('06/22/1987').getTime())/(new Date('09/22/1987').getTime() - new Date('06/22/1987').getTime())) + 70050;};
	if (new Date('09/22/1987').getTime() <= selectedDate && selectedDate < new Date('11/3/1987').getTime()) {datebasedid = (70894 - 70280)*((selectedDate - new Date('09/22/1987').getTime())/(new Date('11/3/1987').getTime() - new Date('09/22/1987').getTime())) + 70280;};
	if (new Date('11/3/1987').getTime() <= selectedDate && selectedDate < new Date('01/4/1988').getTime()) {datebasedid = (71295 - 70894)*((selectedDate - new Date('11/3/1987').getTime())/(new Date('01/4/1988').getTime() - new Date('11/3/1987').getTime())) + 70894;};
	if (new Date('01/4/1988').getTime() <= selectedDate && selectedDate < new Date('03/26/1988').getTime()) {datebasedid = (72139 - 71295)*((selectedDate - new Date('01/4/1988').getTime())/(new Date('03/26/1988').getTime() - new Date('01/4/1988').getTime())) + 71295;};
	if (new Date('03/26/1988').getTime() <= selectedDate && selectedDate < new Date('05/2/1988').getTime()) {datebasedid = (72642 - 72139)*((selectedDate - new Date('03/26/1988').getTime())/(new Date('05/2/1988').getTime() - new Date('03/26/1988').getTime())) + 72139;};
	if (new Date('05/2/1988').getTime() <= selectedDate && selectedDate < new Date('06/27/1988').getTime()) {datebasedid = (73130 - 72642)*((selectedDate - new Date('05/2/1988').getTime())/(new Date('06/27/1988').getTime() - new Date('05/2/1988').getTime())) + 72642;};
	if (new Date('06/27/1988').getTime() <= selectedDate && selectedDate < new Date('09/26/1988').getTime()) {datebasedid = (73409 - 73130)*((selectedDate - new Date('06/27/1988').getTime())/(new Date('09/26/1988').getTime() - new Date('06/27/1988').getTime())) + 73130;};
	if (new Date('09/26/1988').getTime() <= selectedDate && selectedDate < new Date('10/24/1988').getTime()) {datebasedid = (73852 - 73409)*((selectedDate - new Date('09/26/1988').getTime())/(new Date('10/24/1988').getTime() - new Date('09/26/1988').getTime())) + 73409;};
	if (new Date('10/24/1988').getTime() <= selectedDate && selectedDate < new Date('01/9/1989').getTime()) {datebasedid = (74414 - 73852)*((selectedDate - new Date('10/24/1988').getTime())/(new Date('01/9/1989').getTime() - new Date('10/24/1988').getTime())) + 73852;};
	if (new Date('01/9/1989').getTime() <= selectedDate && selectedDate < new Date('02/9/1989').getTime()) {datebasedid = (74847 - 74414)*((selectedDate - new Date('01/9/1989').getTime())/(new Date('02/9/1989').getTime() - new Date('01/9/1989').getTime())) + 74414;};
	if (new Date('02/9/1989').getTime() <= selectedDate && selectedDate < new Date('04/3/1989').getTime()) {datebasedid = (75337 - 74847)*((selectedDate - new Date('02/9/1989').getTime())/(new Date('04/3/1989').getTime() - new Date('02/9/1989').getTime())) + 74847;};
	if (new Date('04/3/1989').getTime() <= selectedDate && selectedDate < new Date('04/18/1989').getTime()) {datebasedid = (75600 - 75337)*((selectedDate - new Date('04/3/1989').getTime())/(new Date('04/18/1989').getTime() - new Date('04/3/1989').getTime())) + 75337;};
	if (new Date('04/18/1989').getTime() <= selectedDate && selectedDate < new Date('06/26/1989').getTime()) {datebasedid = (76350 - 75600)*((selectedDate - new Date('04/18/1989').getTime())/(new Date('06/26/1989').getTime() - new Date('04/18/1989').getTime())) + 75600;};
	if (new Date('06/26/1989').getTime() <= selectedDate && selectedDate < new Date('09/25/1989').getTime()) {datebasedid = (76567 - 76350)*((selectedDate - new Date('06/26/1989').getTime())/(new Date('09/25/1989').getTime() - new Date('06/26/1989').getTime())) + 76350;};
	if (new Date('09/25/1989').getTime() <= selectedDate && selectedDate < new Date('11/1/1989').getTime()) {datebasedid = (77180 - 76567)*((selectedDate - new Date('09/25/1989').getTime())/(new Date('11/1/1989').getTime() - new Date('09/25/1989').getTime())) + 76567;};
	if (new Date('11/1/1989').getTime() <= selectedDate && selectedDate < new Date('01/8/1990').getTime()) {datebasedid = (77673 - 77180)*((selectedDate - new Date('11/1/1989').getTime())/(new Date('01/8/1990').getTime() - new Date('11/1/1989').getTime())) + 77180;};
	if (new Date('01/8/1990').getTime() <= selectedDate && selectedDate < new Date('02/15/1990').getTime()) {datebasedid = (78235 - 77673)*((selectedDate - new Date('01/8/1990').getTime())/(new Date('02/15/1990').getTime() - new Date('01/8/1990').getTime())) + 77673;};
	if (new Date('02/15/1990').getTime() <= selectedDate && selectedDate < new Date('04/2/1990').getTime()) {datebasedid = (78624 - 78235)*((selectedDate - new Date('02/15/1990').getTime())/(new Date('04/2/1990').getTime() - new Date('02/15/1990').getTime())) + 78235;};
	if (new Date('04/2/1990').getTime() <= selectedDate && selectedDate < new Date('04/30/1990').getTime()) {datebasedid = (79137 - 78624)*((selectedDate - new Date('04/2/1990').getTime())/(new Date('04/30/1990').getTime() - new Date('04/2/1990').getTime())) + 78624;};
	if (new Date('04/30/1990').getTime() <= selectedDate && selectedDate < new Date('06/25/1990').getTime()) {datebasedid = (79702 - 79137)*((selectedDate - new Date('04/30/1990').getTime())/(new Date('06/25/1990').getTime() - new Date('04/30/1990').getTime())) + 79137;};
	if (new Date('06/25/1990').getTime() <= selectedDate && selectedDate < new Date('09/24/1990').getTime()) {datebasedid = (79929 - 79702)*((selectedDate - new Date('06/25/1990').getTime())/(new Date('09/24/1990').getTime() - new Date('06/25/1990').getTime())) + 79702;};
	if (new Date('09/24/1990').getTime() <= selectedDate && selectedDate < new Date('10/29/1990').getTime()) {datebasedid = (80561 - 79929)*((selectedDate - new Date('09/24/1990').getTime())/(new Date('10/29/1990').getTime() - new Date('09/24/1990').getTime())) + 79929;};
	if (new Date('10/29/1990').getTime() <= selectedDate && selectedDate < new Date('01/7/1991').getTime()) {datebasedid = (81082 - 80561)*((selectedDate - new Date('10/29/1990').getTime())/(new Date('01/7/1991').getTime() - new Date('10/29/1990').getTime())) + 80561;};
	if (new Date('01/7/1991').getTime() <= selectedDate && selectedDate < new Date('04/1/1991').getTime()) {datebasedid = (81981 - 81082)*((selectedDate - new Date('01/7/1991').getTime())/(new Date('04/1/1991').getTime() - new Date('01/7/1991').getTime())) + 81082;};
	if (new Date('04/1/1991').getTime() <= selectedDate && selectedDate < new Date('05/9/1991').getTime()) {datebasedid = (82522 - 81981)*((selectedDate - new Date('04/1/1991').getTime())/(new Date('05/9/1991').getTime() - new Date('04/1/1991').getTime())) + 81981;};
	if (new Date('05/9/1991').getTime() <= selectedDate && selectedDate < new Date('06/24/1991').getTime()) {datebasedid = (82959 - 82522)*((selectedDate - new Date('05/9/1991').getTime())/(new Date('06/24/1991').getTime() - new Date('05/9/1991').getTime())) + 82522;};
	if (new Date('06/24/1991').getTime() <= selectedDate && selectedDate < new Date('09/23/1991').getTime()) {datebasedid = (83166 - 82959)*((selectedDate - new Date('06/24/1991').getTime())/(new Date('09/23/1991').getTime() - new Date('06/24/1991').getTime())) + 82959;};
	if (new Date('09/23/1991').getTime() <= selectedDate && selectedDate < new Date('11/1/1991').getTime()) {datebasedid = (83859 - 83166)*((selectedDate - new Date('09/23/1991').getTime())/(new Date('11/1/1991').getTime() - new Date('09/23/1991').getTime())) + 83166;};
	if (new Date('11/1/1991').getTime() <= selectedDate && selectedDate < new Date('01/6/1992').getTime()) {datebasedid = (84266 - 83859)*((selectedDate - new Date('11/1/1991').getTime())/(new Date('01/6/1992').getTime() - new Date('11/1/1991').getTime())) + 83859;};
	if (new Date('01/6/1992').getTime() <= selectedDate && selectedDate < new Date('02/6/1992').getTime()) {datebasedid = (84678 - 84266)*((selectedDate - new Date('01/6/1992').getTime())/(new Date('02/6/1992').getTime() - new Date('01/6/1992').getTime())) + 84266;};
	if (new Date('02/6/1992').getTime() <= selectedDate && selectedDate < new Date('03/30/1992').getTime()) {datebasedid = (85131 - 84678)*((selectedDate - new Date('02/6/1992').getTime())/(new Date('03/30/1992').getTime() - new Date('02/6/1992').getTime())) + 84678;};
	if (new Date('03/30/1992').getTime() <= selectedDate && selectedDate < new Date('05/12/1992').getTime()) {datebasedid = (85761 - 85131)*((selectedDate - new Date('03/30/1992').getTime())/(new Date('05/12/1992').getTime() - new Date('03/30/1992').getTime())) + 85131;};
	if (new Date('05/12/1992').getTime() <= selectedDate && selectedDate < new Date('06/22/1992').getTime()) {datebasedid = (86146 - 85761)*((selectedDate - new Date('05/12/1992').getTime())/(new Date('06/22/1992').getTime() - new Date('05/12/1992').getTime())) + 85761;};
	if (new Date('06/22/1992').getTime() <= selectedDate && selectedDate < new Date('09/21/1992').getTime()) {datebasedid = (86305 - 86146)*((selectedDate - new Date('06/22/1992').getTime())/(new Date('09/21/1992').getTime() - new Date('06/22/1992').getTime())) + 86146;};
	if (new Date('09/21/1992').getTime() <= selectedDate && selectedDate < new Date('11/2/1992').getTime()) {datebasedid = (86927 - 86305)*((selectedDate - new Date('09/21/1992').getTime())/(new Date('11/2/1992').getTime() - new Date('09/21/1992').getTime())) + 86305;};
	if (new Date('11/2/1992').getTime() <= selectedDate && selectedDate < new Date('01/11/1993').getTime()) {datebasedid = (87316 - 86927)*((selectedDate - new Date('11/2/1992').getTime())/(new Date('01/11/1993').getTime() - new Date('11/2/1992').getTime())) + 86927;};
	if (new Date('01/11/1993').getTime() <= selectedDate && selectedDate < new Date('04/5/1993').getTime()) {datebasedid = (88065 - 87316)*((selectedDate - new Date('01/11/1993').getTime())/(new Date('04/5/1993').getTime() - new Date('01/11/1993').getTime())) + 87316;};
	if (new Date('04/5/1993').getTime() <= selectedDate && selectedDate < new Date('05/5/1993').getTime()) {datebasedid = (88494 - 88065)*((selectedDate - new Date('04/5/1993').getTime())/(new Date('05/5/1993').getTime() - new Date('04/5/1993').getTime())) + 88065;};
	if (new Date('05/5/1993').getTime() <= selectedDate && selectedDate < new Date('06/28/1993').getTime()) {datebasedid = (88967 - 88494)*((selectedDate - new Date('05/5/1993').getTime())/(new Date('06/28/1993').getTime() - new Date('05/5/1993').getTime())) + 88494;};
	if (new Date('06/28/1993').getTime() <= selectedDate && selectedDate < new Date('09/27/1993').getTime()) {datebasedid = (89140 - 88967)*((selectedDate - new Date('06/28/1993').getTime())/(new Date('09/27/1993').getTime() - new Date('06/28/1993').getTime())) + 88967;};
	if (new Date('09/27/1993').getTime() <= selectedDate && selectedDate < new Date('11/1/1993').getTime()) {datebasedid = (89634 - 89140)*((selectedDate - new Date('09/27/1993').getTime())/(new Date('11/1/1993').getTime() - new Date('09/27/1993').getTime())) + 89140;};
	if (new Date('11/1/1993').getTime() <= selectedDate && selectedDate < new Date('01/10/1994').getTime()) {datebasedid = (90100 - 89634)*((selectedDate - new Date('11/1/1993').getTime())/(new Date('01/10/1994').getTime() - new Date('11/1/1993').getTime())) + 89634;};
	if (new Date('01/10/1994').getTime() <= selectedDate && selectedDate < new Date('04/4/1994').getTime()) {datebasedid = (90880 - 90100)*((selectedDate - new Date('01/10/1994').getTime())/(new Date('04/4/1994').getTime() - new Date('01/10/1994').getTime())) + 90100;};
	if (new Date('04/4/1994').getTime() <= selectedDate && selectedDate < new Date('05/5/1994').getTime()) {datebasedid = (91311 - 90880)*((selectedDate - new Date('04/4/1994').getTime())/(new Date('05/5/1994').getTime() - new Date('04/4/1994').getTime())) + 90880;};
	if (new Date('05/5/1994').getTime() <= selectedDate && selectedDate < new Date('06/27/1994').getTime()) {datebasedid = (91732 - 91311)*((selectedDate - new Date('05/5/1994').getTime())/(new Date('06/27/1994').getTime() - new Date('05/5/1994').getTime())) + 91311;};
	if (new Date('06/27/1994').getTime() <= selectedDate && selectedDate < new Date('09/26/1994').getTime()) {datebasedid = (91909 - 91732)*((selectedDate - new Date('06/27/1994').getTime())/(new Date('09/26/1994').getTime() - new Date('06/27/1994').getTime())) + 91732;};
	if (new Date('09/26/1994').getTime() <= selectedDate && selectedDate < new Date('11/1/1994').getTime()) {datebasedid = (92479 - 91909)*((selectedDate - new Date('09/26/1994').getTime())/(new Date('11/1/1994').getTime() - new Date('09/26/1994').getTime())) + 91909;};
	if (new Date('11/1/1994').getTime() <= selectedDate && selectedDate < new Date('01/9/1995').getTime()) {datebasedid = (92906 - 92479)*((selectedDate - new Date('11/1/1994').getTime())/(new Date('01/9/1995').getTime() - new Date('11/1/1994').getTime())) + 92479;};
	if (new Date('01/9/1995').getTime() <= selectedDate && selectedDate < new Date('02/13/1995').getTime()) {datebasedid = (93345 - 92906)*((selectedDate - new Date('01/9/1995').getTime())/(new Date('02/13/1995').getTime() - new Date('01/9/1995').getTime())) + 92906;};
	if (new Date('02/13/1995').getTime() <= selectedDate && selectedDate < new Date('04/3/1995').getTime()) {datebasedid = (93716 - 93345)*((selectedDate - new Date('02/13/1995').getTime())/(new Date('04/3/1995').getTime() - new Date('02/13/1995').getTime())) + 93345;};
	if (new Date('04/3/1995').getTime() <= selectedDate && selectedDate < new Date('05/22/1995').getTime()) {datebasedid = (94387 - 93716)*((selectedDate - new Date('04/3/1995').getTime())/(new Date('05/22/1995').getTime() - new Date('04/3/1995').getTime())) + 93716;};
	if (new Date('05/22/1995').getTime() <= selectedDate && selectedDate < new Date('06/26/1995').getTime()) {datebasedid = (94630 - 94387)*((selectedDate - new Date('05/22/1995').getTime())/(new Date('06/26/1995').getTime() - new Date('05/22/1995').getTime())) + 94387;};
	if (new Date('06/26/1995').getTime() <= selectedDate && selectedDate < new Date('09/25/1995').getTime()) {datebasedid = (94839 - 94630)*((selectedDate - new Date('06/26/1995').getTime())/(new Date('09/25/1995').getTime() - new Date('06/26/1995').getTime())) + 94630;};
	if (new Date('09/25/1995').getTime() <= selectedDate && selectedDate < new Date('11/10/1995').getTime()) {datebasedid = (95532 - 94839)*((selectedDate - new Date('09/25/1995').getTime())/(new Date('11/10/1995').getTime() - new Date('09/25/1995').getTime())) + 94839;};
	if (new Date('11/10/1995').getTime() <= selectedDate && selectedDate < new Date('01/8/1996').getTime()) {datebasedid = (95834 - 95532)*((selectedDate - new Date('11/10/1995').getTime())/(new Date('01/8/1996').getTime() - new Date('11/10/1995').getTime())) + 95532;};
	if (new Date('01/8/1996').getTime() <= selectedDate && selectedDate < new Date('02/1/1996').getTime()) {datebasedid = (96133 - 95834)*((selectedDate - new Date('01/8/1996').getTime())/(new Date('02/1/1996').getTime() - new Date('01/8/1996').getTime())) + 95834;};
	if (new Date('02/1/1996').getTime() <= selectedDate && selectedDate < new Date('04/1/1996').getTime()) {datebasedid = (96654 - 96133)*((selectedDate - new Date('02/1/1996').getTime())/(new Date('04/1/1996').getTime() - new Date('02/1/1996').getTime())) + 96133;};
	if (new Date('04/1/1996').getTime() <= selectedDate && selectedDate < new Date('06/24/1996').getTime()) {datebasedid = (97579 - 96654)*((selectedDate - new Date('04/1/1996').getTime())/(new Date('06/24/1996').getTime() - new Date('04/1/1996').getTime())) + 96654;};
	if (new Date('06/24/1996').getTime() <= selectedDate && selectedDate < new Date('09/23/1996').getTime()) {datebasedid = (97756 - 97579)*((selectedDate - new Date('06/24/1996').getTime())/(new Date('09/23/1996').getTime() - new Date('06/24/1996').getTime())) + 97579;};
	if (new Date('09/23/1996').getTime() <= selectedDate && selectedDate < new Date('01/6/1997').getTime()) {datebasedid = (98828 - 97756)*((selectedDate - new Date('09/23/1996').getTime())/(new Date('01/6/1997').getTime() - new Date('09/23/1996').getTime())) + 97756;};
	if (new Date('01/6/1997').getTime() <= selectedDate && selectedDate < new Date('03/31/1997').getTime()) {datebasedid = (99649 - 98828)*((selectedDate - new Date('01/6/1997').getTime())/(new Date('03/31/1997').getTime() - new Date('01/6/1997').getTime())) + 98828;};
	if (new Date('03/31/1997').getTime() <= selectedDate && selectedDate < new Date('06/30/1997').getTime()) {datebasedid = (100724 - 99649)*((selectedDate - new Date('03/31/1997').getTime())/(new Date('06/30/1997').getTime() - new Date('03/31/1997').getTime())) + 99649;};
	if (new Date('06/30/1997').getTime() <= selectedDate && selectedDate < new Date('09/22/1997').getTime()) {datebasedid = (100919 - 100724)*((selectedDate - new Date('06/30/1997').getTime())/(new Date('09/22/1997').getTime() - new Date('06/30/1997').getTime())) + 100724;};
	if (new Date('09/22/1997').getTime() <= selectedDate && selectedDate < new Date('10/21/1997').getTime()) {datebasedid = (101500 - 100919)*((selectedDate - new Date('09/22/1997').getTime())/(new Date('10/21/1997').getTime() - new Date('09/22/1997').getTime())) + 100919;};
	if (new Date('10/21/1997').getTime() <= selectedDate && selectedDate < new Date('01/12/1998').getTime()) {datebasedid = (102158 - 101500)*((selectedDate - new Date('10/21/1997').getTime())/(new Date('01/12/1998').getTime() - new Date('10/21/1997').getTime())) + 101500;};
	if (new Date('01/12/1998').getTime() <= selectedDate && selectedDate < new Date('02/18/1998').getTime()) {datebasedid = (102674 - 102158)*((selectedDate - new Date('01/12/1998').getTime())/(new Date('02/18/1998').getTime() - new Date('01/12/1998').getTime())) + 102158;};
	if (new Date('02/18/1998').getTime() <= selectedDate && selectedDate < new Date('04/6/1998').getTime()) {datebasedid = (103106 - 102674)*((selectedDate - new Date('02/18/1998').getTime())/(new Date('04/6/1998').getTime() - new Date('02/18/1998').getTime())) + 102674;};
	if (new Date('04/6/1998').getTime() <= selectedDate && selectedDate < new Date('06/29/1998').getTime()) {datebasedid = (104123 - 103106)*((selectedDate - new Date('04/6/1998').getTime())/(new Date('06/29/1998').getTime() - new Date('04/6/1998').getTime())) + 103106;};
	if (new Date('06/29/1998').getTime() <= selectedDate && selectedDate < new Date('09/28/1998').getTime()) {datebasedid = (104290 - 104123)*((selectedDate - new Date('06/29/1998').getTime())/(new Date('09/28/1998').getTime() - new Date('06/29/1998').getTime())) + 104123;};
	if (new Date('09/28/1998').getTime() <= selectedDate && selectedDate < new Date('01/11/1999').getTime()) {datebasedid = (105344 - 104290)*((selectedDate - new Date('09/28/1998').getTime())/(new Date('01/11/1999').getTime() - new Date('09/28/1998').getTime())) + 104290;};
	if (new Date('01/11/1999').getTime() <= selectedDate && selectedDate < new Date('04/5/1999').getTime()) {datebasedid = (106113 - 105344)*((selectedDate - new Date('01/11/1999').getTime())/(new Date('04/5/1999').getTime() - new Date('01/11/1999').getTime())) + 105344;};
	if (new Date('04/5/1999').getTime() <= selectedDate && selectedDate < new Date('06/28/1999').getTime()) {datebasedid = (107006 - 106113)*((selectedDate - new Date('04/5/1999').getTime())/(new Date('06/28/1999').getTime() - new Date('04/5/1999').getTime())) + 106113;};
	if (new Date('06/28/1999').getTime() <= selectedDate && selectedDate < new Date('09/27/1999').getTime()) {datebasedid = (107167 - 107006)*((selectedDate - new Date('06/28/1999').getTime())/(new Date('09/27/1999').getTime() - new Date('06/28/1999').getTime())) + 107006;};
	if (new Date('09/27/1999').getTime() <= selectedDate && selectedDate < new Date('11/1/1999').getTime()) {datebasedid = (107805 - 107167)*((selectedDate - new Date('09/27/1999').getTime())/(new Date('11/1/1999').getTime() - new Date('09/27/1999').getTime())) + 107167;};
	if (new Date('11/1/1999').getTime() <= selectedDate && selectedDate < new Date('01/10/2000').getTime()) {datebasedid = (108315 - 107805)*((selectedDate - new Date('11/1/1999').getTime())/(new Date('01/10/2000').getTime() - new Date('11/1/1999').getTime())) + 107805;};
	if (new Date('01/10/2000').getTime() <= selectedDate && selectedDate < new Date('04/3/2000').getTime()) {datebasedid = (109183 - 108315)*((selectedDate - new Date('01/10/2000').getTime())/(new Date('04/3/2000').getTime() - new Date('01/10/2000').getTime())) + 108315;};
	if (new Date('04/3/2000').getTime() <= selectedDate && selectedDate < new Date('06/30/2000').getTime()) {datebasedid = (110175 - 109183)*((selectedDate - new Date('04/3/2000').getTime())/(new Date('06/30/2000').getTime() - new Date('04/3/2000').getTime())) + 109183;};
	if (new Date('06/30/2000').getTime() <= selectedDate && selectedDate < new Date('09/25/2000').getTime()) {datebasedid = (110370 - 110175)*((selectedDate - new Date('06/30/2000').getTime())/(new Date('09/25/2000').getTime() - new Date('06/30/2000').getTime())) + 110175;};
	if (new Date('09/25/2000').getTime() <= selectedDate && selectedDate < new Date('01/8/2001').getTime()) {datebasedid = (110891 - 110370)*((selectedDate - new Date('09/25/2000').getTime())/(new Date('01/8/2001').getTime() - new Date('09/25/2000').getTime())) + 110370;};
	if (new Date('01/8/2001').getTime() <= selectedDate && selectedDate < new Date('04/2/2001').getTime()) {datebasedid = (111689 - 110891)*((selectedDate - new Date('01/8/2001').getTime())/(new Date('04/2/2001').getTime() - new Date('01/8/2001').getTime())) + 110891;};
	if (new Date('04/2/2001').getTime() <= selectedDate && selectedDate < new Date('06/25/2001').getTime()) {datebasedid = (112565 - 111689)*((selectedDate - new Date('04/2/2001').getTime())/(new Date('06/25/2001').getTime() - new Date('04/2/2001').getTime())) + 111689;};
	if (new Date('06/25/2001').getTime() <= selectedDate && selectedDate < new Date('09/23/2001').getTime()) {datebasedid = (112748 - 112565)*((selectedDate - new Date('06/25/2001').getTime())/(new Date('09/23/2001').getTime() - new Date('06/25/2001').getTime())) + 112565;};
	if (new Date('09/23/2001').getTime() <= selectedDate && selectedDate < new Date('11/1/2001').getTime()) {datebasedid = (113305 - 112748)*((selectedDate - new Date('09/23/2001').getTime())/(new Date('11/1/2001').getTime() - new Date('09/23/2001').getTime())) + 112748;};
	if (new Date('11/1/2001').getTime() <= selectedDate && selectedDate < new Date('01/7/2002').getTime()) {datebasedid = (113691 - 113305)*((selectedDate - new Date('11/1/2001').getTime())/(new Date('01/7/2002').getTime() - new Date('11/1/2001').getTime())) + 113305;};
	if (new Date('01/7/2002').getTime() <= selectedDate && selectedDate < new Date('04/1/2002').getTime()) {datebasedid = (114431 - 113691)*((selectedDate - new Date('01/7/2002').getTime())/(new Date('04/1/2002').getTime() - new Date('01/7/2002').getTime())) + 113691;};
	if (new Date('04/1/2002').getTime() <= selectedDate && selectedDate < new Date('05/1/2002').getTime()) {datebasedid = (114801 - 114431)*((selectedDate - new Date('04/1/2002').getTime())/(new Date('05/1/2002').getTime() - new Date('04/1/2002').getTime())) + 114431;};
	if (new Date('05/1/2002').getTime() <= selectedDate && selectedDate < new Date('06/11/2002').getTime()) {datebasedid = (115404 - 114801)*((selectedDate - new Date('05/1/2002').getTime())/(new Date('06/11/2002').getTime() - new Date('05/1/2002').getTime())) + 114801;};
	if (new Date('06/11/2002').getTime() <= selectedDate && selectedDate < new Date('09/12/2002').getTime()) {datebasedid = (115611 - 115404)*((selectedDate - new Date('06/11/2002').getTime())/(new Date('09/12/2002').getTime() - new Date('06/11/2002').getTime())) + 115404;};
	if (new Date('09/12/2002').getTime() <= selectedDate && selectedDate < new Date('10/21/2002').getTime()) {datebasedid = (116153 - 115611)*((selectedDate - new Date('09/12/2002').getTime())/(new Date('10/21/2002').getTime() - new Date('09/12/2002').getTime())) + 115611;};
	if (new Date('10/21/2002').getTime() <= selectedDate && selectedDate < new Date('01/1/2003').getTime()) {datebasedid = (116753 - 116153)*((selectedDate - new Date('10/21/2002').getTime())/(new Date('01/1/2003').getTime() - new Date('10/21/2002').getTime())) + 116153;};
	if (new Date('01/1/2003').getTime() <= selectedDate && selectedDate < new Date('01/1/2004').getTime()) {datebasedid = 116753;};
	if (new Date('01/1/2004').getTime() <= selectedDate && selectedDate < new Date('01/1/2005').getTime()) {datebasedid = 116754;};
	if (new Date('01/1/2005').getTime() <= selectedDate && selectedDate < new Date('01/1/2006').getTime()) {datebasedid = 116755;};
	if (new Date('01/1/2006').getTime() <= selectedDate && selectedDate < new Date('01/1/2007').getTime()) {datebasedid = 116756;};
	if (new Date('01/1/2007').getTime() <= selectedDate && selectedDate < new Date('01/1/2008').getTime()) {datebasedid = 116757;};
	if (new Date('01/1/2008').getTime() <= selectedDate && selectedDate < new Date('01/1/2009').getTime()) {datebasedid = 116758;};
	if (new Date('01/1/2009').getTime() <= selectedDate && selectedDate < new Date('01/1/2010').getTime()) {datebasedid = 116759;};
	if (new Date('01/1/2010').getTime() <= selectedDate && selectedDate < new Date('01/1/2011').getTime()) {datebasedid = 116760;};
	if (new Date('01/1/2011').getTime() <= selectedDate && selectedDate < new Date('01/1/2012').getTime()) {datebasedid = 116761;};
	if (new Date('01/1/2012').getTime() <= selectedDate && selectedDate < new Date('01/1/2013').getTime()) {datebasedid = 116762;};
	if (new Date('01/1/2013').getTime() <= selectedDate && selectedDate < new Date('01/1/2014').getTime()) {datebasedid = 116763;};
	if (new Date('01/1/2014').getTime() <= selectedDate && selectedDate < new Date('01/1/2015').getTime()) {datebasedid = 116764;};
	if (new Date('01/1/2015').getTime() <= selectedDate && selectedDate < new Date('01/1/2016').getTime()) {datebasedid = 116765;};
	if (new Date('01/1/2016').getTime() <= selectedDate && selectedDate < new Date('01/1/2017').getTime()) {datebasedid = 116766;};
	if (new Date('01/1/2017').getTime() <= selectedDate && selectedDate < new Date('01/1/2018').getTime()) {datebasedid = 116767;};
	if (new Date('01/1/2018').getTime() <= selectedDate && selectedDate < new Date('01/1/2019').getTime()) {datebasedid = 116768;};
	window.location.replace(String(window.location).split('#')[0] + "#" + Math.round(datebasedid));
	loadnewpage();
}
function about() {
}
