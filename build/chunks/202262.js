/** chunk id: 202262, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(615339),
    i = n(374372),
    a = n(355418),
    o = n(632434);
let s = RegExp(`(${r.Pl})\\s{0,5}(?:fa|prima|precedente)(?=(?:\\W|$))`, "i"),
    l = RegExp(`(${r.Pl})\\s{0,5}fa(?=(?:\\W|$))`, "i");
class c extends a.c {
    strictMode;
    constructor(e) {
        super(), this.strictMode = e
    }
    innerPattern() {
        return this.strictMode ? l : s
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]),
            a = (0, o.x4)(n);
        return i.BP.createRelativeFromReference(e.reference, a)
    }
}