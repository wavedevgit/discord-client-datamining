/** Chunk was on 21738 **/
/** chunk id: 51264, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(506774),
    c = n(397927),
    u = n(521502),
    d = n(380610),
    p = n(828184),
    h = n(985018),
    g = n(908874);
let f = "isHideDevBanner",
    m = () => {
        var e;
        let [t, n] = (0, i.useState)((null == (e = o.w.get(f, "false")) ? void 0 : e.toString()) === "true"), l = (0, s.bG)([u.A], () => {
            var e;
            return (0, d.kK)() ? null == (e = u.A.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web : null
        });
        if (t) return null;
        let m = () => {
                o.w.set(f, !0), n(!0)
            },
            A = () => (0, r.jsx)(c.DUT, {
                onClick: m,
                className: g.b,
                "aria-label": h.intl.string(h.t.WAI6xu),
                children: (0, r.jsx)(c.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: g.ut
                })
            });
        return null != l ? (0, r.jsxs)("div", {
            className: a()(g.Wz, g.DM),
            children: [(0, r.jsx)(p.A, {
                className: g.Kk
            }), h.intl.string(h.t.Wj3LW4), (0, r.jsx)(A, {})]
        }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, r.jsxs)("div", {
            className: a()(g.Wz, g.mr),
            children: [(0, r.jsx)(p.A, {
                className: g.Kk
            }), h.intl.format(h.t.uyrfYF, {
                buildNumber: "489936"
            }), (0, r.jsx)(A, {})]
        }) : null
    }