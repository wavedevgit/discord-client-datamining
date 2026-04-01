/** chunk id: 706276 params = (module,exports,require) **/
l.d(t, {
    o: () => x
});
var a = l(627968),
    n = l(64700),
    r = l(397927),
    i = l(73825),
    o = l(473702),
    s = l(252561),
    u = l(654044),
    d = l(931088),
    c = l(652215),
    p = l(601107),
    m = l(788868),
    h = l(818348);
let x = () => {
        let [e, t] = n.useState(m.PremiumTypes.TIER_0), [l, x] = n.useState(o.g.WHAT_YOU_LOSE), [y, g] = n.useState(null), [f, v] = n.useState(m.gD.PREMIUM_MONTH_TIER_0), [_, E] = n.useState([]), [C, j] = n.useState(() => {
            let e = new Date;
            return e.setMonth(e.getMonth() + 1), e
        }), [S, T] = n.useState(null), [A, P] = n.useState(!1), [k, I] = n.useState(!1), [R, N] = n.useState(!1);
        (0, n.useEffect)(() => {
            (0, i.zS)()
        }, []), (0, n.useEffect)(() => {
            let e = new Date;
            switch (f) {
                case m.gD.PREMIUM_MONTH_TIER_0:
                case m.gD.PREMIUM_MONTH_TIER_1:
                case m.gD.PREMIUM_MONTH_TIER_2:
                    e.setMonth(e.getMonth() + 1);
                    break;
                case m.gD.PREMIUM_YEAR_TIER_0:
                case m.gD.PREMIUM_YEAR_TIER_1:
                case m.gD.PREMIUM_YEAR_TIER_2:
                    e.setFullYear(e.getFullYear() + 1)
            }
            j(e)
        }, [f]), (0, n.useEffect)(() => {
            switch (e) {
                case m.PremiumTypes.TIER_0:
                    E([{
                        label: "Nitro Basic Monthly",
                        value: m.gD.PREMIUM_MONTH_TIER_0
                    }, {
                        label: "Nitro Basic Yearly",
                        value: m.gD.PREMIUM_YEAR_TIER_0
                    }]), v(m.gD.PREMIUM_MONTH_TIER_0);
                    break;
                case m.PremiumTypes.TIER_1:
                    E([{
                        label: "Nitro Classic Monthly",
                        value: m.gD.PREMIUM_MONTH_TIER_1
                    }, {
                        label: "Nitro Classic Yearly",
                        value: m.gD.PREMIUM_YEAR_TIER_1
                    }]), v(m.gD.PREMIUM_MONTH_TIER_1);
                    break;
                case m.PremiumTypes.TIER_2:
                    E([{
                        label: "Nitro Monthly",
                        value: m.gD.PREMIUM_MONTH_TIER_2
                    }, {
                        label: "Nitro Yearly",
                        value: m.gD.PREMIUM_YEAR_TIER_2
                    }]), v(m.gD.PREMIUM_MONTH_TIER_2)
            }
        }, [e]), (0, n.useEffect)(() => {
            [o.g.CONFIRM_DISCOUNT, o.g.DISCOUNT_APPLIED].includes(l) && null === y && g(b()), l === o.g.PREVIEW && null === S && T(new u.A({
                id: "",
                invoiceItems: [{
                    id: "",
                    subscriptionPlanId: f,
                    subscriptionPlanPrice: 200,
                    amount: 400,
                    quantity: 1,
                    discounts: []
                }, {
                    id: "",
                    subscriptionPlanId: m.gD.PREMIUM_MONTH_GUILD,
                    subscriptionPlanPrice: 400,
                    amount: 100,
                    quantity: 1,
                    discounts: []
                }],
                total: 200,
                currency: h.Yr.USD,
                tax: 0,
                taxInclusive: !0,
                subscriptionPeriodStart: new Date,
                subscriptionPeriodEnd: C,
                status: c.lT7.PAID
            })), l !== o.g.PREVIEW && null !== S && T(null)
        }, [l, y, C, f, S]);
        let D = n.useCallback(async () => {
            N(!0), await (0, r.mMO)(async () => t => (0, a.jsx)(d.m, {
                ...t,
                onClose: () => {
                    t.onClose(), N(!1)
                },
                premiumType: e,
                churnDiscount: y,
                planId: f,
                renewalInvoice: S,
                renewalInvoiceDetails: {
                    intervalType: m.WT.MONTH,
                    intervalCount: 1
                },
                errorOnCancel: A,
                errorOnRedeem: k,
                setActiveStep: e => {
                    x(e), t.onClose()
                },
                activeStep: l,
                premiumSubscription: {
                    id: "",
                    planId: f,
                    type: h.rz.PREMIUM,
                    items: [],
                    createdAt: new Date,
                    canceledAt: null,
                    currentPeriodStart: new Date,
                    currentPeriodEnd: C,
                    status: c.Dmq.ACTIVE,
                    paymentSourceId: null,
                    paymentGateway: null,
                    paymentGatewayPlanId: null,
                    paymentGatewaySubscriptionId: null,
                    trialId: null,
                    trialEndsAt: null,
                    renewalMutations: null,
                    streakStartedAt: null,
                    currency: h.Yr.USD,
                    pauseEndsAt: null,
                    pauseReason: p.qf.UNKNOWN
                }
            }))
        }, [e, y, f, S, A, k, l, C]);
        return (0, n.useEffect)(() => {
            R && D()
        }, [l, R, D]), (0, a.jsxs)(s.LB, {
            children: [(0, a.jsx)(s.MG, {
                children: (0, a.jsx)(r.l6P, {
                    label: "Premium Subscription",
                    placeholder: "Premium Type",
                    onSelectionChange: t,
                    value: e,
                    options: [{
                        id: "basic",
                        label: "Nitro Basic",
                        value: m.PremiumTypes.TIER_0
                    }, {
                        id: "classic",
                        label: "Nitro Classic",
                        value: m.PremiumTypes.TIER_1
                    }, {
                        id: "default",
                        label: "Nitro",
                        value: m.PremiumTypes.TIER_2
                    }],
                    selectionMode: "single",
                    fullWidth: !0
                })
            }), _.length > 0 && (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(r.l6P, {
                    label: "Subscription Interval",
                    placeholder: "Premium Type",
                    onSelectionChange: v,
                    formatOption: e => {
                        let {
                            label: t,
                            value: l
                        } = e;
                        return {
                            id: l,
                            label: t,
                            value: l
                        }
                    },
                    value: f,
                    options: _,
                    selectionMode: "single",
                    fullWidth: !0
                })
            }), (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(r.l6P, {
                    label: "Modal Step",
                    placeholder: "Premium Type",
                    onSelectionChange: x,
                    value: l,
                    options: [{
                        id: "whatYouLose",
                        label: "What You Lose",
                        value: o.g.WHAT_YOU_LOSE
                    }, {
                        id: "confirmDiscount",
                        label: "Confirm Discount",
                        value: o.g.CONFIRM_DISCOUNT
                    }, {
                        id: "discountApplied",
                        label: "Discount Applied",
                        value: o.g.DISCOUNT_APPLIED
                    }, {
                        id: "confirmCancel",
                        label: "Confirm Cancel",
                        value: o.g.CONFIRM
                    }, {
                        id: "previewInvoice",
                        label: "Preview Invoice",
                        value: o.g.PREVIEW
                    }],
                    selectionMode: "single",
                    fullWidth: !0
                })
            }), (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(r.Checkbox, {
                    checked: null !== y,
                    onChange: () => {
                        null === y ? g(b()) : g(null)
                    },
                    label: "Churn Discount"
                })
            }), (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(r.Checkbox, {
                    checked: k,
                    onChange: () => {
                        I(!k)
                    },
                    label: "Error on Redeem Offer"
                })
            }), (0, a.jsx)(s.MG, {
                children: (0, a.jsx)(r.Checkbox, {
                    checked: A,
                    onChange: () => {
                        P(!A)
                    },
                    label: "Error on Cancel"
                })
            }), (0, a.jsx)(s.nB, {}), (0, a.jsx)(r.Button, {
                onClick: () => {
                    N(!0)
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
        return {
            id: "",
            discount_id: "",
            user_id: "",
            ...e,
            discount: {
                id: "",
                plan_ids: [],
                user_usage_limit: 3,
                user_usage_limit_interval: m.Ff.MONTH,
                user_usage_limit_interval_count: 3,
                amount: "40",
                ...t
            }
        }
    }