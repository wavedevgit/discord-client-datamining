/** chunk id: 194509, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    U: () => x
});
var r = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(582754),
    i = n(421380),
    d = n(397927),
    u = n(736653),
    o = n(783420),
    c = n(788868),
    m = n(985018),
    h = n(975347);
let x = e => e === c.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    p = e => {
        let {
            className: t,
            textOptions: n,
            color: a,
            look: c,
            hideIcon: m,
            subscriptionTier: p,
            premiumModalAnalyticsLocation: _,
            giftMessage: f,
            onClick: g
        } = e, N = (0, u.Ay)(), b = x(p);
        return (0, r.jsx)(o.A, {
            isGift: !0,
            subscriptionTier: p,
            premiumModalAnalyticsLocation: _,
            giftMessage: f,
            onClick: g,
            children: e => {
                let {
                    onClick: u
                } = e;
                return (0, r.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: a ?? ((0, s.Mw)(N) ? i.XD.WHITE : i.XD.BRAND),
                    look: c ?? i.pR.OUTLINED,
                    className: l()(t, h.xP),
                    onClick: u,
                    children: [!m && (0, r.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: h.ez
                    }), (0, r.jsx)("span", {
                        className: l()(h._d, n?.textClassName),
                        children: n?.textOverride ?? b
                    })]
                })
            }
        })
    }