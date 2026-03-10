/** chunk id: 970488 params = (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    n = t(261225),
    o = t(266341);
let i = e => {
    let {
        children: l,
        columns: t = 1,
        rows: i = 1
    } = e, a = Math.max(1, Math.min(n.M, Math.floor(t))), s = Math.max(1, Math.min(n.M, Math.floor(i))), d = o[`gridItemColumns${a}`], c = o[`gridItemRows${s}`];
    return (0, r.jsx)("div", {
        className: `${o.gridItem} ${d} ${c}`,
        children: l
    })
}