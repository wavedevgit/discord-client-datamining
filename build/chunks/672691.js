/** chunk id: 672691 params = (module,exports,require) **/
t.d(l, {
    A: () => d
});
var n = t(64700),
    i = t(573648),
    s = t(429913),
    a = t(321078),
    r = t(403362),
    o = t(484509);

function d(e) {
    let {
        filteredAppIdentities: l
    } = (0, a.A)(e), t = (0, o.A)(e), d = n.useMemo(() => new Set(l?.map(e => e.application_id) ?? []), [l]), c = (0, s.A)([...d]).filter(r.Vq);
    return {
        appIdentities: n.useMemo(() => l.map(e => ({
            identity: e,
            application: c.find(l => l.id === e.application_id)
        })).filter(e => {
            let {
                application: l
            } = e;
            return null != l
        }), [l, c]),
        connections: n.useMemo(() => t.filter(e => {
            let l = i.A.get(e.type);
            return l?.replacedBy == null || !d.has(l.replacedBy)
        }), [t, d])
    }
}