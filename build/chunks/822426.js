/** chunk id: 822426 params = (module,exports,require) **/
t.d(n, {
    K: () => E
});
var i = t(627968);
t(64700);
var l = t(284009),
    r = t.n(l),
    s = t(397927),
    a = t(96304),
    o = t(927578),
    u = t(937008),
    d = t(156312),
    c = t(166532),
    p = t(800471),
    m = t(985018);

function E(e) {
    let {
        handleStepChange: n,
        handleClose: t
    } = e, {
        activeSubscription: l,
        selectedSkuId: E,
        setSelectedPlanId: _,
        startedPaymentFlowWithPaymentSourcesRef: x
    } = (0, d.P5)(), {
        isGift: P
    } = (0, u.Pv)(), T = null != l ? (0, o.EL)(l) : null, S = null != T ? (0, o.RH)(T.planId) : null, I = null != T ? (0, o.m6)(T.planId) : null, h = (0, p.vT)({
        isTrial: !1,
        isGift: P,
        selectedSkuId: E,
        startedPaymentFlowWithPaymentSources: x.current
    });
    return r()(null != I, "Expected premium type"), (0, i.jsx)(a.A, {
        premiumType: I,
        titleText: m.intl.string(m.t["7VcWW0"]),
        subtitleText: m.intl.format(m.t.Qk34Ik, {
            subscriptionName: S
        }),
        footer: (0, i.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            align: "center",
            children: [(0, i.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: () => {
                    h ? (_((0, p.xT)(E, l)), n(c.pn.REVIEW)) : n(c.pn.PLAN_SELECT)
                }
            }), (0, i.jsx)(s.Button, {
                variant: "secondary",
                onClick: t,
                text: m.intl.string(m.t.rzVN6j)
            })]
        }),
        onClose: t,
        isDowngrade: !0
    })
}