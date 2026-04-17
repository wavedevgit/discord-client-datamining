/** chunk id: 194509 params = (module,exports,require) **/
n.d(t, {
    A: () => C,
    U: () => x
});
var s = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    l = n(582754),
    i = n(421380),
    d = n(397927),
    o = n(736653),
    c = n(783420),
    u = n(788868),
    m = n(985018),
    h = n(806956);
let x = e => e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    C = e => {
        let {
            className: t,
            textOptions: n,
            color: r,
            look: u,
            hideIcon: m,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: _,
            giftMessage: p,
            onClick: g
        } = e, f = (0, o.Ay)(), R = x(C);
        return (0, s.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: _,
            giftMessage: p,
            onClick: g,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, s.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: r ?? ((0, l.Mw)(f) ? i.XD.WHITE : i.XD.BRAND),
                    look: u ?? i.pR.OUTLINED,
                    className: a()(t, h.xP),
                    onClick: o,
                    children: [!m && (0, s.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: h.ez
                    }), (0, s.jsx)("span", {
                        className: a()(h._d, n?.textClassName),
                        children: n?.textOverride ?? R
                    })]
                })
            }
        })
    }