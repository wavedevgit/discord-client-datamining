/** chunk id: 479335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => f
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(267102),
    o = n(144485),
    d = n(814278),
    u = n(259374),
    c = n(961350),
    A = n(985018);

function f(e) {
    let {
        userId: t,
        channelId: n,
        guildId: f,
        minimal: g = !1
    } = e, b = (0, u.k)({
        channelId: n
    }), p = (0, l.bG)([c.default], () => c.default.getId() === t), v = (0, s.Us)(), _ = r.useCallback(() => {
        o.A.openSecureFramesUserVerificationModal(t, n, () => (0, d.z4)({
            userId: t,
            channelId: n,
            guildId: f
        }), v)
    }, [v, n, f, t]);
    return !b || p ? null : (0, i.jsx)(a.Drp, {
        id: "secure-frames-user-verification",
        label: A.intl.string(A.t["8ErYvY"]),
        action: _,
        icon: g ? a.V1C : null,
        leadingAccessory: g ? {
            type: "icon",
            icon: a.V1C
        } : void 0
    })
}