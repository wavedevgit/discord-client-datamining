/** Chunk was on web.js **/
/** chunk id: 267118, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(501459),
    i = n(1673);
let a = RegExp("((?<prefix>前の|次の|今週))?(?<weekday>" + Object.keys(r.tS).join("|") + ")(?:曜日|曜)", "i");
class o {
    pattern() {
        return a
    }
    extract(e, t) {
        let n = t.groups.weekday,
            a = r.tS[n];
        if (void 0 === a) return null;
        let o = t.groups.prefix || "",
            s = null;
        return o.match(/前の/) ? s = "last" : o.match(/次の/) ? s = "next" : o.match(/今週/) && (s = "this"), (0, i.Y5)(e.reference, a, s)
    }
}