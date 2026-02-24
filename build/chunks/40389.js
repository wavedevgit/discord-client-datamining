/** chunk id: 40389, original params: t,n,e (module,exports,require) **/
e.d(n, {
    A: () => p
});
var i = e(627968),
    a = e(64700),
    l = e(735438),
    r = e.n(l),
    s = e(311907),
    d = e(397927),
    o = e(367513),
    u = e(313961),
    c = e(721592),
    A = e(406704),
    h = e(977997),
    f = e(262763),
    g = e(985018);

function p(t) {
    let n = (0, A._M)(t),
        e = (0, s.bG)([h.A], () => h.A.isInChannel(t.id)),
        l = (0, s.bG)([h.A], () => !r().isEmpty(h.A.getVoiceStatesForChannel(t.id))),
        {
            needSubscriptionToAccess: p
        } = (0, c.A)(t.id),
        v = (0, s.bG)([u.A], () => u.A.getChatOpen(t.id)),
        b = a.useCallback(() => {
            f.A.handleVoiceConnect({
                channel: t,
                connected: e,
                needSubscriptionToAccess: p,
                locked: !1
            })
        }, [t, e, p]);
    return e || !n ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Drp, {
            id: "join-thread-voice",
            label: l ? g.intl.string(g.t["0D/6Rz"]) : g.intl.string(g.t.My50nf),
            action: b
        }), l && !v && (0, i.jsx)(d.Drp, {
            id: "open-chat",
            label: g.intl.string(g.t.ZXxLQg),
            action: () => {
                o.A.updateChatOpen(t.id, !0)
            }
        })]
    })
}