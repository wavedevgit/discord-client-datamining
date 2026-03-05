/** chunk id: 371664, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => a,
    K: () => s
});
var n = i(627968),
    l = i(64700),
    r = i(953727);
let s = 8;

function a(t) {
    let {
        width: e = 80,
        height: i = 28,
        color: a = "currentColor",
        foreground: o,
        ...d
    } = t, u = `pill-frame-pattern-${i}`, c = l.useMemo(() => {
        let t;
        return t = i - 8, `m0 0h8v${i}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${t}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${t}c0-1.1045695-.8954305-2-2-2z`
    }, [i]);
    return (0, n.jsxs)("svg", {
        ...(0, r.A)(d),
        width: e,
        height: i,
        viewBox: `0 0 ${e} ${i}`,
        children: [(0, n.jsx)("pattern", {
            id: u,
            width: s / e,
            height: "1",
            children: (0, n.jsx)("path", {
                d: c,
                fillRule: "evenodd",
                fill: a,
                className: o
            })
        }), (0, n.jsx)("rect", {
            fill: `url(#${u})`,
            height: "100%",
            width: "100%"
        })]
    })
}