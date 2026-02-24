/** chunk id: 194509, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => x,
    U: () => p
});
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(582754),
    i = r(421380),
    d = r(397927),
    o = r(736653),
    u = r(783420),
    c = r(788868),
    m = r(985018),
    h = r(194597);
let p = e => e === c.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6),
    x = e => {
        let {
            className: t,
            textOptions: r,
            color: a,
            look: c,
            hideIcon: m,
            subscriptionTier: x,
            premiumModalAnalyticsLocation: g,
            giftMessage: _,
            onClick: f
        } = e, b = (0, o.Ay)(), N = p(x);
        return (0, n.jsx)(u.A, {
            isGift: !0,
            subscriptionTier: x,
            premiumModalAnalyticsLocation: g,
            giftMessage: _,
            onClick: f,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, n.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: a ?? ((0, s.Mw)(b) ? i.XD.WHITE : i.XD.BRAND),
                    look: c ?? i.pR.OUTLINED,
                    className: l()(t, h.xP),
                    onClick: o,
                    children: [!m && (0, n.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: h.ez
                    }), (0, n.jsx)("span", {
                        className: l()(h._d, r?.textClassName),
                        children: r?.textOverride ?? N
                    })]
                })
            }
        })
    }