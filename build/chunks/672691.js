/** chunk id: 672691 params = (module,exports,require) **/
l.d(n, {
    A: () => d
});
var t = l(64700),
    i = l(573648),
    s = l(429913),
    a = l(321078),
    r = l(403362),
    o = l(484509);

function d(e) {
    let {
        filteredAppIdentities: n
    } = (0, a.A)(e), l = (0, o.A)(e), d = t.useMemo(() => new Set(n?.map(e => e.application_id) ?? []), [n]), c = (0, s.A)([...d]).filter(r.Vq);
    return {
        appIdentities: t.useMemo(() => n.map(e => ({
            identity: e,
            application: c.find(n => n.id === e.application_id)
        })).filter(e => {
            let {
                application: n
            } = e;
            return null != n
        }), [n, c]),
        connections: t.useMemo(() => l.filter(e => {
            let n = i.A.get(e.type);
            return n?.replacedBy == null || !d.has(n.replacedBy)
        }), [l, d])
    }
}