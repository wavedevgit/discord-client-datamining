/** chunk id: 399122 params = (module,exports,require) **/
l.d(n, {
    A: () => u
});
var i = l(627968);
l(64700);
var t = l(347805),
    s = l(183555),
    a = l(716804),
    r = l(83013),
    o = l(518477),
    d = l(985018),
    c = l(921677);

function u(e) {
    let {
        userId: n
    } = e, l = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, s.NJ)();
    return (0, i.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, i.jsx)(t.A, {
            userId: n,
            className: c.N,
            autoFocus: l === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}