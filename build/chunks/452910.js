/** Chunk was on 2827 **/
/** chunk id: 452910, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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
    _ = n(543233),
    p = n(76707),
    m = n(788868),
    g = n(985018),
    A = n(296388);
let f = e => {
    var t;
    let n, {
            title: i,
            titleClassName: f = "",
            buttonClassName: b = "",
            subtitle: h = "",
            description: E = "",
            descriptionCta: O = "",
            isPremiumGetCta: C,
            onCtaClick: x,
            cardVariant: S
        } = e,
        T = (0, d.V)(),
        I = null == T ? void 0 : T.subscription_trial,
        y = (0, c.O)(),
        N = (0, a.FY)({
            intervalType: null == I ? void 0 : I.interval,
            intervalCount: null == I ? void 0 : I.interval_count
        }),
        j = (0, o.G)({
            defaultResponse: g.intl.string(g.t["8x0jKT"]),
            onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
            onTier2TrialOffer: N,
            onTier0TrialOffer: N,
            onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
                percent: null == y ? void 0 : y.discount.amount
            })
        }),
        v = (0, _.Q)(S);
    return (0, r.jsxs)("div", {
        className: l()(A.L_, null == v || null == (t = v.description) ? void 0 : t.className),
        children: [(0, r.jsx)(p.A, {
            title: i,
            cardVariantStyleInfo: v,
            titleClassName: f,
            subtitle: h,
            description: E
        }), C && (0, r.jsx)(u.A, {
            className: b,
            look: s.$n.Looks.BLANK,
            color: s.$n.Colors.CUSTOM,
            subscriptionTier: m.pe.TIER_2,
            textOptions: {
                textOverride: j
            },
            showGradient: !0
        }), 0 !== O.length && (null == (n = null == v ? void 0 : v.descriptionCta) ? void 0 : n.hideOnHoverComponent) !== !0 && null != x && (0, r.jsx)(s.$n, {
            "data-migration-pending": !0,
            className: b,
            onClick: x,
            children: O
        })]
    })
}