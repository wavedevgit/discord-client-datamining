/** chunk id: 687944, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
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
    g = n(580630),
    m = n(511484),
    A = n(811611),
    h = n(473702),
    p = n(788868),
    x = n(652215),
    E = n(985018),
    T = n(888668),
    S = n(818724);
let C = {
    page: x.liQ.USER_SETTINGS,
    section: x.JJy.SETTINGS_PREMIUM,
    object: x.ZSU.CARD
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
    let u = (0, g.$g)(d.amount, s.currency),
        m = (0, _.y8)(p.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        A = (0, g.$g)(m.amount, m.currency);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: E.intl.format(E.t["50bA2I"], {
                percent: n.percentage
            })
        }), (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: a ? E.intl.format(E.t["3ZiutU"], {
                percent: n.percentage,
                numMonths: n.duration,
                regularPrice: A
            }) : E.intl.format(E.t.N43FMx, {
                numMonths: n.duration,
                discountedPrice: u,
                billingPeriod: E.intl.string(E.t.FPybU7),
                fullPrice: A
            })
        })]
    })
}

function I(e) {
    let {
        discountOffer: t,
        premiumSubscription: n
    } = e, s = (0, m.tQ)(n, p.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: E.intl.format(E.t.sFO20P, {
                percent: t.discount.amount
            })
        }), (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: E.intl.format(E.t["PH7Q+R"], {
                numMonths: t.discount.user_usage_limit,
                discountedPrice: s,
                billingPeriod: (0, _.Ke)(t.discount.user_usage_limit_interval)
            })
        })]
    })
}
let b = function(e) {
    let t, c, {
            subscription: g,
            invoicePreview: m,
            isLoading: p,
            analyticsLocation: b,
            discountInfo: N,
            renewalChurnDiscountInfo: v,
            discountOffer: j
        } = e,
        {
            analyticsLocations: O
        } = (0, r.Ay)(a.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        R = e => {
            (0, l.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: t
                } = await Promise.all([n.e("41353"), n.e("35432"), n.e("49561")]).then(n.bind(n, 281439));
                return n => (0, i.jsx)(t, {
                    ...n,
                    premiumSubscription: g,
                    analyticsLocation: b,
                    analyticsLocations: O,
                    initialStep: e
                })
            })
        },
        y = _.Ay.getPlanIdFromInvoice(g, m),
        P = (0, A.ux)(j?.expires_at);
    return (0, d.m1)(y) ? null : (0, i.jsx)("div", {
        className: T.S6,
        children: (0, i.jsx)(l.hLv, {
            color: "nitro-pink",
            className: T.YL,
            children: (0, i.jsxs)("div", {
                className: T.mK,
                children: [(0, i.jsxs)("div", {
                    className: T.Gp,
                    children: [(0, i.jsx)(u.A, {
                        color: "currentcolor",
                        className: T.fJ,
                        "aria-label": E.intl.string(E.t.lpNrPu)
                    }), (0, i.jsx)(l.Text, {
                        className: T.tD,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != j && P
                    })]
                }), (0, i.jsx)("div", {
                    className: T.T
                }), (0, i.jsxs)("div", {
                    className: T.ly,
                    children: [(0, i.jsxs)("div", {
                        className: T.Yc,
                        children: [null != j ? (0, i.jsx)(I, {
                            discountOffer: j,
                            premiumSubscription: g
                        }) : (0, i.jsx)(f, {
                            premiumSubscription: g,
                            discountInfo: N ?? v,
                            invoicePreview: m,
                            isDiscountActive: null != N
                        }), (0, i.jsx)("div", {
                            className: T.e_,
                            children: (t = _.Ay.isSwitchingPlansDisabled(g), c = _.Ay.getSwitchingPlansDisabledMessage(g), _.Ay.isBaseSubscriptionCanceled(g) ? (0, i.jsx)(l.Button, {
                                variant: "expressive",
                                icon: l.tvc,
                                size: "md",
                                text: E.intl.string(E.t.zrCzVB),
                                loading: p,
                                onClick: () => R(h.g.CONFIRM_DISCOUNT)
                            }) : (0, i.jsxs)("div", {
                                className: T.qK,
                                children: [(0, i.jsx)(s.m, {
                                    text: c,
                                    shouldShow: t && null != c,
                                    asContainer: !0,
                                    children: (0, i.jsx)(l.Button, {
                                        variant: "expressive",
                                        disabled: t,
                                        text: E.intl.string(E.t["dylp/7"]),
                                        size: "md",
                                        onClick: () => {
                                            (0, o.A)({
                                                analyticsLocations: O,
                                                analyticsLocation: b,
                                                analyticsObject: C,
                                                subscription: g
                                            })
                                        }
                                    })
                                }), (0, i.jsx)(l.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: E.intl.string(E.t["ETE/oC"]),
                                    loading: p,
                                    onClick: () => {
                                        g.status !== x.Dmq.CANCELED && R()
                                    }
                                })]
                            }))
                        })]
                    }), (0, i.jsx)("img", {
                        className: T.Hp,
                        src: S,
                        alt: "",
                        draggable: !1
                    })]
                })]
            })
        })
    })
}