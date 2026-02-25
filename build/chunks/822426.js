/** chunk id: 822426, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => E
});
var l = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    r = n(397927),
    a = n(96304),
    o = n(927578),
    u = n(937008),
    d = n(156312),
    c = n(166532),
    p = n(800471),
    m = n(985018);

function E(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        activeSubscription: i,
        selectedSkuId: E,
        setSelectedPlanId: _,
        startedPaymentFlowWithPaymentSourcesRef: h
    } = (0, d.P5)(), {
        isGift: x
    } = (0, u.Pv)(), S = null != i ? (0, o.EL)(i) : null, P = null != S ? (0, o.RH)(S.planId) : null, I = null != S ? (0, o.m6)(S.planId) : null, T = (0, p.vT)({
        isTrial: !1,
        isGift: x,
        selectedSkuId: E,
        startedPaymentFlowWithPaymentSources: h.current
    });
    return s()(null != I, "Expected premium type"), (0, l.jsx)(a.A, {
        premiumType: I,
        titleText: m.intl.string(m.t["7VcWW0"]),
        subtitleText: m.intl.format(m.t.Qk34Ik, {
            subscriptionName: P
        }),
        footer: (0, l.jsxs)(r.ButtonGroup, {
            direction: "horizontal-reverse",
            align: "center",
            children: [(0, l.jsx)(r.Button, {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: () => {
                    T ? (_((0, p.xT)(E, i)), t(c.pn.REVIEW)) : t(c.pn.PLAN_SELECT)
                }
            }), (0, l.jsx)(r.Button, {
                variant: "secondary",
                onClick: n,
                text: m.intl.string(m.t.h9tkAK)
            })]
        }),
        onClose: n,
        isDowngrade: !0
    })
}