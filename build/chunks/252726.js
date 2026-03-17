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
    s = n(47167),
    o = n(961350),
    u = n(734057),
    c = n(808728),
    A = n(696451),
    g = n(71393),
    b = n(576705),
    m = n(994500),
    E = n(287809),
    f = n(977997),
    h = n(147036),
    x = n(488926),
    C = n(652215),
    M = n(985018);

function p(e, t) {
    let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        p = (0, i.bG)([f.A, u.A], () => {
            let n = f.A.getUserVoiceChannelId(t, e.id);
            return u.A.getChannel(n)
        }, [t, e.id]);
    if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == p) return null;
    let j = e.id === o.default.getId();
    if (!j && !b.A.can(C.xBc.MOVE_MEMBERS, p)) return null;
    let v = n.filter(t => {
        let {
            channel: n
        } = t;
        return n.id !== p.id && (j ? b.A.can(C.xBc.CONNECT, n) && !(0, h.Pd)(n, f.A, g.A) : b.A.can(C.xBc.MOVE_MEMBERS, n) && (b.A.can(C.xBc.CONNECT, n) || x.$3({
            permission: C.xBc.CONNECT,
            user: e,
            context: n
        })) && !(0, h.Pd)(n, f.A, g.A))
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
                    e.id === o.default.getId() ? d.default.selectVoiceChannel(i.id) : r.A.setChannel(t, e.id, i.id)
                },
                label: (0, s.m1)(i, E.default, m.A)
            }, i.id)
        })
    })
}