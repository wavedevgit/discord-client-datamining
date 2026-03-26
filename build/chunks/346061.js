/** chunk id: 346061 params = (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => m,
    h: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(97808),
    o = n(397927),
    c = n(573435),
    d = n(190460),
    u = n(778712),
    h = n(774659);

function A(e) {
    let {
        children: t,
        size: n,
        onClick: l,
        onMouseDown: a,
        onKeyDown: u,
        onContextMenu: A,
        onMouseEnter: m,
        onMouseLeave: _,
        className: p,
        ariaHidden: f,
        avatarDecoration: x,
        specs: E,
        cornerIconUrl: C,
        cornerIconOffsetX: I,
        cornerIconOffsetY: N,
        ariaLabel: b
    } = e, S = {
        width: (0, o.FT9)(n),
        height: (0, o.FT9)(n)
    }, T = (0, s.useId)(), v = E.size * d.Xq, y = null != x && (0, i.jsxs)("svg", {
        width: v,
        height: v,
        viewBox: `0 0 ${v} ${v}`,
        className: h.DX,
        "aria-hidden": !0,
        children: [(0, i.jsxs)("mask", {
            id: T,
            children: [(0, i.jsx)("rect", {
                x: 0,
                y: 0,
                width: v,
                height: v,
                fill: "white"
            }), null != C && function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    {
                        height: l,
                        width: r,
                        x: a,
                        y: o
                    } = function(e, t, n, i) {
                        let {
                            height: s,
                            width: l,
                            x: r,
                            y: a
                        } = g(e, n, i), o = (t - e.size) / 2;
                        return {
                            width: l,
                            height: s,
                            x: r + o,
                            y: a + o
                        }
                    }(e, t, n, s);
                return (0, i.jsx)("rect", {
                    mask: `url(#${c.hW.SQUIRCLE})`,
                    height: l,
                    width: r,
                    x: a,
                    y: o,
                    rx: e.stroke,
                    fill: "black"
                })
            }(E, v, I, N)]
        }), (0, i.jsx)("foreignObject", {
            x: 0,
            y: 0,
            width: v,
            height: v,
            mask: `url(#${T})`,
            children: (0, i.jsx)("img", {
                className: h.M,
                src: x,
                alt: " ",
                "aria-hidden": !0
            })
        })]
    });
    return null != l || null != a ? (0, i.jsxs)(o.DUT, {
        className: r()(h.iE, h.Wn, p),
        style: S,
        onClick: l,
        onContextMenu: A,
        onMouseDown: a,
        onKeyDown: u,
        onMouseEnter: m ?? void 0,
        onMouseLeave: _ ?? void 0,
        "aria-label": b ?? void 0,
        "aria-hidden": f,
        children: [t, y]
    }) : (0, i.jsxs)("div", {
        className: r()(h.iE, p),
        style: S,
        onContextMenu: A ?? void 0,
        onMouseEnter: m ?? void 0,
        onMouseLeave: _ ?? void 0,
        role: "img",
        "aria-label": b ?? void 0,
        "aria-hidden": f,
        children: [t, y]
    })
}

function m(e) {
    let {
        src: t,
        size: n,
        "aria-hidden": l = !1,
        "aria-label": o,
        imageClassName: d,
        cornerIconUrl: m,
        cornerIconOffsetX: _ = 0,
        cornerIconOffsetY: f = 0
    } = e, x = (0, u.Kj)(n), E = x.size, C = (0, s.useId)();
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: o,
        ariaHidden: l,
        specs: x,
        children: (0, i.jsxs)("svg", {
            width: E + _,
            height: E + f,
            viewBox: `0 0 ${E+_} ${E+f}`,
            className: r()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [(0, i.jsxs)("mask", {
                id: C,
                children: [(0, i.jsx)("circle", {
                    cx: x.size / 2,
                    cy: x.size / 2,
                    r: x.size / 2,
                    fill: "white"
                }), null != m && function(e, t, n) {
                    let {
                        height: s,
                        width: l,
                        x: r,
                        y: a
                    } = g(e, t, n);
                    return (0, i.jsx)("rect", {
                        mask: `url(#${c.hW.SQUIRCLE})`,
                        height: s,
                        width: l,
                        x: r,
                        y: a,
                        fill: "black"
                    })
                }(x, _, f)]
            }), (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: x.size,
                height: x.size,
                mask: `url(#${C})`,
                children: (0, i.jsx)(a.d9, {
                    src: t,
                    className: d,
                    isSpeaking: !1
                })
            }), null != m && (0, i.jsx)("foreignObject", {
                ...p(x, _, f),
                mask: `url(#${c.hW.SQUIRCLE})`,
                children: (0, i.jsx)("img", {
                    src: m,
                    height: 16,
                    width: 16,
                    alt: " "
                })
            })]
        })
    })
}

function _(e) {
    let {
        src: t,
        size: n,
        "aria-hidden": l = !1,
        "aria-label": a,
        cornerIconUrl: o,
        cornerIconOffsetX: d = 0,
        cornerIconOffsetY: m = 0
    } = e, _ = (0, s.useId)(), f = (0, s.useId)(), x = (0, u.Kj)(n), E = x.size + d, C = x.size + m, I = g(x, d, m), N = p(x, d, m);
    return (0, i.jsx)(A, {
        ...e,
        ariaLabel: a,
        ariaHidden: l,
        specs: x,
        children: (0, i.jsxs)("svg", {
            width: E,
            height: C,
            viewBox: `0 0 ${E} ${C}`,
            className: r()(h.dK, h.JW),
            "aria-hidden": !0,
            children: [(0, i.jsxs)("mask", {
                id: _,
                children: [(0, i.jsx)("rect", {
                    x: 0,
                    y: 0,
                    width: x.size,
                    height: x.size,
                    fill: "white",
                    mask: `url(#${c.hW.SQUIRCLE})`
                }), (0, i.jsx)("circle", {
                    cx: I.x + I.width / 2,
                    cy: I.y + I.height / 2,
                    r: I.width / 2,
                    fill: "black"
                })]
            }), (0, i.jsx)("mask", {
                id: f,
                children: (0, i.jsx)("circle", {
                    cx: N.x + N.width / 2,
                    cy: N.y + N.height / 2,
                    r: N.width / 2,
                    fill: "white"
                })
            }), (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: x.size,
                height: x.size,
                mask: `url(#${_})`,
                children: (0, i.jsx)("div", {
                    className: h.yA,
                    children: (0, i.jsx)("img", {
                        src: t ?? void 0,
                        alt: " ",
                        className: h.my,
                        "aria-hidden": !0
                    })
                }, t)
            }), null != o && (0, i.jsx)("foreignObject", {
                ...N,
                mask: `url(#${f})`,
                children: (0, i.jsx)("img", {
                    src: o,
                    height: 16,
                    width: 16,
                    alt: " "
                })
            })]
        })
    })
}

function p(e, t, n) {
    return {
        width: 16,
        height: 16,
        x: e.size - 16 - e.offset + t,
        y: e.size - 16 - e.offset + n
    }
}

function g(e, t, n) {
    let i = p(e, t, n),
        s = i.x - 2,
        l = i.y - 2;
    return {
        width: i.height + 4,
        height: i.width + 4,
        x: s,
        y: l
    }
}