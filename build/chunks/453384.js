/** chunk id: 453384 params = (module,exports,require) **/
t.d(r, {
    A: () => b
});
var n = t(627968),
    _ = t(64700),
    o = t(503698),
    a = t.n(o),
    i = t(382222),
    s = t(397927),
    d = t(398025),
    f = t(419367),
    l = t(293225);
let c = "var(--background-mod-strong)",
    b = _.forwardRef((e, r) => {
        let {
            percentComplete: t,
            size: o = 42,
            style: b = "default",
            percentCompleteText: p,
            percentCompleteTextVariant: C = "text-lg/medium",
            children: v
        } = e, {
            strokeWidth: m
        } = "small" === b ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, u = o / 2, h = o / 2 - m / 2, x = 2 * Math.PI * h, B = x - t * x, S = _.useMemo(() => ({
            strokeDasharray: `${x} ${x}`,
            strokeDashoffset: B
        }), [x, B]), {
            progressTextAnimation: g
        } = (0, s.zhh)({
            progressTextAnimation: +(null != p && 1 !== t),
            config: f.N
        });
        return (0, n.jsxs)("div", {
            className: l.A7,
            ref: r,
            style: {
                width: o,
                height: o,
                padding: m + 2
            },
            children: [(0, n.jsxs)("div", {
                className: l.vW,
                children: [v, (0, n.jsxs)(i.animated.div, {
                    style: {
                        opacity: (0, d.a)(g),
                        inset: m
                    },
                    className: a()(l.rD, l.qk),
                    children: [(0, n.jsx)("div", {
                        className: a()(l.rD, l.LU)
                    }), (0, n.jsx)(s.Text, {
                        variant: C,
                        color: "text-strong",
                        className: l.l_,
                        children: p
                    })]
                })]
            }), (0, n.jsxs)("svg", {
                className: l.hr,
                height: o,
                width: o,
                children: [(0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: m,
                    fill: "transparent",
                    r: h,
                    cx: u,
                    cy: u,
                    stroke: c
                }), (0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: m,
                    fill: "transparent",
                    r: h,
                    cx: u,
                    cy: u,
                    stroke: c
                }), (0, n.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: m,
                    fill: "transparent",
                    r: h,
                    cx: u,
                    cy: u,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: S
                })]
            })]
        })
    })