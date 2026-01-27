/** Chunk was on web.js **/
/** chunk id: 359269, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(528352),
    i = n(476858),
    a = n(355418),
    o = n(1673);
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0,i.uJ)(r.CV)})(?=\\W|$)`, "i"),
    l = 1,
    c = 2,
    u = 3;
class d extends a.c {
    innerPattern() {
        return s
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase(),
            i = r.CV[n],
            a = t[l],
            s = t[u],
            d = a || s;
        d = (d = d || "").toLowerCase();
        let f = null;
        return "vorige" == d ? f = "last" : "volgende" == d ? f = "next" : "deze" == d && (f = "this"), (0, o.Y5)(e.reference, i, f)
    }
}