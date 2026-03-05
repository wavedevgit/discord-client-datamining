/** chunk id: 561010, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => A
}), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(361610),
    a = n(964486),
    r = n(36124),
    o = n(317525),
    c = n(219065),
    d = n(818348),
    u = n(985018);
let h = [];

function A(e, t) {
    (0, a.Ay)(() => {
        t?.id != null && (0, l.Ey)(t.id, e, r.LD)
    });
    let n = (0, s.bG)([o.A], () => null != t ? o.A.getSortedRoles(t.id) : []),
        {
            version: A,
            members: m
        } = (0, s.cf)([c.A], () => ({
            version: c.A.getMemberListVersion(e),
            members: c.A.getMemberListSections(e)
        })),
        p = null == t,
        g = i.useMemo(() => {
            if (p) return h;
            let e = n.filter(e => e.hoist).map(e => ({
                id: e.id,
                label: e.name
            }));
            return e.push({
                id: d.cl.ONLINE,
                label: u.intl.string(u.t.WbGtnH)
            }, {
                id: d.cl.OFFLINE,
                label: u.intl.string(u.t.Vv0abJ)
            }), e.map(e => {
                let {
                    id: t,
                    label: n
                } = e;
                return {
                    label: n,
                    userIds: m?.[t]?.userIds ?? [],
                    id: t,
                    roleId: t
                }
            })
        }, [n, m, A, p]);
    return null != m ? g : h
}