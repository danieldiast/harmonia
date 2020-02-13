
var tonalidades = {
	"modelo": {
		1:{"rom":"I", "tri":"" ,"tetra":"7M"},
		2:{"rom":"II", "tri":"m","tetra":"m7"},
		3:{"rom":"III", "tri":"m","tetra":"m7"},
		4:{"rom":"IV", "tri":"","tetra":"7M"},
		5:{"rom":"V", "tri":"","tetra":"7"},
		6:{"rom":"VI", "tri":"m","tetra":"m7"},
		7:{"rom":"VII", "tri":"m5b","tetra":"m5b/7"},
		},
	"C**": {
		1:{"nat":'C', "tetra":"C7M"},
		2:{"nat":'D', "tetra":"Dm7"},
		3:{"nat":'E', "tetra":"Em7"},
		4:{"nat":'F', "tetra":"F7M"},
		5:{"nat":'G', "tetra":"G7"},
		6:{"nat":'A', "tetra":"Am7"},
		7:{"nat":'B', "tetra":"Bm5b/7"},
		},
	"C": {
		1:{"nat":'C'},
		2:{"nat":'D'},
		3:{"nat":'E'},
		4:{"nat":'F'},
		5:{"nat":'G'},
		6:{"nat":'A'},
		7:{"nat":'B'},
		},
	"C#": {
		1:{"nat":'C#'},
		2:{"nat":'D#'},
		3:{"nat":'E#', alt:'F'},
		4:{"nat":'F#'},
		5:{"nat":'G#'},
		6:{"nat":'A#'},
		7:{"nat":'B#', alt:'C'},
		},
	"D": {
		1:{"nat":'D'},
		2:{"nat":'E'},
		3:{"nat":'F#'},
		4:{"nat":'G'},
		5:{"nat":'A'},
		6:{"nat":'B'},
		7:{"nat":'C#'},
		},
	"D#": {
		1:{"nat":'D#'},
		2:{"nat":'E#', alt:'F'},
		3:{"nat":'F##', alt:'G'},
		4:{"nat":'G#'},
		5:{"nat":'A#'},
		6:{"nat":'B#', alt:'C'},
		7:{"nat":'C##', alt:'D'},
		},
	"E": {
		1:{"nat":'E'},
		2:{"nat":'F#'},
		3:{"nat":'G#'},
		4:{"nat":'A'},
		5:{"nat":'B'},
		6:{"nat":'C#'},
		7:{"nat":'D#'},
		},
	"F": {
		1:{"nat":'F'},
		2:{"nat":'G'},
		3:{"nat":'A'},
		4:{"nat":'Bb'},
		5:{"nat":'C'},
		6:{"nat":'D'},
		7:{"nat":'E'},
		},
	"F#": {
		1:{"nat":'F#'},
		2:{"nat":'G#'},
		3:{"nat":'A#'},
		4:{"nat":'B'},
		5:{"nat":'C#'},
		6:{"nat":'D#'},
		7:{"nat":'E#', alt:'F'},
		},

}



var strMusica = "";
function escreveMusica(musica, tom){
	strMusica = "";
	campo = tonalidades[tom];
	musica.forEach(forEachNota);


	return strMusica;
}

function forEachNota(nota, index, arr) {
	notaNoTom = campo[nota]
	strMusica += notaNoTom["nat"];
	if(index < arr.length-1){
		strMusica += " - ";
	}
}


