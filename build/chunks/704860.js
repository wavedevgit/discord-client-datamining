/** Chunk was on 41727 **/
/** chunk id: 704860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(71393),
    a = n(287809),
    o = n(715757),
    c = n(254143),
    u = n(778983),
    d = n(841362),
    p = n(285745);

function h(e) {
    let {
        channel: t,
        message: n,
        snapshot: h
    } = e, {
        moderatorReport: f
    } = h, g = null == f ? void 0 : f.reported_user_id, m = (0, i.bG)([a.default], () => null != g ? a.default.getUser(g) : null), b = (0, i.bG)([s.A], () => s.A.getGuild(t.guild_id));
    (0, o.ml)(n);
    let A = (0, c.A)({
            channel: t,
            user: m,
            guild: b
        }),
        y = (0, d.A)({
            channel: t,
            user: m,
            guild: b
        }),
        _ = [(0, u.A)({
            channel: t,
            message: n,
            user: m,
            guild: b
        }), A, y, (0, p.A)({
            channel: t,
            user: m,
            guild: b
        })].filter(e => null != e);
    return t.isModeratorReportChannel() && 0 !== _.length ? (0, r.jsx)(r.Fragment, {
        children: _.map((e, t) => (0, r.jsx)(l.Fragment, {
            children: e
        }, t))
    }) : null
}

function f(e) {
    let {
        message: t,
        channel: n
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, r.jsx)(h, {
            channel: n,
            message: t,
            snapshot: e
        }, l))
    })
}