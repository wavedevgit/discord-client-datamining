/** chunk id: 928223 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var s = t(347805),
    r = t(183555),
    a = t(716804),
    l = t(900179),
    o = t(518477),
    d = t(985018),
    c = t(225675);

function u(e) {
    let {
        userId: n
    } = e, t = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, r.NJ)();
    return (0, i.jsx)(l.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, i.jsx)(s.A, {
            userId: n,
            className: c.N,
            autoFocus: t === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}