'use strict';

var body = document.body;
var maxWidth = body.offsetWidth;
var maxHeight = body.offsetHeight;

var benchMax = location.hash.substr(1);
if (benchMax) {
	benchMax = Number(benchMax);
} else {
	benchMax = 200; // Graphics team recommendation is 60
}

/**
 * Create surfaces
 */
var surfaces = [];
for (var i = 0; i < benchMax; i++) {
	var matrix = mat4.create();
	mat4.translate(matrix, matrix, [
		Math.random() * maxWidth,
		Math.random() * maxHeight,
		0
	]);
	mat4.rotateX(matrix, matrix, Math.random() * Math.PI / 2);
	mat4.rotateY(matrix, matrix, Math.random() * Math.PI / 2);

	var element = document.createElement('div');
	element.classList.add('surface');
	updateTransform(element, stringify3DMatrix(matrix));
	body.appendChild(element);

	surfaces.push({
		matrix: matrix,
		element: element
	});
}

/**
 * Animate surfaces
 */
function tick(now) {
	var dt = (now - past) / 1000;
	past = now;
	for (var i = 0, l = surfaces.length; i < l; i++) {
		var matrix = surfaces[i].matrix;
		var element = surfaces[i].element;
		update3DMatrix(matrix, dt);
		updateTransform(element, stringify3DMatrix(matrix));
	}

	requestAnimationFrame(tick);
}

var speed = Math.PI / 4;

function update3DMatrix(matrix, dt) {
	mat4.rotateZ(matrix, matrix, speed * dt);
}

function updateTransform(element, str) {
	element.style.transform = str;
}

/*
function apply3DMatrix(element, m) {
	element.style.transform = 'matrix3d(' +
		m[0] + ', ' +
		m[1] + ', ' +
		m[2] + ', ' +
		m[3] + ', ' +
		m[4] + ', ' +
		m[5] + ', ' +
		m[6] + ', ' +
		m[7] + ', ' +
		m[8] + ', ' +
		m[9] + ', ' +
		m[10] + ', ' +
		m[11] + ', ' +
		m[12] + ', ' +
		m[13] + ', ' +
		m[14] + ', ' +
		m[15] + ')';
}
*/

var past = performance.now();
requestAnimationFrame(tick);