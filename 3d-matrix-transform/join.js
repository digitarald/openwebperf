'use strict';

var out = [
	'matrix3d(',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ', ',
		0.0, ')'
];

function closeToZero(value) {
	return (value < 0.000001 && value > -0.000001) ? 0.0 : value;
}

function stringify3DMatrix(m) {
	out[1] = closeToZero(m[0]);
	out[3] = closeToZero(m[1]);
	out[5] = closeToZero(m[2]);
	out[7] = closeToZero(m[3]);
	out[9] = closeToZero(m[4]);
	out[11] = closeToZero(m[5]);
	out[13] = closeToZero(m[6]);
	out[15] = closeToZero(m[7]);
	out[17] = closeToZero(m[8]);
	out[19] = closeToZero(m[9]);
	out[21] = closeToZero(m[10]);
	out[23] = closeToZero(m[11]);
	out[25] = closeToZero(m[12]);
	out[27] = closeToZero(m[13]);
	out[29] = m[14];
	out[31] = m[15];
	return out.join('');
}