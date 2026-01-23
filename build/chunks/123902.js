/** Chunk was on web.js **/
/** chunk id: 123902, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g,
    V: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(827734),
    l = n(319060),
    c = n(765671),
    u = n(371664),
    d = n(240248),
    f = n(477412);
let p = (0, d.xI)(l.A.GRADIENT_PROGRESS_NOTCH_WIDTH);
var _ = function(e) {
    return e.BLACK = "BLACK", e.GRAY = "GRAY", e
}({});
let h = {
    BLACK: f.Ql,
    GRAY: f.wm
};

function m(e) {
    return Math.round(e / p) * p
}

function g(e) {
    let {
        notchBackground: t,
        progress: n,
        gradientStart: a = o.A.unsafe_rawColors.YELLOW_260.css,
        gradientEnd: l = o.A.unsafe_rawColors.GREEN_360.css,
        className: d,
        notchClassName: p,
        children: _
    } = e, {
        ref: g,
        width: E
    } = (0, c.Ay)(), y = i.useMemo(() => null != E ? m(E) : 0, [E]), b = i.useMemo(() => {
        let e = Math.abs(m(y * (100 - Math.max(0, Math.min(100, n))) / 100) - y);
        return {
            transform: "translateX(".concat(e, "px)")
        }
    }, [n, y]), O = i.useMemo(() => ({
        width: "".concat(y, "px"),
        background: n <= 0 ? "none" : "linear-gradient(to right, ".concat(a, ", ").concat(l, ")")
    }), [l, a, n, y]);
    return (0, r.jsxs)("div", {
        className: f.iE,
        ref: g,
        children: [(0, r.jsxs)("div", {
            className: s()(f.kL, d),
            style: O,
            children: [(0, r.jsx)("div", {
                className: f.qB,
                style: b
            }), 0 !== y && (0, r.jsx)(u.A, {
                width: y,
                className: s()(f.DR, h[t], p)
            })]
        }), _]
    })
}