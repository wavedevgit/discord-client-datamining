/** Chunk was on 5606 **/
/** chunk id: 730588, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    o = n(688810),
    c = n(385612),
    d = n(128450),
    u = n(339984),
    p = n(985018),
    _ = n(52506);

function m(e) {
    let {
        showRemoveBannerButton: t,
        errors: n,
        onBannerChange: i,
        guildId: m,
        className: g,
        disabled: f = !1,
        showPremiumIcon: b = !0,
        isTryItOut: h = !1,
        forcedDivider: A,
        withHighlight: E = !1
    } = e, {
        newestAnalyticsLocation: x
    } = (0, o.Ay)(), O = E ? a.wLn : s.$n;
    return (0, r.jsx)(d.A, {
        className: g,
        title: p.intl.string(p.t.Vgdusv),
        showPremiumIcon: b,
        errors: n,
        disabled: f,
        forcedDivider: A,
        children: (0, r.jsxs)("div", {
            className: _.NC,
            children: [(0, r.jsx)(O, {
                className: l()({
                    [_.yj]: E
                }),
                size: s.$n.Sizes.SMALL,
                onClick: () => (0, c.XD)({
                    uploadType: u.HL.BANNER,
                    analyticsSource: x,
                    guildId: m,
                    isTryItOut: h
                }),
                children: p.intl.string(p.t.N0bC3P)
            }), t && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: _.DT,
                children: (0, r.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != m ? p.intl.string(p.t.jHlJNS) : p.intl.string(p.t.tT9n7D),
                    onClick: () => i(null)
                })
            })]
        })
    })
}