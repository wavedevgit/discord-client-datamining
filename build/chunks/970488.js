/** chunk id: 970488, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(627968),
    o = t(261225),
    n = t(266341);
let i = e => {
    let {
        children: l,
        columns: t = 1,
        rows: i = 1
    } = e, a = Math.max(1, Math.min(o.M, Math.floor(t))), d = Math.max(1, Math.min(o.M, Math.floor(i))), s = n[`gridItemColumns${a}`], c = n[`gridItemRows${d}`];
    return (0, r.jsx)("div", {
        className: `${n.gridItem} ${s} ${c}`,
        children: l
    })
}