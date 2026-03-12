/** chunk id: 457684 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(631670),
    a = n(662758),
    o = n(71393),
    d = n(7064),
    c = n(125040),
    u = n(652215),
    _ = n(985018);

function m(e) {
    let {
        currentUser: t,
        userTeamsLoading: n,
        userTeams: m
    } = e, [g, A] = s.useState(!1), [h, x] = s.useState(!1), [p, T] = s.useState(!1), [E, C] = s.useState(!1), [S, f] = s.useState(null), N = s.useCallback(e => {
        if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
        C(!0), f(e.body.message)
    }, []), b = s.useCallback((e, t) => (0, r.U_)(e, t).then(u.tEg, N), [N]), I = s.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = o.A.getGuildsArray().filter(e => e.ownerId === t.id);
        (m?.filter(e => e.owner_user_id === t.id) ?? []).length > 0 ? A(!0) : n.length > 0 ? x(!0) : t.isClaimed() ? (0, l.qfG)(t => (0, i.jsx)(a.default, {
            ...t,
            handleSubmit: t => b(t, e),
            title: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
            actionText: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
            children: e ? _.intl.string(_.t.FB4H1D) : _.intl.string(_.t.gk7h32)
        })) : T(!0)
    }, [t, b, m]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            currentUser: t,
            disabled: n,
            handleDisableAccount: () => I(!1),
            handleDeleteAccount: () => I(!0)
        }), (0, i.jsx)(c.A, {
            shouldRenderOwnedTeamsModal: g,
            shouldRenderOwnedGuildsModal: h,
            shouldRenderDeleteAccountConfirmModal: p,
            shouldRenderDisableAccountErrorModal: E,
            disableAccountErrorMessage: S,
            onOwnedTeamsWarningModalClose: () => A(!1),
            onOwnedGuildsWarningModalClose: () => x(!1),
            onDeleteAccountConfirmModalClose: () => T(!1),
            onDisableAccountErrorModalClose: () => {
                C(!1), f(null)
            }
        })]
    })
}