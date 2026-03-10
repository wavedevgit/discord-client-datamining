/** chunk id: 607795 params = (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    n = t(55391),
    o = t(785330);
let i = e => {
    let {
        templateId: l,
        tenantId: t,
        skeleton: i,
        requestParams: a,
        componentMap: s
    } = e, {
        layout: d,
        loading: c
    } = (0, n.A)(t, l, a);
    return c && null != i ? (0, r.jsx)(o.Ay, {
        overrides: s,
        layout: {
            id: "skeleton",
            children: i
        }
    }) : null == d ? null : (0, r.jsx)(o.Ay, {
        layout: d,
        overrides: s
    })
}