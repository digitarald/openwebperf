# OpenWeb*Perf*

**Pushing Open Web performance** by documenting platform performance bottlenecks.

## Purpose

Document known performance bottlenecks with the lower levels of the Open Web platform layout (like JIT, layout engine, CSS parsing, etc). Examples should raise the issues to the platform team and allow developers learn the *do's and dont's*.

## Test Cases

### 3D Matrix Transforms

Rotate 200 surfaces using CSS3 transforms with a 3d-matrix, using [gl-matrix](http://glmatrix.net/) and typed arrays.

Related bugs:

* [998995: Consider using an auto array in CSSParserImpl::ParseFunction](https://bugzilla.mozilla.org/show_bug.cgi?id=998995)

#### [3d-matrix-transform/direct.html](Direct string concatenation)

Profiles

* [Firefox Nightly, 34.0a1 (2014-08-19)](http://people.mozilla.org/~bgirard/cleopatra/#report=234f70ef898c6bb7e98e3fd7f6dd52a0a5dbb0af)

Remarks:

* Layout team offered to look into jitting the `element.style.transform = '3dmatrix(…` assignment and comparing to adding a new API (like `element.mozSetTransform(Float32Array)`

#### [3d-matrix-transform/for-loop.html](For loop concatenation)

##### Profiles

* [Firefox Nightly, 34.0a1 (2014-08-19)](http://people.mozilla.org/~bgirard/cleopatra/#report=01dba3a825799208c394a949cf82c3c13d62a682)

##### Remarks

* The layout team remarked that the loop will not be jitted as the length is too short
* The values are normalized to optimize for 0, which the CSS parser already does internally