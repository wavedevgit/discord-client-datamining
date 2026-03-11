/** chunk id: 252726 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    f = n(287809),
    E = n(977997),
    x = n(147036),
    h = n(488926),
    C = n(652215),
    M = n(985018);

function p(e, t) {
    let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        p = (0, i.bG)([E.A, u.A], () => {
            let n = E.A.getUserVoiceChannelId(t, e.id);
            return u.A.getChannel(n)
        }, [t, e.id]);
    if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == p) return null;
    let j = e.id === s.default.getId();
    if (!j && !m.A.can(C.xBc.MOVE_MEMBERS, p)) return null;
    let v = n.filter(t => {
        let {
            channel: n
        } = t;
        return n.id !== p.id && (j ? m.A.can(C.xBc.CONNECT, n) && !(0, x.Pd)(n, E.A, g.A) : m.A.can(C.xBc.MOVE_MEMBERS, n) && (m.A.can(C.xBc.CONNECT, n) || h.$3({
            permission: C.xBc.CONNECT,
            user: e,
            context: n
        })) && !(0, x.Pd)(n, E.A, g.A))
    });
    return 0 === v.length ? null : (0, l.jsx)(a.Drp, {
        id: "voice-move",
        label: M.intl.string(M.t.FAplms),
        children: v.map(n => {
            let {
                channel: i
            } = n;
            return (0, l.jsx)(a.Drp, {
                id: i.id,
                action: () => {
                    e.id === s.default.getId() ? d.default.selectVoiceChannel(i.id) : r.A.setChannel(t, e.id, i.id)
                },
                label: (0, o.m1)(i, f.default, b.A)
            }, i.id)
        })
    })
}