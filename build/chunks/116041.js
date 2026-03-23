/** chunk id: 116041 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(36525),
    r = n(631670),
    o = n(933725),
    d = n(587600),
    c = n(207803),
    u = n(836602),
    m = n(624826),
    _ = n(253932),
    g = n(127870),
    A = n(828578),
    x = n(985018);

function p() {
    let {
        canSubmit: e,
        errors: t
    } = (0, l.cf)([u.A], () => ({
        canSubmit: u.A.canSubmit(),
        errors: u.A.getErrors()
    })), [n, p] = s.useState(!1), h = s.useMemo(() => Object.keys(t ?? {}).length > 0 ? x.intl.string(x.t["84MExs"]) : null, [t]), f = s.useCallback(async () => {
        p(!0);
        let e = u.A.getPendingChanges(),
            t = (0, d.Sk)(e),
            n = (0, d.yX)(e),
            i = (0, d.yg)(e),
            s = !0;
        if (Object.keys(t).length > 0) {
            let n = await (0, r._L)(t);
            if (s = s && (n?.ok ?? !1), n?.ok) {
                let i = n.body;
                void 0 !== e.pendingAvatar && (0, m.t)({
                    avatarHash: i.avatar,
                    avatarId: t.avatarId,
                    avatarAssetOrigin: e.pendingAvatar?.assetOrigin
                }), (0, r.pZ)()
            } else n?.body?.username != null && (0, A.E)()
        }
        if (Object.keys(n).length > 0) {
            let e = await (0, c.gi)(n);
            s = s && (e?.ok ?? !1), e?.ok ? (0, c.RE)() : (0, g.m)()
        }
        if (void 0 !== e.pendingLegacyUsernameDisabled) try {
            await _.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, r._e)()
        } catch {
            (0, g.m)(), s = !1
        }
        if (Object.keys(i).length > 0) {
            let {
                primaryGuildId: e
            } = i;
            if (void 0 !== e) {
                let t = await (0, o.m)(e, null !== e);
                s = s && (t?.ok ?? !1), t?.ok ? (0, r.fw)() : (0, g.m)()
            }
        }
        s && (0, r.x8)(), p(!1)
    }, []), T = s.useCallback(() => {
        (0, r.IM)()
    }, []);
    return (0, i.jsx)(a.A, {
        submitting: n,
        onSave: f,
        onReset: T,
        disabled: !e,
        errorMessage: h ?? void 0
    })
}