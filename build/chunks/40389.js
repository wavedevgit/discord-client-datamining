/** chunk id: 40389, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n.n(l),
    o = n(311907),
    s = n(397927),
    d = n(367513),
    u = n(313961),
    c = n(721592),
    A = n(406704),
    f = n(977997),
    g = n(262763),
    h = n(985018);

function p(t) {
    let e = (0, A._M)(t),
        n = (0, o.bG)([f.A], () => f.A.isInChannel(t.id)),
        l = (0, o.bG)([f.A], () => !a().isEmpty(f.A.getVoiceStatesForChannel(t.id))),
        {
            needSubscriptionToAccess: p
        } = (0, c.A)(t.id),
        v = (0, o.bG)([u.A], () => u.A.getChatOpen(t.id)),
        b = r.useCallback(() => {
            g.A.handleVoiceConnect({
                channel: t,
                connected: n,
                needSubscriptionToAccess: p,
                locked: !1
            })
        }, [t, n, p]);
    return n || !e ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(s.Drp, {
            id: "join-thread-voice",
            label: l ? h.intl.string(h.t["0D/6Rz"]) : h.intl.string(h.t.My50nf),
            action: b
        }), l && !v && (0, i.jsx)(s.Drp, {
            id: "open-chat",
            label: h.intl.string(h.t.ZXxLQg),
            action: () => {
                d.A.updateChatOpen(t.id, !0)
            }
        })]
    })
}