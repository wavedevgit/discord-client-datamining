/** chunk id: 396667 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(384904),
    o = n(767375),
    d = n(459357),
    c = n(615405),
    u = n(295405),
    m = n(166403),
    _ = n(773669),
    g = n(652215),
    A = n(445391);

function x(e) {
    let {
        showHeader: t = !1
    } = e, n = (0, a.bG)([c.A], () => c.A.isSyncing), x = (0, a.bG)([u.A], () => u.A.paymentSources), p = (0, a.bG)([u.A], () => u.A.defaultPaymentSourceId), h = (0, a.bG)([_.default], () => _.default.locale), T = (0, a.bG)([m.A], () => m.A.getPremiumTypeSubscription()), E = (0, a.bG)([c.A], () => c.A.isRemovingPaymentSource), f = (0, a.bG)([c.A], () => c.A.isUpdatingPaymentSource), {
        enabled: S
    } = (0, d.c)({
        location: "UserSettingsBilling"
    });
    return (s.useEffect(() => {
        r.$o(), r.hP()
    }, []), n && 0 === Object.keys(x).length) ? (0, i.jsx)("div", {
        className: A.o,
        children: (0, i.jsx)(l.y$y, {})
    }) : (0, i.jsx)(o.A, {
        showHeader: t,
        paymentSources: x,
        defaultPaymentSourceId: p,
        premiumSubscriptionPaymentSourceId: null != T && T.status !== g.Dmq.CANCELED ? T.paymentSourceId : null,
        locale: h,
        removing: E,
        submitting: f,
        showGiftCards: S
    })
}