/** chunk id: 730588 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(688810),
    d = n(385612),
    c = n(128450),
    u = n(339984),
    m = n(985018),
    _ = n(52506);

function g(e) {
    let {
        showRemoveBannerButton: t,
        errors: n,
        onBannerChange: s,
        guildId: g,
        className: A,
        disabled: x = !1,
        showPremiumIcon: p = !0,
        isTryItOut: h = !1,
        forcedDivider: T,
        withHighlight: E = !1
    } = e, {
        newestAnalyticsLocation: f
    } = (0, o.Ay)(), S = E ? r.wLn : a.$n;
    return (0, i.jsx)(c.A, {
        className: A,
        title: m.intl.string(m.t.Vgdusv),
        showPremiumIcon: p,
        errors: n,
        disabled: x,
        forcedDivider: T,
        children: (0, i.jsxs)("div", {
            className: _.NC,
            children: [(0, i.jsx)(S, {
                className: l()({
                    [_.yj]: E
                }),
                size: a.$n.Sizes.SMALL,
                onClick: () => (0, d.XD)({
                    uploadType: u.HL.BANNER,
                    analyticsSource: f,
                    guildId: g,
                    isTryItOut: h
                }),
                children: m.intl.string(m.t.N0bC3P)
            }), t && (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.DT,
                children: (0, i.jsx)(r.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != g ? m.intl.string(m.t.jHlJNS) : m.intl.string(m.t.tT9n7D),
                    onClick: () => s(null)
                })
            })]
        })
    })
}