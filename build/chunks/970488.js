/** chunk id: 970488 params = (module,exports,require) **/
l.d(t, {
    A: () => o
});
var r = l(627968),
    n = l(261225),
    i = l(266341);
let o = e => {
    let {
        children: t,
        columns: l = 1,
        rows: o = 1
    } = e, a = Math.max(1, Math.min(n.M, Math.floor(l))), s = Math.max(1, Math.min(n.M, Math.floor(o))), d = i[`gridItemColumns${a}`], c = i[`gridItemRows${s}`];
    return (0, r.jsx)("div", {
        className: `${i.gridItem} ${d} ${c}`,
        children: t
    })
}