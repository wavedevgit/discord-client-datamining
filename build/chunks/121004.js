/** chunk id: 121004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(321073);
var l = n(64700),
    i = n(311907),
    s = n(964486),
    r = n(71393),
    a = n(576705),
    c = n(711014),
    o = n(208882),
    d = n(519480),
    u = n(652215);
let m = (e, t) => {
    let [n, m] = l.useState(!1), x = (0, i.bG)([d.A], () => d.A.getAdminGuildEntryIds(t)), g = (0, i.yK)([c.Ay, r.A, a.A], () => {
        let t = c.Ay.getFlattenedGuildIds(),
            n = [];
        return t.forEach(t => {
            let l = r.A.getGuild(t);
            null != l && a.A.can(u.xBc.ADMINISTRATOR, l) && l.id !== e && n.push(l)
        }), n
    }, [e]);
    return (0, s.Ay)(() => {
        (async () => {
            m(!0), await o.LH(t, g.map(e => e.id)), m(!1)
        })()
    }), {
        availableGuilds: l.useMemo(() => g.filter(e => !(null == x ? void 0 : x.has(e.id))), [g, x]),
        addedGuilds: l.useMemo(() => g.filter(e => null == x ? void 0 : x.has(e.id)), [g, x]),
        loading: n
    }
}