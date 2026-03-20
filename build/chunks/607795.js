/** chunk id: 607795 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var l = r(627968),
    n = r(55391),
    a = r(785330);
let s = e => {
    let {
        templateId: t,
        tenantId: r,
        skeleton: s,
        requestParams: c,
        componentMap: i
    } = e, {
        layout: d,
        loading: o
    } = (0, n.A)(r, t, c);
    return o && null != s ? (0, l.jsx)(a.Ay, {
        overrides: i,
        layout: {
            id: "skeleton",
            children: s
        }
    }) : null == d ? null : (0, l.jsx)(a.Ay, {
        layout: d,
        overrides: i
    })
}