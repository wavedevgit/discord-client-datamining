/** chunk id: 884415 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var s = n(405018),
    l = n(697415);

function a(e) {
    let {
        channel: t,
        video: n,
        userCount: a
    } = e, {
        limit: r
    } = (0, s.A)(t), o = -1, c = !1;
    return t.userLimit > 0 && (o = t.userLimit), n && r > 0 && (c = o < 0 || r < o, o = o > 0 ? Math.min(o, r) : r), (0, i.jsx)(l.A, {
        users: a,
        total: o,
        videoLimit: c
    })
}