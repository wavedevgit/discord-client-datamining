/** chunk id: 280645 params = (module,exports,require) **/
n.d(l, {
    A: () => g
});
var t = n(627968);
n(64700);
var i = n(311907),
    s = n(696451),
    a = n(317525),
    r = n(71393),
    o = n(576705),
    d = n(183555),
    c = n(1659),
    u = n(166005),
    m = n(900179),
    p = n(518477),
    x = n(652215),
    A = n(985018);

function g(e) {
    let {
        userId: l,
        guildId: n,
        ...g
    } = e, {
        trackUserProfileAction: f
    } = (0, d.NJ)(), h = (0, i.bG)([r.A], () => r.A.getGuild(n)), j = (0, i.bG)([s.Ay], () => s.Ay.getMember(n, l)), I = j?.roles, v = (0, i.yK)([a.A], () => a.A.getManyRoles(n, I ?? []).sort(c.m), [I, n]), [N] = (0, i.yK)([o.A], () => [o.A.can(x.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(n)]);
    if (null == h) return null;
    let y = N && null != j;
    return 0 !== v.length || y ? (0, t.jsx)(m.A, {
        heading: A.intl.string(A.t["LPJmL/"]),
        scrollTargetId: p.bk.ROLES,
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