/** chunk id: 445736 params = (module,exports,require) **/
l.d(t, {
    Wo: () => C
});
var a = l(627968),
    n = l(342393),
    r = l(503698),
    i = l.n(r),
    o = l(397927),
    s = l(942340),
    c = l(211528),
    u = l(626584),
    d = l(166532),
    p = l(87952),
    m = l(646443),
    h = l(785205),
    b = l(652215),
    x = l(962017),
    y = l(895375);
let f = new u.A("PaymentElement.web.stories"),
    g = () => {
        let {
            elementsAppearanceOptions: e
        } = (0, s.E)();
        return (0, a.jsxs)("div", {
            children: [(0, a.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                className: y.tm,
                children: "Default Options"
            }), (0, a.jsx)("div", {
                children: Object.entries(e).map(e => {
                    let [t, l] = e;
                    return (0, a.jsx)(m.l, {
                        label: t,
                        value: l
                    }, t)
                })
            })]
        })
    },
    v = e => {
        let {
            theme: t,
            colorText: l,
            colorBackground: r,
            inputBackgroundColor: u,
            tabBackgroundColor: m,
            storyType: v
        } = e, _ = (0, p.A)(), {
            stripePaymentElementProps: E,
            stripeAddressElementProps: C
        } = (0, c.Lw)({
            step: d.pn.PAYMENT_ELEMENT,
            handleStepChange: b.tEg,
            onBillingAddressChange: b.tEg,
            paymentElementsEnabled: !0,
            logger: f,
            shouldLogOnChangeEvents: !0,
            continueSessionToInitialStep: void 0
        }), {
            elementsOptions: S,
            isLoading: j,
            setupError: T,
            customPaymentMethodIdsToSourceTypes: A
        } = (0, s.p)({
            onSetupError: e => {
                f.info("Stripe Payment Element options setup error: ", e)
            },
            elementsAppearanceOptions: {
                theme: t,
                colorText: l,
                colorBackground: r,
                inputBackgroundColor: u,
                tabBackgroundColor: m
            }
        });
        return j || null != T || null == _ ? (0, a.jsx)(c.eR, {}) : (0, a.jsxs)("div", {
            children: [(0, a.jsx)("div", {
                style: {
                    marginBottom: 16
                },
                children: (0, a.jsx)(o.wx6, {
                    type: "info",
                    children: "If you don't see the Payment Element components, that means you must be added to the correct experiment to see this story. Reach out to a Payments Engineer to get access."
                })
            }), (0, a.jsxs)("div", {
                className: x.ny,
                children: [(0, a.jsx)(h.p, {
                    stepConfigs: [{
                        key: d.pn.ADD_PAYMENT_STEPS,
                        renderStep: () => (0, a.jsx)("div", {}),
                        options: {
                            renderHeader: !1,
                            bodyClassName: "joined-payment-address-elements" === v ? x.fF : x.u1
                        }
                    }],
                    children: (0, a.jsx)("div", {
                        className: i()(x.o6, {
                            [x.X1]: "joined-payment-address-elements" === v
                        }),
                        children: (0, a.jsxs)(n.Elements, {
                            stripe: _,
                            options: {
                                ...S
                            },
                            children: ["stripe-address-element" === v ? (0, a.jsx)("div", {
                                className: y.R,
                                children: (0, a.jsx)(c.Wf, {
                                    ...E,
                                    customPaymentMethodIdsToSourceTypes: A,
                                    step: d.pn.PAYMENT_ELEMENT
                                })
                            }) : (0, a.jsx)(c.Wf, {
                                ...E,
                                customPaymentMethodIdsToSourceTypes: A,
                                step: d.pn.PAYMENT_ELEMENT
                            }), ("joined-payment-address-elements" === v || "stripe-address-element" === v) && (0, a.jsx)(c.KS, {
                                ...C,
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
                            })]
                        })
                    })
                }), (0, a.jsx)(g, {})]
            })]
        })
    },
    _ = {
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
            label: "Color Text",
            type: "text",
            defaultValue: "#2f3035"
        },
        colorBackground: {
            label: "Color Background",
            type: "text",
            defaultValue: "#ffffff"
        },
        inputBackgroundColor: {
            label: "Input Background Color",
            type: "text",
            defaultValue: "#00000014"
        },
        tabBackgroundColor: {
            label: "Tab Background Color",
            type: "text",
            defaultValue: "#00000014"
        }
    },
    E = {
        name: "Joined Payment + Address",
        id: "joined-payment-address-elements",
        component: e => (0, a.jsx)(v, {
            ...e,
            storyType: "joined-payment-address-elements"
        }),
        controls: {
            ..._
        }
    },
    C = {
        title: "Payment Elements",
        stories: [{
            name: "Stripe Payment Element",
            id: "stripe-payment-element",
            component: e => (0, a.jsx)(v, {
                ...e,
                storyType: "stripe-payment-element"
            }),
            controls: {
                ..._
            }
        }, {
            name: "Stripe Address Element",
            id: "stripe-address-element",
            component: e => (0, a.jsx)(v, {
                ...e,
                storyType: "stripe-address-element"
            }),
            controls: {
                ..._
            }
        }, E]
    }