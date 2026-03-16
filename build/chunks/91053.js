/** chunk id: 91053 params = (module,exports,require) **/
n.d(t, {
    Z: () => _
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(732955),
    a = n(937008),
    o = n(156312),
    u = n(166532),
    d = n(166403),
    c = n(810498),
    p = n(683433),
    m = n(344159),
    E = n(985018);

function _(e) {
    let {
        onStepChange: t,
        selectedPlanId: n,
        paymentSources: r,
        onBackClick: u,
        showBackButton: d,
        planOptions: c,
        shouldRenderUpdatedPaymentModal: m = !1,
        isTrial: _,
        isNextDisabled: S = !1
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
    } = x({
        onStepChange: t,
        selectedPlanId: n = n ?? T?.id,
        isGift: I,
        claimableRewards: h,
        paymentSources: r,
        shouldRenderUpdatedPaymentModal: m,
        isTrial: _,
        isNextDisabled: S
    }), R = i.useMemo(() => null != n && c.includes(n) ? [{
        variant: g,
        text: A,
        onClick: f,
        disabled: j
    }] : [{
        variant: "primary",
        text: E.intl.string(E.t.XqMe3N),
        disabled: !0
    }], [g, A, f, j, n, c]);
    return (0, l.jsx)(s.H7u, {
        leading: d && null != u ? (0, l.jsx)(p.A, {
            onClick: u
        }) : void 0,
        actions: R
    })
}
let x = e => {
    let {
        onStepChange: t,
        selectedPlanId: n,
        isGift: l,
        claimableRewards: i,
        paymentSources: s,
        shouldRenderUpdatedPaymentModal: a,
        isTrial: p,
        isNextDisabled: _ = !1
    } = e, x = (0, r.bG)([d.A], () => d.A.getPremiumTypeSubscription()), {
        step: S,
        selectedPlan: P
    } = (0, o.P5)(), {
        hasEntitlements: T
    } = (0, m.X)(n, l), I = null != x && null != x.paymentSourceId || Object.keys(s).length > 0 || T && !p;
    var h = a ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        g = u.pn.ADD_PAYMENT_STEPS;
    return I && (g = u.pn.REVIEW), (0, c.px)(P, l, i) && S !== u.pn.SELECT_FREE_SKU && (g = u.pn.SELECT_FREE_SKU), {
        variant: "primary",
        text: h,
        onClick: () => t(g),
        disabled: _
    }
}