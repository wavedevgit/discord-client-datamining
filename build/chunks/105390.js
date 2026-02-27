/** chunk id: 105390, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ag: () => E,
    MA: () => f,
    fY: () => A
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    o = n(990078),
    a = n(397927),
    c = n(496431),
    d = n(405269),
    u = n(927578),
    h = n(234419),
    _ = n(915516),
    S = n(985018),
    p = n(271300);

function m(e) {
    let {
        isTabSelected: t,
        expiresAt: n,
        badgeCopy: r,
        className: u,
        tooltipTextOverride: h,
        tooltipPosition: _
    } = e, m = s.useMemo(() => Date.parse(n), [n]), E = (0, c.A)(m, 6e4);
    return Object.values(E).every(e => 0 === e) ? null : (0, i.jsx)(o.m, {
        text: null != h ? h : (0, d.uN)(E, {
            days: S.t.qVGNkU,
            hours: S.t.wyg9a9,
            minutes: S.t.IzmIlV
        }),
        position: null != _ ? _ : "top",
        children: (0, i.jsxs)("div", {
            className: l()(p.Fg, p.C8, u, {
                [p.WO]: t
            }),
            children: [(0, i.jsx)(a.O4, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: p._q
            }), (0, i.jsx)(a.Text, {
                variant: "eyebrow",
                color: "text-strong",
                children: r
            })]
        })
    })
}

function E(e) {
    let {
        isTabSelected: t,
        trialOffer: n
    } = e, s = (0, h.V)()?.subscription_trial, r = (0, u.tS)({
        intervalType: s?.interval,
        intervalCount: s?.interval_count
    }), l = (0, _.Fu)(n);
    return (0, i.jsx)(f, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right"
    })
}

function A(e) {
    let {
        isTabSelected: t,
        userDiscount: n,
        includesAmountOff: s
    } = e, r = S.intl.formatToPlainString(S.t.iiLbvu, {
        percent: n.discount.amount
    }), l = (0, _.__)(n);
    return (0, i.jsx)(f, {
        isTabSelected: t,
        badgeCopy: s ? r : S.intl.string(S.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right"
    })
}

function f(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: r,
        tooltipPosition: o
    } = e;
    return null != s ? (0, i.jsx)(m, {
        expiresAt: s,
        isTabSelected: t,
        badgeCopy: n,
        tooltipTextOverride: r,
        tooltipPosition: o
    }) : (0, i.jsx)("div", {
        className: l()(p.Fg, p.AT),
        children: (0, i.jsx)(a.Text, {
            variant: "eyebrow",
            className: p.md,
            children: n
        })
    })
}