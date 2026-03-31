/** chunk id: 194509 params = (module,exports,require) **/
r.d(t, {
    A: () => f,
    U: () => p
});
var a = r(627968);
r(64700);
var n = r(503698),
    s = r.n(n),
    i = r(582754),
    l = r(421380),
    o = r(397927),
    d = r(736653),
    c = r(783420),
    u = r(788868),
    m = r(985018),
    _ = r(844131);
let p = e => e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    f = e => {
        let {
            className: t,
            textOptions: r,
            color: n,
            look: u,
            hideIcon: m,
            subscriptionTier: f,
            premiumModalAnalyticsLocation: h,
            giftMessage: b,
            onClick: x
        } = e, g = (0, d.Ay)(), C = p(f);
        return (0, a.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: f,
            premiumModalAnalyticsLocation: h,
            giftMessage: b,
            onClick: x,
            children: e => {
                let {
                    onClick: d
                } = e;
                return (0, a.jsxs)(l.$n, {
                    "data-migration-pending": !0,
                    innerClassName: _.Nq,
                    color: n ?? ((0, i.Mw)(g) ? l.XD.WHITE : l.XD.BRAND),
                    look: u ?? l.pR.OUTLINED,
                    className: s()(t, _.xP),
                    onClick: d,
                    children: [!m && (0, a.jsx)(o.okO, {
                        size: "md",
                        color: "currentColor",
                        className: _.ez
                    }), (0, a.jsx)("span", {
                        className: s()(_._d, r?.textClassName),
                        children: r?.textOverride ?? C
                    })]
                })
            }
        })
    }