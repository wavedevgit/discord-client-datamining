/** chunk id: 362111, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => m
});
var i = n(627968);
n(64700);
var s = n(284009),
    a = n.n(s),
    l = n(158954),
    r = n(156312),
    o = n(166532),
    c = n(998678),
    d = n(985018),
    u = n(585729);

function _(e) {
    let {
        transitionState: t,
        analyticsLocation: n,
        onClose: s,
        onAddPaymentSource: r,
        toastContent: _,
        initialStep: m = o.pn.PAYMENT_TYPE,
        overwriteSubscriptionPaymentSource: A = !1
    } = e, g = (0, c.KP)(), h = (0, c.Y)({
        paymentModalArgs: g,
        initialStep: m,
        prependSteps: [],
        appendSteps: [],
        onReturn: () => {
            s()
        },
        onComplete: (e, t) => {
            a()(null != t, "paymentSource missing"), r?.(t), s()
        },
        onStepChange: () => {},
        header: (0, i.jsx)(l.rQ0, {
            title: d.intl.string(d.t.eQ2bLp)
        }),
        analyticsLocation: n,
        hideBreadcrumbs: !0,
        toastContent: _,
        overwriteSubscriptionPaymentSource: A
    });
    return (0, i.jsx)(l.dWK, {
        transitionState: t,
        onClose: s,
        size: "sm",
        "aria-label": d.intl.string(d.t.eQ2bLp),
        children: (0, i.jsx)("form", {
            className: u.Zd,
            onSubmit: function(e) {
                e.preventDefault()
            },
            children: h
        })
    })
}

function m(e) {
    return (0, i.jsx)(r.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: [],
        children: (0, i.jsx)(_, {
            ...e
        })
    })
}