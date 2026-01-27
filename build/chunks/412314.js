/** Chunk was on web.js **/
/** chunk id: 412314, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    M: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(397927),
    s = n(975571),
    l = n(927578),
    c = n(816252),
    u = n(473702),
    d = n(916974),
    f = n(788868),
    p = n(652215),
    _ = n(985018),
    h = n(555672),
    m = n(303930),
    g = n(398932);
let E = () => {
    let {
        transitionState: e,
        onClose: t,
        premiumType: n,
        premiumSubscription: E,
        setStep: y,
        applyOffer: b,
        churnUserDiscountOffer: O,
        discountedPrice: v,
        fullPrice: A
    } = (0, d.X)(), [I, S] = (0, i.useState)(!1), [T, C] = (0, i.useState)(!1), N = async () => {
        if (null === O) return void C(!0);
        S(!0), C(!1);
        try {
            await b(), y(u.g.DISCOUNT_APPLIED)
        } catch (e) {
            C(!0), S(!1)
        }
    };
    if (null === O || null === v) return (0, r.jsx)("div", {
        className: h.dc,
        children: (0, r.jsx)(o.y$y, {})
    });
    let w = n === f.PremiumTypes.TIER_2,
        R = [{
            text: _.intl.string(_.t.zl7LZp),
            onClick: () => t(),
            variant: "secondary",
            disabled: I
        }, {
            text: _.intl.string(_.t.CKSuZJ),
            onClick: () => N(),
            variant: "primary",
            icon: o.tvc,
            loading: I,
            disabled: I
        }];
    return (0, r.jsxs)(a.ExpressiveModal, {
        graphic: {
            type: "image",
            src: w ? g.A : m
        },
        gradientColor: w ? "nitro-pink" : "nitro-green",
        transitionState: e,
        title: E.status === p.Dmq.CANCELED ? _.intl.string(_.t["2Otzti"]) : "".concat(_.intl.format(_.t.q9Vxu4, {
            percent: O.discount.amount
        })),
        actions: R,
        onClose: async () => t(),
        children: [(0, r.jsx)("div", {
            className: h.TA,
            children: (0, r.jsx)(c._, {
                userDiscountOffer: O,
                offerState: c.b.CONFIRMING
            })
        }), (0, r.jsx)("div", {
            className: h.V6,
            children: (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: E.status === p.Dmq.CANCELED ? _.intl.format(_.t.mY3ysK, {
                    discountedPrice: v,
                    billingPeriod: (0, l.Ke)(O.discount.user_usage_limit_interval),
                    numMonths: O.discount.user_usage_limit,
                    fullPrice: A,
                    paidURL: s.A.getArticleURL(p.MVz.PAID_TERMS)
                }) : _.intl.format(_.t.hrGTjG, {
                    discountedPrice: v,
                    billingPeriod: (0, l.Ke)(O.discount.user_usage_limit_interval),
                    numMonths: O.discount.user_usage_limit,
                    fullPrice: A,
                    helpdeskArticle: s.A.getArticleURL(p.MVz.PAID_TERMS)
                })
            })
        }), T ? (0, r.jsx)(a.wx6, {
            type: "critical",
            children: _.intl.string(_.t["5mlOCW"])
        }) : null]
    })
}