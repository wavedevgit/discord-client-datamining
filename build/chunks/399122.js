/** chunk id: 399122 params = (module,exports,require) **/
t.d(l, {
    A: () => u
});
var i = t(627968);
t(64700);
var n = t(347805),
    s = t(183555),
    a = t(716804),
    r = t(83013),
    o = t(518477),
    d = t(985018),
    c = t(822138);

function u(e) {
    let {
        userId: l
    } = e, t = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, s.NJ)();
    return (0, i.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, i.jsx)(n.A, {
            userId: l,
            className: c.N,
            autoFocus: t === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}