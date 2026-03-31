/** chunk id: 91053 params = (module,exports,require) **/
t.d(n, {
    Z: () => _
});
var l = t(627968),
    i = t(64700),
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
        isNextDisabled: x = !1
    } = e, {
        paymentSources: P,
        selectedPlan: T
    } = (0, o.P5)(), {
        isGift: I,
        claimableRewards: h
    } = (0, a.Pv)();
    r = r ?? P;
    let {
        variant: g,
        text: A,
        onClick: f,
        disabled: j
    } = S({
        onStepChange: n,
        selectedPlanId: t = t ?? T?.id,
        isGift: I,
        claimableRewards: h,
        paymentSources: r,
        shouldRenderUpdatedPaymentModal: m,
        isTrial: _,
        isNextDisabled: x
    }), R = i.useMemo(() => null != t && c.includes(t) ? [{
        variant: g,
        text: A,
        onClick: f,
        disabled: j
    }] : [{
        variant: "primary",
        text: E.intl.string(E.t.XqMe3N),
        disabled: !0
    }], [g, A, f, j, t, c]);
    return (0, l.jsx)(s.H7u, {
        leading: d && null != u ? (0, l.jsx)(p.A, {
            onClick: u
        }) : void 0,
        actions: R
    })
}
let S = e => {
    let {
        onStepChange: n,
        selectedPlanId: t,
        isGift: l,
        claimableRewards: i,
        paymentSources: s,
        shouldRenderUpdatedPaymentModal: a,
        isTrial: p,
        isNextDisabled: _ = !1
    } = e, S = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()), {
        step: x,
        selectedPlan: P
    } = (0, o.P5)(), {
        hasEntitlements: T
    } = (0, m.X)(t, l), I = null != S && null != S.paymentSourceId || Object.keys(s).length > 0 || T && !p;
    var h = a ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        g = u.pn.ADD_PAYMENT_STEPS;
    return I && (g = u.pn.REVIEW), (0, c.px)(P, l, i) && x !== u.pn.SELECT_FREE_SKU && (g = u.pn.SELECT_FREE_SKU), {
        variant: "primary",
        text: h,
        onClick: () => n(g),
        disabled: _
    }
}