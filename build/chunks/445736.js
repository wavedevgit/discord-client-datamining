/** Chunk was on web.js **/
/** chunk id: 445736, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Wo: () => M
}), n(896048);
var r = n(627968),
    i = n(342393),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(942340),
    c = n(211528),
    u = n(626584),
    d = n(166532),
    f = n(87952),
    p = n(646443),
    _ = n(785205),
    h = n(652215),
    m = n(434598),
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
let v = new u.A("PaymentElement.web.stories"),
    A = "Color Text",
    I = "Color Background",
    S = "Input Background Color",
    T = "Tab Background Color",
    C = e => ({
        key: d.pn.ADD_PAYMENT_STEPS,
        renderStep: () => (0, r.jsx)("div", {}),
        options: {
            renderHeader: !1,
            bodyClassName: "joined-payment-address-elements" === e ? m.fF : m.u1
        }
    }),
    N = () => {
        let {
            elementsAppearanceOptions: e
        } = (0, l.E)();
        return (0, r.jsxs)("div", {
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                className: g.tm,
                children: "Default Options"
            }), (0, r.jsx)("div", {
                children: Object.entries(e).map(e => {
                    let [t, n] = e;
                    return (0, r.jsx)(p.l, {
                        label: t,
                        value: n
                    }, t)
                })
            })]
        })
    },
    w = e => {
        let {
            theme: t,
            colorText: n,
            colorBackground: a,
            inputBackgroundColor: u,
            tabBackgroundColor: p,
            storyType: E
        } = e, b = (0, f.A)(), {
            stripePaymentElementProps: A,
            stripeAddressElementProps: I
        } = (0, c.Lw)({
            step: d.pn.PAYMENT_ELEMENT,
            handleStepChange: h.tEg,
            onBillingAddressChange: h.tEg,
            paymentElementsEnabled: !0,
            logger: v,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0
        }), {
            elementsOptions: S,
            isLoading: T,
            setupError: w,
            customPaymentMethodIdsToSourceTypes: R
        } = (0, l.p)({
            onSetupError: e => {
                v.info("Stripe Payment Element options setup error: ", e)
            },
            elementsAppearanceOptions: {
                theme: t,
                colorText: n,
                colorBackground: a,
                inputBackgroundColor: u,
                tabBackgroundColor: p
            }
        });
        return T || null != w || null == b ? (0, r.jsx)(c.eR, {}) : (0, r.jsxs)("div", {
            children: [(0, r.jsx)("div", {
                style: {
                    marginBottom: 16
                },
                children: (0, r.jsx)(s.wx6, {
                    type: "info",
                    children: "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access."
                })
            }), (0, r.jsxs)("div", {
                className: m.ny,
                children: [(0, r.jsx)(_.p, {
                    stepConfigs: [C(E)],
                    children: (0, r.jsx)("div", {
                        className: o()(m.o6, {
                            [m.X1]: "joined-payment-address-elements" === E
                        }),
                        children: (0, r.jsxs)(i.Elements, {
                            stripe: b,
                            options: y({}, S),
                            children: ["stripe-address-element" === E ? (0, r.jsx)("div", {
                                className: g.R,
                                children: (0, r.jsx)(c.Wf, O(y({}, A), {
                                    customPaymentMethodIdsToSourceTypes: R,
                                    step: d.pn.PAYMENT_ELEMENT
                                }))
                            }) : (0, r.jsx)(c.Wf, O(y({}, A), {
                                customPaymentMethodIdsToSourceTypes: R,
                                step: d.pn.PAYMENT_ELEMENT
                            })), ("joined-payment-address-elements" === E || "stripe-address-element" === E) && (0, r.jsx)(c.KS, O(y({}, I), {
                                billingAddressInfo: {
                                    email: "",
                                    name: "",
                                    country: "",
                                    line1: "",
                                    line2: "",
                                    city: "",
                                    postalCode: "",
                                    state: ""
                                }
                            }))]
                        })
                    })
                }), (0, r.jsx)(N, {})]
            })]
        })
    },
    R = e => (0, r.jsx)(w, O(y({}, e), {
        storyType: "joined-payment-address-elements"
    })),
    P = e => (0, r.jsx)(w, O(y({}, e), {
        storyType: "stripe-payment-element"
    })),
    D = e => (0, r.jsx)(w, O(y({}, e), {
        storyType: "stripe-address-element"
    })),
    L = {
        theme: {
            label: "Theme",
            type: "select",
            options: ["flat", "stripe", "night"].map(e => ({
                label: e.toLocaleUpperCase(),
                value: e
            })),
            defaultValue: "flat"
        },
        colorText: {
            label: A,
            type: "text",
            defaultValue: "#2f3035"
        },
        colorBackground: {
            label: I,
            type: "text",
            defaultValue: "#ffffff"
        },
        inputBackgroundColor: {
            label: S,
            type: "text",
            defaultValue: "#00000014"
        },
        tabBackgroundColor: {
            label: T,
            type: "text",
            defaultValue: "#00000014"
        }
    },
    x = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: R,
        controls: y({}, L)
    },
    M = {
        title: "Payment Elements",
        stories: [{
            name: "Stripe Payment Element",
            id: "stripe-payment-element",
            component: P,
            controls: y({}, L)
        }, {
            name: "Stripe Address Element",
            id: "stripe-address-element",
            component: D,
            controls: y({}, L)
        }, x]
    }