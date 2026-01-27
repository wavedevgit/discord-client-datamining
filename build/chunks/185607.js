/** Chunk was on 38939 **/
/** chunk id: 185607, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(1140),
    i = r(116740).OrderedSet,
    o = n.substr,
    a = i();
t.exports = function(t, e) {
    var r = Array(t.length).fill(a);
    return e && e.forEach(function(e) {
        for (var n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length; n < i;) r[n] = r[n].add(e.style), n++
    }), r
}