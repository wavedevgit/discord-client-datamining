/** chunk id: 795128 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(631670),
    r = n(662758),
    o = n(71393),
    d = n(770252),
    c = n(65884),
    u = n(652215),
    m = n(985018);

function _(e) {
    let {
        currentUser: t,
        userTeamsLoading: n,
        userTeams: _
    } = e, [g, A] = s.useState(!1), [x, p] = s.useState(!1), [h, f] = s.useState(!1), [T, E] = s.useState(!1), [S, b] = s.useState(null), C = s.useCallback(e => {
        if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
        E(!0), b(e.body.message)
    }, []), N = s.useCallback((e, t) => (0, a.U_)(e, t).then(u.tEg, C), [C]), v = s.useCallback(function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = o.A.getGuildsArray().filter(e => e.ownerId === t.id);
        (_?.filter(e => e.owner_user_id === t.id) ?? []).length > 0 ? A(!0) : n.length > 0 ? p(!0) : t.isClaimed() ? (0, l.qfG)(t => (0, i.jsx)(r.default, {
            ...t,
            handleSubmit: t => N(t, e),
            title: e ? m.intl.string(m.t["8lQ2rR"]) : m.intl.string(m.t.jf5GGb),
            actionText: e ? m.intl.string(m.t["8lQ2rR"]) : m.intl.string(m.t.jf5GGb),
            children: e ? m.intl.string(m.t.FB4H1D) : m.intl.string(m.t.gk7h32)
        })) : f(!0)
    }, [t, N, _]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            currentUser: t,
            disabled: n,
            handleDisableAccount: () => v(!1),
            handleDeleteAccount: () => v(!0)
        }), (0, i.jsx)(c.A, {
            shouldRenderOwnedTeamsModal: g,
            shouldRenderOwnedGuildsModal: x,
            shouldRenderDeleteAccountConfirmModal: h,
            shouldRenderDisableAccountErrorModal: T,
            disableAccountErrorMessage: S,
            onOwnedTeamsWarningModalClose: () => A(!1),
            onOwnedGuildsWarningModalClose: () => p(!1),
            onDeleteAccountConfirmModalClose: () => f(!1),
            onDisableAccountErrorModalClose: () => {
                E(!1), b(null)
            }
        })]
    })
}