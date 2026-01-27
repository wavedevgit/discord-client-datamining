/** Chunk was on 41727 **/
/** chunk id: 694257, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(945777),
    s = n(58249);
let a = l.memo(function(e) {
    let {
        channel: t,
        participants: n,
        maxTiles: l
    } = e;
    if (0 === n.length) return null;
    let a = [];
    for (let e = 0; e < l; e++)
        if (e < n.length) {
            let l = n[e];
            a.push((0, r.jsx)(i.A, {
                channel: t,
                participant: l
            }, l.id))
        } else a.push((0, r.jsx)(i.S, {}, e));
    return (0, r.jsx)("div", {
        className: s.l,
        children: a
    })
})