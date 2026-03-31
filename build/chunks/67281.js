/** chunk id: 67281 params = (module,exports,require) **/
a.d(t, {
    A: () => g
});
var n = a(627968);
a(64700);
var r = a(503698),
    i = a.n(r),
    o = a(791282),
    c = a.n(o),
    l = a(311907),
    s = a(876230),
    _ = a(342952),
    d = a(397927),
    u = a(429913),
    m = a(287809),
    p = a(405269),
    b = a(403362),
    C = a(985018),
    f = a(653455);
let g = function(e) {
    let {
        createdAt: t,
        participantIds: a,
        applicationId: r,
        title: o,
        guildId: g,
        playerState: I = s.Q6.PAUSED,
        isControlBarExpanded: h = !0
    } = e, A = (0, u.h)(r), T = (0, l.yK)([m.default], () => a.map(e => m.default.getUser(e)).filter(b.Vq) ?? []), v = null != t ? (0, p.Fe)(new Date(t)) : null, y = c()([A?.name, v]);
    return (0, n.jsxs)("div", {
        className: i()(f.oK, {
            [f.pd]: I === s.Q6.PLAYING && !h
        }),
        children: [(0, n.jsx)("div", {
            className: f.Lu
        }), (0, n.jsxs)("div", {
            className: f.s$,
            children: [(0, n.jsxs)("div", {
                className: f.yR,
                children: [(0, n.jsxs)("div", {
                    className: f.$,
                    children: [(0, n.jsx)(d.xgA, {
                        className: f.gr,
                        size: "xs",
                        color: "white"
                    }), (0, n.jsx)(d.Text, {
                        className: f.DD,
                        variant: "text-md/semibold",
                        color: "always-white",
                        children: null != o && o.length > 0 ? o : C.intl.string(C.t.Cyxddp)
                    })]
                }), y.length > 0 && (0, n.jsx)(d.Text, {
                    className: f.yu,
                    variant: "text-sm/normal",
                    color: "always-white",
                    children: y.join(" \xb7 ")
                })]
            }), T.length > 0 && (0, n.jsx)("div", {
                className: f.HD,
                children: (0, n.jsx)(_.A, {
                    maxUsers: 4,
                    users: T,
                    guildId: g,
                    size: d._3J.SIZE_24,
                    "aria-label": C.intl.string(C.t.WTozwe)
                })
            })]
        })]
    })
}