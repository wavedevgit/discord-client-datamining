/** chunk id: 399122 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var l = i(627968);
i(64700);
var n = i(347805),
    s = i(183555),
    a = i(716804),
    r = i(83013),
    o = i(518477),
    d = i(985018),
    c = i(473836);

function u(e) {
    let {
        userId: t
    } = e, i = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, s.NJ)();
    return (0, l.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, l.jsx)(n.A, {
            userId: t,
            className: c.N,
            autoFocus: i === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}