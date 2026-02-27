/** chunk id: 970488, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    a = l(261225),
    d = l(266341);
let c = e => {
    let {
        children: t,
        columns: l = 1,
        rows: c = 1
    } = e, n = Math.max(1, Math.min(a.M, Math.floor(l))), o = Math.max(1, Math.min(a.M, Math.floor(c))), s = d[`gridItemColumns${n}`], u = d[`gridItemRows${o}`];
    return (0, r.jsx)("div", {
        className: `${d.gridItem} ${s} ${u}`,
        children: t
    })
}