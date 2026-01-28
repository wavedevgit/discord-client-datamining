/** Chunk was on 5606 **/
/** chunk id: 98254, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968),
    i = n(397927),
    l = n(244242);

function s(e) {
    let {
        node: t
    } = e, {
        useValue: n,
        useTitle: s,
        useSubtitle: a,
        useOptions: o,
        fieldLayout: c,
        clearable: d
    } = t, u = t.setValue, p = s(), _ = null == a ? void 0 : a(), m = n(), g = o();
    return (0, r.jsx)(l.L, {
        children: (0, r.jsx)(i.l6P, {
            selectionMode: "single",
            label: p,
            description: _,
            options: g,
            value: m,
            clearable: d,
            onSelectionChange: u,
            layout: c,
            fullWidth: !0
        })
    })
}