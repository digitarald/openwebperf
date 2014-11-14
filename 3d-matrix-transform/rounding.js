'use strict';

var CSS_PRECISION = Math.pow(10, 3);

function roundCSS(value) {
	return Math.round(value * CSS_PRECISION) / CSS_PRECISION;
};

function apply3DMatrix(element, m) {
	element.style.transform = 'matrix3d(' +
		roundCSS(m[0]) + ', ' +
		roundCSS(m[1]) + ', ' +
		roundCSS(m[2]) + ', ' +
		roundCSS(m[3]) + ', ' +
		roundCSS(m[4]) + ', ' +
		roundCSS(m[5]) + ', ' +
		roundCSS(m[6]) + ', ' +
		roundCSS(m[7]) + ', ' +
		roundCSS(m[8]) + ', ' +
		roundCSS(m[9]) + ', ' +
		roundCSS(m[10]) + ', ' +
		roundCSS(m[11]) + ', ' +
		roundCSS(m[12]) + ', ' +
		roundCSS(m[13]) + ', ' +
		roundCSS(m[14]) + ', ' +
		roundCSS(m[15]) + ')';

}