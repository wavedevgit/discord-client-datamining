/** chunk id: 399122 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var i = n(347805),
    s = n(183555),
    a = n(716804),
    r = n(83013),
    o = n(518477),
    d = n(985018),
    c = n(822138);

function u(e) {
    let {
        userId: t
    } = e, n = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, s.NJ)();
    return (0, l.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, l.jsx)(i.A, {
            userId: t,
            className: c.N,
            autoFocus: n === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}