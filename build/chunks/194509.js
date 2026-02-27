/** chunk id: 194509, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => p,
    U: () => R
});
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(582754),
    i = r(421380),
    d = r(397927),
    u = r(736653),
    o = r(783420),
    c = r(788868),
    m = r(985018),
    _ = r(194597);
let R = e => e === c.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    p = e => {
        let {
            className: t,
            textOptions: r,
            color: a,
            look: c,
            hideIcon: m,
            subscriptionTier: p,
            premiumModalAnalyticsLocation: h,
            giftMessage: A,
            onClick: E
        } = e, x = (0, u.Ay)(), N = R(p);
        return (0, n.jsx)(o.A, {
            isGift: !0,
            subscriptionTier: p,
            premiumModalAnalyticsLocation: h,
            giftMessage: A,
            onClick: E,
            children: e => {
                let {
                    onClick: u
                } = e;
                return (0, n.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: _.Nq,
                    color: a ?? ((0, s.Mw)(x) ? i.XD.WHITE : i.XD.BRAND),
                    look: c ?? i.pR.OUTLINED,
                    className: l()(t, _.xP),
                    onClick: u,
                    children: [!m && (0, n.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: _.ez
                    }), (0, n.jsx)("span", {
                        className: l()(_._d, r?.textClassName),
                        children: r?.textOverride ?? N
                    })]
                })
            }
        })
    }