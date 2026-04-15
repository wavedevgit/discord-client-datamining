/** chunk id: 51264 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(506774),
    d = n(397927),
    c = n(521502),
    u = n(380610),
    A = n(828184),
    h = n(985018),
    _ = n(85497);
let m = "isHideDevBanner",
    g = () => {
        let [e, t] = (0, l.useState)(o.w.get(m, "false")?.toString() === "true"), n = (0, s.bG)([c.A], () => (0, u.kK)() ? c.A.getCurrentBuildOverride().overrides?.discord_web : null);
        if (e) return null;
        let r = () => {
                o.w.set(m, !0), t(!0)
            },
            g = () => (0, i.jsx)(d.DUT, {
                onClick: r,
                className: _.b,
                "aria-label": h.intl.string(h.t.WAI6xu),
                children: (0, i.jsx)(d.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: _.ut
                })
            });
        return null != n ? (0, i.jsxs)("div", {
            className: a()(_.Wz, _.DM),
            children: [(0, i.jsx)(A.A, {
                className: _.Kk
            }), h.intl.string(h.t.Wj3LW4), (0, i.jsx)(g, {})]
        }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, i.jsxs)("div", {
            className: a()(_.Wz, _.mr),
            children: [(0, i.jsx)(A.A, {
                className: _.Kk
            }), h.intl.format(h.t.uyrfYF, {
                buildNumber: "529098"
            }), (0, i.jsx)(g, {})]
        }) : null
    }