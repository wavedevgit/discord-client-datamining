/** chunk id: 453384 params = (module,exports,require) **/
t.d(r, {
    A: () => p
});
var n = t(627968),
    o = t(64700),
    a = t(503698),
    c = t.n(a),
    i = t(687498),
    _ = t(397927),
    s = t(398025),
    d = t(419367),
    l = t(293225);
let b = "var(--background-mod-strong)",
    p = o.forwardRef((e, r) => {
        let {
            percentComplete: t,
            size: a = 42,
            style: p = "default",
            percentCompleteText: C,
            percentCompleteTextVariant: m = "text-lg/medium",
            children: v
        } = e, {
            strokeWidth: u
        } = "small" === p ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, h = a / 2, x = a / 2 - u / 2, B = 2 * Math.PI * x, S = B - t * B, g = o.useMemo(() => ({
            strokeDasharray: `${B} ${B}`,
            strokeDashoffset: S
        }), [B, S]), {
            progressTextAnimation: P
        } = (0, _.zhh)({
            progressTextAnimation: +(null != C && 1 !== t),
            config: d.N
        });
        return (0, n.jsxs)("div", {
            className: l.A7,
            ref: r,
            style: {
                width: a,
                height: a,
                padding: u + 2
            },
            children: [(0, n.jsxs)("div", {
                className: l.vW,
                children: [v, (0, n.jsxs)(i.animated.div, {
                    style: {
                        opacity: (0, s.a)(P),
                        inset: u
                    },
                    className: c()(l.rD, l.qk),
                    children: [(0, n.jsx)("div", {
                        className: c()(l.rD, l.LU)
                    }), (0, n.jsx)(_.Text, {
                        variant: m,
                        color: "text-strong",
                        className: l.l_,
                        children: C
                    })]
                })]
            }), (0, n.jsxs)("svg", {
                className: l.hr,
                height: a,
                width: a,
                children: [(0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: x,
                    cx: h,
                    cy: h,
                    stroke: b
                }), (0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: x,
                    cx: h,
                    cy: h,
                    stroke: b
                }), (0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: x,
                    cx: h,
                    cy: h,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: g
                })]
            })]
        })
    })