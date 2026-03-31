/** chunk id: 67281 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    o = a(791282),
    l = a.n(o),
    _ = a(311907),
    c = a(876230),
    s = a(342952),
    d = a(397927),
    u = a(429913),
    m = a(287809),
    p = a(405269),
    f = a(403362),
    b = a(985018),
    C = a(653455);
let g = function(e) {
    let {
        createdAt: t,
        participantIds: a,
        applicationId: r,
        title: o,
        guildId: g,
        playerState: I = c.Q6.PAUSED,
        isControlBarExpanded: h = !0
    } = e, A = (0, u.h)(r), T = (0, _.yK)([m.default], () => a.map(e => m.default.getUser(e)).filter(f.Vq) ?? []), v = null != t ? (0, p.Fe)(new Date(t)) : null, y = l()([A?.name, v]);
    return (0, n.jsxs)("div", {
        className: i()(C.oK, {
            [C.pd]: I === c.Q6.PLAYING && !h
        }),
        children: [(0, n.jsx)("div", {
            className: C.Lu
        }), (0, n.jsxs)("div", {
            className: C.s$,
            children: [(0, n.jsxs)("div", {
                className: C.yR,
                children: [(0, n.jsxs)("div", {
                    className: C.$,
                    children: [(0, n.jsx)(d.xgA, {
                        className: C.gr,
                        size: "xs",
                        color: "white"
                    }), (0, n.jsx)(d.Text, {
                        className: C.DD,
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: null != o && o.length > 0 ? o : b.intl.string(b.t.Cyxddp)
                    })]
                }), y.length > 0 && (0, n.jsx)(d.Text, {
                    className: C.yu,
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: y.join(" \xb7 ")
                })]
            }), T.length > 0 && (0, n.jsx)("div", {
                className: C.HD,
                children: (0, n.jsx)(s.A, {
                    maxUsers: 4,
                    users: T,
                    guildId: g,
                    size: d._3J.SIZE_24,
                    "aria-label": b.intl.string(b.t.WTozwe)
                })
            })]
        })]
    })
}