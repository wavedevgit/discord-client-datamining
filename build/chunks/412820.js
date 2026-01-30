/** chunk id: 412820, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(587600),
    o = n(207803),
    c = n(624826),
    d = n(354694),
    u = n(159001),
    _ = n(833336),
    p = n(985018);

function m() {
    let e = (0, l.bG)([_.A], () => _.A.getIsSubmitDisabled()),
        t = (0, l.bG)([_.A], () => _.A.getGuild()),
        n = (0, l.bG)([_.A], () => _.A.getErrors()),
        [m, g] = i.useState(!1),
        A = i.useMemo(() => (null == n ? void 0 : n.message) != null ? null == n ? void 0 : n.message : (null == n ? void 0 : n.guild_tag) !== void 0 && n.guild_tag.length > 0 ? n.guild_tag[0] : Object.keys(null != n ? n : {}).length > 0 ? p.intl.string(p.t.s35OuK) : null, [n]),
        f = i.useCallback(async () => {
            var e, n, r;
            g(!0);
            let i = _.A.getAllPending(),
                l = (0, a.C5)(i),
                s = (0, a.yX)(i),
                p = !0;
            if (Object.keys(l).length > 0) {
                let r = await (0, u.GL)(null == t ? void 0 : t.id, l);
                if (p = p && null != (e = null == r ? void 0 : r.ok) && e, null == r ? void 0 : r.ok) {
                    let e = r.body;
                    void 0 !== i.pendingAvatar && (0, c.t)({
                        isGuildProfile: !0,
                        avatarHash: e.avatar,
                        avatarId: l.avatarId,
                        avatarAssetOrigin: null == (n = i.pendingAvatar) ? void 0 : n.assetOrigin
                    }), (0, u.go)()
                }
            }
            if (Object.keys(s).length > 0) {
                let e = await (0, o.gi)(s, null == t ? void 0 : t.id);
                p = p && null != (r = null == e ? void 0 : e.ok) && r, (null == e ? void 0 : e.ok) ? (0, u.RE)() : (0, d.N)()
            }
            p && (0, u.x8)(), g(!1)
        }, [null == t ? void 0 : t.id]),
        b = i.useCallback(() => {
            (0, u.IM)()
        }, []);
    return (0, r.jsx)(s.A, {
        submitting: m,
        onSave: f,
        onReset: b,
        disabled: e,
        errorMessage: null != A ? A : void 0
    })
}