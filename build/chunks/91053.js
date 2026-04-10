/** chunk id: 91053 params = (module,exports,require) **/
n.d(t, {
    Z: () => x
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(732955),
    a = n(937008),
    o = n(156312),
    u = n(166532),
    d = n(970077),
    c = n(615310),
    p = n(166403),
    m = n(810498),
    E = n(683433),
    _ = n(344159),
    S = n(985018);

function x(e) {
    let {
        onStepChange: t,
        selectedPlanId: n,
        paymentSources: r,
        onBackClick: u,
        showBackButton: c,
        planOptions: p,
        shouldRenderUpdatedPaymentModal: m = !1,
        isTrial: _,
        isNextDisabled: x = !1
    } = e, {
        paymentSources: T
    } = (0, o.P5)(), A = (0, d.A)(), {
        isGift: h,
        claimableRewards: g
    } = (0, a.Pv)();
    r = r ?? T;
    let {
        variant: I,
        text: f,
        onClick: j,
        disabled: R
    } = P({
        onStepChange: t,
        selectedPlanId: n = n ?? A?.id,
        isGift: h,
        claimableRewards: g,
        paymentSources: r,
        shouldRenderUpdatedPaymentModal: m,
        isTrial: _,
        isNextDisabled: x
    }), M = i.useMemo(() => null != n && p.includes(n) ? [{
        variant: I,
        text: f,
        onClick: j,
        disabled: R
    }] : [{
        variant: "primary",
        text: S.intl.string(S.t.XqMe3N),
        disabled: !0
    }], [I, f, j, R, n, p]);
    return (0, l.jsx)(s.H7u, {
        leading: c && null != u ? (0, l.jsx)(E.A, {
            onClick: u
        }) : void 0,
        actions: M
    })
}
let P = e => {
    let {
        onStepChange: t,
        selectedPlanId: n,
        isGift: l,
        claimableRewards: i,
        paymentSources: s,
        shouldRenderUpdatedPaymentModal: a,
        isTrial: o,
        isNextDisabled: E = !1
    } = e, x = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()), P = (0, d.A)(), T = (0, c.bB)(), {
        hasEntitlements: A
    } = (0, _.X)(n, l), h = null != x && null != x.paymentSourceId || Object.keys(s).length > 0 || A && !o;
    var g = a ? S.intl.string(S.t.PDTjLN) : S.intl.string(S.t.XqMe3N),
        I = u.pn.ADD_PAYMENT_STEPS;
    return h && (I = u.pn.REVIEW), (0, m.px)(P, l, i) && T !== u.pn.SELECT_FREE_SKU && (I = u.pn.SELECT_FREE_SKU), {
        variant: "primary",
        text: g,
        onClick: () => t(I),
        disabled: E
    }
}