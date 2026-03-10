/** chunk id: 22519 params = (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    n = t(856535),
    o = t(785330);
let i = e => {
    let {
        layoutId: l,
        tenantId: t,
        skeleton: i,
        componentMap: a
    } = e, {
        layout: s,
        loading: d
    } = (0, n.A)(t, l);
    return d && null != i ? (0, r.jsx)(o.Ay, {
        overrides: a,
        layout: {
            id: "skeleton",
            children: i
        }
    }) : null == s ? null : (0, r.jsx)(o.Ay, {
        layout: s,
        overrides: a
    })
}