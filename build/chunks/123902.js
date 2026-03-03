/** chunk id: 123902, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => g,
    V: () => h
});
var n, s = i(627968),
    l = i(64700),
    a = i(503698),
    o = i.n(a),
    r = i(827734),
    c = i(765671),
    u = i(371664),
    d = i(477412),
    h = ((n = {}).BLACK = "BLACK", n.GRAY = "GRAY", n);
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
        size: n = "md",
        gradientStart: a = r.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: h = r.A.unsafe_rawColors.GREEN_360.css,
        className: g,
        notchClassName: A,
        children: _
    } = e, x = p[n], {
        ref: T,
        width: f
    } = (0, c.Ay)(), D = l.useMemo(() => null != f ? v(f) : 0, [f]), I = l.useMemo(() => {
        let e = Math.abs(v(D * (100 - Math.max(0, Math.min(100, i))) / 100) - D);
        return {
            transform: `translateX(${e}px)`
        }
    }, [i, D]), b = l.useMemo(() => ({
        width: `${D}px`,
        background: i <= 0 ? "none" : `linear-gradient(to right, ${a}, ${h})`
    }), [h, a, i, D]);
    return (0, s.jsxs)("div", {
        className: d.iE,
        ref: T,
        style: {
            height: x
        },
        children: [(0, s.jsxs)("div", {
            className: o()(d.kL, g),
            style: b,
            children: [(0, s.jsx)("div", {
                className: d.qB,
                style: I
            }), 0 !== D && (0, s.jsx)(u.A, {
                width: D,
                height: x,
                className: o()(d.DR, m[t], A)
            })]
        }), _]
    })
}