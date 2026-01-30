/** chunk id: 141406, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(64700),
    l = n(311907),
    i = n(403362),
    o = n(645619),
    s = n(904629);

function a(e) {
    let t = (0, l.bG)([o.A], () => o.A.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let {
            allPowerups: e,
            unlockedPowerups: n
        } = t;
        return (0, s.k)(Object.values(n)).map(t => e[t.sku_id]).filter(i.Vq)
    }, [t])
}