/** chunk id: 457684 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(631670),
    r = n(662758),
    o = n(71393),
    d = n(7064),
    c = n(125040),
    u = n(652215),
    _ = n(985018);

function g(e) {
    let {
        currentUser: t,
        userTeamsLoading: n,
        userTeams: g
    } = e, [A, m] = s.useState(!1), [h, p] = s.useState(!1), [x, E] = s.useState(!1), [T, S] = s.useState(!1), [C, I] = s.useState(null), f = s.useCallback(e => {
        if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
        S(!0), I(e.body.message)
    }, []), N = s.useCallback((e, t) => (0, a.U_)(e, t).then(u.tEg, f), [f]), b = s.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = o.A.getGuildsArray().filter(e => e.ownerId === t.id);
        (g?.filter(e => e.owner_user_id === t.id) ?? []).length > 0 ? m(!0) : n.length > 0 ? p(!0) : t.isClaimed() ? (0, l.qfG)(t => (0, i.jsx)(r.default, {
            ...t,
            handleSubmit: t => N(t, e),
            title: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
            actionText: e ? _.intl.string(_.t["8lQ2rR"]) : _.intl.string(_.t.jf5GGb),
            children: e ? _.intl.string(_.t.FB4H1D) : _.intl.string(_.t.gk7h32)
        })) : E(!0)
    }, [t, N, g]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            currentUser: t,
            disabled: n,
            handleDisableAccount: () => b(!1),
            handleDeleteAccount: () => b(!0)
        }), (0, i.jsx)(c.A, {
            shouldRenderOwnedTeamsModal: A,
            shouldRenderOwnedGuildsModal: h,
            shouldRenderDeleteAccountConfirmModal: x,
            shouldRenderDisableAccountErrorModal: T,
            disableAccountErrorMessage: C,
            onOwnedTeamsWarningModalClose: () => m(!1),
            onOwnedGuildsWarningModalClose: () => p(!1),
            onDeleteAccountConfirmModalClose: () => E(!1),
            onDisableAccountErrorModalClose: () => {
                S(!1), I(null)
            }
        })]
    })
}