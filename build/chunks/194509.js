/** chunk id: 194509, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h,
    U: () => _
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(582754),
    s = n(421380),
    l = n(397927),
    c = n(736653),
    u = n(783420),
    d = n(788868),
    f = n(985018),
    p = n(194597);
let _ = e => e === d.pe.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t.Ve9Ge6),
    h = e => {
        let {
            className: t,
            textOptions: n,
            color: i,
            look: d,
            hideIcon: f,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: m,
            giftMessage: g,
            onClick: E
        } = e, y = (0, c.Ay)(), b = _(h);
        return (0, r.jsx)(u.A, {
            isGift: !0,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: m,
            giftMessage: g,
            onClick: E,
            children: e => {
                var c;
                let {
                    onClick: u
                } = e;
                return (0, r.jsxs)(s.$n, {
                    "data-migration-pending": !0,
                    innerClassName: p.Nq,
                    color: null != i ? i : (0, o.Mw)(y) ? s.XD.WHITE : s.XD.BRAND,
                    look: null != d ? d : s.pR.OUTLINED,
                    className: a()(t, p.xP),
                    onClick: u,
                    children: [!f && (0, r.jsx)(l.okO, {
                        size: "md",
                        color: "currentColor",
                        className: p.ez
                    }), (0, r.jsx)("span", {
                        className: a()(p._d, null == n ? void 0 : n.textClassName),
                        children: null != (c = null == n ? void 0 : n.textOverride) ? c : b
                    })]
                })
            }
        })
    }