/** Chunk was on 2824 **/
/** chunk id: 822426, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => g
});
var r = n(627968);
n(64700);
var l = n(284009),
    i = n.n(l),
    s = n(397927),
    a = n(96304),
    o = n(927578),
    u = n(937008),
    c = n(156312),
    d = n(166532),
    p = n(800471),
    m = n(985018);

function g(e) {
    let {
        handleStepChange: t,
        handleClose: n
    } = e, {
        activeSubscription: l,
        selectedSkuId: g,
        setSelectedPlanId: f,
        startedPaymentFlowWithPaymentSourcesRef: y
    } = (0, c.P5)(), {
        isGift: j
    } = (0, u.Pv)(), b = null != l ? (0, o.EL)(l) : null, h = null != b ? (0, o.RH)(b.planId) : null, v = null != b ? (0, o.m6)(b.planId) : null, O = (0, p.vT)({
        isTrial: !1,
        isGift: j,
        selectedSkuId: g,
        startedPaymentFlowWithPaymentSources: y.current
    });
    return i()(null != v, "Expected premium type"), (0, r.jsx)(a.A, {
        premiumType: v,
        titleText: m.intl.string(m.t["7VcWW0"]),
        subtitleText: m.intl.format(m.t.Qk34Ik, {
            subscriptionName: h
        }),
        footer: (0, r.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            align: "center",
            children: [(0, r.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: () => {
                    O ? (f((0, p.xT)(g, l)), t(d.pn.REVIEW)) : t(d.pn.PLAN_SELECT)
                }
            }), (0, r.jsx)(s.Button, {
                variant: "secondary",
                onClick: n,
                text: m.intl.string(m.t.h9tkAK)
            })]
        }),
        onClose: n,
        isDowngrade: !0
    })
}