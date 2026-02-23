/** chunk id: 453384, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var o = r(627968),
    a = r(64700),
    n = r(503698),
    i = r.n(n),
    s = r(475539),
    l = r(397927),
    d = r(398025),
    _ = r(419367),
    c = r(638322);
let p = "var(--background-mod-strong)",
    u = a.forwardRef((e, t) => {
        let {
            percentComplete: r,
            size: n = 42,
            style: u = "default",
            percentCompleteText: f,
            percentCompleteTextVariant: b = "text-lg/medium",
            children: m
        } = e, {
            strokeWidth: C
        } = "small" === u ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, g = n / 2, v = n / 2 - C / 2, h = 2 * Math.PI * v, y = h - r * h, x = a.useMemo(() => ({
            strokeDasharray: `${h} ${h}`,
            strokeDashoffset: y
        }), [h, y]), {
            progressTextAnimation: S
        } = (0, l.zhh)({
            progressTextAnimation: +(null != f && 1 !== r),
            config: _.N
        });
        return (0, o.jsxs)("div", {
            className: c.A7,
            ref: t,
            style: {
                width: n,
                height: n,
                padding: C + 2
            },
            children: [(0, o.jsxs)("div", {
                className: c.vW,
                children: [m, (0, o.jsxs)(s.animated.div, {
                    style: {
                        opacity: (0, d.a)(S),
                        inset: C
                    },
                    className: i()(c.rD, c.qk),
                    children: [(0, o.jsx)("div", {
                        className: i()(c.rD, c.LU)
                    }), (0, o.jsx)(l.Text, {
                        variant: b,
                        color: "text-strong",
                        className: c.l_,
                        children: f
                    })]
                })]
            }), (0, o.jsxs)("svg", {
                className: c.hr,
                height: n,
                width: n,
                children: [(0, o.jsx)("circle", {
                    className: c.qB,
                    strokeWidth: C,
                    fill: "transparent",
                    r: v,
                    cx: g,
                    cy: g,
                    stroke: p
                }), (0, o.jsx)("circle", {
                    className: c.qB,
                    strokeWidth: C,
                    fill: "transparent",
                    r: v,
                    cx: g,
                    cy: g,
                    stroke: p
                }), (0, o.jsx)("circle", {
                    className: c.qB,
                    strokeWidth: C,
                    fill: "transparent",
                    r: v,
                    cx: g,
                    cy: g,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: x
                })]
            })]
        })
    })