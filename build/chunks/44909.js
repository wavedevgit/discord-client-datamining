/** chunk id: 44909 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968),
    s = n(397927),
    l = n(791498),
    a = n(244242);

function r(e) {
    let {
        node: t
    } = e, {
        useValue: n,
        setValue: r,
        useTitle: o,
        useSubtitle: d,
        useOptions: c,
        useBadge: u
    } = t, _ = o(), g = d?.(), m = n(), A = c(), h = u?.(), p = (0, l.q)(t);
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.z6M, {
            label: _,
            description: g,
            options: A,
            value: m,
            badge: h,
            onChange: e => {
                p(), r(e)
            }
        })
    })
}