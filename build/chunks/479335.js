/** chunk id: 479335, original params: e,n,t (module,exports,require) **/
t.d(n, {
    u: () => h
});
var l = t(627968),
    i = t(64700),
    a = t(311907),
    r = t(397927),
    s = t(267102),
    d = t(144485),
    o = t(814278),
    c = t(259374),
    u = t(961350),
    A = t(985018);

function h(e) {
    let {
        userId: n,
        channelId: t,
        guildId: h,
        minimal: g = !1
    } = e, p = (0, c.k)({
        channelId: t
    }), f = (0, a.bG)([u.default], () => u.default.getId() === n), I = (0, s.Us)(), m = i.useCallback(() => {
        d.A.openSecureFramesUserVerificationModal(n, t, () => (0, o.z4)({
            userId: n,
            channelId: t,
            guildId: h
        }), I)
    }, [I, t, h, n]);
    return !p || f ? null : (0, l.jsx)(r.Drp, {
        id: "secure-frames-user-verification",
        label: A.intl.string(A.t["8ErYvY"]),
        action: m,
        icon: g ? r.V1C : null,
        leadingAccessory: g ? {
            type: "icon",
            icon: r.V1C
        } : void 0
    })
}