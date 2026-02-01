/** chunk id: 123902, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b,
    V: () => f
});
var i, r = n(627968),
    o = n(64700),
    l = n(503698),
    s = n.n(l),
    c = n(827734),
    a = n(319060),
    u = n(765671),
    d = n(371664),
    p = n(240248),
    h = n(477412);
let m = (0, p.xI)(a.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var f = ((i = {}).BLACK = "BLACK", i.GRAY = "GRAY", i);
let v = {
    BLACK: h.Ql,
    GRAY: h.wm
};

function g(e) {
    return Math.round(e / m) * m
}

function b(e) {
    let {
        notchBackground: t,
        progress: n,
        gradientStart: i = c.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: l = c.A.unsafe_rawColors.GREEN_360.css,
        className: a,
        notchClassName: p,
        children: m
    } = e, {
        ref: f,
        width: b
    } = (0, u.Ay)(), O = o.useMemo(() => null != b ? g(b) : 0, [b]), y = o.useMemo(() => {
        let e = Math.abs(g(O * (100 - Math.max(0, Math.min(100, n))) / 100) - O);
        return {
            transform: "translateX(".concat(e, "px)")
        }
    }, [n, O]), j = o.useMemo(() => ({
        width: "".concat(O, "px"),
        background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(i, ", ").concat(l, ")")
    }), [l, i, n, O]);
    return (0, r.jsxs)("div", {
        className: h.iE,
        ref: f,
        children: [(0, r.jsxs)("div", {
            className: s()(h.kL, a),
            style: j,
            children: [(0, r.jsx)("div", {
                className: h.qB,
                style: y
            }), 0 !== O && (0, r.jsx)(d.A, {
                width: O,
                className: s()(h.DR, v[t], p)
            })]
        }), m]
    })
}