/** Chunk was on web.js **/
/** chunk id: 211528, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    KS: () => P,
    Lw: () => j,
    Wf: () => w,
    e4: () => x,
    eR: () => L
}), n(446912), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    o = n(503698),
    s = n.n(o),
    l = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(156312),
    f = n(166532),
    p = n(287809),
    _ = n(954571),
    h = n(71532),
    m = n(942340),
    g = n(550238),
    E = n(648335),
    y = n(652215),
    b = n(818348),
    O = n(571882);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function T(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = C(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function C(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let N = [f.pn.PAYMENT_ELEMENT],
    w = i.memo(function(e) {
        let {
            wallets: t = [],
            customPaymentMethodIdsToSourceTypes: n,
            analyticsContext: o,
            options: s,
            onChange: c,
            step: u
        } = e, d = T(e, ["wallets", "customPaymentMethodIdsToSourceTypes", "analyticsContext", "options", "onChange", "step"]), h = (0, l.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return null != e ? e.email : null
        }), m = (0, l.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return null != e ? e.globalName : null
        }), g = i.useCallback(e => {
            if (u !== f.pn.PAYMENT_ELEMENT) return;
            let t = (0, E.Wn)(e.value.type, n);
            if (null != c && c(e, t), null != o) {
                let {
                    contextMetadata: n,
                    activitySessionId: r,
                    analyticsData: i
                } = o, a = null != t && t !== b.he.PAYMENT_REQUEST ? E.mr[t] : e.value.type;
                _.default.track(y.HAw.PAYMENT_ELEMENT_CHANGED, {
                    load_id: n.loadId,
                    activity_session_id: r,
                    location: i.location,
                    payment_element_selected_method: a,
                    payment_source_type: t,
                    complete: e.complete,
                    empty: e.empty
                })
            }
        }, [c, o, u, n]), O = i.useMemo(() => ({
            applePay: t.includes("applePay") ? "auto" : "never",
            googlePay: t.includes("googlePay") ? "auto" : "never",
            link: t.includes("link") ? "auto" : "never"
        }), [t]), v = {
            billingDetails: A({}, null != h && {
                email: h
            }, null != m && {
                name: m
            })
        };
        return (0, r.jsx)(a.PaymentElement, A({
            id: "stripe-payment-element",
            options: A({
                layout: {
                    type: "tabs"
                },
                wallets: O,
                defaultValues: v
            }, s),
            onChange: g
        }, d))
    }),
    R = e => {
        let {
            children: t
        } = e, {
            stripe: n
        } = (0, d.P5)(), {
            elementsAppearance: i
        } = (0, m.E)();
        return (0, r.jsx)(a.Elements, {
            stripe: n,
            options: {
                appearance: i,
                mode: "setup",
                currency: "usd"
            },
            children: t
        })
    },
    P = i.memo(function(e) {
        let {
            options: t,
            renderAsStandaloneElement: n,
            billingAddressInfo: o,
            internalKey: s
        } = e, l = T(e, ["options", "renderAsStandaloneElement", "billingAddressInfo", "internalKey"]), c = i.useMemo(() => {
            let {
                name: e,
                address: t
            } = (0, h._Z)(o);
            return A({
                name: null != e ? e : null
            }, null != t && {
                address: Object.fromEntries(Object.entries(t).filter(e => {
                    let [t, n] = e;
                    return void 0 !== n
                }))
            })
        }, [o]), u = i.useMemo(() => (0, r.jsx)(a.AddressElement, A({
            options: A({
                mode: "billing",
                defaultValues: c
            }, t)
        }, l), s), [c, t, l, s]);
        return n ? (0, r.jsxs)(R, {
            children: [(0, r.jsx)("div", {
                className: O.R,
                children: (0, r.jsx)(a.PaymentElement, {
                    id: "stripe-payment-element"
                })
            }), u]
        }) : u
    }),
    D = e => {
        let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: o,
            stripePaymentElementProps: l,
            stripeAddressElementProps: c,
            elementsRef: u,
            paymentElementSelectedType: d,
            addressElementKey: p,
            analyticsContext: _
        } = e, h = (0, a.useElements)();
        i.useEffect(() => {
            u.current = h
        }, [h, u]);
        let m = N.includes(t),
            g = t === f.pn.ADDRESS;
        return (0, r.jsxs)("div", {
            className: O.rf,
            children: [(0, r.jsx)("div", {
                className: s()(m ? O.RK : [O.R, O.$u], {
                    [O.df]: null == d,
                    [O._m]: d === b.he.CARD,
                    [O.JD]: d === b.he.PAYPAL
                }),
                children: (0, r.jsx)(w, S(A({}, l), {
                    customPaymentMethodIdsToSourceTypes: o,
                    step: t,
                    analyticsContext: _
                }))
            }), (0, r.jsx)("div", {
                className: s()(O.K_, g ? O.RK : [O.R, O.vg]),
                children: (0, r.jsx)(P, S(A({}, c), {
                    internalKey: p,
                    renderAsStandaloneElement: d === b.he.PAYMENT_REQUEST,
                    billingAddressInfo: n
                }))
            })]
        })
    },
    L = () => (0, r.jsx)("div", {
        className: O.g4,
        children: (0, r.jsx)(c.y$y, {
            type: c.y$y.Type.PULSING_ELLIPSIS
        })
    }),
    x = e => {
        let {
            onSetupError: t
        } = e, n = T(e, ["onSetupError"]), {
            elementsOptions: i,
            isLoading: o,
            setupError: s,
            customPaymentMethodIdsToSourceTypes: l
        } = (0, m.p)({
            onSetupError: t
        }), {
            stripe: c
        } = (0, d.P5)();
        return o || null != s || null == c ? (0, r.jsx)(L, {}) : (0, r.jsx)(a.Elements, {
            stripe: c,
            options: A({}, i),
            children: (0, r.jsx)(D, S(A({}, n), {
                customPaymentMethodIdsToSourceTypes: l
            }))
        })
    },
    M = ["applePay", "googlePay", "link"],
    j = e => {
        let {
            step: t,
            handleStepChange: n,
            paymentElementsEnabled: r,
            logger: a,
            onBillingAddressChange: o,
            shouldLogOnChangeEvents: s,
            continueSessionToInitialStep: l
        } = e, c = i.useRef(null), d = i.useRef(null), [p, _] = i.useState(!1), [h, m] = i.useState(l === f.pn.CREDIT_CARD_INFORMATION ? b.he.CARD : null), E = r && (t === f.pn.PAYMENT_ELEMENT || t === f.pn.ADDRESS && null != h);
        i.useEffect(() => {
            t === f.pn.PAYMENT_ELEMENT && (d.current = null)
        }, [t]);
        let y = i.useMemo(() => ({
                onChange: (e, t) => {
                    s && null != a && a.log("PaymentElements onChange event:", e), _(e.complete), m(t)
                },
                wallets: M
            }), [a, s]),
            O = i.useMemo(() => ({
                onChange: e => {
                    var t;
                    let {
                        complete: n,
                        value: {
                            address: r,
                            name: i
                        }
                    } = e, a = {
                        name: i,
                        country: r.country,
                        city: r.city,
                        line1: r.line1,
                        line2: null != (t = r.line2) ? t : "",
                        state: r.state,
                        postalCode: r.postal_code
                    }, s = g.V.every(e => {
                        let t = a[e];
                        return null != t && "" !== t
                    }) && n;
                    o(a, s)
                }
            }), [o]),
            v = i.useCallback(function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && m(e), n(f.pn.PAYMENT_ELEMENT, t)
            }, [n]);
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                v(void 0)
            };
            return u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e), () => {
                u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e)
            }
        }, [v, r]);
        let A = i.useCallback(() => {
                m(null)
            }, []),
            [I, S] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: y,
            stripeAddressElementProps: O,
            combinedStripeElementsRef: c,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: p,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: m,
            handlePaymentElementStep: v,
            onBackFromPaymentElement: A,
            addressElementKey: I,
            remountAddressElement: i.useCallback(() => {
                S(Date.now().toString())
            }, [])
        }
    }