/** chunk id: 91053 params = (module,exports,require) **/
n.d(t, {
    Z: () => I
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
    S = n(344159),
    _ = n(985018);

function I(e) {
    let {
        onStepChange: t,
        selectedPlanId: n,
        paymentSources: r,
        onBackClick: u,
        showBackButton: c,
        planOptions: p,
        shouldRenderUpdatedPaymentModal: m = !1,
        isTrial: S,
        isNextDisabled: I = !1
    } = e, {
        paymentSources: x
    } = (0, o.P5)(), T = (0, d.A)(), {
        isGift: A,
        claimableRewards: h
    } = (0, a.Pv)();
    r = r ?? x;
    let {
        variant: g,
        text: f,
        onClick: j,
        disabled: R
    } = P({
        onStepChange: t,
        selectedPlanId: n = n ?? T?.id,
        isGift: A,
        claimableRewards: h,
        paymentSources: r,
        shouldRenderUpdatedPaymentModal: m,
        isTrial: S,
        isNextDisabled: I
    }), M = i.useMemo(() => null != n && p.includes(n) ? [{
        variant: g,
        text: f,
        onClick: j,
        disabled: R
    }] : [{
        variant: "primary",
        text: _.intl.string(_.t.XqMe3N),
        disabled: !0
    }], [g, f, j, R, n, p]);
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
    } = e, I = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()), P = (0, d.A)(), x = (0, c.bB)(), {
        hasEntitlements: T
    } = (0, S.X)(n, l), A = null != I && null != I.paymentSourceId || Object.keys(s).length > 0 || T && !o;
    var h = a ? _.intl.string(_.t.PDTjLN) : _.intl.string(_.t.XqMe3N),
        g = u.pn.ADD_PAYMENT_STEPS;
    return A && (g = u.pn.REVIEW), (0, m.px)(P, l, i) && x !== u.pn.SELECT_FREE_SKU && (g = u.pn.SELECT_FREE_SKU), {
        variant: "primary",
        text: h,
        onClick: () => t(g),
        disabled: E
    }
}