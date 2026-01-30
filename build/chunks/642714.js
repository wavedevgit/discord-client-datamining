/** chunk id: 642714, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(364242),
    i = n(615339),
    a = n(476858),
    o = n(355418);
let s = RegExp(`(${(0,a.uJ)(i.eB)})(?:-|/|\\s*,?\\s*)(${i.lT})(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(${i.lT})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${i.fp}))?(?=\\W|$)(?!\\:\\d)`, "i"),
    l = 1,
    c = 2,
    u = 3,
    d = 4;
class f extends o.c {
    innerPattern() {
        return s
    }
    innerExtract(e, t) {
        let n = i.eB[t[l].toLowerCase()],
            a = (0, i.k8)(t[c]);
        if (a > 31) return null;
        let o = e.createParsingComponents({
            day: a,
            month: n
        });
        if (t[d]) {
            let e = (0, i.zL)(t[d]);
            o.assign("year", e)
        } else {
            let t = (0, r.Y)(e.refDate, a, n);
            o.imply("year", t)
        }
        if (!t[u]) return o;
        let s = (0, i.k8)(t[u]),
            f = e.createParsingResult(t.index, t[0]);
        return f.start = o, f.end = o.clone(), f.end.assign("day", s), f
    }
}