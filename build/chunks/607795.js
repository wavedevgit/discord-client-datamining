/** chunk id: 607795 params = (module,exports,require) **/
l.d(t, {
    A: () => o
});
var r = l(627968),
    n = l(55391),
    i = l(785330);
let o = e => {
    let {
        templateId: t,
        tenantId: l,
        skeleton: o,
        requestParams: a,
        componentMap: s
    } = e, {
        layout: d,
        loading: c
    } = (0, n.A)(l, t, a);
    return c && null != o ? (0, r.jsx)(i.Ay, {
        overrides: s,
        layout: {
            id: "skeleton",
            children: o
        }
    }) : null == d ? null : (0, r.jsx)(i.Ay, {
        layout: d,
        overrides: s
    })
}