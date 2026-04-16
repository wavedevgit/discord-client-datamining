/** chunk id: 793506 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(311907),
    l = n(522055),
    s = n(6316),
    o = n(853513),
    a = n(985018);

function u(e) {
    let t = (0, i.bG)([l.A], () => l.A.getStateForGuild(e)?.entitlements, [e]),
        n = (0, s.A)(e);
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