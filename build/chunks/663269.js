/** chunk id: 663269 params = (module,exports,require) **/
n.d(t, {
    h: () => r
}), n(938796);
var l = n(627968),
    i = n(189213),
    s = n(167596),
    a = n(985018);
let r = e => {
    let {
        handleDone: t,
        modalState: n,
        shouldHideTemporaryInviteToggle: r,
        onGenerateNewLink: o,
        onToggleTemporary: d,
        onSelectMaxAge: u,
        onSelectMaxUses: c,
        isGuestInviteCreationToggleEnabled: g,
        onSetInviteFlags: h,
        onClose: A,
        transitionState: p,
        isRoleAssignmentEnabled: x,
        assignableRoles: I,
        onToggleRole: m
    } = e, {
        maxAgeOptions: S,
        maxAge: v,
        maxUses: y,
        temporary: E,
        flags: T,
        roleIds: _
    } = n;
    return (0, l.jsx)(i.Modal, {
        transitionState: p,
        onClose: A,
        title: a.intl.string(a.t.Atdlyu),
        actions: [{
            variant: "secondary",
            text: a.intl.string(a.t["ETE/oC"]),
            onClick: t
        }, {
            variant: "primary",
            text: a.intl.string(a.t.pz1lRG),
            onClick: () => {
                o(), t()
            }
        }],
        children: (0, l.jsx)(s.A, {
            shouldHideTemporaryInviteToggle: r,
            maxAgeOptions: S,
            maxAge: v,
            maxUses: y,
            temporary: E,
            onToggleTemporary: d,
            onSelectMaxAge: u,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: T,
            isRoleAssignmentEnabled: x,
            assignableRoles: I,
            selectedRoleIds: _,
            onToggleRole: m
        })
    })
}