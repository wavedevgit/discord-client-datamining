/** chunk id: 39139, original params: t,e,r (module,exports,require) **/
var n = r(581390),
    o = r(633228),
    i = r(70670),
    a = r(883972),
    u = r(4940).f,
    c = r(661495),
    s = r(503902),
    f = r(105712),
    _ = r(257943),
    l = "Array Iterator",
    p = a.set,
    d = a.getterFor(l);
t.exports = c(Array, "Array", function(t, e) {
    p(this, {
        type: l,
        target: n(t),
        index: 0,
        kind: e
    })
}, function() {
    var t = d(this),
        e = t.target,
        r = t.index++;
    if (!e || r >= e.length) return t.target = null, s(void 0, !0);
    switch (t.kind) {
        case "keys":
            return s(r, !1);
        case "values":
            return s(e[r], !1)
    }
    return s([r, e[r]], !1)
}, "values");
var g = i.Arguments = i.Array;
if (o("keys"), o("values"), o("entries"), !f && _ && "values" !== g.name) try {
    u(g, "name", {
        value: "values"
    })
} catch (t) {}