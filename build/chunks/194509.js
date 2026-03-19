/** chunk id: 194509 params = (module,exports,require) **/
a.d(t, {
    A: () => b,
    U: () => f
});
var n = a(627968);
a(64700);
var r = a(503698),
    s = a.n(r),
    l = a(582754),
    i = a(421380),
    d = a(397927),
    o = a(736653),
    c = a(783420),
    u = a(788868),
    m = a(985018),
    p = a(975347);
let f = e => e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    b = e => {
        let {
            className: t,
            textOptions: a,
            color: r,
            look: u,
            hideIcon: m,
            subscriptionTier: b,
            premiumModalAnalyticsLocation: A,
            giftMessage: h,
            onClick: _
        } = e, g = (0, o.Ay)(), R = f(b);
        return (0, n.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: b,
            premiumModalAnalyticsLocation: A,
            giftMessage: h,
            onClick: _,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, n.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: p.Nq,
                    color: r ?? ((0, l.Mw)(g) ? i.XD.WHITE : i.XD.BRAND),
                    look: u ?? i.pR.OUTLINED,
                    className: s()(t, p.xP),
                    onClick: o,
                    children: [!m && (0, n.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: p.ez
                    }), (0, n.jsx)("span", {
                        className: s()(p._d, a?.textClassName),
                        children: a?.textOverride ?? R
                    })]
                })
            }
        })
    }