/** Chunk was on 2824 **/
/** chunk id: 822426, original params: e,n,t (module,exports,require) **/
t.d(n, {
    K: () => g
});
var l = t(627968);
t(64700);
var r = t(284009),
    i = t.n(r),
    s = t(397927),
    a = t(96304),
    o = t(927578),
    u = t(937008),
    c = t(156312),
    d = t(166532),
    p = t(800471),
    m = t(985018);

function g(e) {
    let {
        handleStepChange: n,
        handleClose: t
    } = e, {
        activeSubscription: r,
        selectedSkuId: g,
        setSelectedPlanId: f,
        startedPaymentFlowWithPaymentSourcesRef: j
    } = (0, c.P5)(), {
        isGift: E
    } = (0, u.Pv)(), x = null != r ? (0, o.EL)(r) : null, h = null != x ? (0, o.RH)(x.planId) : null, T = null != x ? (0, o.m6)(x.planId) : null, P = (0, p.vT)({
        isTrial: !1,
        isGift: E,
        selectedSkuId: g,
        startedPaymentFlowWithPaymentSources: j.current
    });
    return i()(null != T, "Expected premium type"), (0, l.jsx)(a.A, {
        premiumType: T,
        titleText: m.intl.string(m.t["7VcWW0"]),
        subtitleText: m.intl.format(m.t.Qk34Ik, {
            subscriptionName: h
        }),
        footer: (0, l.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            align: "center",
            children: [(0, l.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: () => {
                    P ? (f((0, p.xT)(g, r)), n(d.pn.REVIEW)) : n(d.pn.PLAN_SELECT)
                }
            }), (0, l.jsx)(s.Button, {
                variant: "secondary",
                onClick: t,
                text: m.intl.string(m.t.h9tkAK)
            })]
        }),
        onClose: t,
        isDowngrade: !0
    })
}