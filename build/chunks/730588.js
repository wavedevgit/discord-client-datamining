/** Chunk was on 60667 **/
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
    _ = n(985018),
    p = n(52506);

function m(e) {
    let {
        showRemoveBannerButton: t,
        errors: n,
        onBannerChange: i,
        guildId: m,
        className: g,
        disabled: A = !1,
        showPremiumIcon: f = !0,
        isTryItOut: h = !1,
        forcedDivider: b,
        withHighlight: E = !1
    } = e, {
        newestAnalyticsLocation: x
    } = (0, o.Ay)(), O = E ? a.wLn : s.$n;
    return (0, r.jsx)(d.A, {
        className: g,
        title: _.intl.string(_.t.Vgdusv),
        showPremiumIcon: f,
        errors: n,
        disabled: A,
        forcedDivider: b,
        children: (0, r.jsxs)("div", {
            className: p.NC,
            children: [(0, r.jsx)(O, {
                className: l()({
                    [p.yj]: E
                }),
                size: s.$n.Sizes.SMALL,
                onClick: () => (0, c.XD)({
                    uploadType: u.HL.BANNER,
                    analyticsSource: x,
                    guildId: m,
                    isTryItOut: h
                }),
                children: _.intl.string(_.t.N0bC3P)
            }), t && (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: p.DT,
                children: (0, r.jsx)(a.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: null != m ? _.intl.string(_.t.jHlJNS) : _.intl.string(_.t.tT9n7D),
                    onClick: () => i(null)
                })
            })]
        })
    })
}