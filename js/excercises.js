"use strict";
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo
*/
let str = "string";
let nom = "number";
let bool = "boolean";
let obj = "object";
let mustStr = "El tipo de dato debe ser una cadena de texto";
let mustNumber = "El tipo de dato debe ser un número";

function checkTypeData(info, data) {
	try {
		if (!(typeof info === data)) {
			throw new Error(
				`El tipo de dato introducido, no fue el esperado. Inténtelo de nuevo`
			);
		}
	} catch (e) {
		return e;
	}
}

// asserts for unit testing
let condTest = [];
let conditionsObject = {};
let i = 0;

function unitTesting(test, condition, ...conditions) {
	conditions.forEach((cond) => {
		condTest[i] = "cond" + i;
		i++;
	});

	conditions.forEach((cond) => {
		console.assert(condition, {test, ...cond});
	});
}

// 1
console.log("1 | Inicio");
const countChars = (text) => {
	let textLen = text.length;
	if (!checkTypeData(text, str)) {
		console.log(textLen);
	} else {
		console.log(checkTypeData(text, str));
	}
	return unitTesting("Hola mundo tiene 10 carácteres", textLen === 10, textLen);
};
countChars("Hola Mundo");

// 2
console.log("2");
// use slice() method to extract indicated chars on function
const sliceText = (text, startPos, endPos) => {
	if (!checkTypeData(text, str)) {
		var slicedText = text.slice(startPos, endPos);
		console.log(slicedText);
	} else {
		console.log(checkTypeData(text, str));
	}
	return unitTesting(
		"Partir Hola mundo a 4 chars y que quede Hola",
		slicedText.length === 4,
		slicedText
	);
};
sliceText("Hola Mundo", 0, 4);

// 3
console.log("3");
// use split() method to separate an object by a pattern
const splitText = (text, sep) => {
	if (!checkTypeData(text, str)) {
		var splitedText = text.split(sep);
		console.log(splitedText);
	} else {
		console.log(checkTypeData(text, str));
	}
	return unitTesting(
		'Separar un string en un array dependiendo del sep indicado, hola que tal -> ["hola", "que", "tal]',
		splitedText.length === 3,
		splitedText
	);
};

splitText("hola que tal", " ");

// 4
console.log("4");
const repeatText = (text, times) => {
	// si tiene solo una línea no se ponen llaves
	if (!checkTypeData(text, str)) {
		text += " ";
		return text.repeat(times);
	}
	console.log(checkTypeData(text, str));
};

console.log(repeatText("Hola Mundo", 3));
console.log(
	"////////////////////Esto no va a tener UT//////////////////////////"
);

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

// 5
console.log("5");
const revertString = (text) => {
	if (!checkTypeData(text, str) && text !== "") {
		let strToArray = Array.from(text);
		strToArray.reverse();
		let newString = strToArray.join("");
		return console.log(newString.replaceAll(",", ""));
	}

	return console.error(mustStr);
};

revertString("hola mundo");

// 6
console.log("6");

const repeatedWord = (text, word) => {
	if (
		!checkTypeData(text, str) &&
		!checkTypeData(word, str) &&
		text !== "" &&
		word !== ""
	) {
		let regex = new RegExp(word, "ig");
		let foundedText = text.match(regex);
		return console.log(foundedText.length);
	}

	return console.error(mustStr);

	// also can be solved with indexOf() method, with searchElement and indexFrom pars
};

repeatedWord("Hola Mundo que pedo mundo", "mundo");

// 7
console.log("7");

const checkPalindrome = (word) => {
	// use a regex to reverse the str & lowerCase it
	// using /[\W_]/g to replace /[^A-Za-z0-9]/g
	if (!checkTypeData(word, str)) {
		let regex = /[\W_]/g;
		// find RegExp and lower case the chars
		let lowerStr = word.replace(regex, "").toLowerCase();
		// first split every char in a ele of arr, reverse the elements and join all into a new string
		let reversedStr = lowerStr.split("").reverse().join("");

		if (lowerStr === reversedStr) return console.log("true");
		return console.log("false");
	}

	return mustStr;
};

// Other palindrome form 7.1
console.log("7.1");
const checkPalindrome2 = (word) => {
	let regex = /\[W_]/g;
	word = word.toLowerCase().replace(regex, "");
	let lenWord = word.length;

	for (let i = 0; i < lenWord / 2; i++) {
		if (word[i] !== word[lenWord - 1 - i]) {
			return false;
		}

		return true;
	}
};

console.log("0.1");
const factorializeNumber = (number) => {
	number === 0 || number === 1 ? 1 : true;

	for (let i = number - 1; i >= 1; i--) {
		number *= i;
	}

	return number;
};

console.log(factorializeNumber(0));

checkPalindrome("Salas");
console.log(checkPalindrome2("A man, a plan, a canal. Panama"));

// 8
console.log("8");

const delRegex = (text, pattern) => {
	let regex = new RegExp(pattern, "gis");
	return text.replace(regex, "");
};

console.log(delRegex("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

// 9
console.log("9");

const randomNumber = (min, max) => {
	if (!checkTypeData(min, nom)) {
		let minVal = min;
		let maxVal = max;
		for (let i = minVal; i <= maxVal; i++) {
			if (i !== maxVal) {
				return Math.round(Math.random() * (max - min) + min);
			}

			break;
		}
	}

	return mustNumber;
};

console.log("El número aleatorio es: " + randomNumber(501, 600));

// 10
console.log("10");

const capicuaNu = (number) => {
	let reversedNumber = [];

	for (let dig of number) {
		number.toString();
		reversedNumber += dig;

		if (reversedNumber.length === number.length) {
			let revers = reversedNumber.split("").reverse().join("");
			return revers === number ? "número capicúa" : "no es un número capicúa";
		}
	}
};

console.log(capicuaNu("1002"));

// 11
console.log("11");

const factorialNumber = (number) => {
	let numberLen = number - 1;
	let result = 0;
	for (let i = numberLen; i >= 1; i--) {
		result = number *= i;
	}

	return result;
};

console.log(factorialNumber(5));

/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
sólo si se divide entre el mismo y el 1, da como resultado un 1

14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const primeOrNotNumber = (number) => {
	if (!checkTypeData(number, nom)) {
		let indicator = true;

		number = parseInt(number);

		for (let i = 2; i <= number - 1; i++) {
			if (number % i === 0) {
				indicator = false;
				break;
			}
		}

		indicator
			? console.log(number + " es un número primo")
			: console.log(number + " no es un número primo");
	}
	return mustNumber;
};

primeOrNotNumber(7);

// 13
console.log("13");
const evenOrOdd = (number) => {
	if (number % 2 === 0) return `${number} es un número par`;

	return `${number} es impar`;
};

console.log(evenOrOdd(14));

// 14
console.log("14");

const celsiusToFarenheit = (degrees, celsFar) => {
	if (celsFar === "C") {
		//  Formule T(°C) × 9/5 + 32
		let convertion = degrees * 1.8 + 32;
		return `${degrees}° Celsius is ${convertion}° Farenheit`;
	} else if (celsFar === "F") {
		// Formule (T(°F) - 32) / 1.8
		let convertion = (degrees - 32) / 1.8;
		return `${degrees}° Farenheit is ${convertion}° Celsius`;
	}

	return mustStr;
};

console.log(celsiusToFarenheit(32, "F"));

/*

15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

// 15
console.log("15");
const binaryToDecimalViceversa = (stro, base) => {
	if (!checkTypeData(stro, nom)) {
		// código de mircha
		if (base === 2) {
			return `${stro} base 2: ${parseInt(stro, 10)} base 10`;
		} else if (base === 10) {
			return `${stro} base 10: ${stro.toString(2)} base 2`;
		}
	}

	return mustStr;
};

console.log(binaryToDecimalViceversa(4, 10));

// 16
console.log("16");

const discounts = (basePrice, diss) => {
	if (!checkTypeData(basePrice, nom)) {
		let disscount = (basePrice * diss) / 100;
		let finalPrice = basePrice - disscount;
		finalPrice.toFixed(2);
		return finalPrice;
	}

	return mustNumber;
};

console.log(discounts(1000, 30));

// 17
console.log("///////////17////////////");

const daysUntilNow = (date) => {
	if (!date instanceof Date)
		return console.error("no es una instancia de Date");

	let hoymenosFecha = new Date().getTime() - date.getTime();
	let yearsMs = 1000 * 60 * 60 * 24 * 365; // 1 año en milisegundos
	let humanYears = Math.floor(hoymenosFecha / yearsMs);
	console.log(humanYears);

	let DATE = new Date();
	let actualDay = DATE.getDate();
	let actualMonth = DATE.getMonth();
	let actualYear = DATE.getFullYear();

	let dateDay = date.getDate();
	let dateMonth = date.getMonth();
	let dateYear = date.getFullYear();

	let resultDay = actualDay - dateDay;
	let resultMonth = actualMonth - dateMonth;
	let resultYear = actualYear - dateYear;

	console.log(resultYear);
	return `Han pasado ${resultDay} días y ${Math.abs(
		resultMonth
	)} meses desde ${date.toLocaleDateString()}`;
};

daysUntilNow(new Date(2007, 10, 6));
console.log(daysUntilNow(new Date(2007, 10, 6)));

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

// 18
console.log("18");

const vocalsAndConsonants = (text = "") => {
	const vowels = ["A", "E", "I", "O", "U"];
	const consonants = [
		"B",
		"C",
		"D",
		"F",
		"G",
		"H",
		"J",
		"K",
		"L",
		"M",
		"N",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"V",
		"W",
		"X",
		"Y",
		"Z",
		"Ñ",
		"Á",
		"É",
		"Ó",
		"Ú",
		"ü",
		"Ö",
	];

	let vowelsLen = "";
	let consonantsLen = "";
	const alpabhet = vowels + consonants;
	const upperText = text.toUpperCase();

	for (let i = 0; i < alpabhet.length; i++) {
		// includes() is an array method that returns boolean for the value
		for (const chars of upperText) {
			if (vowels[i] === chars) {
				vowelsLen += chars;
			} else if (consonants[i] === chars) {
				consonantsLen += chars;
			}
		}
	}

	console.log(
		`El texto "${text}" tiene: ${vowelsLen.length} vocales, ${consonantsLen.length} consonantes`
	);
};

vocalsAndConsonants("Hola Mundo");

// 19
console.log("19");
const validName = (name = "") => {
	const regex = /[^0-9._%+-]\b[A-Za-z\\s]$/gis;
	// s -> 'single-line-mode'
	// the $ indicates there's nothing after that

	if (regex.test(name)) {
		return "Verdadero";
	} else {
		return "Falso";
	}
};

console.log(validName("Jonathan MirCha"));

// 20
console.log("20");

const validEmail = (email = "") => {
	// expresión regular del maistro /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
	const regex = /\b^[A-Za-z0-9_,-.]+@[A-Za-z,-]{3,}\.+[A-Za-z]{2,}\b/gis;
	return regex.test(email);
};

console.log(validEmail("jonmircha@gmail.com"));

/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

// 21
console.log("21");

const expNumbers = (arr) => {
	if (!arr instanceof Array) return console.error("No es una array");

	if (arr.length == 0) return console.error("El arreglo no puede estar vacío");

	return arr.map((n) => n * n); // Muta el arreglo original [arr];
};

console.log(expNumbers([1, 4, 5]));

// 22
console.log("22");

const higherAndLower = (arr) => {
	if (!arr instanceof Array) return console.error("Must array");

	if (arr.length == 0) return console.error("Must elements on the array");

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) console.info(arr[i]);
		//sep
		else if (arr[i] < arr[i - 1]) console.info(arr[i]);
	}

	/* Métodos matemáticos max() y min()
		 valor mayor: ${Math.max(...arr)}\nValor menor: ${Math.min(...arr)}
		 es necesario pasar el spread operator, para crear una copia y mutar esta en vez del arreglo original
	 */

	return arr;
};

console.log(higherAndLower([1, 4, 5, 99, -60]));

// 23
console.log("23");

const evenAndOdd = (arr) => {
	if (!arr instanceof Array) return console.error("Must array");

	if (arr.length == 0) return console.error("Must elements on the array");

	let evenNumbers = [];
	let oddNumbers = [];

	arr.forEach((n) => {
		if (n % 2 === 0) evenNumbers += n;
		else if (n % 2 !== 0) oddNumbers += n;
	});

	arr.filter((n) => n % 2 === 0);

	const resultArr = {
		evens: evenNumbers,
		odds: oddNumbers,
	};

	/*
		map(), filter() y reduce();
		usa filter();
				return console.info({
					even: arr.filter(n => n % 2 === 0),
					odd: arr.filter(n => n % 2 === 1)
				})
	*/

	return resultArr;
};

console.info(evenAndOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

// 24
console.log("24");

const descAndAsc = (arr) => {
	let descendant = [];
	let ascendant = [];

	descendant += arr.sort((a, b) => b - a);
	ascendant += arr.sort((a, b) => a - b);

	const desAsc = {
		asc: ascendant,
		desc: descendant,
	};

	return console.info(desAsc);
};

descAndAsc([7, 5, 7, 8, 6]);

// 25
console.log("25");

const removeDuplicated = (arr = []) => {
	let newArr = []

	for (let ele of arr) {
		if (Math.sign(newArr.indexOf(ele)) === -1) {
			newArr.push(ele);
		}
	}

	return console.log(newArr);


	/*
		let arry = {
			ori: arr,
			rmDup: arr.filter((val, index, self) => self.indexOf(val) === index)
		}

		Set() en su naturaleza es no repetir los elementos de un objeto iterable
	*/
};

removeDuplicated(["x", 10, "x", 2, "10", "24234", 10, true, true, true, "24234", true, true, true, true]);

// 26
console.log("/////////////////26");
const average = (arr = []) => {
	let reducedArr = arr.reduce((prev, act) => prev + act);
	return console.info(reducedArr / arr.length);
	/* set nuevo tipo de dato en js */
};

average([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
	- Todos los datos del objeto son obligatorios.
	- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
		 7 restantes números.
	- Valida que el título no rebase los 100 caracteres.
	- Valida que el director no rebase los 50 caracteres.
	- Valida que el año de estreno sea un número entero de 4 dígitos.
	- Valida que el país o paises sea introducidos en forma de arreglo.
	- Valida que los géneros sean introducidos en forma de arreglo.
	- Valida que los géneros introducidos esten dentro de los géneros 
		 aceptados*.
	- Crea un método estático que devuelva los géneros aceptados*.
	- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
		decimal de una posición.
	- Crea un método que devuelva toda la ficha técnica de la película.
	- Apartir de un arreglo con la información de 3 películas genera 3 
		instancias de la clase de forma automatizada e imprime la ficha técnica 
		de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

// 27
console.log("///////////////////////////27////////////////////////////////////");


class Movie {
	regexId = /^\b[a-z]{2}[0-9]{7}\b$/g;
	regexRelease = /\b[0-9]{4}\b/g;
	regexRate = /^[1-9]\d*(\.\d)?$/g
	static validGenders = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game - Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality - TV", "Romance", "Sci - Fi", "Short", "Sport", "Talk - Show", "Thriller", "War", "Western"];

	constructor({id, title, director, release, country, genders, rate}) {
		if (id == undefined || title == undefined || director == undefined || release == undefined || country == undefined || country.length == 0 || genders == undefined || genders.length == 0 || rate == undefined || rate < 1) throw 'All propierties must be defined';

		this.validGenders = ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];


		if (!this.regexId.test(id)) throw 'The ID must be valid'
		if (title.length > 100) throw 'The title must be lower than 100 characters';
		if (director.length > 100) throw 'The director name must be lower than 100 characters';
		if (!this.regexRelease.test(release)) throw 'The year release must be 4-digits number';

		if (!(country instanceof Array)) throw 'Enter a valid array';
		if (country.some(n => n === "")) throw 'The country/countries must have characters, not a 0 of them kiddo'

		// Validations for genders[]
		if (!(genders instanceof Array)) throw 'Enter a valid array with genders';
		if (genders.length < 1) throw 'Enter more than 1 gender of the movie';

		for (let i = 0; i < genders.length; i++) {
			if (this.validGenders.indexOf(genders[i]) == -1) {
				throw 'Introduce a valid gender, please...'
			}
		}

		if (!this.regexRate.test(rate)) throw 'Enter a valid ID from IDMb';

		this.propierties = {
			// compited propierties completed propierties
			id,
			title,
			director,
			release,
			country,
			genders,
			rate
		}
	}

	static returnGenders() {
		return this.validGenders;
	}

	tecnicFile() {
		console.log(`Id: ${this.propierties.id}\nTitle: ${this.propierties.title}\nDirector: ${this.propierties.director}\nYear Release: ${this.propierties.release}\nCountry/Countries: ${this.propierties.country.join(', ')}\nGenders: ${this.propierties.genders.join(', ')}\nRate: ${this.propierties.rate}`)
	}
}

// TODO
// Do the TODO jeje

// Shawshank Redemption -> cadena perpetua
const movies = [
	{id: "tt0068646", title: "The Godfather", director: "Francis Font Coppola", release: 1972, country: ["United States"], genders: ["Crime", "Drama"], rate: 9.2},
	{id: "tt0068646", title: "The Shawshank Redemption", director: "Frank Darabont", release: 1994, country: ["United States"], genders: ["Drama"], rate: 9.3},
	{id: "tt0468569", title: "The Dark Knight", director: "Christopher Nolan", release: 2008, country: ["United States"], genders: ["Action", "Crime", "Drama"], rate: 9.2}
]

console.log(Movie.returnGenders());

movies.forEach(movie => {
	var instancedMovies = new Movie(movie);
	let div = document.createElement('div');
	div.innerHTML = instancedMovies.tecnicFile();
	let html = document.getElementById('html');

	html.appendChild(div)
})

// internet multidata base

