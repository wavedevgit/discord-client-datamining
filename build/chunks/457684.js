/** Chunk was on 5606 **/
/** chunk id: 457684, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(631670),
    a = n(662758),
    o = n(71393),
    c = n(7064),
    d = n(125040),
    u = n(652215),
    p = n(985018);

function _(e) {
    let {
        currentUser: t,
        userTeamsLoading: n,
        userTeams: _
    } = e, [m, g] = i.useState(!1), [f, b] = i.useState(!1), [h, A] = i.useState(!1), [E, x] = i.useState(!1), [O, C] = i.useState(null), y = i.useCallback(e => {
        if (e.body.code === u.t02.INVALID_PASSWORD) throw e;
        x(!0), C(e.body.message)
    }, []), j = i.useCallback((e, t) => (0, s.U_)(e, t).then(u.tEg, y), [y]), T = i.useCallback(function() {
        var e;
        let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            i = o.A.getGuildsArray().filter(e => e.ownerId === t.id);
        (null != (e = null == _ ? void 0 : _.filter(e => e.owner_user_id === t.id)) ? e : []).length > 0 ? g(!0) : i.length > 0 ? b(!0) : t.isClaimed() ? (0, l.qfG)(e => {
            var t, i;
            return (0, r.jsx)(a.default, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r;
                        r = n[t], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r
                    })
                }
                return e
            }({}, e), i = i = {
                handleSubmit: e => j(e, n),
                title: n ? p.intl.string(p.t["8lQ2rR"]) : p.intl.string(p.t.jf5GGb),
                actionText: n ? p.intl.string(p.t["8lQ2rR"]) : p.intl.string(p.t.jf5GGb),
                children: n ? p.intl.string(p.t.FB4H1D) : p.intl.string(p.t.gk7h32)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(i)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }), t))
        }) : A(!0)
    }, [t, j, _]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.A, {
            currentUser: t,
            disabled: n,
            handleDisableAccount: () => T(!1),
            handleDeleteAccount: () => T(!0)
        }), (0, r.jsx)(d.A, {
            shouldRenderOwnedTeamsModal: m,
            shouldRenderOwnedGuildsModal: f,
            shouldRenderDeleteAccountConfirmModal: h,
            shouldRenderDisableAccountErrorModal: E,
            disableAccountErrorMessage: O,
            onOwnedTeamsWarningModalClose: () => g(!1),
            onOwnedGuildsWarningModalClose: () => b(!1),
            onDeleteAccountConfirmModalClose: () => A(!1),
            onDisableAccountErrorModalClose: () => {
                x(!1), C(null)
            }
        })]
    })
}