/** chunk id: 22519, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    a = l(856535),
    d = l(785330);
let c = e => {
    let {
        layoutId: t,
        tenantId: l,
        skeleton: c,
        componentMap: n
    } = e, {
        layout: o,
        loading: s
    } = (0, a.A)(l, t);
    return s && null != c ? (0, r.jsx)(d.Ay, {
        overrides: n,
        layout: {
            id: "skeleton",
            children: c
        }
    }) : null == o ? null : (0, r.jsx)(d.Ay, {
        layout: o,
        overrides: n
    })
}