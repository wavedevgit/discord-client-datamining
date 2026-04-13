/** chunk id: 362111 params = (module,exports,require) **/
n.d(t, {
    default: () => g
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    r = n(158954),
    a = n(156312),
    o = n(166532),
    d = n(480800),
    c = n(985018),
    u = n(336536);

function m(e) {
    let {
        transitionState: t,
        analyticsLocation: n,
        onClose: s,
        onAddPaymentSource: a,
        toastContent: m,
        initialStep: g = o.pn.PAYMENT_TYPE,
        overwriteSubscriptionPaymentSource: _ = !1
    } = e, x = (0, d._V)(), h = (0, d.Y)({
        paymentModalArgs: x,
        initialStep: g,
        prependSteps: [],
        appendSteps: [],
        onReturn: () => {
            s()
        },
        onComplete: (e, t) => {
            l()(null != t, "paymentSource missing"), a?.(t), s()
        },
        onStepChange: () => {},
        header: (0, i.jsx)(r.rQ0, {
            title: c.intl.string(c.t.eQ2bLp)
        }),
        analyticsLocation: n,
        hideBreadcrumbs: !0,
        toastContent: m,
        overwriteSubscriptionPaymentSource: _
    });
    return (0, i.jsx)(r.dWK, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": c.intl.string(c.t.eQ2bLp),
        children: (0, i.jsx)("form", {
            className: u.Zd,
            onSubmit: function(e) {
                e.preventDefault()
            },
            children: h
        })
    })
}

function g(e) {
    return (0, i.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(m, {
            ...e
        })
    })
}