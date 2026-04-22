/** chunk id: 194509 params = (module,exports,require) **/
n.d(t, {
    A: () => C,
    U: () => x
});
var s = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    r = n(582754),
    i = n(421380),
    d = n(397927),
    o = n(736653),
    c = n(783420),
    u = n(788868),
    h = n(985018),
    m = n(806956);
let x = e => e === u.pe.TIER_0 ? h.intl.string(h.t.rk4Uu8) : h.intl.string(h.t.Ve9Ge6),
    C = e => {
        let {
            className: t,
            textOptions: n,
            color: a,
            look: u,
            hideIcon: h,
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
                    innerClassName: m.Nq,
                    color: a ?? ((0, r.Mw)(f) ? i.XD.WHITE : i.XD.BRAND),
                    look: u ?? i.pR.OUTLINED,
                    className: l()(t, m.xP),
                    onClick: o,
                    children: [!h && (0, s.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: m.ez
                    }), (0, s.jsx)("span", {
                        className: l()(m._d, n?.textClassName),
                        children: n?.textOverride ?? R
                    })]
                })
            }
        })
    }