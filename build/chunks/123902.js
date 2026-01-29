/** Chunk was on 6500 **/
/** chunk id: 123902, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    V: () => g
});
var r, i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    c = n(319060),
    u = n(765671),
    d = n(371664),
    p = n(240248),
    f = n(477412);
let m = (0, p.xI)(c.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var g = ((r = {}).BLACK = "BLACK", r.GRAY = "GRAY", r);
let _ = {
    BLACK: f.Ql,
    GRAY: f.wm
};

function y(e) {
    return Math.round(e / m) * m
}

function A(e) {
    let {
        notchBackground: t,
        progress: n,
        gradientStart: r = o.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: a = o.A.unsafe_rawColors.GREEN_360.css,
        className: c,
        notchClassName: p,
        children: m
    } = e, {
        ref: g,
        width: A
    } = (0, u.Ay)(), b = l.useMemo(() => null != A ? y(A) : 0, [A]), h = l.useMemo(() => {
        let e = Math.abs(y(b * (100 - Math.max(0, Math.min(100, n))) / 100) - b);
        return {
            transform: "translateX(".concat(e, "px)")
        }
    }, [n, b]), v = l.useMemo(() => ({
        width: "".concat(b, "px"),
        background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(r, ", ").concat(a, ")")
    }), [a, r, n, b]);
    return (0, i.jsxs)("div", {
        className: f.iE,
        ref: g,
        children: [(0, i.jsxs)("div", {
            className: s()(f.kL, c),
            style: v,
            children: [(0, i.jsx)("div", {
                className: f.qB,
                style: h
            }), 0 !== b && (0, i.jsx)(d.A, {
                width: b,
                className: s()(f.DR, _[t], p)
            })]
        }), m]
    })
}