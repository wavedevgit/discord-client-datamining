/** Chunk was on web.js **/
/** chunk id: 265865, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(364242),
    i = n(147426),
    a = n(476858),
    o = n(972409);
let s = 1,
    l = 2,
    c = 3,
    u = 4;
class d extends o.w {
    innerPatternString(e) {
        return `(?:з|із)?\\s*(${i.lT})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${i.lT}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0,a.uJ)(i.eB)})(?:(?:-|\\/|,?\\s{0,3})(${i.fp}(?![^\\s]\\d)))?`
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            a = i.eB[t[c].toLowerCase()],
            o = (0, i.k8)(t[s]);
        if (o > 31) return t.index = t.index + t[s].length, null;
        if (n.start.assign("month", a), n.start.assign("day", o), t[u]) {
            let e = (0, i.jp)(t[u]);
            n.start.assign("year", e)
        } else {
            let t = (0, r.Y)(e.reference.instant, o, a);
            n.start.imply("year", t)
        }
        if (t[l]) {
            let e = (0, i.k8)(t[l]);
            n.end = n.start.clone(), n.end.assign("day", e)
        }
        return n
    }
}