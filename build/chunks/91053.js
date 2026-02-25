/** chunk id: 91053, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Z: () => _
});
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(732955),
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
        paymentSources: s,
        onBackClick: u,
        showBackButton: d,
        planOptions: c,
        shouldRenderUpdatedPaymentModal: m = !1,
        isTrial: _,
        isNextDisabled: x = !1
    } = e, {
        paymentSources: S,
        selectedPlan: P
    } = (0, o.P5)(), {
        isGift: I,
        claimableRewards: T
    } = (0, a.Pv)();
    s = s ?? S;
    let {
        variant: g,
        text: A,
        onClick: j,
        disabled: f
    } = h({
        onStepChange: t,
        selectedPlanId: n = n ?? P?.id,
        isGift: I,
        claimableRewards: T,
        paymentSources: s,
        shouldRenderUpdatedPaymentModal: m,
        isTrial: _,
        isNextDisabled: x
    }), M = i.useMemo(() => null != n && c.includes(n) ? [{
        variant: g,
        text: A,
        onClick: j,
        disabled: f
    }] : [{
        variant: "primary",
        text: E.intl.string(E.t.XqMe3N),
        disabled: !0
    }], [g, A, j, f, n, c]);
    return (0, l.jsx)(r.H7u, {
        leading: d && null != u ? (0, l.jsx)(p.A, {
            onClick: u
        }) : void 0,
        actions: M
    })
}
let h = e => {
    let {
        onStepChange: t,
        selectedPlanId: n,
        isGift: l,
        claimableRewards: i,
        paymentSources: r,
        shouldRenderUpdatedPaymentModal: a,
        isTrial: p,
        isNextDisabled: _ = !1
    } = e, h = (0, s.bG)([d.A], () => d.A.getPremiumTypeSubscription()), {
        step: x,
        selectedPlan: S
    } = (0, o.P5)(), {
        hasEntitlements: P
    } = (0, m.X)(n, l), I = null != h && null != h.paymentSourceId || Object.keys(r).length > 0 || P && !p;
    var T = a ? E.intl.string(E.t.PDTjLN) : E.intl.string(E.t.XqMe3N),
        g = u.pn.ADD_PAYMENT_STEPS;
    return I && (g = u.pn.REVIEW), (0, c.px)(S, l, i) && x !== u.pn.SELECT_FREE_SKU && (g = u.pn.SELECT_FREE_SKU), {
        variant: "primary",
        text: T,
        onClick: () => t(g),
        disabled: _
    }
}