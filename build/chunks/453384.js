/** chunk id: 453384 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var a = r(627968),
    o = r(64700),
    n = r(503698),
    i = r.n(n),
    s = r(497766),
    l = r(397927),
    d = r(398025),
    c = r(419367),
    u = r(638322);
let _ = "var(--background-mod-strong)",
    p = o.forwardRef((e, t) => {
        let {
            percentComplete: r,
            size: n = 42,
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
        }, C = n / 2, v = n / 2 - g / 2, S = 2 * Math.PI * v, h = S - r * S, x = o.useMemo(() => ({
            strokeDasharray: `${S} ${S}`,
            strokeDashoffset: h
        }), [S, h]), {
            progressTextAnimation: y
        } = (0, l.zhh)({
            progressTextAnimation: +(null != f && 1 !== r),
            config: c.N
        });
        return (0, a.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: {
                width: n,
                height: n,
                padding: g + 2
            },
            children: [(0, a.jsxs)("div", {
                className: u.vW,
                children: [m, (0, a.jsxs)(s.animated.div, {
                    style: {
                        opacity: (0, d.a)(y),
                        inset: g
                    },
                    className: i()(u.rD, u.qk),
                    children: [(0, a.jsx)("div", {
                        className: i()(u.rD, u.LU)
                    }), (0, a.jsx)(l.Text, {
                        variant: b,
                        color: "text-strong",
                        className: u.l_,
                        children: f
                    })]
                })]
            }), (0, a.jsxs)("svg", {
                className: u.hr,
                height: n,
                width: n,
                children: [(0, a.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: v,
                    cx: C,
                    cy: C,
                    stroke: _
                }), (0, a.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: v,
                    cx: C,
                    cy: C,
                    stroke: _
                }), (0, a.jsx)("circle", {
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