/** Chunk was on web.js **/
/** chunk id: 42756, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(210140),
    i = n(339626),
    a = n(250594),
    o = n(583178),
    s = n(77958),
    l = o("IE_PROTO"),
    c = Object,
    u = c.prototype;
e.exports = s ? c.getPrototypeOf : function(e) {
    var t = a(e);
    if (r(t, l)) return t[l];
    var n = t.constructor;
    return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
}