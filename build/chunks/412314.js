/** chunk id: 412314, original params: t,e,i (module,exports,require) **/
i.d(e, {
    M: () => P
});
var n = i(627968),
    r = i(64700),
    l = i(158954),
    a = i(397927),
    s = i(975571),
    u = i(927578),
    o = i(816252),
    c = i(473702),
    d = i(916974),
    m = i(788868),
    f = i(652215),
    g = i(985018),
    p = i(333291),
    x = i(303930),
    h = i(398932);
let P = () => {
    let {
        transitionState: t,
        onClose: e,
        premiumType: i,
        premiumSubscription: P,
        setStep: C,
        applyOffer: y,
        churnUserDiscountOffer: v,
        discountedPrice: E,
        fullPrice: j
    } = (0, d.X)(), [D, _] = (0, r.useState)(!1), [S, A] = (0, r.useState)(!1), N = async () => {
        if (null === v) return void A(!0);
        _(!0), A(!1);
        try {
            await y(), C(c.g.DISCOUNT_APPLIED)
        } catch (t) {
            A(!0), _(!1)
        }
    };
    if (null === v || null === E) return (0, n.jsx)("div", {
        className: p.dc,
        children: (0, n.jsx)(a.y$y, {})
    });
    let T = i === m.PremiumTypes.TIER_2,
        M = [{
            text: g.intl.string(g.t.zl7LZp),
            onClick: () => e(),
            variant: "secondary",
            disabled: D
        }, {
            text: g.intl.string(g.t.CKSuZJ),
            onClick: () => N(),
            variant: "primary",
            icon: a.tvc,
            loading: D,
            disabled: D
        }];
    return (0, n.jsxs)(l.ExpressiveModal, {
        graphic: {
            type: "image",
            src: T ? h.A : x
        },
        gradientColor: T ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title: P.status === f.Dmq.CANCELED ? g.intl.string(g.t["2Otzti"]) : `${g.intl.format(g.t.q9Vxu4,{percent:v.discount.amount})}`,
        actions: M,
        onClose: async () => e(),
        children: [(0, n.jsx)("div", {
            className: p.TA,
            children: (0, n.jsx)(o._, {
                userDiscountOffer: v,
                offerState: o.b.CONFIRMING
            })
        }), (0, n.jsx)("div", {
            className: p.V6,
            children: (0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: P.status === f.Dmq.CANCELED ? g.intl.format(g.t.mY3ysK, {
                    discountedPrice: E,
                    billingPeriod: (0, u.Ke)(v.discount.user_usage_limit_interval),
                    numMonths: v.discount.user_usage_limit,
                    fullPrice: j,
                    paidURL: s.A.getArticleURL(f.MVz.PAID_TERMS)
                }) : g.intl.format(g.t.hrGTjG, {
                    discountedPrice: E,
                    billingPeriod: (0, u.Ke)(v.discount.user_usage_limit_interval),
                    numMonths: v.discount.user_usage_limit,
                    fullPrice: j,
                    helpdeskArticle: s.A.getArticleURL(f.MVz.PAID_TERMS)
                })
            })
        }), S ? (0, n.jsx)(l.wx6, {
            type: "critical",
            children: g.intl.string(g.t["5mlOCW"])
        }) : null]
    })
}