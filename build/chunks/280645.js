/** chunk id: 280645 params = (module,exports,require) **/
t.d(l, {
    A: () => g
});
var n = t(627968);
t(64700);
var i = t(311907),
    s = t(696451),
    a = t(317525),
    r = t(71393),
    o = t(576705),
    d = t(183555),
    c = t(1659),
    u = t(166005),
    m = t(900179),
    x = t(518477),
    p = t(652215),
    A = t(985018);

function g(e) {
    let {
        userId: l,
        guildId: t,
        ...g
    } = e, {
        trackUserProfileAction: f
    } = (0, d.NJ)(), h = (0, i.bG)([r.A], () => r.A.getGuild(t)), j = (0, i.bG)([s.Ay], () => s.Ay.getMember(t, l)), v = j?.roles, I = (0, i.yK)([a.A], () => a.A.getManyRoles(t, v ?? []).sort(c.m), [v, t]), [N] = (0, i.yK)([o.A], () => [o.A.can(p.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(t)]);
    if (null == h) return null;
    let y = N && null != j;
    return 0 !== I.length || y ? (0, n.jsx)(m.A, {
        heading: A.intl.string(A.t["LPJmL/"]),
        scrollTargetId: x.bk.ROLES,
        ...g,
        children: (0, n.jsx)(u.YR, {
            userId: l,
            guild: h,
            roles: I,
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