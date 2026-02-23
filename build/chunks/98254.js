/** chunk id: 98254, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968),
    s = n(397927),
    a = n(244242);

function r(e) {
    let {
        node: t
    } = e, {
        useValue: n,
        useTitle: r,
        useSubtitle: l,
        useOptions: o,
        clearable: c
    } = t, d = t.setValue, u = r(), _ = l?.(), m = n(), A = o();
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: u,
            description: _,
            options: A,
            value: m,
            clearable: c,
            onSelectionChange: d,
            layout: "horizontal-responsive",
            fullWidth: !0
        })
    })
}