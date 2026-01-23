/** Chunk was on 94678 **/
/** chunk id: 165421, original params: t,r,e (module,exports,require) **/
"use strict";
var n = e(834647),
    o = e(683570),
    s = e(512008),
    i = e(57284),
    u = e(175380),
    c = e(767623),
    a = u("string-to-symbol-registry"),
    f = u("symbol-to-string-registry");
n({
    target: "Symbol",
    stat: !0,
    forced: !c
}, {
    for: function(t) {
        var r = i(t);
        if (s(a, r)) return a[r];
        var e = o("Symbol")(r);
        return a[r] = e, f[e] = r, e
    }
})