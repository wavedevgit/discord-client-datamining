/** chunk id: 194509 params = (module,exports,require) **/
n.d(t, {
    A: () => C,
    U: () => x
});
var r = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(582754),
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
            color: l,
            look: u,
            hideIcon: m,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: p,
            giftMessage: _,
            onClick: g
        } = e, f = (0, o.Ay)(), b = x(C);
        return (0, r.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: p,
            giftMessage: _,
            onClick: g,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, r.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: l ?? ((0, a.Mw)(f) ? i.XD.WHITE : i.XD.BRAND),
                    look: u ?? i.pR.OUTLINED,
                    className: s()(t, h.xP),
                    onClick: o,
                    children: [!m && (0, r.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: h.ez
                    }), (0, r.jsx)("span", {
                        className: s()(h._d, n?.textClassName),
                        children: n?.textOverride ?? b
                    })]
                })
            }
        })
    }