/** chunk id: 423563 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(157550),
    a = n(957283),
    r = n(994500),
    o = n(195073),
    c = n(684018),
    d = n(597232),
    u = n(767271),
    h = n(652215),
    m = n(498954);

function A(e) {
    let t, {
            channel: n,
            user: A,
            showingBanner: p
        } = e,
        {
            channelId: g
        } = (0, a.N)(),
        f = (0, l.bG)([s.A], () => null != g && s.A.isSpam(g), [g]),
        _ = (0, l.bG)([r.A], () => r.A.getRelationshipType(A.id), [A.id]),
        E = n.id === g,
        x = !0 === A.bot,
        C = m.n;
    return f || E ? t = (0, i.jsx)(u.A, {
        channel: n,
        user: A
    }) : x ? t = (0, i.jsx)(o.A, {
        channel: n,
        user: A
    }) : (t = (0, i.jsx)(d.A, {
        channel: n,
        user: A,
        showingBanner: p
    }), _ === h.eA$.PENDING_INCOMING && (C = m.O)), (0, i.jsxs)("div", {
        className: C,
        children: [(0, i.jsx)(c.A, {
            userId: A.id,
            channelId: n.id,
            showDivider: C !== m.O
        }), t]
    })
}