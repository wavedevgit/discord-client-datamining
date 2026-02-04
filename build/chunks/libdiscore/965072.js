/** chunk id: 965072, original params: t,e,r (module,exports,require) **/
var n = r(410323),
    o = r(703441),
    i = r(339626),
    a = r(647055),
    u = r(304880),
    c = n([].push);
t.exports = function(t) {
    if (i(t)) return t;
    if (o(t)) {
        for (var e = t.length, r = [], n = 0; n < e; n++) {
            var s = t[n];
            "string" == typeof s ? c(r, s) : ("number" == typeof s || "Number" === a(s) || "String" === a(s)) && c(r, u(s))
        }
        var f = r.length,
            _ = !0;
        return function(t, e) {
            if (_) return _ = !1, e;
            if (o(this)) return e;
            for (var n = 0; n < f; n++)
                if (r[n] === t) return e
        }
    }
}