/** chunk id: 22519 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var l = r(627968),
    n = r(856535),
    a = r(785330);
let s = e => {
    let {
        layoutId: t,
        tenantId: r,
        skeleton: s,
        componentMap: c
    } = e, {
        layout: i,
        loading: d
    } = (0, n.A)(r, t);
    return d && null != s ? (0, l.jsx)(a.Ay, {
        overrides: c,
        layout: {
            id: "skeleton",
            children: s
        }
    }) : null == i ? null : (0, l.jsx)(a.Ay, {
        layout: i,
        overrides: c
    })
}