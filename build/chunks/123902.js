/** chunk id: 123902, original params: t,e,i (module,exports,require) **/
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
    c = i(271678),
    m = ((n = {}).BLACK = "BLACK", n.GRAY = "GRAY", n);
let p = {
        BLACK: c.Ql,
        GRAY: c.wm
    },
    h = {
        sm: 20,
        md: 28
    };

function A(t) {
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
    } = t, v = h[n], {
        ref: C,
        width: S
    } = (0, d.Ay)(), E = r.useMemo(() => null != S ? A(S) : 0, [S]), x = r.useMemo(() => {
        let t = Math.abs(A(E * (100 - Math.max(0, Math.min(100, i))) / 100) - E);
        return {
            transform: `translateX(${t}px)`
        }
    }, [i, E]), _ = r.useMemo(() => ({
        width: `${E}px`,
        background: i <= 0 ? "none" : `linear-gradient(to right, ${s}, ${m})`
    }), [m, s, i, E]);
    return (0, l.jsxs)("div", {
        className: c.iE,
        ref: C,
        style: {
            height: v
        },
        children: [(0, l.jsxs)("div", {
            className: a()(c.kL, g),
            style: _,
            children: [(0, l.jsx)("div", {
                className: c.qB,
                style: x
            }), 0 !== E && (0, l.jsx)(u.A, {
                width: E,
                height: v,
                className: a()(c.DR, p[e], f)
            })]
        }), T]
    })
}