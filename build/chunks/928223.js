/** chunk id: 928223 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(347805),
    l = t(183555),
    r = t(716804),
    d = t(900179),
    s = t(518477),
    o = t(985018),
    c = t(142948);

function u(e) {
    let {
        userId: n
    } = e, t = (0, r.g)(), {
        trackUserProfileAction: u
    } = (0, l.NJ)();
    return (0, i.jsx)(d.A, {
        heading: o.intl.string(o.t["mQKv+v"]),
        scrollTargetId: s.bk.NOTE,
        children: (0, i.jsx)(a.A, {
            userId: n,
            className: c.N,
            autoFocus: t === s.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}