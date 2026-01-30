/** chunk id: 44909, original params: e,t,n (module,exports,require) **/
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
        setValue: s,
        useTitle: a,
        useSubtitle: o,
        useOptions: c,
        useBadge: d
    } = t, u = a(), _ = null == o ? void 0 : o(), p = n(), m = c(), g = null == d ? void 0 : d();
    return (0, r.jsx)(l.L, {
        children: (0, r.jsx)(i.z6M, {
            label: u,
            description: _,
            options: m,
            value: p,
            badge: g,
            onChange: e => s(e)
        })
    })
}