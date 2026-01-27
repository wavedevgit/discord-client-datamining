/** Chunk was on web.js **/
/** chunk id: 521351, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(503628),
    i = n(339626),
    a = /#|\.prototype\./,
    o = function(e, t) {
        var n = l[s(e)];
        return n === u || n !== c && (i(t) ? r(t) : !!t)
    },
    s = o.normalize = function(e) {
        return String(e).replace(a, ".").toLowerCase()
    },
    l = o.data = {},
    c = o.NATIVE = "N",
    u = o.POLYFILL = "P";
e.exports = o