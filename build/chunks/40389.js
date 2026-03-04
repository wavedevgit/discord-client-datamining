/** chunk id: 40389, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => b
});
var e = i(627968),
    l = i(64700),
    r = i(735438),
    a = i.n(r),
    s = i(311907),
    d = i(397927),
    o = i(367513),
    u = i(313961),
    c = i(721592),
    g = i(406704),
    A = i(977997),
    h = i(262763),
    m = i(985018);

function b(t) {
    let n = (0, g._M)(t),
        i = (0, s.bG)([A.A], () => A.A.isInChannel(t.id)),
        r = (0, s.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        {
            needSubscriptionToAccess: b
        } = (0, c.A)(t.id),
        p = (0, s.bG)([u.A], () => u.A.getChatOpen(t.id)),
        f = l.useCallback(() => {
            h.A.handleVoiceConnect({
                channel: t,
                connected: i,
                needSubscriptionToAccess: b,
                locked: !1
            })
        }, [t, i, b]);
    return i || !n ? null : (0, e.jsxs)(e.Fragment, {
        children: [(0, e.jsx)(d.Drp, {
            id: "join-thread-voice",
            label: r ? m.intl.string(m.t["0D/6Rz"]) : m.intl.string(m.t.My50nf),
            action: f
        }), r && !p && (0, e.jsx)(d.Drp, {
            id: "open-chat",
            label: m.intl.string(m.t.ZXxLQg),
            action: () => {
                o.A.updateChatOpen(t.id, !0)
            }
        })]
    })
}