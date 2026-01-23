/** Chunk was on 97492 **/
/** chunk id: 884415, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(405018),
    i = n(697415);

function s(e) {
    let {
        channel: t,
        video: n,
        userCount: s
    } = e, {
        limit: a
    } = (0, l.A)(t), o = -1, c = !1;
    return t.userLimit > 0 && (o = t.userLimit), n && a > 0 && (c = o < 0 || a < o, o = o > 0 ? Math.min(o, a) : a), (0, r.jsx)(i.A, {
        users: s,
        total: o,
        videoLimit: c
    })
}