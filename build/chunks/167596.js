/** chunk id: 167596 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    i = n(64700),
    s = n(821418),
    a = n(665260),
    r = n(397927),
    o = n(735547),
    d = n(652215),
    u = n(985018),
    c = n(416520);
let g = o.Ay.getMaxUsesOptions;

function h(e) {
    let {
        shouldHideTemporaryInviteToggle: t,
        maxAgeOptions: n,
        maxAge: h,
        maxUses: A,
        temporary: p,
        onToggleTemporary: x,
        onSelectMaxAge: I,
        onSelectMaxUses: m,
        isGuestInviteCreationToggleEnabled: S,
        inviteFlags: v,
        onSetInviteFlags: y,
        isRoleAssignmentEnabled: E,
        assignableRoles: T,
        selectedRoleIds: _,
        onToggleRole: f
    } = e, C = o.Ay.getMaxAgeOptionByValue(h), N = g.find(e => e.value === A), b = i.useMemo(() => T.map(e => ({
        id: e.id,
        value: e.id,
        label: e.name,
        leading: () => (0, l.jsx)(r.WYI, {
            color: e.colorString ?? d.TpD,
            colors: e.colorStrings,
            background: !1,
            tooltip: !1
        })
    })), [T]), M = i.useCallback(e => {
        let t = Array.from(_),
            n = e ?? [],
            l = n.find(e => !t.includes(e)),
            i = t.find(e => !n.includes(e));
        null != l ? f(l) : null != i && f(i)
    }, [_, f]);
    return (0, l.jsxs)("div", {
        className: c.z1,
        children: [(0, l.jsx)(r.ZiE, {
            label: u.intl.string(u.t["60qw2x"]),
            options: n,
            formatOption: e => {
                let {
                    value: t,
                    label: n
                } = e;
                return {
                    id: t.toString(),
                    value: t,
                    label: n
                }
            },
            value: C?.value ?? n[0].value,
            onSelectionChange: I,
            selectionMode: "single"
        }), (0, l.jsx)(r.ZiE, {
            label: u.intl.string(u.t.jDqWHW),
            options: g,
            formatOption: e => {
                let {
                    value: t,
                    label: n
                } = e;
                return {
                    id: t.toString(),
                    value: t,
                    label: n
                }
            },
            value: N?.value,
            onSelectionChange: m,
            selectionMode: "single"
        }), E && T.length > 0 && (0, l.jsx)(r.ZiE, {
            label: u.intl.string(u.t.rPYJxL),
            placeholder: u.intl.string(u.t["/djIh7"]),
            options: b,
            value: Array.from(_),
            onSelectionChange: M,
            selectionMode: "multiple",
            closeOnSelect: !1,
            disabled: p
        }), !t && (0, l.jsx)(r.dOG, {
            checked: p,
            onChange: e => x(e),
            description: u.intl.string(u.t.UN5IRX),
            label: u.intl.string(u.t["wE+9dr"]),
            disabled: _.size > 0
        }), S && (0, l.jsx)(r.dOG, {
            checked: (0, a.Lt)(v, s.Q.IS_GUEST_INVITE),
            onChange: e => y((0, a.lA)(v, s.Q.IS_GUEST_INVITE, e)),
            description: u.intl.string(u.t["/FeTK6"]),
            label: u.intl.string(u.t.siexRS)
        })]
    })
}