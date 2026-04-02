/** chunk id: 928223 params = (module,exports,require) **/
t.d(n, {
    A: () => u
});
var i = t(627968);
t(64700);
var a = t(347805),
    s = t(183555),
    l = t(716804),
    r = t(900179),
    o = t(518477),
    d = t(985018),
    c = t(714388);

function u(e) {
    let {
        userId: n
    } = e, t = (0, l.g)(), {
        trackUserProfileAction: u
    } = (0, s.NJ)();
    return (0, i.jsx)(r.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: o.bk.NOTE,
        children: (0, i.jsx)(a.A, {
            userId: n,
            className: c.N,
            autoFocus: t === o.bk.NOTE,
            onUpdate: () => u({
                action: "SET_NOTE"
            })
        })
    })
}