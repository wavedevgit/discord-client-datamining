/** Chunk was on web.js **/
/** chunk id: 567242, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(439619),
    i = n(906046),
    a = n(741623),
    o = n(32561),
    s = r("%Reflect.apply%", !0) || i("Function.prototype.apply");
e.exports = function(e, t) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!o(n)) throw new a("Assertion failed: optional `argumentsList`, if provided, must be a List");
    return s(e, t, n)
}