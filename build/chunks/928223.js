/** chunk id: 928223 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(347805),
    l = t(183555),
    s = t(716804),
    r = t(900179),
    d = t(518477),
    o = t(985018),
    c = t(714388);

function u(e) {
    let {
        userId: n
    } = e, t = (0, s.g)(), {
        trackUserProfileAction: u
    } = (0, l.NJ)();
    return (0, i.jsx)(r.A, {
        heading: o.intl.string(o.t["mQKv+v"]),
        scrollTargetId: d.bk.NOTE,
        children: (0, i.jsx)(a.A, {
            userId: n,
            className: c.N,
            autoFocus: t === d.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}