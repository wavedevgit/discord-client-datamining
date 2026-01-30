/** chunk id: 166565, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(364242),
    i = n(6678),
    a = n(476858),
    o = n(355418);
let s = RegExp(`(?:on\\s*?)?(${i.lT})(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${i.lT}))?(?:-|/|\\s*(?:de)?\\s*)(${(0,a.uJ)(i.eB)})(?:(?:-|/|,?\\s*)(${i.fp}(?![^\\s]\\d)))?(?=\\W|$)`, "i"),
    l = 1,
    c = 2,
    u = 3,
    d = 4;
class f extends o.c {
    innerPattern() {
        return s
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            a = i.eB[t[u].toLowerCase()],
            o = (0, i.k8)(t[l]);
        if (o > 31) return t.index = t.index + t[l].length, null;
        if (n.start.assign("month", a), n.start.assign("day", o), t[d]) {
            let e = (0, i.zL)(t[d]);
            n.start.assign("year", e)
        } else {
            let t = (0, r.Y)(e.refDate, o, a);
            n.start.imply("year", t)
        }
        if (t[c]) {
            let e = (0, i.k8)(t[c]);
            n.end = n.start.clone(), n.end.assign("day", e)
        }
        return n
    }
}