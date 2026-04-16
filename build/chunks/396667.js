/** chunk id: 396667 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(767375),
    o = n(323082),
    d = n(459357),
    c = n(615405),
    u = n(295405),
    m = n(166403),
    g = n(773669),
    _ = n(652215),
    x = n(243156);

function h(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, r.bG)([c.A], () => c.A.isSyncing), h = (0, r.bG)([u.A], () => u.A.paymentSources), A = (0, r.bG)([u.A], () => u.A.defaultPaymentSourceId), p = (0, r.bG)([g.default], () => g.default.locale), T = (0, r.bG)([m.A], () => m.A.getPremiumTypeSubscription()), f = (0, r.bG)([c.A], () => c.A.isRemovingPaymentSource), S = (0, r.bG)([c.A], () => c.A.isUpdatingPaymentSource), {
        enabled: E
    } = (0, d.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        o.$o(), o.hP()
    }, []), n && 0 === Object.keys(h).length) ? (0, i.jsx)("div", {
        className: x.o,
        children: (0, i.jsx)(l.y$y, {})
    }) : (0, i.jsx)(a.A, {
        showHeader: t,
        paymentSources: h,
        defaultPaymentSourceId: A,
        premiumSubscriptionPaymentSourceId: null != T && T.status !== _.Dmq.CANCELED ? T.paymentSourceId : null,
        locale: p,
        removing: f,
        submitting: S,
        showGiftCards: E
    })
}