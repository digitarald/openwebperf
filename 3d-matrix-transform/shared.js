'use strict';

var body = document.body;
var maxWidth = body.offsetWidth;
var maxHeight = body.offsetHeight;

var benchMax = location.hash.substr(1);
if (benchMax) {
	benchMax = Number(benchMax);
} else {
	benchMax = 200;
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
	apply3DMatrix(element, matrix);
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
		apply3DMatrix(element, matrix);
	}

	requestAnimationFrame(tick);
}

var speed = Math.PI / 4;

function update3DMatrix(matrix, dt) {
	mat4.rotateZ(matrix, matrix, speed * dt);
}

var past = performance.now();
requestAnimationFrame(tick);