/** chunk id: 212978, original params: t,e,r (module,exports,require) **/
var n = r(557939),
    o = r(517737),
    i = r(503628),
    a = r(607167),
    u = r(101968),
    c = r(273761),
    s = r(370001),
    f = a.ArrayBuffer,
    _ = a.DataView,
    l = _.prototype,
    p = o(f.prototype.slice),
    d = o(l.getUint8),
    g = o(l.setUint8);
n({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: i(function() {
        return !new f(2).slice(1, void 0).byteLength
    })
}, {
    slice: function(t, e) {
        if (p && void 0 === e) return p(u(this), t);
        for (var r = u(this).byteLength, n = c(t, r), o = c(void 0 === e ? r : e, r), i = new f(s(o - n)), a = new _(this), l = new _(i), b = 0; n < o;) g(l, b++, d(a, n++));
        return i
    }
})