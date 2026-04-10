/** chunk id: 116041 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(631670),
    o = n(933725),
    d = n(587600),
    c = n(207803),
    u = n(836602),
    m = n(624826),
    g = n(253932),
    _ = n(127870),
    x = n(828578),
    A = n(985018);

function h() {
    let {
        canSubmit: e,
        errors: t
    } = (0, l.cf)([u.A], () => ({
        canSubmit: u.A.canSubmit(),
        errors: u.A.getErrors()
    })), [n, h] = s.useState(!1), p = s.useMemo(() => Object.keys(t ?? {}).length > 0 ? A.intl.string(A.t["84MExs"]) : null, [t]), T = s.useCallback(async () => {
        h(!0);
        let e = u.A.getPendingChanges(),
            t = (0, d.Sk)(e),
            n = (0, d.yX)(e),
            i = (0, d.yg)(e),
            s = !0;
        if (Object.keys(t).length > 0) {
            let n = await (0, a._L)(t);
            if (s = s && (n?.ok ?? !1), n?.ok) {
                let i = n.body;
                void 0 !== e.pendingAvatar && (0, m.t)({
                    avatarHash: i.avatar,
                    avatarId: t.avatarId,
                    avatarAssetOrigin: e.pendingAvatar?.assetOrigin
                }), (0, a.pZ)()
            } else n?.body?.username != null && (0, x.E)()
        }
        if (Object.keys(n).length > 0) {
            let e = await (0, c.gi)(n);
            s = s && (e?.ok ?? !1), e?.ok ? (0, c.RE)() : (0, _.m)()
        }
        if (void 0 !== e.pendingLegacyUsernameDisabled) try {
            await g.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, a._e)()
        } catch {
            (0, _.m)(), s = !1
        }
        if (Object.keys(i).length > 0) {
            let {
                primaryGuildId: e
            } = i;
            if (void 0 !== e) {
                let t = await (0, o.m)(e, null !== e);
                s = s && (t?.ok ?? !1), t?.ok ? (0, a.fw)() : (0, _.m)()
            }
        }
        s && (0, a.x8)(), h(!1)
    }, []), f = s.useCallback(() => {
        (0, a.IM)()
    }, []);
    return (0, i.jsx)(r.A, {
        submitting: n,
        onSave: T,
        onReset: f,
        disabled: !e,
        errorMessage: p ?? void 0
    })
}