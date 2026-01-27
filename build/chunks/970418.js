/** Chunk was on web.js **/
/** chunk id: 970418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(528352),
    i = n(374372),
    a = n(355418),
    o = n(476858);
let s = RegExp(`(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0,o.uJ)(r.EB)})(?=\\s*)(?=\\W|$)`, "i"),
    l = 1,
    c = 2;
class u extends a.c {
    innerPattern() {
        return s
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            a = t[c].toLowerCase(),
            o = r.EB[a];
        if ("volgend" == n || "komend" == n || "aankomend" == n) {
            let t = {};
            return t[o] = 1, i.BP.createRelativeFromReference(e.reference, t)
        }
        if ("afgelopen" == n || "vorig" == n) {
            let t = {};
            return t[o] = -1, i.BP.createRelativeFromReference(e.reference, t)
        }
        let s = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return a.match(/week/i) ? (u.setDate(u.getDate() - u.getDay()), s.imply("day", u.getDate()), s.imply("month", u.getMonth() + 1), s.imply("year", u.getFullYear())) : a.match(/maand/i) ? (u.setDate(1), s.imply("day", u.getDate()), s.assign("year", u.getFullYear()), s.assign("month", u.getMonth() + 1)) : a.match(/jaar/i) && (u.setDate(1), u.setMonth(0), s.imply("day", u.getDate()), s.imply("month", u.getMonth() + 1), s.assign("year", u.getFullYear())), s
    }
}