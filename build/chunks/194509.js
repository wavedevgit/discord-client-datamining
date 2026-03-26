/** chunk id: 194509 params = (module,exports,require) **/
a.d(t, {
    A: () => b,
    U: () => p
});
var n = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    i = a(582754),
    d = a(421380),
    l = a(397927),
    o = a(736653),
    c = a(783420),
    u = a(788868),
    _ = a(985018),
    m = a(620508);
let p = e => e === u.pe.TIER_0 ? _.intl.string(_.t.rk4Uu8) : _.intl.string(_.t.Ve9Ge6),
    b = e => {
        let {
            className: t,
            textOptions: a,
            color: r,
            look: u,
            hideIcon: _,
            subscriptionTier: b,
            premiumModalAnalyticsLocation: f,
            giftMessage: g,
            onClick: A
        } = e, h = (0, o.Ay)(), x = p(b);
        return (0, n.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: b,
            premiumModalAnalyticsLocation: f,
            giftMessage: g,
            onClick: A,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, n.jsxs)(d.$n, {
                    "data-migration-pending": !0,
                    innerClassName: m.Nq,
                    color: r ?? ((0, i.Mw)(h) ? d.XD.WHITE : d.XD.BRAND),
                    look: u ?? d.pR.OUTLINED,
                    className: s()(t, m.xP),
                    onClick: o,
                    children: [!_ && (0, n.jsx)(l.okO, {
                        size: "md",
                        color: "currentColor",
                        className: m.ez
                    }), (0, n.jsx)("span", {
                        className: s()(m._d, a?.textClassName),
                        children: a?.textOverride ?? x
                    })]
                })
            }
        })
    }