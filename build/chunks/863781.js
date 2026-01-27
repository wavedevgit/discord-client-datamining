/** Chunk was on web.js **/
/** chunk id: 863781, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(446474),
    i = n(339626),
    a = n(598349),
    o = TypeError;
e.exports = function(e, t) {
    var n, s;
    if ("string" === t && i(n = e.toString) && !a(s = r(n, e)) || i(n = e.valueOf) && !a(s = r(n, e)) || "string" !== t && i(n = e.toString) && !a(s = r(n, e))) return s;
    throw new o("Can't convert object to primitive value")
}