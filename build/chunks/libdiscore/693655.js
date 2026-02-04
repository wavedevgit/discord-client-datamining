/** chunk id: 693655, original params: t,e,r (module,exports,require) **/
var n = r(339626),
    o = r(4940),
    i = r(313400),
    a = r(88388);
t.exports = function(t, e, r, u) {
    u || (u = {});
    var c = u.enumerable,
        s = void 0 !== u.name ? u.name : e;
    if (n(r) && i(r, s, u), u.global) c ? t[e] = r : a(e, r);
    else {
        try {
            u.unsafe ? t[e] && (c = !0) : delete t[e]
        } catch (t) {}
        c ? t[e] = r : o.f(t, e, {
            value: r,
            enumerable: !1,
            configurable: !u.nonConfigurable,
            writable: !u.nonWritable
        })
    }
    return t
}