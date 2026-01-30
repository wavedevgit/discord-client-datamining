/** chunk id: 423396, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Gu: () => N
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(166532),
    s = n(231018),
    l = n(685944),
    c = n(623020),
    u = n(927578),
    d = n(412463),
    f = n(492518),
    p = n(689614),
    _ = n(652215),
    h = n(788868),
    m = n(985018),
    g = n(749226);

function E(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            E(e, t, n[t])
        })
    }
    return e
}

function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function O(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let v = [{
        key: o.pn.REVIEW,
        renderStep: e => (0, r.jsx)(c._M, y({}, e)),
        options: {
            useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
        }
    }, {
        key: o.pn.ADD_PAYMENT_STEPS,
        renderStep: e => (0, r.jsx)(d.eO, O(y({}, e), {
            originStep: o.pn.REVIEW,
            text: "Add Payment Steps Placeholder"
        })),
        options: {
            useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
        }
    }, {
        key: o.pn.CONFIRM,
        renderStep: e => (0, r.jsx)(d.eO, O(y({}, e), {
            originStep: o.pn.REVIEW,
            text: "Confirm Step Placeholder"
        })),
        options: {
            useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
        }
    }, {
        key: o.pn.PLAN_SELECT,
        renderStep: e => (0, r.jsx)(d.eO, O(y({}, e), {
            originStep: o.pn.REVIEW,
            text: "Plan Select Step Placeholder"
        })),
        options: {
            useBreadcrumbLabel: () => m.intl.string(m.t.QBnNHq)
        }
    }],
    A = () => (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: "Purchase button is disabled for this story"
    }),
    I = e => {
        let {
            skuId: t,
            isGift: n,
            hideErrors: i
        } = e, {
            analyticsLocations: a,
            loadId: o,
            handleClose: c,
            handleComplete: p,
            isFetching: h,
            sku: m
        } = (0, d.ud)({
            skuId: t,
            isGift: n,
            applicationId: _.FYj
        }), E = (e, t, i) => n ? (0, r.jsx)(s.A, {
            step: i,
            onClose: () => t(!1)
        }) : (0, r.jsx)(l.A, {
            step: i,
            onClose: () => t(!1)
        }), y = u.Ay.isPremiumSku(t);
        return h || null == m || y ? (0, r.jsx)(f.k, {}) : (0, r.jsxs)("div", {
            className: g.Cd,
            children: [(0, r.jsx)(d.dL, {
                stepConfigs: v,
                analyticsLocations: a,
                applicationId: _.FYj,
                initialPlanId: void 0,
                skuId: t,
                isGift: n,
                hideErrors: i,
                loadId: o,
                purchaseType: _.VVm.ONE_TIME,
                disablePurchases: !0,
                excludeSubscriptionPlansBySKU: !0,
                renderHeader: E,
                onClose: c,
                onComplete: p
            }), (0, r.jsx)(A, {})]
        })
    },
    S = e => {
        let {
            skuId: t,
            isGift: n,
            hideErrors: a
        } = e, {
            analyticsLocations: o,
            loadId: s,
            handleClose: l,
            handleComplete: c,
            isFetching: p,
            sku: m
        } = (0, d.ud)({
            skuId: t,
            isGift: n,
            applicationId: h.tv
        }), E = u.Ay.isPremiumSku(t), y = E ? h.zE[t] : void 0, [b, O] = i.useState(y), I = i.useRef(!1);
        i.useEffect(() => {
            I.current || null == y || (I.current = !0, O(y))
        }, [y, b]);
        let {
            isLoadedForPremiumSKUs: S,
            selectedPlan: T
        } = (0, d.n1)({
            subscriptionPlanId: b
        });
        return !p && null != m && S && E && null != T ? (0, r.jsxs)("div", {
            className: g.Cd,
            children: [(0, r.jsx)(d.dL, {
                stepConfigs: v,
                analyticsLocations: o,
                applicationId: h.tv,
                initialPlanId: y,
                skuId: t,
                isGift: n,
                hideErrors: a,
                loadId: s,
                purchaseType: _.VVm.SUBSCRIPTION,
                disablePurchases: !0,
                onClose: l,
                onComplete: c,
                paymentContextOverrides: {
                    selectedPlan: T,
                    setSelectedPlanId: O
                }
            }), (0, r.jsx)(A, {})]
        }) : (0, r.jsx)(f.k, {})
    },
    T = {
        isGift: {
            label: "Is Gift",
            type: "boolean",
            defaultValue: !1
        },
        hideErrors: {
            label: "Hide Errors",
            type: "boolean",
            defaultValue: !0
        }
    },
    C = (0, p.R)(),
    N = {
        title: "Checkout Review Step",
        stories: [{
            name: "Collectibles Review Step",
            id: "collectibles-checkout-review-step",
            component: I,
            controls: y({
                skuId: {
                    label: "SKU ID",
                    type: "select",
                    options: C.options,
                    defaultValue: C.defaultValue
                }
            }, T)
        }, {
            name: "Premium Review Step",
            id: "premium-checkout-review-step",
            component: S,
            controls: y({
                skuId: {
                    label: "SKU ID",
                    type: "select",
                    options: [{
                        value: h.pe.TIER_0,
                        label: "".concat(h.pe.TIER_0, " (Nitro Basic)")
                    }, {
                        value: h.pe.TIER_2,
                        label: "".concat(h.pe.TIER_2, " (Nitro Standard)")
                    }],
                    defaultValue: h.pe.TIER_0
                }
            }, T)
        }]
    }