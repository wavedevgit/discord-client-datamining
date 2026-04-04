/** chunk id: 105390 params = (module,exports,require) **/
n.d(t, {
    Ag: () => g,
    MA: () => A,
    fY: () => _
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
    m = n(915516),
    p = n(985018),
    E = n(377947);

function S(e) {
    let {
        isTabSelected: t,
        expiresAt: n,
        badgeCopy: r,
        className: u,
        tooltipTextOverride: h,
        tooltipPosition: m
    } = e, S = s.useMemo(() => Date.parse(n), [n]), g = (0, c.A)(S, 6e4);
    return Object.values(g).every(e => 0 === e) ? null : (0, i.jsx)(o.m, {
        text: null != h ? h : (0, d.uN)(g, {
            days: p.t.qVGNkU,
            hours: p.t.wyg9a9,
            minutes: p.t.IzmIlV
        }),
        position: null != m ? m : "top",
        children: (0, i.jsxs)("div", {
            className: l()(E.Fg, E.C8, u, {
                [E.WO]: t
            }),
            children: [(0, i.jsx)(a.O4, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: E._q
            }), (0, i.jsx)(a.Text, {
                variant: "eyebrow",
                color: "text-strong",
                children: r
            })]
        })
    })
}

function g(e) {
    let {
        isTabSelected: t,
        trialOffer: n
    } = e, s = (0, h.V)()?.subscription_trial, r = (0, u.tS)({
        intervalType: s?.interval,
        intervalCount: s?.interval_count
    }), l = (0, m.Fu)(n);
    return (0, i.jsx)(A, {
        isTabSelected: t,
        badgeCopy: r,
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right"
    })
}

function _(e) {
    let {
        isTabSelected: t,
        userDiscount: n,
        includesAmountOff: s
    } = e, r = p.intl.formatToPlainString(p.t.iiLbvu, {
        percent: n.discount.amount
    }), l = (0, m.__)(n);
    return (0, i.jsx)(A, {
        isTabSelected: t,
        badgeCopy: s ? r : p.intl.string(p.t["/DTtr6"]),
        offerExpiresAt: n.expires_at,
        tooltipTextOverride: l,
        tooltipPosition: "right"
    })
}

function A(e) {
    let {
        isTabSelected: t,
        badgeCopy: n,
        offerExpiresAt: s,
        tooltipTextOverride: r,
        tooltipPosition: o
    } = e;
    return null != s ? (0, i.jsx)(S, {
        expiresAt: s,
        isTabSelected: t,
        badgeCopy: n,
        tooltipTextOverride: r,
        tooltipPosition: o
    }) : (0, i.jsx)("div", {
        className: l()(E.Fg, E.AT),
        children: (0, i.jsx)(a.Text, {
            variant: "eyebrow",
            className: E.md,
            children: n
        })
    })
}