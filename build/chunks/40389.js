/** chunk id: 40389 params = (module,exports,require) **/
i.d(n, {
    A: () => m
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
    b = i(985018);

function m(t) {
    let n = (0, g._M)(t),
        i = (0, s.bG)([A.A], () => A.A.isInChannel(t.id)),
        r = (0, s.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        {
            needSubscriptionToAccess: m
        } = (0, c.A)(t.id),
        p = (0, s.bG)([u.A], () => u.A.getChatOpen(t.id)),
        f = l.useCallback(() => {
            h.A.handleVoiceConnect({
                channel: t,
                connected: i,
                needSubscriptionToAccess: m,
                locked: !1
            })
        }, [t, i, m]);
    return i || !n ? null : (0, e.jsxs)(e.Fragment, {
        children: [(0, e.jsx)(d.Drp, {
            id: "join-thread-voice",
            label: r ? b.intl.string(b.t["0D/6Rz"]) : b.intl.string(b.t.My50nf),
            action: f
        }), r && !p && (0, e.jsx)(d.Drp, {
            id: "open-chat",
            label: b.intl.string(b.t.ZXxLQg),
            action: () => {
                o.A.updateChatOpen(t.id, !0)
            }
        })]
    })
}