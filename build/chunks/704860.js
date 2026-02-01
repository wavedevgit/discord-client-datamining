/** chunk id: 704860, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(71393),
    s = n(287809),
    o = n(715757),
    c = n(254143),
    u = n(778983),
    d = n(841362),
    h = n(285745);

function p(e) {
    let {
        channel: t,
        message: n,
        snapshot: p
    } = e, {
        moderatorReport: f
    } = p, m = null == f ? void 0 : f.reported_user_id, g = (0, i.bG)([s.default], () => null != m ? s.default.getUser(m) : null), A = (0, i.bG)([a.A], () => a.A.getGuild(t.guild_id));
    (0, o.ml)(n);
    let b = (0, c.A)({
            channel: t,
            user: g,
            guild: A
        }),
        _ = (0, d.A)({
            channel: t,
            user: g,
            guild: A
        }),
        y = [(0, u.A)({
            channel: t,
            message: n,
            user: g,
            guild: A
        }), b, _, (0, h.A)({
            channel: t,
            user: g,
            guild: A
        })].filter(e => null != e);
    return t.isModeratorReportChannel() && 0 !== y.length ? (0, l.jsx)(l.Fragment, {
        children: y.map((e, t) => (0, l.jsx)(r.Fragment, {
            children: e
        }, t))
    }) : null
}

function f(e) {
    let {
        message: t,
        channel: n
    } = e;
    return (0, l.jsx)(l.Fragment, {
        children: t.messageSnapshots.map((e, r) => (0, l.jsx)(p, {
            channel: n,
            message: t,
            snapshot: e
        }, r))
    })
}