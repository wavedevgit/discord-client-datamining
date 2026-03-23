/** chunk id: 970488 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var l = r(627968),
    n = r(261225),
    a = r(266341);
let s = e => {
    let {
        children: t,
        columns: r = 1,
        rows: s = 1
    } = e, c = Math.max(1, Math.min(n.M, Math.floor(r))), i = Math.max(1, Math.min(n.M, Math.floor(s))), d = a[`gridItemColumns${c}`], o = a[`gridItemRows${i}`];
    return (0, l.jsx)("div", {
        className: `${a.gridItem} ${d} ${o}`,
        children: t
    })
}