/** chunk id: 970488 params = (module,exports,require) **/
t.d(l, {
    A: () => a
});
var r = t(627968),
    o = t(261225),
    n = t(973207);
let a = e => {
    let {
        children: l,
        columns: t = 1,
        rows: a = 1
    } = e, i = Math.max(1, Math.min(o.M, Math.floor(t))), d = Math.max(1, Math.min(o.M, Math.floor(a))), s = n[`gridItemColumns${i}`], c = n[`gridItemRows${d}`];
    return (0, r.jsx)("div", {
        className: `${n.gridItem} ${s} ${c}`,
        children: l
    })
}