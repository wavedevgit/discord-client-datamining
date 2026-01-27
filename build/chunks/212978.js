/** Chunk was on web.js **/
/** chunk id: 212978, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(557939),
    i = n(517737),
    a = n(503628),
    o = n(607167),
    s = n(101968),
    l = n(273761),
    c = n(370001),
    u = o.ArrayBuffer,
    d = o.DataView,
    f = d.prototype,
    p = i(u.prototype.slice),
    _ = i(f.getUint8),
    h = i(f.setUint8);
r({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: a(function() {
        return !new u(2).slice(1, void 0).byteLength
    })
}, {
    slice: function(e, t) {
        if (p && void 0 === t) return p(s(this), e);
        for (var n = s(this).byteLength, r = l(e, n), i = l(void 0 === t ? n : t, n), a = new u(c(i - r)), o = new d(this), f = new d(a), m = 0; r < i;) h(f, m++, _(o, r++));
        return a
    }
})