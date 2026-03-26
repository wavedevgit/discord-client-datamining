/** chunk id: 194509 params = (module,exports,require) **/
a.d(t, {
    A: () => b,
    U: () => p
});
var r = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    s = a(582754),
    l = a(421380),
    d = a(397927),
    o = a(736653),
    c = a(783420),
    u = a(788868),
    _ = a(985018),
    m = a(620508);
let p = e => e === u.pe.TIER_0 ? _.intl.string(_.t.rk4Uu8) : _.intl.string(_.t.Ve9Ge6),
    b = e => {
        let {
            className: t,
            textOptions: a,
            color: n,
            look: u,
            hideIcon: _,
            subscriptionTier: b,
            premiumModalAnalyticsLocation: f,
            giftMessage: g,
            onClick: h
        } = e, A = (0, o.Ay)(), x = p(b);
        return (0, r.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: b,
            premiumModalAnalyticsLocation: f,
            giftMessage: g,
            onClick: h,
            children: e => {
                let {
                    onClick: o
                } = e;
                return (0, r.jsxs)(l.$n, {
                    "data-migration-pending": !0,
                    innerClassName: m.Nq,
                    color: n ?? ((0, s.Mw)(A) ? l.XD.WHITE : l.XD.BRAND),
                    look: u ?? l.pR.OUTLINED,
                    className: i()(t, m.xP),
                    onClick: o,
                    children: [!_ && (0, r.jsx)(d.okO, {
                        size: "md",
                        color: "currentColor",
                        className: m.ez
                    }), (0, r.jsx)("span", {
                        className: i()(m._d, a?.textClassName),
                        children: a?.textOverride ?? x
                    })]
                })
            }
        })
    }