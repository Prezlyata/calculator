const getCalculate = () => {
	let sum = document.getElementById("sum").value;
	let price = document.getElementById("price").value;
	let difference = (sum-price).toFixed(2);
	difference >= 0 ? document.getElementById('result').innerHTML = getDoll(difference) + ' ' + getCent(difference) : alert( "Недостатньо грошей" )
}

const getDoll = (doll) => {
	let countDoll = Math.floor(doll);
	let cases = [2, 0, 1, 1, 1, 2];
	const titles = ['долар', 'долари', 'доларів'];
	return countDoll + ' ' + titles[ (countDoll%100>4 && countDoll%100<20)? 2 : cases[(countDoll%10<5)?countDoll%10:5] ];
}

const getCent = (cent) => {
	let centLen = cent.toString().split('').length
	let countCent = cent.toString().split('').splice(centLen-2).join('')
	let cases = [2, 0, 1, 1, 1, 2];
	const titles = ['цент', 'центи', 'центів'];
	return countCent + ' ' + titles[ (countCent%100>4 && countCent%100<20)? 2 : cases[(countCent%10<5)?countCent%10:5] ];
}
