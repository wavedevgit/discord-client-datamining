/** Chunk was on 91042 **/
/** chunk id: 252726, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(686956),
    o = n(956793),
    d = n(47167),
    s = n(961350),
    u = n(734057),
    c = n(808728),
    A = n(696451),
    b = n(71393),
    g = n(576705),
    f = n(994500),
    m = n(287809),
    O = n(977997),
    p = n(147036),
    y = n(488926),
    E = n(652215),
    v = n(985018);

function h(e, t) {
    let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        h = (0, i.bG)([O.A, u.A], () => {
            let n = O.A.getUserVoiceChannelId(t, e.id);
            return u.A.getChannel(n)
        }, [t, e.id]);
    if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == h) return null;
    let j = e.id === s.default.getId();
    if (!j && !g.A.can(E.xBc.MOVE_MEMBERS, h)) return null;
    let x = n.filter(t => {
        let {
            channel: n
        } = t;
        return n.id !== h.id && (j ? g.A.can(E.xBc.CONNECT, n) && !(0, p.Pd)(n, O.A, b.A) : g.A.can(E.xBc.MOVE_MEMBERS, n) && (g.A.can(E.xBc.CONNECT, n) || y.$3({
            permission: E.xBc.CONNECT,
            user: e,
            context: n
        })) && !(0, p.Pd)(n, O.A, b.A))
    });
    return 0 === x.length ? null : (0, l.jsx)(r.Drp, {
        id: "voice-move",
        label: v.intl.string(v.t.FAplms),
        children: x.map(n => {
            let {
                channel: i
            } = n;
            return (0, l.jsx)(r.Drp, {
                id: i.id,
                action: () => {
                    e.id === s.default.getId() ? o.default.selectVoiceChannel(i.id) : a.A.setChannel(t, e.id, i.id)
                },
                label: (0, d.m1)(i, m.default, f.A)
            }, i.id)
        })
    })
}