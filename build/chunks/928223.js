/** Chunk was on 63974 **/
/** chunk id: 928223, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(347805),
    r = n(183555),
    s = n(716804),
    o = n(900179),
    a = n(518477),
    d = n(985018),
    c = n(225675);

function u(e) {
    let {
        userId: t
    } = e, n = (0, s.g)(), {
        trackUserProfileAction: u
    } = (0, r.NJ)();
    return (0, l.jsx)(o.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: a.bk.NOTE,
        children: (0, l.jsx)(i.A, {
            userId: t,
            className: c.N,
            autoFocus: n === a.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}