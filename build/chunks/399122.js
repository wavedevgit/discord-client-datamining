/** chunk id: 399122 params = (module,exports,require) **/
i.d(l, {
    A: () => u
});
var t = i(627968);
i(64700);
var n = i(347805),
    s = i(183555),
    a = i(716804),
    r = i(83013),
    o = i(518477),
    d = i(985018),
    c = i(921677);

function u(e) {
    let {
        userId: l
    } = e, i = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, s.NJ)();
    return (0, t.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, t.jsx)(n.A, {
            userId: l,
            className: c.N,
            autoFocus: i === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}