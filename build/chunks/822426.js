/** chunk id: 822426 params = (module,exports,require) **/
n.d(t, {
    K: () => E
});
var l = n(627968);
n(64700);
var i = n(284009),
    r = n.n(i),
    s = n(397927),
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
        startedPaymentFlowWithPaymentSourcesRef: x
    } = (0, d.P5)(), {
        isGift: S
    } = (0, u.Pv)(), P = null != i ? (0, o.EL)(i) : null, T = null != P ? (0, o.RH)(P.planId) : null, I = null != P ? (0, o.m6)(P.planId) : null, h = (0, p.vT)({
        isTrial: !1,
        isGift: S,
        selectedSkuId: E,
        startedPaymentFlowWithPaymentSources: x.current
    });
    return r()(null != I, "Expected premium type"), (0, l.jsx)(a.A, {
        premiumType: I,
        titleText: m.intl.string(m.t["7VcWW0"]),
        subtitleText: m.intl.format(m.t.Qk34Ik, {
            subscriptionName: T
        }),
        footer: (0, l.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            align: "center",
            children: [(0, l.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: () => {
                    h ? (_((0, p.xT)(E, i)), t(c.pn.REVIEW)) : t(c.pn.PLAN_SELECT)
                }
            }), (0, l.jsx)(s.Button, {
                variant: "secondary",
                onClick: n,
                text: m.intl.string(m.t.rzVN6j)
            })]
        }),
        onClose: n,
        isDowngrade: !0
    })
}