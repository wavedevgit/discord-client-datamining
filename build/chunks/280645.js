/** chunk id: 280645 params = (module,exports,require) **/
t.d(l, {
    A: () => g
});
var i = t(627968);
t(64700);
var n = t(311907),
    s = t(696451),
    a = t(317525),
    r = t(71393),
    o = t(576705),
    d = t(183555),
    c = t(1659),
    u = t(166005),
    m = t(900179),
    A = t(518477),
    p = t(652215),
    x = t(985018);

function g(e) {
    let {
        userId: l,
        guildId: t,
        ...g
    } = e, {
        trackUserProfileAction: f
    } = (0, d.NJ)(), h = (0, n.bG)([r.A], () => r.A.getGuild(t)), j = (0, n.bG)([s.Ay], () => s.Ay.getMember(t, l)), I = j?.roles, v = (0, n.yK)([a.A], () => a.A.getManyRoles(t, I ?? []).sort(c.m), [I, t]), [N] = (0, n.yK)([o.A], () => [o.A.can(p.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(t)]);
    if (null == h) return null;
    let y = N && null != j;
    return 0 !== v.length || y ? (0, i.jsx)(m.A, {
        heading: x.intl.string(x.t["LPJmL/"]),
        scrollTargetId: A.bk.ROLES,
        ...g,
        children: (0, i.jsx)(u.YR, {
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