/** chunk id: 280645 params = (module,exports,require) **/
i.d(l, {
    A: () => g
});
var n = i(627968);
i(64700);
var t = i(311907),
    s = i(696451),
    a = i(317525),
    r = i(71393),
    o = i(576705),
    d = i(183555),
    c = i(1659),
    u = i(166005),
    A = i(900179),
    m = i(518477),
    p = i(652215),
    x = i(985018);

function g(e) {
    let {
        userId: l,
        guildId: i,
        ...g
    } = e, {
        trackUserProfileAction: h
    } = (0, d.NJ)(), f = (0, t.bG)([r.A], () => r.A.getGuild(i)), j = (0, t.bG)([s.Ay], () => s.Ay.getMember(i, l)), I = j?.roles, v = (0, t.yK)([a.A], () => a.A.getManyRoles(i, I ?? []).sort(c.m), [I, i]), [N] = (0, t.yK)([o.A], () => [o.A.can(p.xBc.MANAGE_ROLES, f), o.A.getGuildVersion(i)]);
    if (null == f) return null;
    let y = N && null != j;
    return 0 !== v.length || y ? (0, n.jsx)(A.A, {
        heading: x.intl.string(x.t["LPJmL/"]),
        scrollTargetId: m.bk.ROLES,
        ...g,
        children: (0, n.jsx)(u.YR, {
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