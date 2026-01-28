/** Chunk was on 5606 **/
/** chunk id: 452910, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(927578),
    o = n(545334),
    c = n(422936),
    d = n(234419),
    u = n(396375),
    p = n(543233),
    _ = n(76707),
    m = n(788868),
    g = n(985018),
    f = n(296388);
let b = e => {
    var t;
    let n, {
            title: i,
            titleClassName: b = "",
            buttonClassName: h = "",
            subtitle: A = "",
            description: E = "",
            descriptionCta: x = "",
            isPremiumGetCta: O,
            onCtaClick: C,
            cardVariant: y
        } = e,
        j = (0, d.V)(),
        T = null == j ? void 0 : j.subscription_trial,
        v = (0, c.O)(),
        S = (0, a.FY)({
            intervalType: null == T ? void 0 : T.interval,
            intervalCount: null == T ? void 0 : T.interval_count
        }),
        I = (0, o.G)({
            defaultResponse: g.intl.string(g.t["8x0jKT"]),
            onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
            onTier2TrialOffer: S,
            onTier0TrialOffer: S,
            onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
                percent: null == v ? void 0 : v.discount.amount
            })
        }),
        N = (0, p.Q)(y);
    return (0, r.jsxs)("div", {
        className: l()(f.L_, null == N || null == (t = N.description) ? void 0 : t.className),
        children: [(0, r.jsx)(_.A, {
            title: i,
            cardVariantStyleInfo: N,
            titleClassName: b,
            subtitle: A,
            description: E
        }), O && (0, r.jsx)(u.A, {
            className: h,
            look: s.$n.Looks.BLANK,
            color: s.$n.Colors.CUSTOM,
            subscriptionTier: m.pe.TIER_2,
            textOptions: {
                textOverride: I
            },
            showGradient: !0
        }), 0 !== x.length && (null == (n = null == N ? void 0 : N.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 && null != C && (0, r.jsx)(s.$n, {
            "data-migration-pending": !0,
            className: h,
            onClick: C,
            children: x
        })]
    })
}