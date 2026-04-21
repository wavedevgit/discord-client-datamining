/** chunk id: 707378 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    i = n(311907),
    a = n(397927),
    r = n(690990),
    d = n(961350),
    s = n(734057),
    o = n(994500),
    u = n(309010),
    c = n(652215),
    A = n(985018);

function g(e) {
    let {
        user: t,
        context: n
    } = e, g = (0, i.bG)([d.default], () => d.default.getId() === t.id), b = (0, i.bG)([o.A], () => o.A.isBlocked(t.id)), m = (0, i.bG)([u.A, s.A], () => u.A.getVoiceChannelId() === s.A.getDMFromUserId(t.id)), {
        runVoiceCallAction: E
    } = (0, r.b)({
        userId: t.id
    });
    return g || n === c.BRT.POPOUT || m || t.bot || t.isProvisional ? null : (0, l.jsx)(a.Drp, {
        id: "call",
        label: A.intl.string(A.t["ZeP+kK"]),
        action: E,
        disabled: b
    })
}