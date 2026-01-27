/** Chunk was on web.js **/
/** chunk id: 570287, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d,
    q: () => u
});
var r = n(311907),
    i = n(800828),
    a = n(857071),
    o = n(253932),
    s = n(961350),
    l = n(696451),
    c = n(994500);
let u = (e, t) => {
    let n = s.default.getId() === e,
        r = null != t && a.A.isLurking(t),
        u = o.$s.getSetting(),
        d = c.A.isFriend(e);
    return !n && !r && (d || null != l.Ay.memberOf(e).find(e => !u.includes(e))) || i.A.getGameFriendsForUser(e).length > 0 && o.Zk.getSetting()
};

function d(e, t) {
    let n = (0, r.bG)([s.default], () => s.default.getId() === e),
        u = (0, r.bG)([a.A], () => null != t && a.A.isLurking(t)),
        d = o.$s.useSetting();
    return (0, r.bG)([c.A, l.Ay, i.A], () => !n && !u && (c.A.isFriend(e) || null != l.Ay.memberOf(e).find(e => !d.includes(e))) || i.A.getGameFriendsForUser(e).length > 0 && o.Zk.getSetting())
}