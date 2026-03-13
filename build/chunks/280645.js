/** chunk id: 280645 params = (module,exports,require) **/
n.d(l, {
    A: () => g
});
var i = n(627968);
n(64700);
var t = n(311907),
    s = n(696451),
    a = n(317525),
    r = n(71393),
    o = n(576705),
    d = n(183555),
    c = n(1659),
    u = n(166005),
    A = n(900179),
    m = n(518477),
    p = n(652215),
    x = n(985018);

function g(e) {
    let {
        userId: l,
        guildId: n,
        ...g
    } = e, {
        trackUserProfileAction: h
    } = (0, d.NJ)(), f = (0, t.bG)([r.A], () => r.A.getGuild(n)), I = (0, t.bG)([s.Ay], () => s.Ay.getMember(n, l)), j = I?.roles, v = (0, t.yK)([a.A], () => a.A.getManyRoles(n, j ?? []).sort(c.m), [j, n]), [N] = (0, t.yK)([o.A], () => [o.A.can(p.xBc.MANAGE_ROLES, f), o.A.getGuildVersion(n)]);
    if (null == f) return null;
    let y = N && null != I;
    return 0 !== v.length || y ? (0, i.jsx)(A.A, {
        heading: x.intl.string(x.t["LPJmL/"]),
        scrollTargetId: m.bk.ROLES,
        ...g,
        children: (0, i.jsx)(u.YR, {
            userId: l,
            guild: f,
            roles: v,
            onAddRole: () => {
                h({
                    action: "ADD_ROLE"
                })
            },
            onRemoveRole: () => {
                h({
                    action: "REMOVE_ROLE"
                })
            },
            allowEditing: !0
        })
    }) : null
}