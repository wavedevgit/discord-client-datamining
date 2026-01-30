/** chunk id: 23836, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(615339),
    i = n(374372),
    a = n(355418),
    o = n(476858);
let s = RegExp(`(questo|ultimo|scorso|prossimo|dopo\\s*questo|questa|ultima|scorsa|prossima\\s*questa)\\s*(${(0,o.uJ)(r.EB)})(?=\\s*)(?=\\W|$)`, "i"),
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
        if ("prossimo" == n || n.startsWith("dopo")) {
            let t = {};
            return t[o] = 1, i.BP.createRelativeFromReference(e.reference, t)
        }
        if ("prima" == n || "precedente" == n) {
            let t = {};
            return t[o] = -1, i.BP.createRelativeFromReference(e.reference, t)
        }
        let s = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return a.match(/settimana/i) ? (u.setDate(u.getDate() - u.getDay()), s.imply("day", u.getDate()), s.imply("month", u.getMonth() + 1), s.imply("year", u.getFullYear())) : a.match(/mese/i) ? (u.setDate(1), s.imply("day", u.getDate()), s.assign("year", u.getFullYear()), s.assign("month", u.getMonth() + 1)) : a.match(/anno/i) && (u.setDate(1), u.setMonth(0), s.imply("day", u.getDate()), s.imply("month", u.getMonth() + 1), s.assign("year", u.getFullYear())), s
    }
}