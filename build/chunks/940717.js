/** Chunk was on web.js **/
/** chunk id: 940717, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(615339),
    i = n(374372),
    a = n(355418);
let o = RegExp(`(${r.Pl})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`, "i"),
    s = RegExp("(" + r.Pl + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i"),
    l = 1;
class c extends a.c {
    strictMode;
    constructor(e) {
        super(), this.strictMode = e
    }
    innerPattern() {
        return this.strictMode ? s : o
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[l]);
        return i.BP.createRelativeFromReference(e.reference, n)
    }
}