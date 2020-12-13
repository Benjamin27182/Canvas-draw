var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0
var i, f;
var xd, d;
for(l=0; l < lineas; l++)
{
	i= 10 * l;
	f= 10 * (l + 1);
	xd= 300 - f;
	d= 300 - i
	dibujarLinea("black", 0, i, f, 300);
	dibujarLinea("black", i, 0, 300, f);
	dibujarLinea("black", i, 300, 300, xd);
	dibujarLinea("black", 0, d, f, 0);
}


dibujarLinea("black", 0, 0, 0, 300)
dibujarLinea("black", 0, 300, 300, 300)
dibujarLinea("black", 0, 0, 300, 0)
dibujarLinea("black", 300, 0, 300, 300)

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x_inicial, y_inicial);
	lienzo.lineTo(x_final, y_final);
	lienzo.stroke();
	lienzo.closePath
}
