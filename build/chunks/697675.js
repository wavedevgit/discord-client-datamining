/** chunk id: 697675, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(155718),
    s = n(985018),
    l = n(530255);

function c(e) {
    let {
        labelType: t,
        collapsed: n = !1
    } = e, c = t === o.Hr.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkk"]), u = t === o.Hr.NEW ? l.Ph : l.O5, [d, f] = i.useState(n ? "" : c);
    return (i.useEffect(() => {
        n ? f("") : t === o.Hr.NEW ? f(s.intl.string(s.t.y2b7CA)) : t === o.Hr.UPDATED && f(s.intl.string(s.t["/qdhkk"]))
    }, [n, t]), t === o.Hr.NONE) ? null : (0, r.jsx)(a.LpS, {
        className: u,
        disableColor: !0,
        text: (0, r.jsx)("span", {
            children: d
        })
    })
}