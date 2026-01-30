/** chunk id: 31111, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(360345),
    i = n(476858),
    a = n(355418),
    o = n(1673),
    s = n(322811);
let l = RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${(0,i.uJ)(r.CV)}|weekend|weekday)(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i"),
    c = 1,
    u = 2,
    d = 3;
class f extends a.c {
    innerPattern() {
        return l
    }
    innerExtract(e, t) {
        let n, i = t[c],
            a = t[d],
            l = i || a;
        l = (l = l || "").toLowerCase();
        let f = null;
        "last" == l || "past" == l ? f = "last" : "next" == l ? f = "next" : "this" == l && (f = "this");
        let p = t[u].toLowerCase();
        if (void 0 !== r.CV[p]) n = r.CV[p];
        else if ("weekend" == p) n = "last" == f ? s.Bw.SUNDAY : s.Bw.SATURDAY;
        else {
            if ("weekday" != p) return null;
            let t = e.reference.getDateWithAdjustedTimezone().getDay();
            t == s.Bw.SUNDAY || t == s.Bw.SATURDAY ? n = "last" == f ? s.Bw.FRIDAY : s.Bw.MONDAY : (n = t - 1, n = (n = "last" == f ? n - 1 : n + 1) % 5 + 1)
        }
        return (0, o.Y5)(e.reference, n, f)
    }
}