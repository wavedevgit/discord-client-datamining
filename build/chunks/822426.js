/** chunk id: 822426 params = (module,exports,require) **/
t.d(n, {
    K: () => E
});
var l = t(627968);
t(64700);
var i = t(284009),
    r = t.n(i),
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
        activeSubscription: i,
        selectedSkuId: E,
        setSelectedPlanId: _,
        startedPaymentFlowWithPaymentSourcesRef: S
    } = (0, d.P5)(), {
        isGift: x
    } = (0, u.Pv)(), T = null != i ? (0, o.EL)(i) : null, P = null != T ? (0, o.RH)(T.planId) : null, h = null != T ? (0, o.m6)(T.planId) : null, A = (0, p.vT)({
        isTrial: !1,
        isGift: x,
        selectedSkuId: E,
        startedPaymentFlowWithPaymentSources: S.current
    });
    return r()(null != h, "Expected premium type"), (0, l.jsx)(a.A, {
        premiumType: h,
        titleText: m.intl.string(m.t["7VcWW0"]),
        subtitleText: m.intl.format(m.t.Qk34Ik, {
            subscriptionName: P
        }),
        footer: (0, l.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            align: "center",
            children: [(0, l.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: () => {
                    A ? (_((0, p.xT)(E, i)), n(c.pn.REVIEW)) : n(c.pn.PLAN_SELECT)
                }
            }), (0, l.jsx)(s.Button, {
                variant: "secondary",
                onClick: t,
                text: m.intl.string(m.t.rzVN6j)
            })]
        }),
        onClose: t,
        isDowngrade: !0
    })
}