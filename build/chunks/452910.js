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
    _ = n(543233),
    g = n(76707),
    m = n(788868),
    A = n(985018),
    h = n(538662);
let p = e => {
    let {
        title: t,
        titleClassName: n,
        buttonClassName: s,
        subtitle: p,
        description: x,
        descriptionCta: E,
        isPremiumGetCta: T,
        onCtaClick: S,
        cardVariant: C
    } = e, f = (0, c.V)(), N = f?.subscription_trial, b = (0, d.O)(), I = (0, r.FY)({
        intervalType: N?.interval,
        intervalCount: N?.interval_count
    }), v = (0, o.G)({
        defaultResponse: A.intl.string(A.t["8x0jKT"]),
        onNonTier2Subscriber: A.intl.string(A.t.IJI7yk),
        onTier2TrialOffer: I,
        onTier0TrialOffer: I,
        onDiscountOffer: A.intl.formatToPlainString(A.t.bkQ4bH, {
            percent: b?.discount.amount
        })
    }), j = (0, _.Q)(C);
    return (0, i.jsxs)("div", {
        className: l()(h.L_, j?.overlayContainer?.className),
        children: [(0, i.jsx)(g.A, {
            title: t,
            cardVariantStyleInfo: j,
            titleClassName: n,
            subtitle: p,
            description: x,
            isOverlay: !0
        }), T && (0, i.jsx)(u.A, {
            className: s,
            look: a.$n.Looks.BLANK,
            color: a.$n.Colors.CUSTOM,
            subscriptionTier: m.pe.TIER_2,
            textOptions: {
                textOverride: v
            },
            showGradient: !0
        }), null != E && null != S && (0, i.jsx)(a.$n, {
            "data-migration-pending": !0,
            className: s,
            onClick: S,
            children: E
        })]
    })
}