/** chunk id: 928223 params = (module,exports,require) **/
i.d(n, {
    A: () => u
});
var t = i(627968);
i(64700);
var a = i(347805),
    l = i(183555),
    s = i(716804),
    r = i(900179),
    d = i(518477),
    o = i(985018),
    c = i(714388);

function u(e) {
    let {
        userId: n
    } = e, i = (0, s.g)(), {
        trackUserProfileAction: u
    } = (0, l.NJ)();
    return (0, t.jsx)(r.A, {
        heading: o.intl.string(o.t["mQKv+v"]),
        scrollTargetId: d.bk.NOTE,
        children: (0, t.jsx)(a.A, {
            userId: n,
            className: c.N,
            autoFocus: i === d.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}