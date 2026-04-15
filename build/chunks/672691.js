/** chunk id: 672691 params = (module,exports,require) **/
l.d(n, {
    A: () => d
});
var i = l(64700),
    t = l(573648),
    s = l(429913),
    a = l(321078),
    r = l(403362),
    o = l(484509);

function d(e) {
    let {
        filteredAppIdentities: n
    } = (0, a.A)(e), l = (0, o.A)(e), d = i.useMemo(() => new Set(n?.map(e => e.application_id) ?? []), [n]), c = (0, s.A)([...d]).filter(r.Vq);
    return {
        appIdentities: i.useMemo(() => n.map(e => ({
            identity: e,
            application: c.find(n => n.id === e.application_id)
        })).filter(e => {
            let {
                application: n
            } = e;
            return null != n
        }), [n, c]),
        connections: i.useMemo(() => l.filter(e => {
            let n = t.A.get(e.type);
            return n?.replacedBy == null || !d.has(n.replacedBy)
        }), [l, d])
    }
}