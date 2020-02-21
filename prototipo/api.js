
function separarAcordes(strAcordes){
	strAcordes = strAcordes.trim().replace(/\s+/g,' ');
	var termos = strAcordes.split(" ");
	alert(termos[0]);
	alert(defineFormato(termos));

}	

function defineFormato(termos){
	primeiroTermo = termos[0];
	if("/^[ABCDEFGabcdef]".test(primeiroTermo)){
	//if(primeiroTermo.startsWith('ABCDEFGabcdef')){
		return "acordes";
	}
	if("/^[IVX]".test(primeiroTermo)){
		return "romanos";
	}
	
	return "N/A";

}


separarAcordes(" Am Cm  Df   1 34 4  ");
		