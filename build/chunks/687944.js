/** Chunk was on 5606 **/
/** chunk id: 687944, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var r = n(627968);
n(64700);
var i = n(990078),
    l = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(532794),
    c = n(832946),
    d = n(97352),
    u = n(392943),
    p = n(927578),
    _ = n(580630),
    m = n(511484),
    g = n(811611),
    f = n(473702),
    b = n(788868),
    h = n(652215),
    A = n(985018),
    E = n(424850),
    x = n(818724);
let O = {
    page: h.liQ.USER_SETTINGS,
    section: h.JJy.SETTINGS_PREMIUM,
    object: h.ZSU.CARD
};

function C(e) {
    let {
        premiumSubscription: t,
        discountInfo: n,
        invoicePreview: i,
        isDiscountActive: s
    } = e, a = p.Ay.getPlanIdFromInvoice(t, i), o = d.A.get(a);
    if (null == o || null == i || null == n || null == n.duration || null == n.percentage) return null;
    let c = i.invoiceItems.find(e => {
        let {
            subscriptionPlanId: t
        } = e;
        return t === o.id
    });
    if (null == c) return null;
    let u = (0, _.$g)(c.amount, i.currency),
        m = (0, p.y8)(b.gD.PREMIUM_MONTH_TIER_2, !1, !1, {
            currency: t.currency,
            paymentSourceId: t.paymentSourceId
        }),
        g = (0, _.$g)(m.amount, m.currency);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: A.intl.format(A.t["50bA2I"], {
                percent: n.percentage
            })
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: s ? A.intl.format(A.t["3ZiutU"], {
                percent: n.percentage,
                numMonths: n.duration,
                regularPrice: g
            }) : A.intl.format(A.t.N43FMx, {
                numMonths: n.duration,
                discountedPrice: u,
                billingPeriod: A.intl.string(A.t.FPybU7),
                fullPrice: g
            })
        })]
    })
}

function y(e) {
    let {
        discountOffer: t,
        premiumSubscription: n
    } = e, i = (0, m.tQ)(n, b.gD.PREMIUM_MONTH_TIER_2, t);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Heading, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: A.intl.format(A.t.sFO20P, {
                percent: t.discount.amount
            })
        }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: A.intl.format(A.t["PH7Q+R"], {
                numMonths: t.discount.user_usage_limit,
                discountedPrice: i,
                billingPeriod: (0, p.Ke)(t.discount.user_usage_limit_interval)
            })
        })]
    })
}
let j = function(e) {
    let t, d, {
            subscription: _,
            invoicePreview: m,
            isLoading: b,
            analyticsLocation: j,
            discountInfo: T,
            renewalChurnDiscountInfo: v,
            discountOffer: S
        } = e,
        {
            analyticsLocations: I
        } = (0, a.Ay)(s.A.CHURN_DISCOUNT_SUBSCRIPTION_HEADER),
        N = e => {
            (0, l.mMO)(async () => {
                let {
                    PremiumBrandRefreshSubscriptionCancellationModal: t
                } = await n.e("72820").then(n.bind(n, 281439));
                return n => {
                    var i, l;
                    return (0, r.jsx)(t, (i = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                var r;
                                r = n[t], t in e ? Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = r
                            })
                        }
                        return e
                    }({}, n), l = l = {
                        premiumSubscription: _,
                        analyticsLocation: j,
                        analyticsLocations: I,
                        initialStep: e
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                    }), i))
                }
            })
        },
        P = p.Ay.getPlanIdFromInvoice(_, m),
        R = (0, g.ux)(null == S ? void 0 : S.expires_at);
    return (0, c.m1)(P) ? null : (0, r.jsx)("div", {
        className: E.S6,
        children: (0, r.jsx)(l.hLv, {
            color: "nitro-pink",
            className: E.YL,
            children: (0, r.jsxs)("div", {
                className: E.mK,
                children: [(0, r.jsxs)("div", {
                    className: E.Gp,
                    children: [(0, r.jsx)(u.A, {
                        color: "currentcolor",
                        className: E.fJ,
                        "aria-label": A.intl.string(A.t.lpNrPu)
                    }), (0, r.jsx)(l.Text, {
                        className: E.tD,
                        variant: "text-sm/medium",
                        color: "text-strong",
                        children: null != S && R
                    })]
                }), (0, r.jsx)("div", {
                    className: E.T
                }), (0, r.jsxs)("div", {
                    className: E.ly,
                    children: [(0, r.jsxs)("div", {
                        className: E.Yc,
                        children: [null != S ? (0, r.jsx)(y, {
                            discountOffer: S,
                            premiumSubscription: _
                        }) : (0, r.jsx)(C, {
                            premiumSubscription: _,
                            discountInfo: null != T ? T : v,
                            invoicePreview: m,
                            isDiscountActive: null != T
                        }), (0, r.jsx)("div", {
                            className: E.e_,
                            children: (t = p.Ay.isSwitchingPlansDisabled(_), d = p.Ay.getSwitchingPlansDisabledMessage(_), p.Ay.isBaseSubscriptionCanceled(_) ? (0, r.jsx)(l.Button, {
                                variant: "expressive",
                                icon: l.tvc,
                                size: "md",
                                text: A.intl.string(A.t.zrCzVB),
                                loading: b,
                                onClick: () => N(f.g.CONFIRM_DISCOUNT)
                            }) : (0, r.jsxs)("div", {
                                className: E.qK,
                                children: [(0, r.jsx)(i.m, {
                                    text: d,
                                    shouldShow: t && null != d,
                                    asContainer: !0,
                                    children: (0, r.jsx)(l.Button, {
                                        variant: "expressive",
                                        disabled: t,
                                        text: A.intl.string(A.t["dylp/7"]),
                                        size: "md",
                                        onClick: () => {
                                            (0, o.A)({
                                                analyticsLocations: I,
                                                analyticsLocation: j,
                                                analyticsObject: O,
                                                subscription: _
                                            })
                                        }
                                    })
                                }), (0, r.jsx)(l.Button, {
                                    variant: "secondary",
                                    size: "md",
                                    text: A.intl.string(A.t["ETE/oC"]),
                                    loading: b,
                                    onClick: () => {
                                        _.status !== h.Dmq.CANCELED && N()
                                    }
                                })]
                            }))
                        })]
                    }), (0, r.jsx)("img", {
                        className: E.Hp,
                        src: x,
                        alt: "",
                        draggable: !1
                    })]
                })]
            })
        })
    })
}