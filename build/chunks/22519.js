/** chunk id: 22519 params = (module,exports,require) **/
l.d(t, {
    A: () => o
});
var r = l(627968),
    n = l(856535),
    i = l(785330);
let o = e => {
    let {
        layoutId: t,
        tenantId: l,
        skeleton: o,
        componentMap: a
    } = e, {
        layout: s,
        loading: d
    } = (0, n.A)(l, t);
    return d && null != o ? (0, r.jsx)(i.Ay, {
        overrides: a,
        layout: {
            id: "skeleton",
            children: o
        }
    }) : null == s ? null : (0, r.jsx)(i.Ay, {
        layout: s,
        overrides: a
    })
}