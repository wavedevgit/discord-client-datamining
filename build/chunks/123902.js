/** chunk id: 123902 params = (module,exports,require) **/
n.d(e, {
    A: () => g,
    V: () => h
});
var i, l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(827734),
    u = n(765671),
    d = n(371664),
    c = n(671097),
    h = ((i = {}).BLACK = "BLACK", i.GRAY = "GRAY", i);
let A = {
        BLACK: c.Ql,
        GRAY: c.wm
    },
    m = {
        sm: 20,
        md: 28
    };

function p(t) {
    return Math.round(t / d.K) * d.K
}

function g(t) {
    let {
        notchBackground: e,
        progress: n,
        size: i = "md",
        gradientStart: s = o.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: h = o.A.unsafe_rawColors.GREEN_360.css,
        className: g,
        notchClassName: f,
        children: E
    } = t, T = m[i], {
        ref: C,
        width: S
    } = (0, u.Ay)(), _ = r.useMemo(() => null != S ? p(S) : 0, [S]), v = r.useMemo(() => {
        let t = Math.abs(p(_ * (100 - Math.max(0, Math.min(100, n))) / 100) - _);
        return {
            transform: `translateX(${t}px)`
        }
    }, [n, _]), y = r.useMemo(() => ({
        width: `${_}px`,
        background: n <= 0 ? "none" : `linear-gradient(to right, ${s}, ${h})`
    }), [h, s, n, _]);
    return (0, l.jsxs)("div", {
        className: c.iE,
        ref: C,
        style: {
            height: T
        },
        children: [(0, l.jsxs)("div", {
            className: a()(c.kL, g),
            style: y,
            children: [(0, l.jsx)("div", {
                className: c.qB,
                style: v
            }), 0 !== _ && (0, l.jsx)(d.A, {
                width: _,
                height: T,
                className: a()(c.DR, A[e], f)
            })]
        }), E]
    })
}