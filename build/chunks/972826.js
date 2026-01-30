/** chunk id: 972826, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(989479),
    i = n(374372),
    a = n(241738),
    o = n(632434);
class s extends a.d {
    innerPatternString(e) {
        return `(${r.Pl})\\s{0,5}назад(?=(?:\\W|$))`
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[1]),
            a = (0, o.x4)(n);
        return i.BP.createRelativeFromReference(e.reference, a)
    }
}