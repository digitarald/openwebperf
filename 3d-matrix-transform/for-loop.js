'use strict';

function apply3DMatrix(element, matrix) {
	element.style.transform = stringify3DMatrix(matrix);
}

function stringify3DMatrix(m) {
	var result = 'matrix3d(';
	for (var i = 0; i < 15; i++) {
		result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	}
	result += m[15] + ')';
	return result;
}