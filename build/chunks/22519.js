/** chunk id: 22519, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(627968),
    o = t(856535),
    n = t(785330);
let a = e => {
    let {
        layoutId: l,
        tenantId: t,
        skeleton: a,
        componentMap: i
    } = e, {
        layout: d,
        loading: s
    } = (0, o.A)(t, l);
    return s && null != a ? (0, r.jsx)(n.Ay, {
        overrides: i,
        layout: {
            id: "skeleton",
            children: a
        }
    }) : null == d ? null : (0, r.jsx)(n.Ay, {
        layout: d,
        overrides: i
    })
}