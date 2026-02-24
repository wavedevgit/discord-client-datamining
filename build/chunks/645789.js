/** chunk id: 645789, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(36525),
    r = n(631670),
    o = n(933725),
    c = n(587600),
    d = n(207803),
    u = n(836602),
    _ = n(624826),
    m = n(253932),
    A = n(354694),
    g = n(592074),
    h = n(985018);

function x() {
    let {
        canSubmit: e,
        errors: t
    } = (0, a.cf)([u.A], () => ({
        canSubmit: u.A.canSubmit(),
        errors: u.A.getErrors()
    })), [n, x] = s.useState(!1), p = s.useMemo(() => Object.keys(t ?? {}).length > 0 ? h.intl.string(h.t["84MExs"]) : null, [t]), E = s.useCallback(async () => {
        x(!0);
        let e = u.A.getPendingChanges(),
            t = (0, c.Sk)(e),
            n = (0, c.yX)(e),
            i = (0, c.yg)(e),
            s = !0;
        if (Object.keys(t).length > 0) {
            let n = await (0, r._L)(t);
            if (s = s && (n?.ok ?? !1), n?.ok) {
                let i = n.body;
                void 0 !== e.pendingAvatar && (0, _.t)({
                    avatarHash: i.avatar,
                    avatarId: t.avatarId,
                    avatarAssetOrigin: e.pendingAvatar?.assetOrigin
                }), (0, r.pZ)()
            } else n?.body?.username != null && (0, g.E)()
        }
        if (Object.keys(n).length > 0) {
            let e = await (0, d.gi)(n);
            s = s && (e?.ok ?? !1), e?.ok ? (0, d.RE)() : (0, A.m)()
        }
        if (void 0 !== e.pendingLegacyUsernameDisabled) try {
            await m.m$.updateSetting(e.pendingLegacyUsernameDisabled), (0, r._e)()
        } catch {
            (0, A.m)(), s = !1
        }
        if (Object.keys(i).length > 0) {
            let {
                primaryGuildId: e
            } = i;
            if (void 0 !== e) {
                let t = await (0, o.m)(e, null !== e);
                s = s && (t?.ok ?? !1), t?.ok ? (0, r.fw)() : (0, A.m)()
            }
        }
        s && (0, r.x8)(), x(!1)
    }, []), C = s.useCallback(() => {
        (0, r.IM)()
    }, []);
    return (0, i.jsx)(l.A, {
        submitting: n,
        onSave: E,
        onReset: C,
        disabled: !e,
        errorMessage: p ?? void 0
    })
}