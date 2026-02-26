/** chunk id: 40389, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => m
});
var i = e(627968),
    l = e(64700),
    r = e(735438),
    a = e.n(r),
    d = e(311907),
    s = e(397927),
    o = e(367513),
    u = e(313961),
    c = e(721592),
    g = e(406704),
    A = e(977997),
    h = e(262763),
    b = e(985018);

function m(t) {
    let n = (0, g._M)(t),
        e = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
        r = (0, d.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        {
            needSubscriptionToAccess: m
        } = (0, c.A)(t.id),
        p = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
        f = l.useCallback(() => {
            h.A.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: m,
                locked: !1
            })
        }, [t, e, m]);
    return e || !n ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Drp, {
            id: "join-thread-voice",
            label: r ? b.intl.string(b.t["0D/6Rz"]) : b.intl.string(b.t.My50nf),
            action: f
        }), r && !p && (0, i.jsx)(s.Drp, {
            id: "open-chat",
            label: b.intl.string(b.t.ZXxLQg),
            action: () => {
                o.A.updateChatOpen(t.id, !0)
            }
        })]
    })
}