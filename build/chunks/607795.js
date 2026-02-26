/** chunk id: 607795, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    a = l(55391),
    d = l(785330);
let c = e => {
    let {
        templateId: t,
        tenantId: l,
        skeleton: c,
        requestParams: n,
        componentMap: o
    } = e, {
        layout: s,
        loading: u
    } = (0, a.A)(l, t, n);
    return u && null != c ? (0, r.jsx)(d.Ay, {
        overrides: o,
        layout: {
            id: "skeleton",
            children: c
        }
    }) : null == s ? null : (0, r.jsx)(d.Ay, {
        layout: s,
        overrides: o
    })
}