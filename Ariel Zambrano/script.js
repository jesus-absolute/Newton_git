const valorx = document.querySelector('.valor-x');
//e^x − 2 + x^2

var e = 2.7182818285;
function result() {
    let numRep = 200;
    let valueX = Number(valorx.value)
    let fx;
    let fdx;
	for (let i = 1; i < numRep; i++) {
		fx= e ** (valueX) -2 + valueX**2
        fdx = e**valueX +2* valueX
		valueX = valueX-(fx/fdx)
        // console.log(valueX);
	}
    console.log(valueX);
}
