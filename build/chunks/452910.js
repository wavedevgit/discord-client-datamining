/** chunk id: 452910 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(927578),
    o = n(545334),
    d = n(422936),
    c = n(234419),
    u = n(396375),
    m = n(543233),
    _ = n(76707),
    g = n(788868),
    A = n(985018),
    x = n(296388);
let p = e => {
    let {
        title: t,
        titleClassName: n,
        buttonClassName: s,
        subtitle: p,
        description: h,
        descriptionCta: T,
        isPremiumGetCta: E,
        onCtaClick: f,
        cardVariant: S
    } = e, C = (0, c.V)(), b = C?.subscription_trial, N = (0, d.O)(), I = (0, r.FY)({
        intervalType: b?.interval,
        intervalCount: b?.interval_count
    }), v = (0, o.G)({
        defaultResponse: A.intl.string(A.t["8x0jKT"]),
        onNonTier2Subscriber: A.intl.string(A.t.IJI7yk),
        onTier2TrialOffer: I,
        onTier0TrialOffer: I,
        onDiscountOffer: A.intl.formatToPlainString(A.t.bkQ4bH, {
            percent: N?.discount.amount
        })
    }), j = (0, m.Q)(S);
    return (0, i.jsxs)("div", {
        className: l()(x.L_, j?.overlayContainer?.className),
        children: [(0, i.jsx)(_.A, {
            title: t,
            cardVariantStyleInfo: j,
            titleClassName: n,
            subtitle: p,
            description: h,
            isOverlay: !0
        }), E && (0, i.jsx)(u.A, {
            className: s,
            look: a.$n.Looks.BLANK,
            color: a.$n.Colors.CUSTOM,
            subscriptionTier: g.pe.TIER_2,
            textOptions: {
                textOverride: v
            },
            showGradient: !0
        }), null != T && null != f && (0, i.jsx)(a.$n, {
            "data-migration-pending": !0,
            className: s,
            onClick: f,
            children: T
        })]
    })
}