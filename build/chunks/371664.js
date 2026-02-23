/** chunk id: 371664, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => o,
    K: () => a
});
var s = i(627968),
    n = i(64700),
    l = i(953727);
let a = 8;

function o(e) {
    let {
        width: t = 80,
        height: i = 28,
        color: o = "currentColor",
        foreground: c,
        ...r
    } = e, u = `pill-frame-pattern-${i}`, d = n.useMemo(() => {
        let e;
        return e = i - 8, `m0 0h8v${i}h-8zm4 2c-1.1045695 0-2 .8954305-2 2v${e}c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-${e}c0-1.1045695-.8954305-2-2-2z`
    }, [i]);
    return (0, s.jsxs)("svg", {
        ...(0, l.A)(r),
        width: t,
        height: i,
        viewBox: `0 0 ${t} ${i}`,
        children: [(0, s.jsx)("pattern", {
            id: u,
            width: a / t,
            height: "1",
            children: (0, s.jsx)("path", {
                d: d,
                fillRule: "evenodd",
                fill: o,
                className: c
            })
        }), (0, s.jsx)("rect", {
            fill: `url(#${u})`,
            height: "100%",
            width: "100%"
        })]
    })
}