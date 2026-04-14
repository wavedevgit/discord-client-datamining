/** chunk id: 453384 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var n = r(627968),
    o = r(64700),
    a = r(503698),
    c = r.n(a),
    i = r(445887),
    _ = r(397927),
    s = r(398025),
    d = r(419367),
    l = r(293225);
let b = "var(--background-mod-strong)",
    p = o.forwardRef((e, t) => {
        let {
            percentComplete: r,
            size: a = 42,
            style: p = "default",
            percentCompleteText: C,
            percentCompleteTextVariant: v = "text-lg/medium",
            children: m
        } = e, {
            strokeWidth: u
        } = "small" === p ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, x = a / 2, h = a / 2 - u / 2, S = 2 * Math.PI * h, P = S - r * S, B = o.useMemo(() => ({
            strokeDasharray: `${S} ${S}`,
            strokeDashoffset: P
        }), [S, P]), {
            progressTextAnimation: g
        } = (0, _.zhh)({
            progressTextAnimation: +(null != C && 1 !== r),
            config: d.N
        });
        return (0, n.jsxs)("div", {
            className: l.A7,
            ref: t,
            style: {
                width: a,
                height: a,
                padding: u + 2
            },
            children: [(0, n.jsxs)("div", {
                className: l.vW,
                children: [m, (0, n.jsxs)(i.animated.div, {
                    style: {
                        opacity: (0, s.a)(g),
                        inset: u
                    },
                    className: c()(l.rD, l.qk),
                    children: [(0, n.jsx)("div", {
                        className: c()(l.rD, l.LU)
                    }), (0, n.jsx)(_.Text, {
                        variant: v,
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
                    r: h,
                    cx: x,
                    cy: x,
                    stroke: b
                }), (0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: h,
                    cx: x,
                    cy: x,
                    stroke: b
                }), (0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: h,
                    cx: x,
                    cy: x,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: B
                })]
            })]
        })
    })