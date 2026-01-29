/** Chunk was on 43600 **/
/** chunk id: 663269, original params: e,t,n (module,exports,require) **/
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
        onToggleTemporary: u,
        onSelectMaxAge: d,
        onSelectMaxUses: c,
        isGuestInviteCreationToggleEnabled: g,
        onSetInviteFlags: h,
        onClose: p,
        transitionState: v,
        isRoleAssignmentEnabled: A,
        assignableRoles: I,
        onToggleRole: m
    } = e, {
        maxAgeOptions: S,
        maxAge: x,
        maxUses: y,
        temporary: f,
        flags: E,
        roleIds: _
    } = n;
    return (0, l.jsx)(i.Modal, {
        transitionState: v,
        onClose: p,
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
            maxAge: x,
            maxUses: y,
            temporary: f,
            onToggleTemporary: u,
            onSelectMaxAge: d,
            onSelectMaxUses: c,
            isGuestInviteCreationToggleEnabled: g,
            onSetInviteFlags: h,
            inviteFlags: E,
            isRoleAssignmentEnabled: A,
            assignableRoles: I,
            selectedRoleIds: _,
            onToggleRole: m
        })
    })
}