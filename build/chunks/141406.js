/** chunk id: 141406 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(64700),
    i = n(311907),
    l = n(403362),
    s = n(645619),
    o = n(904629);

function a(e) {
    let t = (0, i.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(() => {
        if (null == t) return [];
        let {
            allPowerups: e,
            unlockedPowerups: n
        } = t;
        return (0, o.k)(Object.values(n)).map(t => e[t.sku_id]).filter(l.Vq)
    }, [t])
}