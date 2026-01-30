/** chunk id: 703333, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r = n(528352),
    i = n(476858),
    a = n(355418);
let o = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0,i.uJ)(r.eB)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i"),
    s = 1,
    l = 2,
    c = 3,
    u = 4;
class d extends a.c {
    innerPattern() {
        return o
    }
    innerExtract(e, t) {
        let n = t[c] ? parseInt(t[c]) : r.eB[t[l].toLowerCase()];
        if (n < 1 || n > 12) return null;
        let i = parseInt(t[s]);
        return {
            day: parseInt(t[u]),
            month: n,
            year: i
        }
    }
}