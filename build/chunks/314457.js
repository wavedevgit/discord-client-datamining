/** chunk id: 314457 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    l = n(621248),
    r = n(926466),
    s = n(997509),
    o = n(652215),
    d = n(985018),
    c = n(628287);
let u = e => {
    let {
        guild: t
    } = e, n = a.useCallback(() => {
        (0, l.J)(t.id)
    }, [t.id]);
    return (0, i.jsx)(r.A, {
        guild: t,
        onDismissed: n,
        onClick: () => s.A.open(t.id, o.BEX.COMMUNITY),
        message: d.intl.string(d.t["2klD0Z"]),
        trackingSource: o.kZU.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: o.n5X.PUBLIC_UPSELL,
        image: c,
        cta: d.intl.string(d.t.hvVgAZ)
    })
}