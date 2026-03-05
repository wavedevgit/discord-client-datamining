/** chunk id: 704860 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(71393),
    r = n(287809),
    o = n(715757),
    c = n(254143),
    d = n(778983),
    u = n(841362),
    h = n(285745);

function m(e) {
    let {
        channel: t,
        message: n,
        snapshot: m
    } = e, {
        moderatorReport: A
    } = m, g = A?.reported_user_id, p = (0, s.bG)([r.default], () => null != g ? r.default.getUser(g) : null), f = (0, s.bG)([a.A], () => a.A.getGuild(t.guild_id));
    (0, o.ml)(n);
    let _ = (0, c.A)({
            channel: t,
            user: p,
            guild: f
        }),
        E = (0, u.A)({
            channel: t,
            user: p,
            guild: f
        }),
        x = [(0, d.A)({
            channel: t,
            message: n,
            user: p,
            guild: f
        }), _, E, (0, h.A)({
            channel: t,
            user: p,
            guild: f
        })].filter(e => null != e);
    return t.isModeratorReportChannel() && 0 !== x.length ? (0, i.jsx)(i.Fragment, {
        children: x.map((e, t) => (0, i.jsx)(l.Fragment, {
            children: e
        }, t))
    }) : null
}

function A(e) {
    let {
        message: t,
        channel: n
    } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, i.jsx)(m, {
            channel: n,
            message: t,
            snapshot: e
        }, l))
    })
}