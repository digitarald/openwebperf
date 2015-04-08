'use strict';

function closeToZero(value) {
	return (value < 0.000001 && value > -0.000001) ? 0.0 : value;
}

function stringify3DMatrix(m) {
	return 'matrix3d(' +
		closeToZero(m[0]) + ', ' +
		closeToZero(m[1]) + ', ' +
		closeToZero(m[2]) + ', ' +
		closeToZero(m[3]) + ', ' +
		closeToZero(m[4]) + ', ' +
		closeToZero(m[5]) + ', ' +
		closeToZero(m[6]) + ', ' +
		closeToZero(m[7]) + ', ' +
		closeToZero(m[8]) + ', ' +
		closeToZero(m[9]) + ', ' +
		closeToZero(m[10]) + ', ' +
		closeToZero(m[11]) + ', ' +
		closeToZero(m[12]) + ', ' +
		closeToZero(m[13]) + ', ' +
		closeToZero(m[14]) + ', ' +
		m[15] + ')';
}