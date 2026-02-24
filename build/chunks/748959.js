/** chunk id: 748959, original params: e,l,t (module,exports,require) **/
t.d(l, {
    I: () => d
});
var n = t(627968),
    s = t(64700),
    i = t(397927),
    a = t(439303),
    r = t(183802),
    o = t(963879);

function d(e) {
    let {
        leaderboard: l,
        skuId: t,
        applicationId: d,
        guildId: c,
        analyticsLocations: u,
        analyticsSectionId: _
    } = e, g = s.useMemo(() => ({
        pageSection: _
    }), [_]);
    return null == l ? null : (0, n.jsx)(a.E9, {
        newValue: g,
        children: (0, n.jsxs)("div", {
            className: o.kL,
            children: [(0, n.jsxs)("div", {
                className: o.FS,
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
                className: o.Ui,
                children: (0, n.jsx)(r.A, {
                    positionInSection: 0,
                    applicationId: d,
                    skuId: t,
                    variant: r.s.MEDIUM,
                    guildId: c,
                    analyticsLocations: u
                })
            })]
        })
    })
}