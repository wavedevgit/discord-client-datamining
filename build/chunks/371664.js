/** chunk id: 371664 params = (module,exports,require) **/
n.d(t, {
    A: () => r,
    K: () => a
});
var i = n(627968),
    l = n(64700),
    s = n(953727);
let a = 8;

function r(e) {
    let {
        width: t = 80,
        height: n = 28,
        color: r = "currentColor",
        foreground: o,
        ...c
    } = e, d = `pill-frame-pattern-${n}`, u = l.useMemo(() => {
        let e;
        return e = n - 8, `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
    }, [n]);
    return (0, i.jsxs)("svg", {
        ...(0, s.A)(c),
        width: t,
        height: n,
        viewBox: `0 0 ${t} ${n}`,
        children: [(0, i.jsx)("pattern", {
            id: d,
            width: a / t,
            height: "1",
            children: (0, i.jsx)("path", {
                d: u,
                fillRule: "evenodd",
                fill: r,
                className: o
            })
        }), (0, i.jsx)("rect", {
            fill: `url(#${d})`,
            height: "100%",
            width: "100%"
        })]
    })
}