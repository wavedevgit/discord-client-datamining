/** chunk id: 273050, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(528352),
    i = n(364242),
    a = n(476858),
    o = n(355418);
let s = RegExp(`(${(0,a.uJ)(r.eB)})\\s*(?:[,-]?\\s*(${r.fp})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i"),
    l = 1,
    c = 2;
class u extends o.c {
    innerPattern() {
        return s
    }
    innerExtract(e, t) {
        let n = e.createParsingComponents();
        n.imply("day", 1);
        let a = t[l],
            o = r.eB[a.toLowerCase()];
        if (n.assign("month", o), t[c]) {
            let e = (0, r.zL)(t[c]);
            n.assign("year", e)
        } else {
            let t = (0, i.Y)(e.refDate, 1, o);
            n.imply("year", t)
        }
        return n
    }
}