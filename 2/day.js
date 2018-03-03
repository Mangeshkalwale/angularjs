var GetDay= function fx (month,year) {

	return new Date(2018,month,0).getDate();

	// body...

}



document.getElementById("display").innerHTML=GetDay(2);


//console.log(GetDay(1,2018));
