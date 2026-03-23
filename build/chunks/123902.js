/** chunk id: 123902 params = (module,exports,require) **/
i.d(e, {
    A: () => g,
    V: () => m
});
var n, l = i(627968),
    r = i(64700),
    s = i(503698),
    a = i.n(s),
    o = i(827734),
    d = i(765671),
    u = i(371664),
    c = i(477412),
    m = ((n = {}).BLACK = "BLACK", n.GRAY = "GRAY", n);
let p = {
        BLACK: c.Ql,
        GRAY: c.wm
    },
    A = {
        sm: 20,
        md: 28
    };

function h(t) {
    return Math.round(t / u.K) * u.K
}

function g(t) {
    let {
        notchBackground: e,
        progress: i,
        size: n = "md",
        gradientStart: s = o.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: m = o.A.unsafe_rawColors.GREEN_360.css,
        className: g,
        notchClassName: f,
        children: T
    } = t, S = A[n], {
        ref: E,
        width: C
    } = (0, d.Ay)(), v = r.useMemo(() => null != C ? h(C) : 0, [C]), _ = r.useMemo(() => {
        let t = Math.abs(h(v * (100 - Math.max(0, Math.min(100, i))) / 100) - v);
        return {
            transform: `translateX(${t}px)`
        }
    }, [i, v]), x = r.useMemo(() => ({
        width: `${v}px`,
        background: i <= 0 ? "none" : `linear-gradient(to right, ${s}, ${m})`
    }), [m, s, i, v]);
    return (0, l.jsxs)("div", {
        className: c.iE,
        ref: E,
        style: {
            height: S
        },
        children: [(0, l.jsxs)("div", {
            className: a()(c.kL, g),
            style: x,
            children: [(0, l.jsx)("div", {
                className: c.qB,
                style: _
            }), 0 !== v && (0, l.jsx)(u.A, {
                width: v,
                height: S,
                className: a()(c.DR, p[e], f)
            })]
        }), T]
    })
}