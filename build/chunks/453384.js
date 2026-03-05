/** chunk id: 453384, original params: e,r,t (module,exports,require) **/
t.d(r, {
    A: () => b
});
var _ = t(627968),
    n = t(64700),
    o = t(503698),
    a = t.n(o),
    i = t(380278),
    s = t(397927),
    d = t(398025),
    f = t(419367),
    l = t(511036);
let c = "var(--background-mod-strong)",
    b = n.forwardRef((e, r) => {
        let {
            percentComplete: t,
            size: o = 42,
            style: b = "default",
            percentCompleteText: p,
            percentCompleteTextVariant: C = "text-lg/medium",
            children: m
        } = e, {
            strokeWidth: u
        } = "small" === b ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, v = o / 2, h = o / 2 - u / 2, x = 2 * Math.PI * h, S = x - t * x, g = n.useMemo(() => ({
            strokeDasharray: `${x} ${x}`,
            strokeDashoffset: S
        }), [x, S]), {
            progressTextAnimation: B
        } = (0, s.zhh)({
            progressTextAnimation: +(null != p && 1 !== t),
            config: f.N
        });
        return (0, _.jsxs)("div", {
            className: l.A7,
            ref: r,
            style: {
                width: o,
                height: o,
                padding: u + 2
            },
            children: [(0, _.jsxs)("div", {
                className: l.vW,
                children: [m, (0, _.jsxs)(i.animated.div, {
                    style: {
                        opacity: (0, d.a)(B),
                        inset: u
                    },
                    className: a()(l.rD, l.qk),
                    children: [(0, _.jsx)("div", {
                        className: a()(l.rD, l.LU)
                    }), (0, _.jsx)(s.Text, {
                        variant: C,
                        color: "text-strong",
                        className: l.l_,
                        children: p
                    })]
                })]
            }), (0, _.jsxs)("svg", {
                className: l.hr,
                height: o,
                width: o,
                children: [(0, _.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: h,
                    cx: v,
                    cy: v,
                    stroke: c
                }), (0, _.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: h,
                    cx: v,
                    cy: v,
                    stroke: c
                }), (0, _.jsx)("circle", {
                    className: l.qB,
                    strokeWidth: u,
                    fill: "transparent",
                    r: h,
                    cx: v,
                    cy: v,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: g
                })]
            })]
        })
    })