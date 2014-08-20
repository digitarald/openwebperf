# OpenWebPerf

**Pushing Open Web performance** by documenting platform performance bottlenecks.

## Goals

* Document performance bottlenecks within the lower platform levels (like JIT, layout engine, CSS parsing, etc)
* Raise the issues to the platform team and track progress
* Build a reference of *do's and dont's*

## Test Cases

### 3D Matrix Transforms

Rotate 200 surfaces using CSS3 transforms with a 3d-matrix, using [gl-matrix](http://glmatrix.net/) and typed arrays.

Related bugs:

* [998995: Consider using an auto array in CSSParserImpl::ParseFunction](https://bugzilla.mozilla.org/show_bug.cgi?id=998995)

#### [Direct String Concatenation](http://digitarald.github.io/openwebperf/3d-matrix-transform/direct.html)

Profiles:

* [Firefox Nightly, 34.0a1 (2014-08-19)](http://people.mozilla.org/~bgirard/cleopatra/#report=234f70ef898c6bb7e98e3fd7f6dd52a0a5dbb0af)

Remarks:

* Layout team offered to look into jitting the `element.style.transform = '3dmatrix(…` assignment and comparing to adding a new API (like `element.mozSetTransform(Float32Array)`

#### [For-Loop Concatenation](http://digitarald.github.io/openwebperf/3d-matrix-transform/3d-matrix-transform/for-loop.html)

Profiles:

* [Firefox Nightly, 34.0a1 (2014-08-19)](http://people.mozilla.org/~bgirard/cleopatra/#report=01dba3a825799208c394a949cf82c3c13d62a682)

Remarks

* The layout team remarked that the loop will not be jitted as the length is too short
* The values are normalized to optimize for 0, which the CSS parser already does internally