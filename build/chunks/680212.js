/** chunk id: 680212, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(6678),
    i = n(374372),
    a = n(355418),
    o = n(632434);
class s extends a.c {
    constructor() {
        super()
    }
    innerPattern() {
        return RegExp(`il y a\\s*(${r.Pl})(?=(?:\\W|$))`, "i")
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]),
            a = (0, o.x4)(n);
        return i.BP.createRelativeFromReference(e.reference, a)
    }
}