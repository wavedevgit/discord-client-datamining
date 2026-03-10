/** chunk id: 453384 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var o = r(627968),
    n = r(64700),
    a = r(503698),
    i = r.n(a),
    s = r(490249),
    l = r(397927),
    d = r(398025),
    c = r(419367),
    u = r(638322);
let _ = "var(--background-mod-strong)",
    p = n.forwardRef((e, t) => {
        let {
            percentComplete: r,
            size: a = 42,
            style: p = "default",
            percentCompleteText: f,
            percentCompleteTextVariant: b = "text-lg/medium",
            children: m
        } = e, {
            strokeWidth: g
        } = "small" === p ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, C = a / 2, v = a / 2 - g / 2, S = 2 * Math.PI * v, h = S - r * S, x = n.useMemo(() => ({
            strokeDasharray: `${S} ${S}`,
            strokeDashoffset: h
        }), [S, h]), {
            progressTextAnimation: y
        } = (0, l.zhh)({
            progressTextAnimation: +(null != f && 1 !== r),
            config: c.N
        });
        return (0, o.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: {
                width: a,
                height: a,
                padding: g + 2
            },
            children: [(0, o.jsxs)("div", {
                className: u.vW,
                children: [m, (0, o.jsxs)(s.animated.div, {
                    style: {
                        opacity: (0, d.a)(y),
                        inset: g
                    },
                    className: i()(u.rD, u.qk),
                    children: [(0, o.jsx)("div", {
                        className: i()(u.rD, u.LU)
                    }), (0, o.jsx)(l.Text, {
                        variant: b,
                        color: "text-strong",
                        className: u.l_,
                        children: f
                    })]
                })]
            }), (0, o.jsxs)("svg", {
                className: u.hr,
                height: a,
                width: a,
                children: [(0, o.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: v,
                    cx: C,
                    cy: C,
                    stroke: _
                }), (0, o.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: v,
                    cx: C,
                    cy: C,
                    stroke: _
                }), (0, o.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: v,
                    cx: C,
                    cy: C,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: x
                })]
            })]
        })
    })