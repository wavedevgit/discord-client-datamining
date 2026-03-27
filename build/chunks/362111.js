/** chunk id: 362111 params = (module,exports,require) **/
n.d(t, {
    default: () => _
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(158954),
    r = n(156312),
    o = n(166532),
    d = n(998678),
    c = n(985018),
    u = n(859985);

function m(e) {
    let {
        transitionState: t,
        analyticsLocation: n,
        onClose: s,
        onAddPaymentSource: r,
        toastContent: m,
        initialStep: _ = o.pn.PAYMENT_TYPE,
        overwriteSubscriptionPaymentSource: g = !1
    } = e, x = (0, d.KP)(), A = (0, d.Y)({
        paymentModalArgs: x,
        initialStep: _,
        prependSteps: [],
        appendSteps: [],
        onReturn: () => {
            s()
        },
        onComplete: (e, t) => {
            l()(null != t, "paymentSource missing"), r?.(t), s()
        },
        onStepChange: () => {},
        header: (0, i.jsx)(a.rQ0, {
            title: c.intl.string(c.t.eQ2bLp)
        }),
        analyticsLocation: n,
        hideBreadcrumbs: !0,
        toastContent: m,
        overwriteSubscriptionPaymentSource: g
    });
    return (0, i.jsx)(a.dWK, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": c.intl.string(c.t.eQ2bLp),
        children: (0, i.jsx)("form", {
            className: u.Zd,
            onSubmit: function(e) {
                e.preventDefault()
            },
            children: A
        })
    })
}

function _(e) {
    return (0, i.jsx)(r.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(m, {
            ...e
        })
    })
}