function ipchk() {
var ip = document.getElementById("iptext").value;
if (document.getElementById("iptext").value!="") {
var getJSON = function(url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'json';
		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				resolve(xhr.response);
			} else {
				reject(status);
			}
		};
		xhr.send();
	});
};
getJSON('http://ip-api.com/json/' + ip).then(function(data) {
    document.getElementById("ipwrite").innerHTML = "The IP currently checked is " + ip + "." + "<br> <br>";
	document.getElementById("country").innerHTML = "The country is " + data.country + ".";
    document.getElementById("countryCode").innerHTML = "The country code is " + data.countryCode + ".";
    document.getElementById("city").innerHTML = "The city is " + data.city + ".";
    document.getElementById("isp").innerHTML = "The ISP is " + data.isp + ".";
    document.getElementById("timezone").innerHTML = "The timezone is " + data.timezone + ".";
}, );
}
else {
    document.getElementById("country").innerHTML = "";
    document.getElementById("countryCode").innerHTML = "";
    document.getElementById("city").innerHTML = "";
    document.getElementById("isp").innerHTML = "";
    document.getElementById("timezone").innerHTML = "";
    document.getElementById("ipwrite").innerHTML = "Please input a valid IP address before searching.";
}}