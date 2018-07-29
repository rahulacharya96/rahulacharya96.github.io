setInterval(function date(){
		var d=String(new Date()).split(" ");
		var hrs=Number(d[4][0].concat(d[4][1]));

		if(hrs>12){hrs=hrs-12;}
		if(hrs<10){hrs= "0"+String(hrs);}
		$("#timedisp").html("<h1>Hour:Min:Sec =<em> "+d[4]+"(24hrs format) / "+hrs+d[4].substr(2)+"(12hrs format)</em></h1>");
		$("#caldisp").html("<h1>Date =<em> "+d[2]+"/"+d[1]+"/"+d[3]+"</em></h1>");
		$("#daydisp").html("<h1>Day =<em> "+d[0]+"</em></h1>");
		$("#gmtdisp").html("<h1>GMT time difference = <em>"+d[5][4]+d[5][5]+":"+d[5][6]+d[5][7]+"</em> Hours</h1>");
		$("#stdisp").html("<h1>Country Time = <em>"+d[6]+" "+d[7]+" "+d[8]+"</em></h1>");		
	}, 1000.01);