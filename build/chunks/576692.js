/** chunk id: 576692 params = (module,exports,require) **/
n.d(t, {
    i: () => u
});
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(250402);

function u(e) {
    let {
        size: t,
        lowerBadge: n,
        lowerBadgeSize: r = {
            width: 16,
            height: 16
        },
        children: u,
        className: o,
        innerClassName: d,
        rounded: c = !0,
        "aria-hidden": h
    } = e, g = null != n, I = i.useId(), A = `${I}-lower_badge_masks`, f = `${I}-shape_mask`, E = `${I}-stroke_mask`, m = r?.width != null ? r.width : 16, S = r?.height != null ? r.height : 16, _ = {
        width: t + 8,
        height: t + 8,
        x: -4,
        y: -4
    }, p = c ? (0, l.jsx)("circle", {
        id: f,
        cx: t / 2,
        cy: t / 2,
        r: t / 2
    }) : (0, l.jsx)("rect", {
        id: f,
        x: 0,
        y: 0,
        width: t,
        height: t,
        rx: 8,
        ry: 8
    });
    return (0, l.jsxs)("div", {
        className: s()(o, a.iE),
        style: {
            width: t,
            height: t
        },
        "aria-hidden": h,
        children: [(0, l.jsxs)("svg", {
            width: _.width,
            height: _.height,
            viewBox: `${_.x} ${_.y} ${_.width} ${_.height}`,
            className: s()(a.JW, a.Pm),
            overflow: "visible",
            role: "none",
            children: [(0, l.jsxs)("defs", {
                children: [p, g ? (0, l.jsx)("rect", {
                    id: A,
                    x: t - (m + 4) + 2,
                    y: t - (S + 4) + 2,
                    width: m + 4,
                    height: S + 4,
                    rx: t / 4,
                    ry: t / 4
                }) : null]
            }), (0, l.jsxs)("mask", {
                id: I,
                fill: "black",
                x: 0,
                y: 0,
                width: t,
                height: t,
                children: [(0, l.jsx)("use", {
                    href: `#${f}`,
                    fill: "white"
                }), g ? (0, l.jsx)("use", {
                    href: `#${A}`,
                    fill: "black"
                }) : null]
            }), g ? (0, l.jsxs)("mask", {
                id: E,
                children: [(0, l.jsx)("rect", {
                    width: "150%",
                    height: "150%",
                    x: "-25%",
                    y: "-25%",
                    fill: "white"
                }), (0, l.jsx)("use", {
                    href: `#${A}`,
                    fill: "black"
                })]
            }) : null, (0, l.jsx)("foreignObject", {
                mask: `url(#${I})`,
                x: 0,
                y: 0,
                className: d,
                width: t,
                height: t,
                children: u
            })]
        }), g ? (0, l.jsx)("div", {
            className: a.H7,
            children: n
        }) : null]
    }, I)
}