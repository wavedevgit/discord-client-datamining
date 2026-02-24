/** chunk id: 252726, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var l = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    r = n(686956),
    d = n(956793),
    o = n(47167),
    s = n(961350),
    u = n(734057),
    c = n(808728),
    A = n(696451),
    g = n(71393),
    m = n(576705),
    b = n(994500),
    E = n(287809),
    f = n(977997),
    h = n(147036),
    x = n(488926),
    M = n(652215),
    p = n(985018);

function C(e, t) {
    let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        C = (0, i.bG)([f.A, u.A], () => {
            let n = f.A.getUserVoiceChannelId(t, e.id);
            return u.A.getChannel(n)
        }, [t, e.id]);
    if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == C) return null;
    let y = e.id === s.default.getId();
    if (!y && !m.A.can(M.xBc.MOVE_MEMBERS, C)) return null;
    let S = n.filter(t => {
        let {
            channel: n
        } = t;
        return n.id !== C.id && (y ? m.A.can(M.xBc.CONNECT, n) && !(0, h.Pd)(n, f.A, g.A) : m.A.can(M.xBc.MOVE_MEMBERS, n) && (m.A.can(M.xBc.CONNECT, n) || x.$3({
            permission: M.xBc.CONNECT,
            user: e,
            context: n
        })) && !(0, h.Pd)(n, f.A, g.A))
    });
    return 0 === S.length ? null : (0, l.jsx)(a.Drp, {
        id: "voice-move",
        label: p.intl.string(p.t.FAplms),
        children: S.map(n => {
            let {
                channel: i
            } = n;
            return (0, l.jsx)(a.Drp, {
                id: i.id,
                action: () => {
                    e.id === s.default.getId() ? d.default.selectVoiceChannel(i.id) : r.A.setChannel(t, e.id, i.id)
                },
                label: (0, o.m1)(i, E.default, b.A)
            }, i.id)
        })
    })
}