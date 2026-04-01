/** chunk id: 750343 params = (module,exports,require) **/
l.d(t, {
    $: () => h
});
var a = l(627968),
    n = l(64700),
    r = l(397927),
    i = l(405139),
    o = l(156312),
    s = l(19311),
    u = l(869177),
    d = l(252561),
    c = l(985018);

function p(e) {
    let t = n.useRef(null),
        l = {
            paymentLabel: c.intl.string(c.t.ZURqX0),
            paymentRequestRef: t,
            onStripePaymentMethodReceived: () => {},
            onPaymentRequestFailure: () => {},
            onValidPaymentRequest: () => {},
            onChooseType: () => {},
            loadingComponent: (0, a.jsx)(r.y$y, {
                style: {
                    marginTop: 16
                },
                type: r.tVU.PULSING_ELLIPSIS
            })
        };
    return e.renderStepBody ? (0, a.jsx)(u.V, {
        ...l,
        ...e
    }) : "applePay" === e.paymentRequestWallet ? (0, a.jsx)(i.Mv, {
        ...l,
        ...e
    }) : (0, a.jsx)(i.dP, {
        ...l,
        ...e
    })
}

function m(e) {
    let {
        paymentRequestWallet: t
    } = e, l = n.useRef(null), [r, i] = n.useState(!1);
    return (0, a.jsx)(d.e_, {
        footer: (0, a.jsx)(s.Ay, {
            primaryCTA: s.Ay.CTAType.CONTINUE,
            primaryText: c.intl.string("applePay" === t ? c.t.WoXvJL : c.t.wnVVr0),
            primaryDisabled: !r,
            onPrimary: () => void(null != l.current && l.current.show()),
            onBack: () => {}
        }),
        children: (0, a.jsx)(p, {
            renderConnectorView: !0,
            renderStepBody: !0,
            paymentRequestWallet: t,
            paymentRequestRef: l,
            onValidPaymentRequest: () => i(!0)
        })
    })
}
let h = {
    name: "Payment Request",
    component: function(e) {
        let {
            paymentRequestWallet: t
        } = e;
        return (0, a.jsx)(o.PaymentContextProvider, {
            stepConfigs: [],
            skuIDs: [],
            activeSubscription: null,
            children: (0, a.jsxs)(d.wn, {
                children: [(0, a.jsx)(r.Heading, {
                    variant: "heading-xl/semibold",
                    children: "Payment Request"
                }), (0, a.jsx)(d.Hq, {
                    label: "Default View",
                    children: (0, a.jsx)(p, {
                        paymentRequestWallet: t
                    })
                }), (0, a.jsx)(d.Hq, {
                    label: "Connector View",
                    children: (0, a.jsx)(p, {
                        paymentRequestWallet: t,
                        renderConnectorView: !0
                    })
                }), (0, a.jsx)(d.Hq, {
                    label: "Add Payment Step Body Connector View",
                    children: (0, a.jsx)(m, {
                        paymentRequestWallet: t
                    })
                })]
            })
        })
    },
    id: "payment-request",
    controls: {
        paymentRequestWallet: {
            label: "Payment Request Wallet",
            type: "select",
            options: [{
                value: "googlePay",
                label: "Google Pay"
            }, {
                value: "applePay",
                label: "Apple Pay"
            }],
            defaultValue: "googlePay"
        }
    }
}