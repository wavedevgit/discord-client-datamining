/** Chunk was on 88615 **/
/** chunk id: 793506, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    l = n(311907),
    i = n(522055),
    o = n(6316),
    s = n(333354),
    a = n(985018);

function u(e) {
    let t = (0, l.bG)([i.A], () => {
            var t;
            return null == (t = i.A.getStateForGuild(e)) ? void 0 : t.entitlements
        }, [e]),
        n = (0, o.A)(e);
    return r.useMemo(() => {
        if (0 !== Object.values(null != t ? t : {}).length) return n.length > 0 ? {
            type: "expiring",
            expiringAt: n[0].ends_at
        } : {
            type: "active",
            statusText: a.intl.string(s.default.FFLkmx)
        }
    }, [n, t])
}