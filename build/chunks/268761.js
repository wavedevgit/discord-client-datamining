/** chunk id: 268761, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Gk: () => l,
    Gl: () => c
});
var r = n(531815),
    i = n.n(r);
n(989349);
var a = n(927813),
    o = n(37411),
    s = n(985018);

function l() {
    return [{
        id: "1hour",
        label: s.intl.string(s.t.cs8A1c),
        value: a.A.Minutes.HOUR
    }, {
        id: "24hours",
        label: s.intl.string(s.t.zFKbrF),
        value: a.A.Minutes.DAY
    }, {
        id: "3days",
        label: s.intl.string(s.t.TmPIZX),
        value: 3 * a.A.Minutes.DAY
    }, {
        id: "1week",
        label: s.intl.string(s.t["/7i2el"]),
        value: a.A.Minutes.WEEK
    }]
}

function c(e, t) {
    var n;
    return null != (n = null != t ? t : null == e ? void 0 : e.defaultAutoArchiveDuration) ? n : o.cM
}
a.A.Minutes.HOUR, a.A.Minutes.DAY, a.A.Minutes.DAY, a.A.Minutes.WEEK, i()(() => l().map(e => e.value))