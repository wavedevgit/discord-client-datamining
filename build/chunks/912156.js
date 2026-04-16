/** chunk id: 912156 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    Q: () => A
});
var i, r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(863610),
    u = n(935154),
    d = n(47167),
    c = n(573435),
    h = n(260509),
    g = n(652215),
    m = n(778712),
    f = n(687285),
    A = ((i = {}).TINY_24 = "TINY_24", i.SMALL_32 = "SMALL_32", i.MEDIUM_40 = "MEDIUM_40", i);
let I = {
        TINY_24: 24,
        SMALL_32: 32,
        MEDIUM_40: 40
    },
    E = {
        TINY_24: 24,
        SMALL_32: 26,
        MEDIUM_40: 34
    },
    p = {
        TINY_24: [13, 11, 10],
        SMALL_32: [13, 11, 10],
        MEDIUM_40: [24, 20, 16]
    },
    _ = {
        TINY_24: [9, 8, 7],
        SMALL_32: [12, 11, 9.5],
        MEDIUM_40: [14, 13, 11]
    },
    S = {
        TINY_24: f.d7,
        SMALL_32: f.OI,
        MEDIUM_40: f.H5
    },
    x = {
        TINY_24: 12,
        SMALL_32: 16,
        MEDIUM_40: 20
    };

function T(e, t) {
    return 0 === e.length ? 0 : t.length <= 0 ? e[0] : t.length > e.length ? e[e.length - 1] : e[t.length - 1] ?? e[e.length - 1]
}

function C(e) {
    let {
        size: t
    } = e, n = (0, m.Kj)(t), i = 2.5 * n.status, r = (i - n.status) / 2, l = n.status, s = n.size - i + r - n.stroke - n.offset, a = n.size - l - n.stroke - n.offset, o = i + 2 * n.stroke, u = l + 2 * n.stroke, d = (n.status + 2 * n.stroke) / 2, c = n.size - i + r - n.offset, h = n.size - l;
    return {
        iconSize: n.size,
        statusWidth: i,
        statusHeight: l,
        dotRadius: n.status / 4,
        avatarCutoutX: s,
        avatarCutoutY: a,
        avatarCutoutWidth: o,
        avatarCutoutHeight: u,
        avatarCutoutRadius: d,
        indicatorX: c,
        indicatorY: h
    }
}
let N = l.memo(function(e) {
        let {
            avatarSize: t,
            typingFillColor: n
        } = e, i = (0, u.S3)(g.clD.ONLINE, null), {
            statusWidth: l,
            statusHeight: s,
            dotRadius: a
        } = C({
            size: t
        });
        return (0, r.jsx)(c.Ay, {
            mask: c.hW.STATUS_TYPING,
            width: l,
            height: s,
            "aria-hidden": !0,
            children: (0, r.jsx)("div", {
                className: f.WQ,
                style: {
                    backgroundColor: n ?? i
                },
                children: (0, r.jsx)(o.n, {
                    dotRadius: a
                })
            })
        })
    }),
    v = function(e) {
        var t;
        let n, {
                className: i,
                iconClassName: s,
                size: o,
                channel: u,
                guild: g,
                isTyping: A = !1,
                typingFillColor: v
            } = e,
            y = l.useId(),
            M = (0, d.Ay)(u);
        if (null == g) return null;
        let b = p[o],
            R = E[o],
            D = I[o],
            O = (0, h.Iv)(g, 48),
            w = x[o],
            j = (() => {
                switch (o) {
                    case "TINY_24":
                        return m._3.SIZE_24;
                    case "SMALL_32":
                        return m._3.SIZE_32;
                    case "MEDIUM_40":
                        return m._3.SIZE_40;
                    default:
                        return o
                }
            })(),
            k = 0 === (n = null != (t = M ?? "") ? t.replace(/[-_]+/g, " ").replace(/'s /g, " ").replace(/\w+/g, e => e[0]).replace(/\s/g, "") : "").length ? "?" : n.slice(0, 3),
            U = (0, h.Rb)(g),
            L = (0, r.jsxs)("div", {
                className: a()(f.zr, i),
                role: "img",
                style: {
                    width: D,
                    height: D
                },
                children: [(0, r.jsx)(c.Ay, {
                    mask: c.hW.CHANNEL_ICON_WITH_GUILD_ICON,
                    width: R,
                    height: R,
                    children: null != O ? (0, r.jsx)("img", {
                        alt: g.name,
                        src: O,
                        className: f.es,
                        style: {
                            width: R,
                            height: R
                        }
                    }) : (0, r.jsx)("div", {
                        className: a()(f.TT, f.q9),
                        style: {
                            fontSize: T(b, U),
                            width: R,
                            height: R
                        },
                        children: U
                    })
                }), (0, r.jsx)("div", {
                    className: a()(f._C, S[o], s),
                    "aria-hidden": !0,
                    children: (0, r.jsx)(c.Ay, {
                        mask: c.hW.SQUIRCLE,
                        width: w,
                        height: w,
                        children: (0, r.jsx)("div", {
                            className: a()(S[o], f.q9),
                            style: {
                                fontSize: T(_[o], k)
                            },
                            children: k
                        })
                    })
                })]
            }),
            {
                iconSize: G,
                avatarCutoutX: P,
                avatarCutoutY: F,
                avatarCutoutWidth: V,
                avatarCutoutHeight: z,
                avatarCutoutRadius: H,
                indicatorX: Y,
                indicatorY: W
            } = C({
                size: j
            });
        return A ? (0, r.jsxs)("div", {
            className: f.J4,
            "aria-hidden": !0,
            style: {
                width: D,
                height: D
            },
            children: [(0, r.jsxs)("svg", {
                width: G,
                height: G,
                viewBox: `0 0 ${G} ${G}`,
                className: f._S,
                "aria-hidden": !0,
                children: [(0, r.jsx)("defs", {
                    children: (0, r.jsxs)("mask", {
                        id: y,
                        width: G,
                        height: G,
                        children: [(0, r.jsx)("rect", {
                            x: 0,
                            y: 0,
                            width: G,
                            height: G,
                            rx: Math.round(.3 * G),
                            ry: Math.round(.3 * G),
                            fill: "white"
                        }), (0, r.jsx)("rect", {
                            x: P,
                            y: F,
                            width: V,
                            height: z,
                            rx: H,
                            ry: H,
                            fill: "black"
                        })]
                    })
                }), (0, r.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: G,
                    height: G,
                    overflow: "visible",
                    mask: `url(#${y})`,
                    children: L
                })]
            }), (0, r.jsx)("div", {
                className: f.RL,
                style: {
                    left: Y,
                    top: W
                },
                children: (0, r.jsx)(N, {
                    avatarSize: j,
                    typingFillColor: v
                })
            })]
        }) : L
    }