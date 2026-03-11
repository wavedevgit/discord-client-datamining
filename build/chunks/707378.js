/** chunk id: 707378 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(308528),
    d = n(313369),
    o = n(267102),
    s = n(964404),
    u = n(961350),
    c = n(734057),
    A = n(994500),
    g = n(309010),
    m = n(652215),
    b = n(985018);

function f(e) {
    let {
        user: t,
        context: f,
        joinCallVideo: E,
        id: x,
        onCall: h
    } = e, C = (0, o.aL)(), M = (0, i.bG)([u.default], () => u.default.getId() === t.id), p = (0, i.bG)([A.A], () => A.A.isBlocked(t.id)), j = (0, i.bG)([g.A, c.A], () => g.A.getVoiceChannelId() === c.A.getDMFromUserId(t.id)), {
        copyVariant: v
    } = d.o.useConfig({
        location: "useCallUserItem"
    });
    if (M || f === m.BRT.POPOUT || j || t.bot || t.isProvisional) return null;
    let I = () => {
            h?.(), r.A.openPrivateChannel({
                recipientIds: t.id,
                joinCall: !0,
                joinCallVideo: E
            }), C.dispatch(m.jej.POPOUT_CLOSE), (0, a.s7G)()
        },
        y = !s.Ay.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(a.Drp, {
        id: x ?? "call",
        label: "control" !== v ? b.intl.string(b.t["ZeP+kK"]) : b.intl.string(b.t.JJogjm),
        action: y ? () => {
            (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("19106").then(n.bind(n, 279673));
                return t => (0, l.jsx)(e, {
                    onSubmit: I,
                    ...t
                })
            })
        } : I,
        disabled: p
    })
}