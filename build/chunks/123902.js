/** chunk id: 123902 params = (module,exports,require) **/
i.d(t, {
    A: () => A,
    V: () => m
});
var n, a = i(627968),
    l = i(64700),
    s = i(503698),
    r = i.n(s),
    o = i(827734),
    c = i(765671),
    d = i(371664),
    u = i(671097),
    m = ((n = {}).BLACK = "BLACK", n.GRAY = "GRAY", n);
let _ = {
        BLACK: u.Ql,
        GRAY: u.wm
    },
    p = {
        sm: 20,
        md: 28
    };

function h(e) {
    return Math.round(e / d.K) * d.K
}

function A(e) {
    let {
        notchBackground: t,
        progress: i,
        size: n = "md",
        gradientStart: s = o.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: m = o.A.unsafe_rawColors.GREEN_360.css,
        className: A,
        notchClassName: g,
        children: f
    } = e, v = p[n], {
        ref: S,
        width: I
    } = (0, c.Ay)(), T = l.useMemo(() => null != I ? h(I) : 0, [I]), C = l.useMemo(() => {
        let e = Math.abs(h(T * (100 - Math.max(0, Math.min(100, i))) / 100) - T);
        return {
            transform: `translateX(${e}px)`
        }
    }, [i, T]), E = l.useMemo(() => ({
        width: `${T}px`,
        background: i <= 0 ? "none" : `linear-gradient(to right, ${s}, ${m})`
    }), [m, s, i, T]);
    return (0, a.jsxs)("div", {
        className: u.iE,
        ref: S,
        style: {
            height: v
        },
        children: [(0, a.jsxs)("div", {
            className: r()(u.kL, A),
            style: E,
            children: [(0, a.jsx)("div", {
                className: u.qB,
                style: C
            }), 0 !== T && (0, a.jsx)(d.A, {
                width: T,
                height: v,
                className: r()(u.DR, _[t], g)
            })]
        }), f]
    })
}