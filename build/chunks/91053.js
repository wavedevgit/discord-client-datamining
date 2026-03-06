/** chunk id: 91053 params = (module,exports,require) **/
t.d(n, {
    Z: () => _
});
var i = t(627968),
    l = t(64700),
    r = t(311907),
    s = t(732955),
    a = t(937008),
    o = t(156312),
    u = t(166532),
    d = t(166403),
    c = t(810498),
    p = t(683433),
    m = t(344159),
    E = t(985018);

function _(e) {
    let {
        onStepChange: n,
        selectedPlanId: t,
        paymentSources: r,
        onBackClick: u,
        showBackButton: d,
        planOptions: c,
        shouldRenderUpdatedPaymentModal: m = !1,
        isTrial: _,
        isNextDisabled: P = !1
    } = e, {
        paymentSources: T,
        selectedPlan: S
    } = (0, o.P5)(), {
        isGift: I,
        claimableRewards: h
    } = (0, a.Pv)();
    r = r ?? T;
    let {
        variant: g,
        text: A,
        onClick: f,
        disabled: j
    } = x({
        onStepChange: n,
        selectedPlanId: t = t ?? S?.id,
        isGift: I,
        claimableRewards: h,
        paymentSources: r,
        shouldRenderUpdatedPaymentModal: m,
        isTrial: _,
        isNextDisabled: P
    }), M = l.useMemo(() => null != t && c.includes(t) ? [{
        variant: g,
        text: A,
        onClick: f,
        disabled: j
    }] : [{
        variant: "primary",
        text: E.intl.string(E.t.XqMe3N),
        disabled: !0
    }], [g, A, f, j, t, c]);
    return (0, i.jsx)(s.H7u, {
        leading: d && null != u ? (0, i.jsx)(p.A, {
            onClick: u
        }) : void 0,
        actions: M
    })
}
let x = e => {
    let {
        onStepChange: n,
        selectedPlanId: t,
        isGift: i,
        claimableRewards: l,
        paymentSources: s,
        shouldRenderUpdatedPaymentModal: a,
        isTrial: p,
        isNextDisabled: _ = !1
    } = e, x = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()), {
        step: P,
        selectedPlan: T
    } = (0, o.P5)(), {
        hasEntitlements: S
    } = (0, m.X)(t, i), I = null != x && null != x.paymentSourceId || Object.keys(s).length > 0 || S && !p;
    var h = a ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        g = u.pn.ADD_PAYMENT_STEPS;
    return I && (g = u.pn.REVIEW), (0, c.px)(T, i, l) && P !== u.pn.SELECT_FREE_SKU && (g = u.pn.SELECT_FREE_SKU), {
        variant: "primary",
        text: h,
        onClick: () => n(g),
        disabled: _
    }
}