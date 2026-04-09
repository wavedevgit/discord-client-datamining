/** chunk id: 396667 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(767375),
    o = n(323082),
    d = n(459357),
    c = n(615405),
    u = n(295405),
    m = n(166403),
    g = n(773669),
    _ = n(652215),
    x = n(114852);

function A(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, a.bG)([c.A], () => c.A.isSyncing), A = (0, a.bG)([u.A], () => u.A.paymentSources), h = (0, a.bG)([u.A], () => u.A.defaultPaymentSourceId), p = (0, a.bG)([g.default], () => g.default.locale), T = (0, a.bG)([m.A], () => m.A.getPremiumTypeSubscription()), f = (0, a.bG)([c.A], () => c.A.isRemovingPaymentSource), S = (0, a.bG)([c.A], () => c.A.isUpdatingPaymentSource), {
        enabled: b
    } = (0, d.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        o.$o(), o.hP()
    }, []), n && 0 === Object.keys(A).length) ? (0, i.jsx)("div", {
        className: x.o,
        children: (0, i.jsx)(l.y$y, {})
    }) : (0, i.jsx)(r.A, {
        showHeader: t,
        paymentSources: A,
        defaultPaymentSourceId: h,
        premiumSubscriptionPaymentSourceId: null != T && T.status !== _.Dmq.CANCELED ? T.paymentSourceId : null,
        locale: p,
        removing: f,
        submitting: S,
        showGiftCards: b
    })
}