/** chunk id: 748959 params = (module,exports,require) **/
t.d(l, {
    I: () => o
});
var n = t(627968),
    s = t(64700),
    i = t(397927),
    a = t(439303),
    r = t(183802),
    d = t(824049);

function o(e) {
    let {
        leaderboard: l,
        skuId: t,
        applicationId: o,
        guildId: c,
        analyticsLocations: u,
        analyticsSectionId: _
    } = e, g = s.useMemo(() => ({
        pageSection: _
    }), [_]);
    return null == l ? null : (0, n.jsx)(a.E9, {
        newValue: g,
        children: (0, n.jsxs)("div", {
            className: d.kL,
            children: [(0, n.jsxs)("div", {
                className: d.FS,
                children: [(0, n.jsx)(i.Heading, {
                    variant: "display-lg",
                    color: "text-strong",
                    children: l.title
                }), (0, n.jsx)(i.Text, {
                    variant: "text-lg/semibold",
                    color: "text-subtle",
                    children: l.description
                })]
            }), null != t && (0, n.jsx)("div", {
                className: d.Ui,
                children: (0, n.jsx)(r.A, {
                    positionInSection: 0,
                    applicationId: o,
                    skuId: t,
                    variant: r.s.MEDIUM,
                    guildId: c,
                    analyticsLocations: u
                })
            })]
        })
    })
}