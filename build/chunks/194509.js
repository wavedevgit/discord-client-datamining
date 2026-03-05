/** chunk id: 194509, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    U: () => R
});
var r = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(582754),
    i = n(421380),
    d = n(397927),
    u = n(736653),
    o = n(783420),
    c = n(788868),
    m = n(985018),
    _ = n(975347);
let R = e => e === c.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    h = e => {
        let {
            className: t,
            textOptions: n,
            color: a,
            look: c,
            hideIcon: m,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: p,
            giftMessage: x,
            onClick: A
        } = e, E = (0, u.Ay)(), f = R(h);
        return (0, r.jsx)(o.A, {
            isGift: !0,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: p,
            giftMessage: x,
            onClick: A,
            children: e => {
                let {
                    onClick: u
                } = e;
                return (0, r.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: _.Nq,
                    color: a ?? ((0, l.Mw)(E) ? i.XD.WHITE : i.XD.BRAND),
                    look: c ?? i.pR.OUTLINED,
                    className: s()(t, _.xP),
                    onClick: u,
                    children: [!m && (0, r.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: _.ez
                    }), (0, r.jsx)("span", {
                        className: s()(_._d, n?.textClassName),
                        children: n?.textOverride ?? f
                    })]
                })
            }
        })
    }