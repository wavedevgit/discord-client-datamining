/** chunk id: 22519, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => a
});
var l = r(627968),
    d = r(856535),
    c = r(785330);
let a = e => {
    let {
        layoutId: t,
        tenantId: r,
        skeleton: a,
        componentMap: n
    } = e, {
        layout: o,
        loading: u
    } = (0, d.A)(r, t);
    return u && null != a ? (0, l.jsx)(c.Ay, {
        overrides: n,
        layout: {
            id: "skeleton",
            children: a
        }
    }) : null == o ? null : (0, l.jsx)(c.Ay, {
        layout: o,
        overrides: n
    })
}