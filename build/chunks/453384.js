/** chunk id: 453384 params = (module,exports,require) **/
t.d(r, {
    A: () => h
});
var a = t(627968),
    o = t(64700),
    s = t(503698),
    n = t.n(s),
    i = t(294426),
    c = t(397927),
    _ = t(398025),
    l = t(419367),
    d = t(293225);
let p = "var(--background-mod-strong)",
    h = o.forwardRef((e, r) => {
        let {
            percentComplete: t,
            size: s = 42,
            style: h = "default",
            percentCompleteText: x,
            percentCompleteTextVariant: m = "text-lg/medium",
            children: f
        } = e, {
            strokeWidth: g
        } = "small" === h ? {
            strokeWidth: 3
        } : {
            strokeWidth: 4
        }, u = s / 2, k = s / 2 - g / 2, w = 2 * Math.PI * k, v = w - t * w, W = o.useMemo(() => ({
            strokeDasharray: `${w} ${w}`,
            strokeDashoffset: v
        }), [w, v]), {
            progressTextAnimation: C
        } = (0, c.zhh)({
            progressTextAnimation: +(null != x && 1 !== t),
            config: l.N
        });
        return (0, a.jsxs)("div", {
            className: d.A7,
            ref: r,
            style: {
                width: s,
                height: s,
                padding: g + 2
            },
            children: [(0, a.jsxs)("div", {
                className: d.vW,
                children: [f, (0, a.jsxs)(i.animated.div, {
                    style: {
                        opacity: (0, _.a)(C),
                        inset: g
                    },
                    className: n()(d.rD, d.qk),
                    children: [(0, a.jsx)("div", {
                        className: n()(d.rD, d.LU)
                    }), (0, a.jsx)(c.Text, {
                        variant: m,
                        color: "text-strong",
                        className: d.l_,
                        children: x
                    })]
                })]
            }), (0, a.jsxs)("svg", {
                className: d.hr,
                height: s,
                width: s,
                children: [(0, a.jsx)("circle", {
                    className: d.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: k,
                    cx: u,
                    cy: u,
                    stroke: p
                }), (0, a.jsx)("circle", {
                    className: d.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: k,
                    cx: u,
                    cy: u,
                    stroke: p
                }), (0, a.jsx)("circle", {
                    className: d.qB,
                    strokeWidth: g,
                    fill: "transparent",
                    r: k,
                    cx: u,
                    cy: u,
                    stroke: "rgba(98, 196, 101, 1)",
                    style: W
                })]
            })]
        })
    })