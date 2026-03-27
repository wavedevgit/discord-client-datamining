/** chunk id: 67281 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => C
});
var n = a(627968);
a(64700);
var r = a(791282),
    i = a.n(r),
    o = a(943854),
    s = a.n(o),
    c = a(311907),
    l = a(342952),
    _ = a(397927),
    d = a(429913),
    u = a(287809),
    m = a(405269),
    p = a(403362),
    f = a(985018),
    b = a(653455);
let C = function(e) {
    let {
        createdAt: t,
        participantIds: a,
        applicationId: r,
        title: o,
        guildId: C
    } = e, g = (0, d.h)(r), I = (0, c.yK)([u.default], () => a.map(e => u.default.getUser(e)).filter(p.Vq) ?? []), h = null != t ? (0, m.Fe)(new Date(t)) : null, A = i()([g?.name, h]);
    return (0, n.jsxs)("div", {
        className: b.oK,
        children: [(0, n.jsx)("div", {
            className: b.Lu
        }), (0, n.jsxs)("div", {
            className: b.s$,
            children: [(0, n.jsxs)("div", {
                className: b.yR,
                children: [(0, n.jsxs)("div", {
                    className: b.$,
                    children: [(0, n.jsx)(_.xgA, {
                        className: b.gr,
                        size: "xs",
                        color: "white"
                    }), !s()(o) && (0, n.jsx)(_.Text, {
                        className: b.DD,
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: o
                    })]
                }), A.length > 0 && (0, n.jsx)(_.Text, {
                    className: b.yu,
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: A.join(" \xb7 ")
                })]
            }), I.length > 0 && (0, n.jsx)("div", {
                className: b.HD,
                children: (0, n.jsx)(l.A, {
                    maxUsers: 4,
                    users: I,
                    guildId: C,
                    size: _._3J.SIZE_24,
                    "aria-label": f.intl.string(f.t.WTozwe)
                })
            })]
        })]
    })
}