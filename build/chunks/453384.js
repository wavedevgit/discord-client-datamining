/** chunk id: 453384 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(497766),
    o = n(397927),
    d = n(398025),
    c = n(419367),
    u = n(511036);
let _ = "var(--background-mod-strong)",
    m = r.forwardRef((e, t) => {
        let {
            percentComplete: n,
            size: a = 42,
            style: m = "default",
            percentCompleteText: h,
            percentCompleteTextVariant: p = "text-lg/medium",
            children: g
        } = e, {
            strokeWidth: A
        } = "small" === m ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, x = a / 2, f = a / 2 - A / 2, C = 2 * Math.PI * f, I = C - n * C, E = r.useMemo(() => ({
            strokeDasharray: `${C} ${C}`,
            strokeDashoffset: I
        }), [C, I]), {
            progressTextAnimation: v
        } = (0, o.zhh)({
            progressTextAnimation: +(null != h && 1 !== n),
            config: c.N
        });
        return (0, i.jsxs)("div", {
            className: u.A7,
            ref: t,
            style: {
                width: a,
                height: a,
                padding: A + 2
            },
            children: [(0, i.jsxs)("div", {
                className: u.vW,
                children: [g, (0, i.jsxs)(s.animated.div, {
                    style: {
                        opacity: (0, d.a)(v),
                        inset: A
                    },
                    className: l()(u.rD, u.qk),
                    children: [(0, i.jsx)("div", {
                        className: l()(u.rD, u.LU)
                    }), (0, i.jsx)(o.Text, {
                        variant: p,
                        color: "text-strong",
                        className: u.l_,
                        children: h
                    })]
                })]
            }), (0, i.jsxs)("svg", {
                className: u.hr,
                height: a,
                width: a,
                children: [(0, i.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: A,
                    fill: "transparent",
                    r: f,
                    cx: x,
                    cy: x,
                    stroke: _
                }), (0, i.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: A,
                    fill: "transparent",
                    r: f,
                    cx: x,
                    cy: x,
                    stroke: _
                }), (0, i.jsx)("circle", {
                    className: u.qB,
                    strokeWidth: A,
                    fill: "transparent",
                    r: f,
                    cx: x,
                    cy: x,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: E
                })]
            })]
        })
    })