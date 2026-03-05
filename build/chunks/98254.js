/** chunk id: 98254 params = (module,exports,require) **/
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
        useTitle: r,
        useSubtitle: o,
        useOptions: d,
        clearable: c
    } = t, u = t.setValue, _ = r(), g = o?.(), m = n(), A = d(), h = (0, l.q)(t);
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: _,
            description: g,
            options: A,
            value: m,
            clearable: c,
            onSelectionChange: e => {
                h(), u(e)
            },
            layout: "horizontal-responsive",
            fullWidth: !0
        })
    })
}