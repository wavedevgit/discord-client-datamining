/** chunk id: 386404 params = (module,exports,require) **/
l.d(t, {
    A: () => f
});
var n = l(627968),
    i = l(64700),
    s = l(91871),
    a = l.n(s),
    C = l(33851),
    r = l.n(C),
    o = l(311907),
    d = l(417597),
    c = l(397927),
    u = l(775602),
    m = l(676608),
    x = l(34457),
    h = l(317525),
    g = l(504049),
    H = l(266047),
    p = l(221950),
    j = l(652215),
    _ = l(985018);

function f(e) {
    let {
        guildId: t,
        onClose: l
    } = e, s = (0, g.hs)(t), [C, f] = i.useState(""), b = (0, d.bG)([H.A], () => H.A.getSearchStateByGuildId(t), [t], r()), A = (0, d.bG)([u.A], () => u.A.roleStyle), v = (0, c.rdh)(c.LU0.unsafe_rawColors.PRIMARY_300).hex(), V = (0, m.jV)(t, null), L = (0, o.yK)([h.A], () => h.A.getSortedRoles(t).filter(e => !(0, x.Oy)(e)), [t]), D = i.useMemo(() => "" === C ? L : L.filter(e => a()(C.toLowerCase(), e.name.toLowerCase())), [L, C]), R = i.useCallback(e => {
        let l = new Set(b.selectedRoleIds);
        l.has(e) ? l.delete(e) : l.add(e), (0, p.Ld)(t, {
            selectedRoleIds: l
        }), s(l)
    }, [t, b.selectedRoleIds, s]);
    return (0, n.jsx)(c.W1t, {
        "data-menu-migrated": !0,
        navId: "member-safety-roles",
        onClose: l,
        "aria-label": _.intl.string(_.t.ZveC7e),
        onSelect: j.tEg,
        children: (0, n.jsxs)(c.rXV, {
            children: [(0, n.jsx)(c.aK1, {
                id: "members-table-role-search",
                control: (e, t) => (0, n.jsx)(c.VPO, {
                    ...e,
                    query: C,
                    onChange: f,
                    ref: t,
                    placeholder: _.intl.string(_.t.ZveC7e)
                })
            }), (0, n.jsx)(c.bXX, {}), D.map(e => {
                let t = e.colorString ?? v,
                    l = V && e.colorStrings?.primaryColor != null && e.colorStrings?.secondaryColor != null ? e.colorStrings : null;
                return (0, n.jsx)(c.sLh, {
                    id: `role-${e.id}`,
                    label: e.name,
                    leadingAccessory: {
                        type: "roleDot",
                        variant: "dot" === A ? "dot" : "circle",
                        color: t,
                        colors: l
                    },
                    checked: b.selectedRoleIds.has(e.id),
                    action: () => R(e.id)
                }, e.id)
            })]
        })
    })
}