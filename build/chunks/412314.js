/** chunk id: 412314 params = (module,exports,require) **/
i.d(e, {
    M: () => C
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
    p = i(985018),
    g = i(476791),
    x = i(303930),
    h = i(398932);
let C = () => {
    let {
        transitionState: t,
        onClose: e,
        premiumType: i,
        premiumSubscription: C,
        setStep: P,
        applyOffer: y,
        churnUserDiscountOffer: v,
        discountedPrice: j,
        fullPrice: E
    } = (0, d.X)(), [_, D] = (0, r.useState)(!1), [N, S] = (0, r.useState)(!1), A = async () => {
        if (null === v) return void S(!0);
        D(!0), S(!1);
        try {
            await y(), P(c.g.DISCOUNT_APPLIED)
        } catch (t) {
            S(!0), D(!1)
        }
    };
    if (null === v || null === j) return (0, n.jsx)("div", {
        className: g.dc,
        children: (0, n.jsx)(a.y$y, {})
    });
    let M = i === m.PremiumTypes.TIER_2,
        T = [{
            text: p.intl.string(p.t.zl7LZp),
            onClick: () => e(),
            variant: "secondary",
            disabled: _
        }, {
            text: p.intl.string(p.t.CKSuZJ),
            onClick: () => A(),
            variant: "primary",
            icon: a.tvc,
            loading: _,
            disabled: _
        }];
    return (0, n.jsxs)(l.ExpressiveModal, {
        graphic: {
            type: "image",
            src: M ? h.A : x
        },
        gradientColor: M ? "nitro-pink" : "nitro-green",
        transitionState: t,
        title: C.status === f.Dmq.CANCELED ? p.intl.string(p.t["2Otzti"]) : `${p.intl.format(p.t.q9Vxu4,{percent:v.discount.amount})}`,
        actions: T,
        onClose: async () => e(),
        children: [(0, n.jsx)("div", {
            className: g.TA,
            children: (0, n.jsx)(o._, {
                userDiscountOffer: v,
                offerState: o.b.CONFIRMING
            })
        }), (0, n.jsx)("div", {
            className: g.V6,
            children: (0, n.jsx)(a.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: C.status === f.Dmq.CANCELED ? p.intl.format(p.t.mY3ysK, {
                    discountedPrice: j,
                    billingPeriod: (0, u.Ke)(v.discount.user_usage_limit_interval),
                    numMonths: v.discount.user_usage_limit,
                    fullPrice: E,
                    paidURL: s.A.getArticleURL(f.MVz.PAID_TERMS)
                }) : p.intl.format(p.t.hrGTjG, {
                    discountedPrice: j,
                    billingPeriod: (0, u.Ke)(v.discount.user_usage_limit_interval),
                    numMonths: v.discount.user_usage_limit,
                    fullPrice: E,
                    helpdeskArticle: s.A.getArticleURL(f.MVz.PAID_TERMS)
                })
            })
        }), N ? (0, n.jsx)(l.wx6, {
            type: "critical",
            children: p.intl.string(p.t["5mlOCW"])
        }) : null]
    })
}