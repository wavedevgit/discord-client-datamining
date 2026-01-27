/** Chunk was on 66692 **/
/** chunk id: 479335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    u: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    o = n(267102),
    c = n(144485),
    s = n(814278),
    u = n(259374),
    d = n(961350),
    p = n(985018);

function b(e) {
    let {
        userId: t,
        channelId: n,
        guildId: b,
        minimal: g = !1
    } = e, f = (0, u.k)({
        channelId: n
    }), A = (0, i.bG)([d.default], () => d.default.getId() === t), h = (0, o.Us)(), j = l.useCallback(() => {
        c.A.openSecureFramesUserVerificationModal(t, n, () => (0, s.z4)({
            userId: t,
            channelId: n,
            guildId: b
        }), h)
    }, [h, n, b, t]);
    return !f || A ? null : (0, r.jsx)(a.Drp, {
        id: "secure-frames-user-verification",
        label: p.intl.string(p.t["8ErYvY"]),
        action: j,
        icon: g ? a.V1C : null,
        leadingAccessory: g ? {
            type: "icon",
            icon: a.V1C
        } : void 0
    })
}