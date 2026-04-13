/** chunk id: 280645 params = (module,exports,require) **/
l.d(t, {
    A: () => g
});
var n = l(627968);
l(64700);
var i = l(311907),
    s = l(696451),
    a = l(317525),
    r = l(71393),
    o = l(576705),
    d = l(183555),
    c = l(1659),
    u = l(166005),
    m = l(900179),
    p = l(518477),
    x = l(652215),
    A = l(985018);

function g(e) {
    let {
        userId: t,
        guildId: l,
        ...g
    } = e, {
        trackUserProfileAction: f
    } = (0, d.NJ)(), h = (0, i.bG)([r.A], () => r.A.getGuild(l)), j = (0, i.bG)([s.Ay], () => s.Ay.getMember(l, t)), v = j?.roles, I = (0, i.yK)([a.A], () => a.A.getManyRoles(l, v ?? []).sort(c.m), [v, l]), [N] = (0, i.yK)([o.A], () => [o.A.can(x.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(l)]);
    if (null == h) return null;
    let y = N && null != j;
    return 0 !== I.length || y ? (0, n.jsx)(m.A, {
        heading: A.intl.string(A.t["LPJmL/"]),
        scrollTargetId: p.bk.ROLES,
        ...g,
        children: (0, n.jsx)(u.YR, {
            userId: t,
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