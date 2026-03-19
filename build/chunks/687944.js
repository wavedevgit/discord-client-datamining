/** chunk id: 687944 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968);
n(64700);
var s = n(990078),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(532794),
    d = n(832946),
    c = n(97352),
    u = n(392943),
    _ = n(927578),
    m = n(580630),
    g = n(511484),
    A = n(811611),
    x = n(473702),
    h = n(788868),
    p = n(652215),
    T = n(985018),
    E = n(888668),
    S = n(818724);
let C = {
    page: p.liQ.USER_SETTINGS,
    section: p.JJy.SETTINGS_PREMIUM,
    object: p.ZSU.CARD
};

function f(e) {
    let {
        premiumSubscription: t,
        discountInfo: n,
        invoicePreview: s,
        isDiscountActive: a
    } = e, r = _.Ay.getPlanIdFromInvoice(t, s), o = c.A.get(r);
    if (null == o || null == s || null == n || null == n.duration || null == n.percentage) return null;
    let d = s.invoiceItems.find(e => {
        let {
            subscriptionPlanId: t
        } = e;
        return t === o.id
    });
    if (null == d) return null;
    let u = (0, m.$g)(d.amount, s.currency),
        g = (0, _.y8)(h.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        A = (0, m.$g)(g.amount, g.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: T.intl.format(T.t["50bA2I"], {
                percent: n.percentage
            })
        }), (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: a ? T.intl.format(T.t["3ZiutU"], {
                percent: n.percentage,
                numMonths: n.duration,
                regularPrice: A
            }) : T.intl.format(T.t.N43FMx, {
                numMonths: n.duration,
                discountedPrice: u,
                billingPeriod: T.intl.string(T.t.FPybU7),
                fullPrice: A
            })
        })]
    })
}

function b(e) {
    let {
        discountOffer: t,
        premiumSubscription: n
    } = e, s = (0, g.tQ)(n, h.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: T.intl.format(T.t.sFO20P, {
                percent: t.discount.amount
            })
        }), (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: T.intl.format(T.t["PH7Q+R"], {
                numMonths: t.discount.user_usage_limit,
                discountedPrice: s,
                billingPeriod: (0, _.Ke)(t.discount.user_usage_limit_interval)
            })
        })]
    })
}
let N = function(e) {
    let t, c, {
            subscription: m,
            invoicePreview: g,
            isLoading: h,
            analyticsLocation: N,
            discountInfo: I,
            renewalChurnDiscountInfo: v,
            discountOffer: j
        } = e,
        {
            analyticsLocations: y
        } = (0, r.Ay)(a.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        R = e => {
            (0, l.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: t
                } = await Promise.all([n.e("41353"), n.e("35432"), n.e("49561")]).then(n.bind(n, 281439));
                return n => (0, i.jsx)(t, {
                    ...n,
                    premiumSubscription: m,
                    analyticsLocation: N,
                    analyticsLocations: y,
                    initialStep: e
                })
            })
        },
        O = _.Ay.getPlanIdFromInvoice(m, g),
        L = (0, A.ux)(j?.expires_at);
    return (0, d.m1)(O) ? null : (0, i.jsx)("div", {
        className: E.S6,
        children: (0, i.jsx)(l.hLv, {
            color: "nitro-pink",
            className: E.YL,
            children: (0, i.jsxs)("div", {
                className: E.mK,
                children: [(0, i.jsxs)("div", {
                    className: E.Gp,
                    children: [(0, i.jsx)(u.A, {
                        color: "currentcolor",
                        className: E.fJ,
                        "aria-label": T.intl.string(T.t.lpNrPu)
                    }), (0, i.jsx)(l.Text, {
                        className: E.tD,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != j && L
                    })]
                }), (0, i.jsx)("div", {
                    className: E.T
                }), (0, i.jsxs)("div", {
                    className: E.ly,
                    children: [(0, i.jsxs)("div", {
                        className: E.Yc,
                        children: [null != j ? (0, i.jsx)(b, {
                            discountOffer: j,
                            premiumSubscription: m
                        }) : (0, i.jsx)(f, {
                            premiumSubscription: m,
                            discountInfo: I ?? v,
                            invoicePreview: g,
                            isDiscountActive: null != I
                        }), (0, i.jsx)("div", {
                            className: E.e_,
                            children: (t = _.Ay.isSwitchingPlansDisabled(m), c = _.Ay.getSwitchingPlansDisabledMessage(m), _.Ay.isBaseSubscriptionCanceled(m) ? (0, i.jsx)(l.Button, {
                                variant: "expressive",
                                icon: l.tvc,
                                size: "md",
                                text: T.intl.string(T.t.zrCzVB),
                                loading: h,
                                onClick: () => R(x.g.CONFIRM_DISCOUNT)
                            }) : (0, i.jsxs)("div", {
                                className: E.qK,
                                children: [(0, i.jsx)(s.m, {
                                    text: c,
                                    shouldShow: t && null != c,
                                    asContainer: !0,
                                    children: (0, i.jsx)(l.Button, {
                                        variant: "expressive",
                                        disabled: t,
                                        text: T.intl.string(T.t["dylp/7"]),
                                        size: "md",
                                        onClick: () => {
                                            (0, o.A)({
                                                analyticsLocations: y,
                                                analyticsLocation: N,
                                                analyticsObject: C,
                                                subscription: m
                                            })
                                        }
                                    })
                                }), (0, i.jsx)(l.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: T.intl.string(T.t["ETE/oC"]),
                                    loading: h,
                                    onClick: () => {
                                        m.status !== p.Dmq.CANCELED && R()
                                    }
                                })]
                            }))
                        })]
                    }), (0, i.jsx)("img", {
                        className: E.Hp,
                        src: S,
                        alt: "",
                        draggable: !1
                    })]
                })]
            })
        })
    })
}