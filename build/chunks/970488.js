/** chunk id: 970488, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => a
});
var l = r(627968),
    d = r(261225),
    c = r(266341);
let a = e => {
    let {
        children: t,
        columns: r = 1,
        rows: a = 1
    } = e, n = Math.max(1, Math.min(d.M, Math.floor(r))), o = Math.max(1, Math.min(d.M, Math.floor(a))), u = c[`gridItemColumns${n}`], s = c[`gridItemRows${o}`];
    return (0, l.jsx)("div", {
        className: `${c.gridItem} ${u} ${s}`,
        children: t
    })
}