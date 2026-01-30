/** chunk id: 732871, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(615339),
    i = n(476858),
    a = n(355418),
    o = n(1673);
let s = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:il\\s*?)?(?:(questa|l'ultima|scorsa|prossima)\\s*)?(${(0,i.uJ)(r.CV)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(questa|l'ultima|scorsa|prossima)\\s*settimana)?(?=\\W|$)`, "i"),
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
        return "ultima" == d || "scorsa" == d ? f = "ultima" : "prossima" == d ? f = "prossima" : "questa" == d && (f = "questa"), (0, o.Y5)(e.reference, i, f)
    }
}