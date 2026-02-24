/** chunk id: 123902, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => g,
    V: () => h
});
var s, n = i(627968),
    l = i(64700),
    a = i(503698),
    o = i.n(a),
    c = i(827734),
    r = i(765671),
    u = i(371664),
    d = i(271678),
    h = ((s = {}).BLACK = "BLACK", s.GRAY = "GRAY", s);
let m = {
        BLACK: d.Ql,
        GRAY: d.wm
    },
    p = {
        sm: 20,
        md: 28
    };

function v(e) {
    return Math.round(e / u.K) * u.K
}

function g(e) {
    let {
        notchBackground: t,
        progress: i,
        size: s = "md",
        gradientStart: a = c.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: h = c.A.unsafe_rawColors.GREEN_360.css,
        className: g,
        notchClassName: _,
        children: x
    } = e, A = p[s], {
        ref: T,
        width: D
    } = (0, r.Ay)(), f = l.useMemo(() => null != D ? v(D) : 0, [D]), S = l.useMemo(() => {
        let e = Math.abs(v(f * (100 - Math.max(0, Math.min(100, i))) / 100) - f);
        return {
            transform: `translateX(${e}px)`
        }
    }, [i, f]), C = l.useMemo(() => ({
        width: `${f}px`,
        background: i <= 0 ? "none" : `linear-gradient(to right, ${a}, ${h})`
    }), [h, a, i, f]);
    return (0, n.jsxs)("div", {
        className: d.iE,
        ref: T,
        style: {
            height: A
        },
        children: [(0, n.jsxs)("div", {
            className: o()(d.kL, g),
            style: C,
            children: [(0, n.jsx)("div", {
                className: d.qB,
                style: S
            }), 0 !== f && (0, n.jsx)(u.A, {
                width: f,
                height: A,
                className: o()(d.DR, m[t], _)
            })]
        }), x]
    })
}