/** chunk id: 261225, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o,
    M: () => n
});
var l = r(627968);
r(64700);
var d = r(503698),
    c = r.n(d),
    a = r(266341);
let n = 6,
    o = e => {
        let {
            columns: t = 3,
            children: r
        } = e, d = Math.max(1, Math.min(n, Math.floor(t)));
        return (0, l.jsx)("div", {
            className: c()(a.grid, a[`columns${d}`]),
            children: r
        })
    }