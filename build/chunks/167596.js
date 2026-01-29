/** Chunk was on 43600 **/
/** chunk id: 167596, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    i = n(64700),
    s = n(821418),
    a = n(665260),
    r = n(397927),
    o = n(735547),
    u = n(652215),
    d = n(985018),
    c = n(901462);
let g = o.Ay.getMaxUsesOptions;

function h(e) {
    var t;
    let {
        shouldHideTemporaryInviteToggle: n,
        maxAgeOptions: h,
        maxAge: p,
        maxUses: v,
        temporary: A,
        onToggleTemporary: I,
        onSelectMaxAge: m,
        onSelectMaxUses: S,
        isGuestInviteCreationToggleEnabled: x,
        inviteFlags: y,
        onSetInviteFlags: f,
        isRoleAssignmentEnabled: E,
        assignableRoles: _,
        selectedRoleIds: C,
        onToggleRole: b
    } = e, T = o.Ay.getMaxAgeOptionByValue(p), N = g.find(e => e.value === v), M = i.useMemo(() => _.map(e => ({
        id: e.id,
        value: e.id,
        label: e.name,
        leading: () => {
            var t;
            return (0, l.jsx)(r.WYI, {
                color: null != (t = e.colorString) ? t : u.TpD,
                colors: e.colorStrings,
                background: !1,
                tooltip: !1
            })
        }
    })), [_]), O = i.useCallback(e => {
        let t = Array.from(C),
            n = null != e ? e : [],
            l = n.find(e => !t.includes(e)),
            i = t.find(e => !n.includes(e));
        null != l ? b(l) : null != i && b(i)
    }, [C, b]);
    return (0, l.jsxs)("div", {
        className: c.z1,
        children: [(0, l.jsx)(r.ZiE, {
            label: d.intl.string(d.t["60qw2x"]),
            options: h,
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
            value: null != (t = null == T ? void 0 : T.value) ? t : h[0].value,
            onSelectionChange: m,
            selectionMode: "single"
        }), (0, l.jsx)(r.ZiE, {
            label: d.intl.string(d.t.jDqWHW),
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
            value: null == N ? void 0 : N.value,
            onSelectionChange: S,
            selectionMode: "single"
        }), E && _.length > 0 && (0, l.jsx)(r.ZiE, {
            label: d.intl.string(d.t.rPYJxL),
            placeholder: d.intl.string(d.t["/djIh7"]),
            options: M,
            value: Array.from(C),
            onSelectionChange: O,
            selectionMode: "multiple",
            closeOnSelect: !1
        }), !n && (0, l.jsx)(r.dOG, {
            checked: A,
            onChange: e => I(e),
            description: d.intl.string(d.t.UN5IRX),
            label: d.intl.string(d.t["wE+9dr"])
        }), x && (0, l.jsx)(r.dOG, {
            checked: (0, a.Lt)(y, s.Q.IS_GUEST_INVITE),
            onChange: e => f((0, a.lA)(y, s.Q.IS_GUEST_INVITE, e)),
            description: d.intl.string(d.t["/FeTK6"]),
            label: d.intl.string(d.t.siexRS)
        })]
    })
}