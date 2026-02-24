/** chunk id: 928223, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var s = t(347805),
    l = t(183555),
    a = t(716804),
    r = t(900179),
    d = t(518477),
    c = t(985018),
    o = t(225675);

function u(e) {
    let {
        userId: n
    } = e, t = (0, a.g)(), {
        trackUserProfileAction: u
    } = (0, l.NJ)();
    return (0, i.jsx)(r.A, {
        heading: c.intl.string(c.t["mQKv+v"]),
        scrollTargetId: d.bk.NOTE,
        children: (0, i.jsx)(s.A, {
            userId: n,
            className: o.N,
            autoFocus: t === d.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}