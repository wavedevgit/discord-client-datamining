/** chunk id: 632515, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(998493),
    i = n(476858),
    a = n(355418),
    o = n(1673);
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:\xe4|ae)chste[mn])\\s*)?(${(0,i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:\xe4|ae)chste)\\s*woche)?(?=\\W|$)`, "i"),
    l = 1,
    c = 3,
    u = 2;
class d extends a.c {
    innerPattern() {
        return s
    }
    innerExtract(e, t) {
        let n = t[u].toLowerCase(),
            i = r.CV[n],
            a = t[l],
            s = t[c],
            d = a || s;
        d = (d = d || "").toLowerCase();
        let f = null;
        return d.match(/letzte/) ? f = "last" : d.match(/chste/) ? f = "next" : d.match(/diese/) && (f = "this"), (0, o.Y5)(e.reference, i, f)
    }
}