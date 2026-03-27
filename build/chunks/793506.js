/** chunk id: 793506 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    i = n(311907),
    s = n(522055),
    l = n(6316),
    o = n(136708),
    a = n(985018);

function d(e) {
    let t = (0, i.bG)([s.A], () => s.A.getStateForGuild(e)?.entitlements, [e]),
        n = (0, l.A)(e);
    return r.useMemo(() => {
        if (0 !== Object.values(t ?? {}).length) return n.length > 0 ? {
            type: "expiring",
            expiringAt: n[0].ends_at
        } : {
            type: "active",
            statusText: a.intl.string(o.default.FFLkmx)
        }
    }, [n, t])
}