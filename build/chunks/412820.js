/** chunk id: 412820 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(36525),
    r = n(587600),
    o = n(207803),
    d = n(836602),
    c = n(624826),
    u = n(354694),
    _ = n(159001),
    g = n(985018);

function m() {
    let {
        selectedGuildId: e,
        canSubmit: t,
        errors: n
    } = (0, l.cf)([d.A], () => ({
        selectedGuildId: d.A.selectedGuildId,
        canSubmit: d.A.canSubmit(),
        errors: d.A.getErrors(d.A.selectedGuildId)
    })), [m, A] = s.useState(!1), h = s.useMemo(() => n?.guild_tag !== void 0 && n.guild_tag.length > 0 ? n.guild_tag[0] : Object.keys(n ?? {}).length > 0 ? g.intl.string(g.t.s35OuK) : null, [n]), p = s.useCallback(async () => {
        A(!0);
        let t = d.A.getPendingChanges(e),
            n = (0, r.C5)(t),
            i = (0, r.yX)(t),
            s = !0;
        if (Object.keys(n).length > 0) {
            let i = await (0, _.GL)(e, n);
            if (s = s && (i?.ok ?? !1), i?.ok) {
                let e = i.body;
                void 0 !== t.pendingAvatar && (0, c.t)({
                    isGuildProfile: !0,
                    avatarHash: e.avatar,
                    avatarId: n.avatarId,
                    avatarAssetOrigin: t.pendingAvatar?.assetOrigin
                }), (0, _.go)()
            }
        }
        if (Object.keys(i).length > 0) {
            let t = await (0, o.gi)(i, e);
            s = s && (t?.ok ?? !1), t?.ok ? (0, _.RE)() : (0, u.N)()
        }
        s && (0, _.x8)(), A(!1)
    }, [e]), x = s.useCallback(() => {
        (0, _.IM)()
    }, []);
    return (0, i.jsx)(a.A, {
        submitting: m,
        onSave: p,
        onReset: x,
        disabled: !t,
        errorMessage: h ?? void 0
    })
}