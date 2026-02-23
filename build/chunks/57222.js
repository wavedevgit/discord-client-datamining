/** chunk id: 57222, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => C,
    H: () => o
});
var n = l(627968);
l(64700);
var i = l(311907),
    a = l(34457),
    s = l(317525),
    r = l(64749);

function o(e, t, l, n) {
    return (0, i.yK)([s.A], () => s.A.getSortedRoles(e).filter(e => !t.has(e.id) && !(l && (0, a.Oy)(e)) && (null == n || n(e))).map(e => (0, r.th)(e).row), [l, e, n, t])
}

function C(e) {
    let {
        guildId: t,
        selectedRoleIds: l,
        onChange: i,
        placeholder: a,
        disableEveryoneRole: s,
        helperText: C,
        className: d,
        selectableRoleFilter: c
    } = e, u = o(t, l, s, c);
    return (0, n.jsx)(r.Ay, {
        roleRows: u,
        guildId: t,
        selectedRoleIds: l,
        onChange: (e, t) => i(t),
        placeholder: a,
        helperText: C,
        className: d
    })
}