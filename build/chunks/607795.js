/** chunk id: 607795, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    o = t(55391),
    n = t(785330);
let i = e => {
    let {
        templateId: l,
        tenantId: t,
        skeleton: i,
        requestParams: a,
        componentMap: d
    } = e, {
        layout: c,
        loading: s
    } = (0, o.A)(t, l, a);
    return s && null != i ? (0, r.jsx)(n.Ay, {
        overrides: d,
        layout: {
            id: "skeleton",
            children: i
        }
    }) : null == c ? null : (0, r.jsx)(n.Ay, {
        layout: c,
        overrides: d
    })
}