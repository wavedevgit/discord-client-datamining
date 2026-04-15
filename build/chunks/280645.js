/** chunk id: 280645 params = (module,exports,require) **/
l.d(n, {
    A: () => g
});
var i = l(627968);
l(64700);
var t = l(311907),
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
        userId: n,
        guildId: l,
        ...g
    } = e, {
        trackUserProfileAction: f
    } = (0, d.NJ)(), h = (0, t.bG)([r.A], () => r.A.getGuild(l)), v = (0, t.bG)([s.Ay], () => s.Ay.getMember(l, n)), j = v?.roles, I = (0, t.yK)([a.A], () => a.A.getManyRoles(l, j ?? []).sort(c.m), [j, l]), [N] = (0, t.yK)([o.A], () => [o.A.can(x.xBc.MANAGE_ROLES, h), o.A.getGuildVersion(l)]);
    if (null == h) return null;
    let y = N && null != v;
    return 0 !== I.length || y ? (0, i.jsx)(m.A, {
        heading: A.intl.string(A.t["LPJmL/"]),
        scrollTargetId: p.bk.ROLES,
        ...g,
        children: (0, i.jsx)(u.YR, {
            userId: n,
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