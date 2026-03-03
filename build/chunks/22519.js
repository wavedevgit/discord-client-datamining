/** chunk id: 22519, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    o = t(856535),
    n = t(785330);
let i = e => {
    let {
        layoutId: l,
        tenantId: t,
        skeleton: i,
        componentMap: a
    } = e, {
        layout: d,
        loading: c
    } = (0, o.A)(t, l);
    return c && null != i ? (0, r.jsx)(n.Ay, {
        overrides: a,
        layout: {
            id: "skeleton",
            children: i
        }
    }) : null == d ? null : (0, r.jsx)(n.Ay, {
        layout: d,
        overrides: a
    })
}