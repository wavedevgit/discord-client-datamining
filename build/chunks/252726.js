/** chunk id: 252726, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(686956),
    o = n(956793),
    s = n(47167),
    d = n(961350),
    u = n(734057),
    c = n(808728),
    A = n(696451),
    b = n(71393),
    g = n(576705),
    f = n(994500),
    m = n(287809),
    p = n(977997),
    O = n(147036),
    y = n(488926),
    v = n(652215),
    E = n(985018);

function h(e, t) {
    let n = (0, r.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
        h = (0, r.bG)([p.A, u.A], () => {
            let n = p.A.getUserVoiceChannelId(t, e.id);
            return u.A.getChannel(n)
        }, [t, e.id]);
    if ((0, r.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == h) return null;
    let j = e.id === d.default.getId();
    if (!j && !g.A.can(v.xBc.MOVE_MEMBERS, h)) return null;
    let x = n.filter(t => {
        let {
            channel: n
        } = t;
        return n.id !== h.id && (j ? g.A.can(v.xBc.CONNECT, n) && !(0, O.Pd)(n, p.A, b.A) : g.A.can(v.xBc.MOVE_MEMBERS, n) && (g.A.can(v.xBc.CONNECT, n) || y.$3({
            permission: v.xBc.CONNECT,
            user: e,
            context: n
        })) && !(0, O.Pd)(n, p.A, b.A))
    });
    return 0 === x.length ? null : (0, l.jsx)(i.Drp, {
        id: "voice-move",
        label: E.intl.string(E.t.FAplms),
        children: x.map(n => {
            let {
                channel: r
            } = n;
            return (0, l.jsx)(i.Drp, {
                id: r.id,
                action: () => {
                    e.id === d.default.getId() ? o.default.selectVoiceChannel(r.id) : a.A.setChannel(t, e.id, r.id)
                },
                label: (0, s.m1)(r, m.default, f.A)
            }, r.id)
        })
    })
}