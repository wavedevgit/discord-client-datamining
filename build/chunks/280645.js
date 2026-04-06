/** chunk id: 280645 params = (module,exports,require) **/
i.d(l, {
    A: () => g
});
var t = i(627968);
i(64700);
var n = i(311907),
    s = i(696451),
    a = i(317525),
    r = i(71393),
    o = i(576705),
    d = i(183555),
    c = i(1659),
    u = i(166005),
    m = i(900179),
    x = i(518477),
    A = i(652215),
    p = i(985018);

function g(e) {
    let {
        userId: l,
        guildId: i,
        ...g
    } = e, {
        trackUserProfileAction: f
    } = (0, d.NJ)(), h = (0, n.bG)([r.A], () => r.A.getGuild(i)), j = (0, n.bG)([s.Ay], () => s.Ay.getMember(i, l)), I = j?.roles, v = (0, n.yK)([a.A], () => a.A.getManyRoles(i, I ?? []).sort(c.m), [I, i]), [N] = (0, n.yK)([o.A], () => [o.A.can(A.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(i)]);
    if (null == h) return null;
    let y = N && null != j;
    return 0 !== v.length || y ? (0, t.jsx)(m.A, {
        heading: p.intl.string(p.t["LPJmL/"]),
        scrollTargetId: x.bk.ROLES,
        ...g,
        children: (0, t.jsx)(u.YR, {
            userId: l,
            guild: h,
            roles: v,
            onAddRole: () => {
                f({
                    action: "ADD_ROLE"
                })
            },
            onRemoveRole: () => {
                f({
                    action: "REMOVE_ROLE"
                })
            },
            allowEditing: !0
        })
    }) : null
}