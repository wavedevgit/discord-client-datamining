/** Chunk was on web.js **/
/** chunk id: 706276, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(73825),
    s = n(473702),
    l = n(252561),
    c = n(654044),
    u = n(931088),
    d = n(652215),
    f = n(601107),
    p = n(788868),
    _ = n(818348);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            h(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function E(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let y = () => {
        let [e, t] = i.useState(p.PremiumTypes.TIER_0), [n, h] = i.useState(s.g.WHAT_YOU_LOSE), [g, y] = i.useState(null), [O, v] = i.useState(p.gD.PREMIUM_MONTH_TIER_0), [A, I] = i.useState([]), [S, T] = i.useState(() => {
            let e = new Date;
            return e.setMonth(e.getMonth() + 1), e
        }), [C, N] = i.useState(null), [w, R] = i.useState(!1), [P, D] = i.useState(!1), [L, x] = i.useState(!1);
        (0, i.useEffect)(() => {
            (0, o.zS)()
        }, []), (0, i.useEffect)(() => {
            let e = new Date;
            switch (O) {
                case p.gD.PREMIUM_MONTH_TIER_0:
                case p.gD.PREMIUM_MONTH_TIER_1:
                case p.gD.PREMIUM_MONTH_TIER_2:
                    e.setMonth(e.getMonth() + 1);
                    break;
                case p.gD.PREMIUM_YEAR_TIER_0:
                case p.gD.PREMIUM_YEAR_TIER_1:
                case p.gD.PREMIUM_YEAR_TIER_2:
                    e.setFullYear(e.getFullYear() + 1)
            }
            T(e)
        }, [O]), (0, i.useEffect)(() => {
            switch (e) {
                case p.PremiumTypes.TIER_0:
                    I([{
                        label: "Nitro Basic Monthly",
                        value: p.gD.PREMIUM_MONTH_TIER_0
                    }, {
                        label: "Nitro Basic Yearly",
                        value: p.gD.PREMIUM_YEAR_TIER_0
                    }]), v(p.gD.PREMIUM_MONTH_TIER_0);
                    break;
                case p.PremiumTypes.TIER_1:
                    I([{
                        label: "Nitro Classic Monthly",
                        value: p.gD.PREMIUM_MONTH_TIER_1
                    }, {
                        label: "Nitro Classic Yearly",
                        value: p.gD.PREMIUM_YEAR_TIER_1
                    }]), v(p.gD.PREMIUM_MONTH_TIER_1);
                    break;
                case p.PremiumTypes.TIER_2:
                    I([{
                        label: "Nitro Monthly",
                        value: p.gD.PREMIUM_MONTH_TIER_2
                    }, {
                        label: "Nitro Yearly",
                        value: p.gD.PREMIUM_YEAR_TIER_2
                    }]), v(p.gD.PREMIUM_MONTH_TIER_2)
            }
        }, [e]), (0, i.useEffect)(() => {
            [s.g.CONFIRM_DISCOUNT, s.g.DISCOUNT_APPLIED].includes(n) && null === g && y(b()), n === s.g.PREVIEW && null === C && N(new c.A({
                id: "",
                invoiceItems: [{
                    id: "",
                    subscriptionPlanId: O,
                    subscriptionPlanPrice: 200,
                    amount: 400,
                    quantity: 1,
                    discounts: []
                }, {
                    id: "",
                    subscriptionPlanId: p.gD.PREMIUM_MONTH_GUILD,
                    subscriptionPlanPrice: 400,
                    amount: 100,
                    quantity: 1,
                    discounts: []
                }],
                total: 200,
                currency: _.Yr.USD,
                tax: 0,
                taxInclusive: !0,
                subscriptionPeriodStart: new Date,
                subscriptionPeriodEnd: S,
                status: d.lT7.PAID
            })), n !== s.g.PREVIEW && null !== C && N(null)
        }, [n, g, S, O, C]);
        let M = i.useCallback(async () => {
            x(!0), await (0, a.mMO)(async () => t => (0, r.jsx)(u.m, E(m({}, t), {
                onClose: () => {
                    t.onClose(), x(!1)
                },
                premiumType: e,
                churnDiscount: g,
                planId: O,
                renewalInvoice: C,
                renewalInvoiceDetails: {
                    intervalType: p.WT.MONTH,
                    intervalCount: 1
                },
                errorOnCancel: w,
                errorOnRedeem: P,
                setActiveStep: e => {
                    h(e), t.onClose()
                },
                activeStep: n,
                premiumSubscription: {
                    id: "",
                    planId: O,
                    type: _.rz.PREMIUM,
                    items: [],
                    createdAt: new Date,
                    canceledAt: null,
                    currentPeriodStart: new Date,
                    currentPeriodEnd: S,
                    status: d.Dmq.ACTIVE,
                    paymentSourceId: null,
                    paymentGateway: null,
                    paymentGatewayPlanId: null,
                    paymentGatewaySubscriptionId: null,
                    trialId: null,
                    trialEndsAt: null,
                    renewalMutations: null,
                    streakStartedAt: null,
                    currency: _.Yr.USD,
                    pauseEndsAt: null,
                    pauseReason: f.qf.UNKNOWN
                }
            })))
        }, [e, g, O, C, w, P, n, S]);
        return (0, i.useEffect)(() => {
            L && M()
        }, [n, L, M]), (0, r.jsxs)(l.LB, {
            children: [(0, r.jsx)(l.MG, {
                children: (0, r.jsx)(a.l6P, {
                    label: "Premium Subscription",
                    placeholder: "Premium Type",
                    onSelectionChange: t,
                    value: e,
                    options: [{
                        id: "basic",
                        label: "Nitro Basic",
                        value: p.PremiumTypes.TIER_0
                    }, {
                        id: "classic",
                        label: "Nitro Classic",
                        value: p.PremiumTypes.TIER_1
                    }, {
                        id: "default",
                        label: "Nitro",
                        value: p.PremiumTypes.TIER_2
                    }],
                    selectionMode: "single",
                    fullWidth: !0
                })
            }), A.length > 0 && (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(a.l6P, {
                    label: "Subscription Interval",
                    placeholder: "Premium Type",
                    onSelectionChange: v,
                    formatOption: e => {
                        let {
                            label: t,
                            value: n
                        } = e;
                        return {
                            id: n,
                            label: t,
                            value: n
                        }
                    },
                    value: O,
                    options: A,
                    selectionMode: "single",
                    fullWidth: !0
                })
            }), (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(a.l6P, {
                    label: "Modal Step",
                    placeholder: "Premium Type",
                    onSelectionChange: h,
                    value: n,
                    options: [{
                        id: "whatYouLose",
                        label: "What You Lose",
                        value: s.g.WHAT_YOU_LOSE
                    }, {
                        id: "confirmDiscount",
                        label: "Confirm Discount",
                        value: s.g.CONFIRM_DISCOUNT
                    }, {
                        id: "discountApplied",
                        label: "Discount Applied",
                        value: s.g.DISCOUNT_APPLIED
                    }, {
                        id: "confirmCancel",
                        label: "Confirm Cancel",
                        value: s.g.CONFIRM
                    }, {
                        id: "previewInvoice",
                        label: "Preview Invoice",
                        value: s.g.PREVIEW
                    }],
                    selectionMode: "single",
                    fullWidth: !0
                })
            }), (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(a.Checkbox, {
                    checked: null !== g,
                    onChange: () => {
                        null === g ? y(b()) : y(null)
                    },
                    label: "Churn Discount"
                })
            }), (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(a.Checkbox, {
                    checked: P,
                    onChange: () => {
                        D(!P)
                    },
                    label: "Error on Redeem Offer"
                })
            }), (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(a.Checkbox, {
                    checked: w,
                    onChange: () => {
                        R(!w)
                    },
                    label: "Error on Cancel"
                })
            }), (0, r.jsx)(l.nB, {}), (0, r.jsx)(a.Button, {
                onClick: () => {
                    x(!0)
                },
                variant: "primary",
                size: "md",
                text: "Open Cancellation Modal"
            })]
        })
    },
    b = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                discount: t = {}
            } = e;
        return E(m({
            id: "",
            discount_id: "",
            user_id: ""
        }, e), {
            discount: m({
                id: "",
                plan_ids: [],
                user_usage_limit: 3,
                user_usage_limit_interval: p.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40"
            }, t)
        })
    }