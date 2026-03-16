/** chunk id: 928223 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(347805),
    r = n(183555),
    l = n(716804),
    a = n(900179),
    o = n(518477),
    d = n(985018),
    c = n(225675);

function u(e) {
    let {
        userId: t
    } = e, n = (0, l.g)(), {
        trackUserProfileAction: u
    } = (0, r.NJ)();
    return (0, i.jsx)(a.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, i.jsx)(s.A, {
            userId: t,
            className: c.N,
            autoFocus: n === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}