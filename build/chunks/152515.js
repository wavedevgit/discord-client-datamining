/** chunk id: 152515 params = (module,exports,require) **/
n.d(t, {
    n: () => r
});
var a = n(627968),
    i = n(64700),
    s = n(705773);
let l = 2 * Math.PI * 5;

function r(e) {
    let {
        timeoutDurationInMilliseconds: t = 5e3,
        onTimeoutComplete: n
    } = e, [r, o] = i.useState(0), d = i.useRef(n);
    i.useEffect(() => {
        d.current = n
    }), i.useEffect(() => {
        let e = Date.now(),
            n = setInterval(() => {
                let a = Date.now() - e;
                o(a), a >= t && (clearInterval(n), d.current())
            }, 16);
        return () => clearInterval(n)
    }, [t]);
    let c = Math.min(r / t, 1);
    return (0, a.jsxs)("svg", {
        width: 12,
        height: 12,
        className: s.G,
        children: [(0, a.jsx)("circle", {
            strokeWidth: 2,
            fill: "transparent",
            r: 5,
            cx: 6,
            cy: 6,
            stroke: "var(--opacity-white-48)"
        }), (0, a.jsx)("circle", {
            className: s.q,
            strokeWidth: 2,
            fill: "transparent",
            r: 5,
            cx: 6,
            cy: 6,
            stroke: "var(--white)",
            strokeDasharray: l,
            strokeDashoffset: l * (1 - c)
        })]
    })
}