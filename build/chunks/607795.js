/** chunk id: 607795, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(627968),
    o = t(55391),
    n = t(785330);
let a = e => {
    let {
        templateId: l,
        tenantId: t,
        skeleton: a,
        requestParams: i,
        componentMap: d
    } = e, {
        layout: c,
        loading: s
    } = (0, o.A)(t, l, i);
    return s && null != a ? (0, r.jsx)(n.Ay, {
        overrides: d,
        layout: {
            id: "skeleton",
            children: a
        }
    }) : null == c ? null : (0, r.jsx)(n.Ay, {
        layout: c,
        overrides: d
    })
}