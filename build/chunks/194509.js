/** chunk id: 194509 params = (module,exports,require) **/
r.d(t, {
    A: () => f,
    U: () => p
});
var n = r(627968);
r(64700);
var a = r(503698),
    i = r.n(a),
    s = r(582754),
    l = r(421380),
    d = r(397927),
    o = r(736653),
    c = r(783420),
    u = r(788868),
    m = r(985018),
    _ = r(620508);
let p = e => e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    f = e => {
        let {
            className: t,
            textOptions: r,
            color: a,
            look: u,
            hideIcon: m,
            subscriptionTier: f,
            premiumModalAnalyticsLocation: h,
            giftMessage: b,
            onClick: g
        } = e, x = (0, o.Ay)(), C = p(f);
        return (0, n.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: f,
            premiumModalAnalyticsLocation: h,
            giftMessage: b,
            onClick: g,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, n.jsxs)(l.$n, {
                    "data-migration-pending": !0,
                    innerClassName: _.Nq,
                    color: a ?? ((0, s.Mw)(x) ? l.XD.WHITE : l.XD.BRAND),
                    look: u ?? l.pR.OUTLINED,
                    className: i()(t, _.xP),
                    onClick: o,
                    children: [!m && (0, n.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: _.ez
                    }), (0, n.jsx)("span", {
                        className: i()(_._d, r?.textClassName),
                        children: r?.textOverride ?? C
                    })]
                })
            }
        })
    }