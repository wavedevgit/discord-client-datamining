/** Chunk was on 2827 **/
/** chunk id: 645789, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(631670),
    o = n(933725),
    c = n(587600),
    d = n(207803),
    u = n(836602),
    _ = n(624826),
    p = n(253932),
    m = n(354694),
    g = n(592074),
    A = n(985018);

function f() {
    let {
        canSubmit: e,
        errors: t
    } = (0, l.cf)([u.A], () => ({
        canSubmit: u.A.canSubmit(),
        errors: u.A.getErrors()
    })), [n, f] = i.useState(!1), b = i.useMemo(() => (null == t ? void 0 : t.message) != null ? null == t ? void 0 : t.message : Object.keys(null != t ? t : {}).length > 0 ? A.intl.string(A.t["84MExs"]) : null, [t]), h = i.useCallback(async () => {
        var e, t, n, r, i;
        f(!0);
        let l = u.A.getPendingChanges(),
            s = (0, c.Sk)(l),
            A = (0, c.yX)(l),
            b = (0, c.yg)(l),
            h = !0;
        if (Object.keys(s).length > 0) {
            let r = await (0, a.yu)(s);
            if (h = h && null != (e = null == r ? void 0 : r.ok) && e, null == r ? void 0 : r.ok) {
                let e = r.body;
                void 0 !== l.pendingAvatar && (0, _.t)({
                    avatarHash: e.avatar,
                    avatarId: s.avatarId,
                    avatarAssetOrigin: null == (n = l.pendingAvatar) ? void 0 : n.assetOrigin
                }), (0, a.pZ)()
            } else(null == r || null == (t = r.body) ? void 0 : t.username) != null && (0, g.E)()
        }
        if (Object.keys(A).length > 0) {
            let e = await (0, d.gi)(A);
            h = h && null != (r = null == e ? void 0 : e.ok) && r, (null == e ? void 0 : e.ok) ? (0, d.RE)() : (0, m.m)()
        }
        if (void 0 !== l.pendingLegacyUsernameDisabled) try {
            await p.m$.updateSetting(l.pendingLegacyUsernameDisabled), (0, a._e)()
        } catch (e) {
            (0, m.m)(), h = !1
        }
        if (Object.keys(b).length > 0) {
            let {
                primaryGuildId: e
            } = b;
            if (void 0 !== e) {
                let t = await (0, o.m)(e, null !== e);
                h = h && null != (i = null == t ? void 0 : t.ok) && i, (null == t ? void 0 : t.ok) ? (0, a.fw)() : (0, m.m)()
            }
        }
        h && (0, a.x8)(), f(!1)
    }, []), E = i.useCallback(() => {
        (0, a.IM)()
    }, []);
    return (0, r.jsx)(s.A, {
        submitting: n,
        onSave: h,
        onReset: E,
        disabled: !e,
        errorMessage: null != b ? b : void 0
    })
}