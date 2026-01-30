/** chunk id: 40389, original params: t,n,i (module,exports,require) **/
i.d(n, {
    A: () => v
});
var e = i(627968),
    r = i(64700),
    l = i(735438),
    a = i.n(l),
    d = i(311907),
    o = i(397927),
    s = i(367513),
    u = i(313961),
    c = i(721592),
    h = i(406704),
    A = i(977997),
    g = i(262763),
    m = i(985018);

function v(t) {
    let n = (0, h._M)(t),
        i = (0, d.bG)([A.A], () => A.A.isInChannel(t.id)),
        l = (0, d.bG)([A.A], () => !a().isEmpty(A.A.getVoiceStatesForChannel(t.id))),
        {
            needSubscriptionToAccess: v
        } = (0, c.A)(t.id),
        b = (0, d.bG)([u.A], () => u.A.getChatOpen(t.id)),
        p = r.useCallback(() => {
            g.A.handleVoiceConnect({
                channel: t,
                connected: i,
                needSubscriptionToAccess: v,
                locked: !1
            })
        }, [t, i, v]);
    return i || !n ? null : (0, e.jsxs)(e.Fragment, {
        children: [(0, e.jsx)(o.Drp, {
            id: "join-thread-voice",
            label: l ? m.intl.string(m.t["0D/6Rz"]) : m.intl.string(m.t.My50nf),
            action: p
        }), l && !b && (0, e.jsx)(o.Drp, {
            id: "open-chat",
            label: m.intl.string(m.t.ZXxLQg),
            action: () => {
                s.A.updateChatOpen(t.id, !0)
            }
        })]
    })
}