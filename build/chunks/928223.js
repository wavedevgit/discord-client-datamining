/** chunk id: 928223 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(627968);
t(64700);
var a = t(347805),
    r = t(183555),
    l = t(716804),
    o = t(900179),
    s = t(518477),
    d = t(985018),
    c = t(637089);

function _(e) {
    let {
        userId: n
    } = e, t = (0, l.g)(), {
        trackUserProfileAction: _
    } = (0, r.NJ)();
    return (0, i.jsx)(o.A, {
        heading: d.intl.string(d.t["mQKv+v"]),
        scrollTargetId: s.bk.NOTE,
        children: (0, i.jsx)(a.A, {
            userId: n,
            className: c.N,
            autoFocus: t === s.bk.NOTE,
            onUpdate: () => _({
                action: "SET_NOTE"
            })
        })
    })
}