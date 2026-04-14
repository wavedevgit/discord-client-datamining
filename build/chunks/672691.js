/** chunk id: 672691 params = (module,exports,require) **/
n.d(l, {
    A: () => d
});
var t = n(64700),
    i = n(573648),
    s = n(429913),
    a = n(321078),
    r = n(403362),
    o = n(484509);

function d(e) {
    let {
        filteredAppIdentities: l
    } = (0, a.A)(e), n = (0, o.A)(e), d = t.useMemo(() => new Set(l?.map(e => e.application_id) ?? []), [l]), c = (0, s.A)([...d]).filter(r.Vq);
    return {
        appIdentities: t.useMemo(() => l.map(e => ({
            identity: e,
            application: c.find(l => l.id === e.application_id)
        })).filter(e => {
            let {
                application: l
            } = e;
            return null != l
        }), [l, c]),
        connections: t.useMemo(() => n.filter(e => {
            let l = i.A.get(e.type);
            return l?.replacedBy == null || !d.has(l.replacedBy)
        }), [n, d])
    }
}