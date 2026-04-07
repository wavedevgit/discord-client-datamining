/** chunk id: 371664 params = (module,exports,require) **/
n.d(e, {
    A: () => a,
    K: () => s
});
var i = n(627968),
    l = n(64700),
    r = n(953727);
let s = 8;

function a(t) {
    let {
        width: e = 80,
        height: n = 28,
        color: a = "currentColor",
        foreground: o,
        ...u
    } = t, d = `pill-frame-pattern-${n}`, c = l.useMemo(() => {
        let t;
        return t = n - 8, `m0 0h8v${n}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${t}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${t}c0-1.1045695-.8954305-2-2-2z`
    }, [n]);
    return (0, i.jsxs)("svg", {
        ...(0, r.A)(u),
        width: e,
        height: n,
        viewBox: `0 0 ${e} ${n}`,
        children: [(0, i.jsx)("pattern", {
            id: d,
            width: s / e,
            height: "1",
            children: (0, i.jsx)("path", {
                d: c,
                fillRule: "evenodd",
                fill: a,
                className: o
            })
        }), (0, i.jsx)("rect", {
            fill: `url(#${d})`,
            height: "100%",
            width: "100%"
        })]
    })
}