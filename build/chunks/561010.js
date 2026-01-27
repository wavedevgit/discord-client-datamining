/** Chunk was on 41727 **/
/** chunk id: 561010, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => h
}), n(321073);
var r = n(64700),
    l = n(311907),
    i = n(361610),
    s = n(964486),
    a = n(36124),
    o = n(317525),
    c = n(219065),
    u = n(818348),
    d = n(985018);
let p = [];

function h(e, t) {
    (0, s.Ay)(() => {
        (null == t ? void 0 : t.id) != null && (0, i.Ey)(t.id, e, a.LD)
    });
    let n = (0, l.bG)([o.A], () => null != t ? o.A.getSortedRoles(t.id) : []),
        {
            version: h,
            members: f
        } = (0, l.cf)([c.A], () => ({
            version: c.A.getMemberListVersion(e),
            members: c.A.getMemberListSections(e)
        })),
        g = null == t,
        m = r.useMemo(() => {
            if (g) return p;
            let e = n.filter(e => e.hoist).map(e => ({
                id: e.id,
                label: e.name
            }));
            return e.push({
                id: u.cl.ONLINE,
                label: d.intl.string(d.t.WbGtnH)
            }, {
                id: u.cl.OFFLINE,
                label: d.intl.string(d.t.Vv0abJ)
            }), e.map(e => {
                var t, n;
                let {
                    id: r,
                    label: l
                } = e;
                return {
                    label: l,
                    userIds: null != (t = null == f || null == (n = f[r]) ? void 0 : n.userIds) ? t : [],
                    id: r,
                    roleId: r
                }
            })
        }, [n, f, h, g]);
    return null != f ? m : p
}