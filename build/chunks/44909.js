/** chunk id: 44909, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(627968),
    s = n(397927),
    a = n(244242);

function l(e) {
    let {
        node: t
    } = e, {
        useValue: n,
        setValue: l,
        useTitle: r,
        useSubtitle: o,
        useOptions: c,
        useBadge: d
    } = t, u = r(), _ = o?.(), m = n(), A = c(), g = d?.();
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.z6M, {
            label: u,
            description: _,
            options: A,
            value: m,
            badge: g,
            onChange: e => l(e)
        })
    })
}