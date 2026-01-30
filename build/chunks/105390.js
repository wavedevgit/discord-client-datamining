/** chunk id: 105390, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ag: () => y,
    MA: () => b,
    fY: () => v
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(990078),
    a = n(397927),
    d = n(496431),
    u = n(405269),
    c = n(927578),
    h = n(234419),
    p = n(915516),
    g = n(985018),
    f = n(271300);

function C(e) {
    let {
        isTabSelected: t,
        expiresAt: n,
        badgeCopy: r,
        className: c,
        tooltipTextOverride: h,
        tooltipPosition: p
    } = e, C = s.useMemo(() => Date.parse(n), [n]), y = (0, d.A)(C, 6e4);
    return Object.values(y).every(e => 0 === e) ? null : (0, i.jsx)(o.m, {
        text: null != h ? h : (0, u.uN)(y, {
            days: g.t.qVGNkU,
            hours: g.t.wyg9a9,
            minutes: g.t.IzmIlV
        }),
        position: null != p ? p : "top",
        children: (0, i.jsxs)("div", {
            className: l()(f.Fg, f.C8, c, {
                [f.WO]: t
            }),
            children: [(0, i.jsx)(a.O4, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: f._q
            }), (0, i.jsx)(a.Text, {
                variant: "eyebrow",
                color: "text-strong",
                children: r
            })]
        })
    })
}

function y(e) {
    var t;
    let {
        isTabSelected: n,
        trialOffer: s
    } = e, r = null == (t = (0, h.V)()) ? void 0 : t.subscription_trial, l = (0, c.tS)({
        intervalType: null == r ? void 0 : r.interval,
        intervalCount: null == r ? void 0 : r.interval_count
    }), o = (0, p.Fu)(s);
    return (0, i.jsx)(b, {
        isTabSelected: n,
        badgeCopy: l,
        offerExpiresAt: s.expires_at,
        tooltipTextOverride: o,
        tooltipPosition: "right"
    })
}

function v(e) {
    let {
        isTabSelected: t,
        userDiscount: n,
        includesAmountOff: s
    } = e, r = g.intl.formatToPlainString(g.t.iiLbvu, {
        percent: n.discount.amount
    }), l = (0, p.__)(n);
    return (0, i.jsx)(b, {
        isTabSelected: t,
        badgeCopy: s ? r : g.intl.string(g.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right"
    })
}

function b(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: r,
        tooltipPosition: o
    } = e;
    return null != s ? (0, i.jsx)(C, {
        expiresAt: s,
        isTabSelected: t,
        badgeCopy: n,
        tooltipTextOverride: r,
        tooltipPosition: o
    }) : (0, i.jsx)("div", {
        className: l()(f.Fg, f.AT),
        children: (0, i.jsx)(a.Text, {
            variant: "eyebrow",
            className: f.md,
            children: n
        })
    })
}