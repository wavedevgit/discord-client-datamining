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
    A = n(788868),
    m = n(985018),
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
    } = e, I = (0, c.V)(), f = I?.subscription_trial, N = (0, d.O)(), b = (0, r.FY)({
        intervalType: f?.interval,
        intervalCount: f?.interval_count
    }), v = (0, o.G)({
        defaultResponse: m.intl.string(m.t["8x0jKT"]),
        onNonTier2Subscriber: m.intl.string(m.t.IJI7yk),
        onTier2TrialOffer: b,
        onTier0TrialOffer: b,
        onDiscountOffer: m.intl.formatToPlainString(m.t.bkQ4bH, {
            percent: N?.discount.amount
        })
    }), O = (0, _.Q)(C);
    return (0, i.jsxs)("div", {
        className: l()(h.L_, O?.overlayContainer?.className),
        children: [(0, i.jsx)(g.A, {
            title: t,
            cardVariantStyleInfo: O,
            titleClassName: n,
            subtitle: p,
            description: x,
            isOverlay: !0
        }), T && (0, i.jsx)(u.A, {
            className: s,
            look: a.$n.Looks.BLANK,
            color: a.$n.Colors.CUSTOM,
            subscriptionTier: A.pe.TIER_2,
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