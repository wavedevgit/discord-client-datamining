/** chunk id: 576692 params = (module,exports,require) **/
n.d(t, {
    i: () => o
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(943223);

function o(e) {
    let {
        size: t,
        lowerBadge: n,
        lowerBadgeSize: l = {
            width: 16,
            height: 16
        },
        children: o,
        className: u,
        innerClassName: d,
        rounded: c = !0,
        "aria-hidden": h
    } = e, g = null != n, m = r.useId(), f = `${m}-lower_badge_masks`, A = `${m}-shape_mask`, I = `${m}-stroke_mask`, E = l?.width != null ? l.width : 16, p = l?.height != null ? l.height : 16, _ = {
        width: t + 8,
        height: t + 8,
        x: -4,
        y: -4
    }, S = c ? (0, i.jsx)("circle", {
        id: A,
        cx: t / 2,
        cy: t / 2,
        r: t / 2
    }) : (0, i.jsx)("rect", {
        id: A,
        x: 0,
        y: 0,
        width: t,
        height: t,
        rx: 8,
        ry: 8
    });
    return (0, i.jsxs)("div", {
        className: s()(u, a.iE),
        style: {
            width: t,
            height: t
        },
        "aria-hidden": h,
        children: [(0, i.jsxs)("svg", {
            width: _.width,
            height: _.height,
            viewBox: `${_.x} ${_.y} ${_.width} ${_.height}`,
            className: s()(a.JW, a.Pm),
            overflow: "visible",
            role: "none",
            children: [(0, i.jsxs)("defs", {
                children: [S, g ? (0, i.jsx)("rect", {
                    id: f,
                    x: t - (E + 4) + 2,
                    y: t - (p + 4) + 2,
                    width: E + 4,
                    height: p + 4,
                    rx: t / 4,
                    ry: t / 4
                }) : null]
            }), (0, i.jsxs)("mask", {
                id: m,
                fill: "black",
                x: 0,
                y: 0,
                width: t,
                height: t,
                children: [(0, i.jsx)("use", {
                    href: `#${A}`,
                    fill: "white"
                }), g ? (0, i.jsx)("use", {
                    href: `#${f}`,
                    fill: "black"
                }) : null]
            }), g ? (0, i.jsxs)("mask", {
                id: I,
                children: [(0, i.jsx)("rect", {
                    width: "150%",
                    height: "150%",
                    x: "-25%",
                    y: "-25%",
                    fill: "white"
                }), (0, i.jsx)("use", {
                    href: `#${f}`,
                    fill: "black"
                })]
            }) : null, (0, i.jsx)("foreignObject", {
                mask: `url(#${m})`,
                x: 0,
                y: 0,
                className: d,
                width: t,
                height: t,
                children: o
            })]
        }), g ? (0, i.jsx)("div", {
            className: a.H7,
            children: n
        }) : null]
    }, m)
}